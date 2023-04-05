import User from './User.js';
// import {Dispatch} from 'redux'
import {toast} from 'react-toastify';
import { API } from "./constant.js";
import axios from 'axios';

/* READ */
export const getUser = async (req, res) => {
    try {
        //req.params for properties attached to the url, prefixed by :example
        const { id } = req.params
        const user = await User.findById(id)
        res.status(200).json(user)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const getUserFriends = async (req, res) => {
    try {
        const { id } = req.params
        const user = await User.findById(id)
        
        const friends = await Promise.all(
            user.friends.map( (id) => User.findById(id) )
        )
        const formattedFriends = friends.map(
            ({ _id, username, occupation, location, picturePath }) => {
                return { _id, username, occupation, location, picturePath }
            }
        )
        res.status(200).json(formattedFriends)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


/* UPDATE */
export const addRemoveFriend = async (req, res) => {
    try {
        const { id, relationId } = req.params;
        const user = await User.findById(id)
        const friend = await User.findById(relationId)

        if (user.friends.includes(relationId)) {
            user.friends = user.friends.filter((id) => id !== relationId)
            friend.friends = friend.friends.filter((id) => id !== id)
        } else {
            user.friends.push(relationId)
            friend.friends.push(id)
        }
        await user.save()
        await friend.save()

        const friends = await Promise.all(
            user.friends.map( (id) => User.findById(id) )
        )
        const formattedFriends = friends.map(
            ({ _id, username, occupation, location, picturePath }) => {
                return { _id, username, occupation, location, picturePath }
            }
        )

        res.status(200).json(formattedFriends)

    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}
//ACCEPT FRIEND
export const acceptFriendRequest = (id, username , senderProfileId) => {
    return async (dispatch) => {
        try {
            dispatch(setCanClickRequestButton(false));

            await axios.post(`${API}/friendrequests/${senderProfileId}/${id}/${username}`, null, {withCredentials: true});

            dispatch({payload: {senderProfileId}});

            const res = await axios.get(`${API}/profile/${id}`, {withCredentials: true});

            dispatch({ payload: {friends: res.data}});
        } catch (err) {
            toast.error("Request couldn't be accepted")
        }finally{
            dispatch(setCanClickRequestButton(true));
        }
    }
}
//
export const setCanClickRequestButton = (canClickRequestButton) => {
    return { payload: {canClickRequestButton}}
}
//REMOVE FRIEND
export const removeFriend = (id, profileId, friendId) => {
    return async (dispatch) => {
        try {
            dispatch(setCanClickRequestButton(false));

            await axios.delete(`${API}/profile/friend/${friendId}/${id}/${profileId}`, {withCredentials: true});

            dispatch({ payload: {friendId}})

            const res = await axios.get(`${API}/profile/friends/${id}/${profileId}`, {withCredentials: true});

            dispatch({ payload: {friends: res.data}});
        } catch (err) {
            toast.error("Friend couldn't be removed");
        }finally{
            dispatch(setCanClickRequestButton(true));
        }
    }
}
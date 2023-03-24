import {toast} from 'react-toastify';
import {API} from '../api/helper';
import axios from 'axios';
import {
    FETCH_PROFILE, 
    FETCH_FRIEND_REQUESTS, 
    FETCH_FRIENDS, 
    CANCEL_FRIEND_REQUEST,
    REMOVE_FRIEND,
    SEND_FRIEND_REQUEST, 
    ACCEPT_FRIEND_REQUEST,
    FETCH_SENDED_FRIEND_REQUESTS,
    SET_CAN_CLICK_REQUEST_BUTTON,
} from '../actionTypes/friendActionTypes';

export const getProfile = (userId) => {
    return async (Dispatch) =>{
        try {

            const res = await axios.get(`${API}/profile/${userId}`, {withCredentials: true});

            Dispatch({type: FETCH_PROFILE, payload: {profile: res.data}});
        } catch (err) {
            toast.error("Profile couldn't be fetched")
        }
    }
}

export const getFriendRequests = (userId, profileId) => {
    return async (Dispatch) => {
        try {

            const res = await axios.get(`${API}/profile/friend_requests/${userId}/${profileId}`, {withCredentials: true});

            Dispatch({type: FETCH_FRIEND_REQUESTS, payload: {friendRequests: res.data}});
        } catch (err) {
            toast.error("Friend requests couldn't be fetched")
        }
    }
}

export const getSendedFriendRequests = (userId, profileId) => {
    return async (Dispatch) => {
        try {

            const res = await axios.get(`${API}/profile/sended_friend_requests/${userId}/${profileId}`, {withCredentials: true});

            Dispatch({type: FETCH_SENDED_FRIEND_REQUESTS, payload: {sendedFriendRequests: res.data}});
        } catch (err) {
            toast.error("Sended friend requests couldn't be fetched")
        }
    }
}

export const getFriends = (userId, profileId) => {
    return async (dispatch) => {
        try {
            const res = await axios.get(`${API}/profile/friends/${userId}/${profileId}`, {withCredentials: true});

            dispatch({type: FETCH_FRIENDS, payload: {friends: res.data}});
        } catch (err) {
            toast.error("Friends couldn't be fetched")
        }
    }
}

export const sendFriendRequest = (userId, profileId, receiverProfileId) => {
    return async (dispatch) => {
        try {
            dispatch(setCanClickRequestButton(false));

            await axios.post(`${API}/profile/send_friend_request/${receiverProfileId}/${userId}/${profileId}`, null, {withCredentials: true});

            dispatch({type: SEND_FRIEND_REQUEST});

            const res = await axios.get(`${API}/profile/sended_friend_requests/${userId}/${profileId}`, {withCredentials: true});

            dispatch({type: FETCH_SENDED_FRIEND_REQUESTS, payload: {sendedFriendRequests: res.data}});

        } catch (err) {
            toast.error("Request couldn't be sended")
        }finally{
            dispatch(setCanClickRequestButton(true));
        }
    }
}

export const acceptFriendRequest = (userId, profileId, senderProfileId) => {
    return async (dispatch) => {
        try {
            dispatch(setCanClickRequestButton(false));

            await axios.post(`${API}/profile/accept_friend_request/${senderProfileId}/${userId}/${profileId}`, null, {withCredentials: true});

            dispatch({type: ACCEPT_FRIEND_REQUEST, payload: {senderProfileId}});

            const res = await axios.get(`${API}/profile/friends/${userId}/${profileId}`, {withCredentials: true});

            dispatch({type: FETCH_FRIENDS, payload: {friends: res.data}});
        } catch (err) {
            toast.error("Request couldn't be accepted")
        }finally{
            dispatch(setCanClickRequestButton(true));
        }
    }
}

export const cancelFriendRequest = (userId, profileId, receiverProfileId) => {
    return async (dispatch) => {
        try {
            dispatch(setCanClickRequestButton(false));

            await axios.delete(`${API}/profile/friend_request/${receiverProfileId}/${userId}/${profileId}`, {withCredentials: true});

            dispatch({type: CANCEL_FRIEND_REQUEST, payload: {receiverProfileId}})
        } catch (err) {
            toast.error("Request couldn't be canceled");
        }finally{
            dispatch(setCanClickRequestButton(true));
        }
    }
}
export const setCanClickRequestButton = (canClickRequestButton) => {
    return {type: SET_CAN_CLICK_REQUEST_BUTTON, payload: {canClickRequestButton}}
}

export const removeFriend = (userId, profileId, friendshipId) => {
    return async (dispatch) => {
        try {
            dispatch(setCanClickRequestButton(false));

            await axios.delete(`${API}/profile/friend/${friendshipId}/${userId}/${profileId}`, {withCredentials: true});

            dispatch({type: REMOVE_FRIEND, payload: {friendshipId}})

            const res = await axios.get(`${API}/profile/friends/${userId}/${profileId}`, {withCredentials: true});

            dispatch({type: FETCH_FRIENDS, payload: {friends: res.data}});
        } catch (err) {
            toast.error("Friend couldn't be removed");
        }finally{
            dispatch(setCanClickRequestButton(true));
        }
    }
}
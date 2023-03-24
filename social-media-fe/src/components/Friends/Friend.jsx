import React, {useEffect, useState } from 'react';
import styles from "./Friend.scss";
import classNames from "classnames/bind";
// import { useDispatch, useSelector } from 'react-redux';
// import { acceptFriendRequest, cancelFriendRequest, removeFriend, sendFriendRequest } from '../../Actions/friendAction';
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

const cx = classNames.bind(styles);
export const Button = (props) => {
  const [isShowaccept, setIsShowaccept] = useState(false);
  const [isShowremove, setIsShowremove] = useState(false);
  const requestAccept = (id) => {
    setIsShowaccept(!isShowaccept)
    props.addFriend(id)
  }
  const requestRemove = (id) => {
    setIsShowremove(!isShowremove)
    props.removeFriend(id)
  }

// const RequestButton = (props.profileId);
//     const dispatch = useDispatch();

//     const {user} = useSelector((state) => state.user);
//     const {friends, friendRequests, sendedFriendRequests, canClickRequestButton, profile} = useSelector((state: State) => state.profile);

//     let friend = friends.find(friend => friend.friend_profile_id === props.profileId);

//     const [requestSended, setRequestSended] = 
//         useState(sendedFriendRequests.find(request => request.receiver_profile_id === props.profileId) ? true : false);

//     const [isFriend, setIsFriend] = useState(friend ? true : false)
//     const [friendshipId, setFriendshipId] = useState(isFriend && friend ? friend.id : 0)
//     const [hasRequestFromThisProfile, setHasRequestFromThisProfile] =
//         useState(friendRequests.find(request => request.sender_profile_id === props.profileId) ? true : false)

//     useEffect(() => {
//         let friend = friends.find(friend => friend.friend_profile_id === props.profileId);
//         setIsFriend(friend ? true : false)
//         setFriendshipId(friend ? friend.id : 0)

//         setHasRequestFromThisProfile(
//             friend ? false : friendRequests.find(request => request.sender_profile_id === props.profileId) ? true : false
//         );
//     }, [friends])

  return (
    <div className={cx("fr-card")}>
      <div className={cx("fr-card")}>
        <div className="card" style={{ width: "15rem" }}>
          <img className="card-img-top" src="https://i.pinimg.com/564x/f3/5a/0b/f35a0b00f54cbd73ffd65f9b59a5b9af.jpg" alt="" />
          <div className="card-body">
            <h5 className="card-title">Phạm Xuân Tân</h5>
            <p className="card-text">100 bạn chung</p>
            {/* <button
            className={
                (isFriend || requestSended) ?
                "btn btn-danger" : 
                hasRequestFromThisProfile ? 
                "btn btn-accept" :
                "btn btn-remove"
            }
            disabled={!canClickRequestButton}
            onClick={() => {
                if(!canClickRequestButton){
                    return;
                }

                if(isFriend){
                    dispatch(removeFriend(user.id, profile.id, friendshipId));
                }else{
                    if(hasRequestFromThisProfile){
                        dispatch(acceptFriendRequest(user.id, profile.id, props.profileId));
                    }else{
                        if(!requestSended){
                            dispatch(sendFriendRequest(user.id, profile.id, props.profileId))
                            setRequestSended(true);
                        }else{
                            dispatch(cancelFriendRequest(user.id, profile.id, props.profileId))
                            setRequestSended(false);
                        }
                    }
                }
            }}
        >
            {
                isFriend ? "Remove Friend" 
                : hasRequestFromThisProfile ?
                "Accept Friend Request" :
                requestSended ? "Cancel Friend Request" :
                "Send Friend Request"
            } */}
        {/* </button> */}
            <button onClick={() => requestAccept(props.id)} className="btn-accept">{isShowaccept ? "Accepted Friend Request" : "Accept Friend Request"}</button>
            <button onClick={() => requestRemove(props.id)} className="btn-remove">{isShowremove ? "Removed Friend" : "Remove Friend "}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Button;

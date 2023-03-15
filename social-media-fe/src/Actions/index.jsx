import * as Types from './../Constants/ActionTypes.jsx';

export const requestFriendRequestPopup = () => {
    return {
      type: Types.REQUEST_LIST_FRIEND_REQUEST
    }
  }
  
  export const responseFriendRequestPopup = (payload) => {
    return {
      type: Types.RESPONSE_LIST_FRIEND_REQUEST,
      payload
    }
  }
  
  export const requestFriend = () => {
    return {
      type: Types.REQUEST_LIST_FRIEND
    }
  }
  
  export const responseFriend = (payload) => {
    return {
      type: Types.RESPONSE_LIST_FRIEND,
      payload
    }
  }
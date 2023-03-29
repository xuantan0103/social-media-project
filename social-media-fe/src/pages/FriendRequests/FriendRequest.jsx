import React from "react";
import "../FriendRequests/FriendRequest.scss";
import Friends from "../../components/Friends/Friend";
import { Link} from "react-router-dom";

function FriendRequest({friendsRequest}){
  const list = [];
  const loading = false;
    if (!loading && !list.length) {
        return (
          <div className="noti-all ">
            <div className="noti-container">
              <div className="friend-requests-title">
                <h4>Your friend request</h4>
                <Link to="/friendsent">
                  <span>View submitted requests</span>
                </Link>
              </div>
              <div className="py-2">
                <Friends />
              </div>
            </div>
          </div>
    )};
  }
  
  export default FriendRequest;

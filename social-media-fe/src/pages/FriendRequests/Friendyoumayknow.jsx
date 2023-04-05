import React from "react";
import { Link } from "react-router-dom";
import "../FriendRequests/Friendyoumayknow.scss";
import Friends from "../../components/Friends/Friendsuggestion";

function Friendyoumayknow({ friendyoumayknow }) {
  const list = [];
  const loading = false;
  if (!loading && !list.length) {
    return (
      <div className="noti-all ">
        <div className="noti-container">
          <div className="friend-requests-title">
            <h4>Friend you may know</h4>
            <Link to="/friendsuggestion">
              <span>See All</span>
            </Link>
          </div>
          <div className="py-2">
            <Friends />
          </div>
        </div>
      </div>
    );
  }
}
export default Friendyoumayknow;

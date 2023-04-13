import React, { useEffect, useState } from "react";
import "../FriendRequests/Friendyoumayknow.scss";
import FriendSuggestion from "../../components/Friends/Friendsuggestion";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from "../../redux/action/userAction";

function Friendyoumayknow() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUser());
  }, []);
  console.log(state.user.allUser);
  return (
    <div className="noti-all ">
      <div className="noti-container">
        <div className="friend-requests-title px-4">
          <h4>Friend you may know</h4>
        </div>
        <div className="py-4 px-4">
          <div className="row ">
            {state?.user?.allUser?.map((item) => {
              return (
                item.id.toString() !==
                  localStorage.getItem("id").toString() && (
                  <div className="col-md-auto" key={item?.id}>
                    <FriendSuggestion item={item} />
                  </div>
                )
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Friendyoumayknow;

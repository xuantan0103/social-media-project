import { useEffect } from "react";
import styles from "./RightBar.module.scss";
import classNames from "classnames/bind";
import { useDispatch, useSelector } from "react-redux";
import {
  getFriendRequestByUserId,
  getFriendsByUserId,
} from "../../redux/action/friendAction";
import { LOCAL_HOST } from "../../api/constant";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

function User({ user, friend }) {
  console.log("user", user);
  const navigate = useNavigate();
  return (
    <div
      className={cx("container")}
      onClick={() =>
        navigate(
          friend
            ? `/profile/${user?.attributes?.friend_id}`
            : `/profile/${user?.attributes?.sender_id}`
        )
      }
    >
      <img
        src={
          friend
            ? `${LOCAL_HOST}${user?.attributes?.friend?.data?.attributes?.avatar?.data?.attributes?.url}`
            : `${LOCAL_HOST}${user?.attributes?.sender?.data?.attributes?.avatar?.data?.attributes?.url}`
        }
        alt=""
        className={cx("profile-img")}
      />
      <span className={cx("username")}>
        {friend
          ? user?.attributes?.friend?.data?.attributes?.username
          : user?.attributes?.sender?.data?.attributes?.username}
      </span>
    </div>
  );
}

function RightBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  useEffect(() => {
    dispatch(getFriendRequestByUserId(localStorage.getItem("id")));
    dispatch(getFriendsByUserId(localStorage.getItem("id")));
  }, []);
  return (
    <>
      {state?.friend?.friendRequest.length === 0 && (
        <div className={cx("sidebar")}>
          <h5
            className={cx("request")}
            onClick={() => navigate("/friendrequests")}
          >
            Friend Requests
          </h5>
          <h6
            className={cx("request") + " ps-2"}
            onClick={() => navigate("/friendrequests")}
          >
            No request here
          </h6>
        </div>
      )}
      {state?.friend?.friend.length === 0 && (
        <div className={cx("sidebar")}>
          <h5
            className={cx("request") + " mt-3"}
            onClick={() => navigate("/friends")}
          >
            Contacts
          </h5>
          <h6
            className={cx("request") + " mt-3 ps-2"}
            onClick={() => navigate("/friends")}
          >
            No contacts here
          </h6>
        </div>
      )}
      {state?.friend?.friendRequest.length > 0 && (
        <div className={cx("sidebar")}>
          <h5
            className={cx("request")}
            onClick={() => navigate("/friendrequests")}
          >
            Friend Requests
          </h5>
          {state?.friend?.friendRequest?.map((user, index) => {
            return (
              <div className="col-md-auto" key={user?.id}>
                <User user={user} />
              </div>
            );
          })}
        </div>
      )}
      {state?.friend?.friend.length > 0 && (
        <div className={cx("sidebar")}>
          <h5
            className={cx("request") + " mt-3"}
            onClick={() => navigate("/friends")}
          >
            Contacts
          </h5>
          {state?.friend?.friend?.map((user, index) => {
            return (
              <div className="col-md-auto" key={user?.id}>
                <User user={user} friend />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default RightBar;

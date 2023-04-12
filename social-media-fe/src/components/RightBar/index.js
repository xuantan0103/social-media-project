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
  return (
    <div className={cx("container")}>
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
      {state?.friend?.friendRequest && (
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
      {state?.friend?.friend && (
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

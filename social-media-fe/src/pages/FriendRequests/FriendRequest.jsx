import styles from "./FriendRequest.module.scss";
import classNames from "classnames/bind";
import CardFriend from "../../components/Friends/CardFriend";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFriendRequestByUserId } from "../../redux/action/friendAction";

const cx = classNames.bind(styles);

function FriendRequest() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  useEffect(() => {
    dispatch(getFriendRequestByUserId(localStorage.getItem("id")));
  }, []);
  return (
    <div className={cx("noti-container")}>
      <div className={cx("friend-requests-title") + " px-4"}>
        <h4>Your Friend Requests</h4>
      </div>
      <div className="py-4 px-4">
        <div className="row ">
          {state?.friend?.friendRequest.map((item) => {
            return (
              <div className="col-md-auto" key={item?.id}>
                {item?.attributes?.status === "pending" && (
                  <CardFriend item={item} key={item?.id} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FriendRequest;

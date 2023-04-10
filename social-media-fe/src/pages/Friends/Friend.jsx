import styles from "./Friend.module.scss";
import classNames from "classnames/bind";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFriendsByUserId } from "../../redux/action/friendAction";
import CardFriend from "../../components/Friends/CardFriend";

const cx = classNames.bind(styles);

function Friends() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFriendsByUserId(localStorage.getItem("id")));
  }, []);
  return (
    <>
      <div className={cx("friend-requests-title") + " px-4"}>
        <h4>Your Friends</h4>
      </div>
      <div className="py-4 px-4">
        <div className="row">
          {state?.friend?.friend?.map((item) => {
            return (
              <div className="col-md-auto" key={item?.id}>
                <CardFriend item={item} friend key={item?.id} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Friends;

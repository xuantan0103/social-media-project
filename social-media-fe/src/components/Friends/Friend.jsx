import styles from "./Friend.scss";
import classNames from "classnames/bind";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeFriend } from "../../api/friend";
import { LOCAL_HOST } from "../../api/constant";

const cx = classNames.bind(styles);

const Friend = ({ id }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { _id } = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  const friend = useSelector((state) => state.user.friends);

  const friendSlice = "";
  // const friendSlice = friends.find((friend) => friend._id === id);
  const isSelf = _id === id;

  const patchFriend = async () => {
    const response = await fetch(`api/user/${_id}/${id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    dispatch(friendSlice({ friends: data }));
  };

  return (
    <div className={cx("fr-card")}>
      <div className={cx("fr-card")}>
        <div className="card" style={{ width: "15rem", height: "80%rem" }}>
          <img
            className="card-img-top"
            src=""
            alt=""
            size="40px"
            onClick={() => {
              navigate(`${LOCAL_HOST}/profile/${id}`);
            }}
          />

          <div className="card-body">
            <h5 className="card-title"> {friend?.username}</h5>
            <p className="card-text">50 bạn chung</p>
            <button onClick={() => patchFriend()} className="btn-accept">
              Accept Friend
            </button>
            <button onClick={() => removeFriend()} className="btn-remove">
              Remove Friend
            </button>
            {/* <button onClick={() => patchFriend()} className="btn-accept" >{addEventListener ? "Accepted Friend" : "Accept Friend"}</button> */}
            {/* <button onClick={() => patchFriend()} className="btn-remove">{addEventListener? "Removed Friend" : "Remove Friend"}</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Friend;

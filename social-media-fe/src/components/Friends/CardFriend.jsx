import styles from "./CardFriend.module.scss";
import classNames from "classnames/bind";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOCAL_HOST } from "../../api/constant";
import {
  addFriend,
  deleteFriend,
  updateStatus,
} from "../../redux/action/friendAction";

const cx = classNames.bind(styles);

function CardFriend({ item, friend }) {
  console.log("item", item);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleUpdateFriend = (status) => {
    dispatch(updateStatus({ id: item?.id, status: status }));
    if (status === "accepted") {
      dispatch(
        addFriend({
          friend: item?.attributes?.receiver?.data?.id,
          user: item?.attributes?.sender?.data?.id,
          friend_id: item?.attributes?.receiver?.data?.id,
        })
      );
      dispatch(
        addFriend({
          friend: item?.attributes?.sender?.data?.id,
          user: item?.attributes?.receiver?.data?.id,
          friend_id: item?.attributes?.sender?.data?.id,
        })
      );
    }
  };
  const handleUnfriend = () => {
    dispatch(deleteFriend(item?.id));
  };
  return (
    <div className={cx("fr-card")}>
      <div className="card" style={{ width: "15rem", height: "fit-content" }}>
        <img
          className={cx("image") + " card-img-top"}
          src={
            friend
              ? `${LOCAL_HOST}${item?.attributes?.friend?.data?.attributes?.avatar?.data?.attributes?.url}`
              : `${LOCAL_HOST}${item?.attributes?.sender?.data?.attributes?.avatar?.data?.attributes?.url}`
          }
          alt=""
          size="40px"
          onClick={() => {
            navigate(
              friend
                ? `/profile/${item?.attributes?.friend?.data?.id}`
                : `/profile/${item?.attributes?.sender?.data?.id}`
            );
          }}
        />

        <div className="card-body">
          <h5
            className={cx("username") + " card-title"}
            onClick={() => {
              navigate(
                friend
                  ? `/profile/${item?.attributes?.friend?.data?.id}`
                  : `/profile/${item?.attributes?.sender?.data?.id}`
              );
            }}
          >
            {friend
              ? item?.attributes?.friend?.data?.attributes?.username
              : item?.attributes?.sender?.data?.attributes?.username}
          </h5>
          <p className="card-text">50 bạn chung</p>

          {!friend && (
            <button
              className={cx("btn-accept")}
              onClick={() => {
                handleUpdateFriend("accepted");
              }}
            >
              Accept
            </button>
          )}
          {!friend && (
            <button
              className={cx("btn-remove")}
              onClick={() => {
                handleUpdateFriend("rejected");
              }}
            >
              Remove
            </button>
          )}
          {friend && (
            <button
              className={cx("btn-accept")}
              onClick={() => {
                handleUnfriend();
              }}
            >
              Unfriend
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default CardFriend;

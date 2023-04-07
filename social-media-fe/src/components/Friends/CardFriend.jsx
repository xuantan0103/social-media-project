import styles from "./CardFriend.module.scss";
import classNames from "classnames/bind";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOCAL_HOST } from "../../api/constant";
import { updateStatus } from "../../redux/action/friendAction";

const cx = classNames.bind(styles);

function CardFriend({ item }) {
  const dispatch = useDispatch();
  const handleUpdatePost = (status) => {
    dispatch(updateStatus({ id: item?.id, status: status }));
  };
  const navigate = useNavigate();
  return (
    <div className={cx("fr-card")}>
      <div className="card" style={{ width: "15rem", height: "395px" }}>
        <img
          className={cx("image") + " card-img-top"}
          src={`${LOCAL_HOST}${item?.attributes?.sender?.data?.attributes?.avatar?.data?.attributes?.url}`}
          alt=""
          size="40px"
          onClick={() => {
            navigate(`/profile/${item?.attributes?.sender?.data?.id}`);
          }}
        />

        <div className="card-body">
          <h5
            className={cx("username") + " card-title"}
            onClick={() => {
              navigate(`/profile/${item?.attributes?.sender?.data?.id}`);
            }}
          >
            {item?.attributes?.sender?.data?.attributes?.username}
          </h5>
          <p className="card-text">50 bạn chung</p>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
          <button
            className={cx("btn-accept")}
            onClick={() => {
              handleUpdatePost("accepted");
            }}
          >
            Accept
          </button>
          <button
            className={cx("btn-remove")}
            onClick={() => {
              handleUpdatePost("rejected");
            }}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardFriend;

import styles from "../Friends/Friendsuggestion.scss";
import classNames from "classnames/bind";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOCAL_HOST } from "../../api/constant";
import { updateStatus } from "../../redux/action/friendAction";

const cx = classNames.bind(styles);

function FriendSuggestion({ item }) {
  const dispatch = useDispatch();
  const handleUpdatePost = (status) => {
    dispatch(updateStatus({ id: item?.id, status: status }));
  };
  const navigate = useNavigate();
  return (
    <div className={cx("fr-card")}>
      <div className="card" style={{ width: "15rem", height: "fit-content" }}>
        <img
          className={cx("image") + " card-img-top"}
          src={`${LOCAL_HOST}${item?.avatar?.url}`}
          alt=""
          size="40px"
          onClick={() => {
            navigate(`/profile/${item?.id}`);
          }}
        />

        <div className="card-body">
          <h5
            className={cx("username") + " card-title"}
            onClick={() => {
              navigate(`/profile/${item?.id}`);
            }}
          >
            {item?.username}
          </h5>
          <p className="card-text">50 bạn chung</p>

          <button
            className={cx("btn-addfr")}
            onClick={() => {
              navigate(`/profile/${item?.id}`);
            }}
          >
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
}

export default FriendSuggestion;

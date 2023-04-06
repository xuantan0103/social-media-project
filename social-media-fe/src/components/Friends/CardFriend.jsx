import styles from "./CardFriend.module.scss";
import classNames from "classnames/bind";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOCAL_HOST } from "../../api/constant";

const cx = classNames.bind(styles);

function CardFriend({ item }) {
  console.log("item", item);
  const navigate = useNavigate();
  return (
    <div className={cx("fr-card")}>
      <div className={cx("fr-card")}>
        <div className="card" style={{ width: "15rem", height: "80%rem" }}>
          <img
            className="card-img-top"
            src="http://localhost:1337/uploads/tai_xuong_268b1c72dc.png"
            alt=""
            size="40px"
            onClick={() => {
              navigate(`${LOCAL_HOST}/profile/${1}`);
            }}
          />

          <div className="card-body">
            <h5 className="card-title"> {"Suong"}</h5>
            <p className="card-text">50 bạn chung</p>
            <button className={cx("btn-accept")}>Accept Friend</button>
            <button className={cx("btn-remove")}>Remove Friend</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardFriend;

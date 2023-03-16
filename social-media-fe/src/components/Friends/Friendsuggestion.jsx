import React from "react";
import styles from "./Friendsuggestion.scss";
import classNames from "classnames/bind";
// import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);
function Friendsuggestion() {
  return (
    <div className={cx("fr-card")}>
      <div className={cx("fr-card")}>
        <div className="card" style={{ width: "15rem" }}>
          <img className="card-img-top" src="https://cdn.pixabay.com/photo/2016/01/02/18/39/puppy-1118584_960_720.jpg" alt="" />
          <div className="card-body">
            <h5 className="card-title">Phạm Xuân Tân</h5>
            <p className="card-text">50 bạn chung</p>
            <a href="#" className="btn btn-primary">
              Add friend
            </a>
            <a href="#" className="btn btn-remove">
              Remove
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Friendsuggestion;

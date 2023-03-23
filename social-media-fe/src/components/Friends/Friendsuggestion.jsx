import React from "react";
import styles from "./Friendsuggestion.scss";
import classNames from "classnames/bind";
import { useState } from "react";

const cx = classNames.bind(styles);
export const Button = (props) => {
  const [isShowaddfr, setIsShowaddfr] = useState(false);
  const [isShowremove, setIsShowremove] = useState(false);
const requestAdd = (id) => {
  setIsShowaddfr(!isShowaddfr)
  props.addFriend(id)
}
const requestRemove = (id) => {
  setIsShowremove(!isShowremove)
  props.removeFriend(id)
}
  return (
    <div className={cx("fr-card")}>
      <div className={cx("fr-card")}>
        <div className="card" style={{ width: "15rem", height:"100%rem" }}>
          <img className="card-img-top" src="https://i.pinimg.com/564x/44/05/b4/4405b4960b10edd8df4125c26768f852.jpg" alt="" />
          <div className="card-body">
            <h5 className="card-title">Phạm Xuân Tân</h5>
            <p className="card-text">50 bạn chung</p>
            <button onClick={() => requestAdd(props.id)} className="btn-addfr">{isShowaddfr ? "Invitation sent" : "Addfriend"}</button>
            <button onClick={() => requestRemove(props.id)} className="btn-remove">{isShowremove ? "Removed" : "Remove"}</button>

            </div>
          </div>
        </div>
      </div>
  );
}
export default Button;

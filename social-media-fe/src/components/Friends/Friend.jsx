import React, { useState } from 'react';
import styles from "./Friend.scss";
import classNames from "classnames/bind";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

const cx = classNames.bind(styles);
export const Button = (props) => {
  const [isShowaccept, setIsShowaccept] = useState(false);
  const [isShowremove, setIsShowremove] = useState(false);
  const requestAccept = (id) => {
    setIsShowaccept(!isShowaccept)
    props.addFriend(id)
  }
  const requestRemove = (id) => {
    setIsShowremove(!isShowremove)
    props.removeFriend(id)
  }

  return (
    <div className={cx("fr-card")}>
      <div className={cx("fr-card")}>
        <div className="card" style={{ width: "15rem" }}>
          <img className="card-img-top" src="https://i.pinimg.com/564x/f3/5a/0b/f35a0b00f54cbd73ffd65f9b59a5b9af.jpg" alt="" />
          <div className="card-body">
            <h5 className="card-title">Phạm Xuân Tân</h5>
            <p className="card-text">100 bạn chung</p>
            <button onClick={() => requestAccept(props.id)} className="btn-accept">{isShowaccept ? "Accepted" : "Accept"}</button>
            <button onClick={() => requestRemove(props.id)} className="btn-remove">{isShowremove ? "Removed" : "Remove"}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Button;

import React, {useState} from 'react';
import styles from "./Friend.scss";
import classNames from "classnames/bind";
// import { useNavigate } from "react-router-dom";
import axios from "axios";

const cx = classNames.bind(styles);
function Friends() {
  // const Button = (props) => {
  //   const [isAccept, setIsAccept] = useState('default');

  //   const onSubmitFriendRequest = async (type, id) => {
  //     if(type === 'accept'){
  //       setIsAccept(true)
  //       await axios.post('/auth/local/friendrequest', {follow_users_UserId: id})
  //     }else {
  //       setIsAccept(false)
  //       await axios.post('/auth/local/friendrequest', {follow_users_UserId: id})
  //     }
    // }
  return (
    <div className={cx("fr-card")}>
      <div className={cx("fr-card")}>
        <div className="card" style={{ width: "15rem" }}>
          <img className="card-img-top" src="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg" alt="" />
          <div className="card-body">
            <h5 className="card-title">Phạm Xuân Tân</h5>
            <p className="card-text">100 bạn chung</p>
            {/* {isAccept && isAccept === 'default'} */}
            <a href="#" className="btn btn-primary">
              Accept
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
export default Friends;

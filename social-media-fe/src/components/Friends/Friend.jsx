import React from "react";
import styles from "./Friend.scss";
import classNames from "classnames/bind";
// import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);
function Friends() {
    return (
        <div className={cx("fr-card")}>
            <div className={cx("fr-card")}>
                <h4 class="mb-4">People You May Know</h4>
                <h4 className="mb-4">People You May Know</h4>
                <div className="card" style={{ width: '18rem' }}>
                    <img className="card-img-top" src="../" alt="" />
                    <div className="card-body">
                        <h5 className="card-title">Phạm Xuân Tân</h5>
                        <p className="card-text">
                            100 bạn chung
                        </p>
                        <a href="#" className="btn btn-primary">Add friend</a>
                        <a href="#" className="card-link">Remove</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Friends;
import styles from "./FriendsMenu.scss";
import classNames from "classnames/bind";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUserGroup,
    faUserPlus,
    faUsersLine,
    faUserMinus,
    faBirthdayCake,
    faHouseUser,
} from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);

function FriendsMenu() {
    const navigate = useNavigate();
    return (
        <div className={cx("frmenu")}>
            <div className={cx("friend-menu")}>
                <div className={cx("friend-title")}> FRIENDS </div>
                <ul>
                    <li className={cx("friend-item")}
                        onClick={() => navigate("/")}
                    >
                        <FontAwesomeIcon icon={faHouseUser} color="#1E90FF" />
                        <span className={cx("friend-text")}>Home</span>
                    </li>
                    <li
                        className={cx("friend-item")}
                        onClick={() => navigate("/friendrequests")}
                    >
                        <FontAwesomeIcon icon={faUserMinus} color="black" />
                        <span className={cx("sidebar-text")}>Friend Request</span>
                    </li>
                </ul>
            </div>
            <div>
                <div className={cx("friend-list")}>
                    <ul>
                        <li className={cx("friend-item")}
                            onClick={() => navigate("/")}
                        >
                            <FontAwesomeIcon icon={faUserPlus} color="black" />
                            <span className={cx("friend-text")}>Suggestions</span>
                        </li>
                        <li
                            className={cx("friend-item")}
                            onClick={() => navigate("/")}
                        >
                            <FontAwesomeIcon icon={faUserGroup} color="black" />
                            <span className={cx("friend-text")}>All friends</span>
                        </li>
                        <li className={cx("friend-item")}
                            onClick={() => navigate("/")}
                        >
                            <FontAwesomeIcon icon={faBirthdayCake} color="black" />
                            <span className={cx("friend-text")}>Birthdays</span>
                        </li>
                        <li className={cx("friend-item")}
                            onClick={() => navigate("/")}
                        >
                            <FontAwesomeIcon icon={faUsersLine} color="black" />
                            <span className={cx("friend-text")}>Custom Lists</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default FriendsMenu;
import styles from "./FriendsMenu.scss";
import classNames from "classnames/bind";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserGroup,
  faUserPlus,
  faUsersLine,
  faUser,
  faBirthdayCake,
} from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);

function FriendsMenu() {
  const navigate = useNavigate();
  return (
    <div className={cx("friend")}>
      <div className={cx("friend-menu")}>
        <div className={cx("friend-title")}> FRIENDS </div>
      </div>
      <div>
        <div className={cx("friend-list")}>
          <ul>
            <li
              className={cx("friend-item")}
              onClick={() => navigate("/friendrequests")}
            >
              <FontAwesomeIcon icon={faUser} color="black" />
              <span className={cx("friend-text")}>Friend Request</span>
            </li>
            <li className={cx("friend-item")} onClick={() => navigate("/friendyoumayknow")}>
              <FontAwesomeIcon icon={faUserPlus} color="black" />
              <span className={cx("friend-text")}>Suggestions</span>
            </li>
            <li className={cx("friend-item")} onClick={() => navigate("/")}>
              <FontAwesomeIcon icon={faUserGroup} color="black" />
              <span className={cx("friend-text")}>All friends</span>
            </li>
            <li className={cx("friend-item")} onClick={() => navigate("/")}>
              <FontAwesomeIcon icon={faBirthdayCake} color="black" />
              <span className={cx("friend-text")}>Birthdays</span>
            </li>
            <li className={cx("friend-item")} onClick={() => navigate("/")}>
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

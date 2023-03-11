import styles from "./LeftBar.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFeed,
  faMessage,
  faPlayCircle,
  faUserGroup,
  faBookBookmark,
  faGraduationCap,
  faHouse,
  faUser,
  faCalendarDay,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function LeftBar() {
  return (
    <div className={cx("sidebar")}>
      <div className={cx("sidebar-list")}>
        <ul>
          <li className={cx("sidebar-item")}>
            <FontAwesomeIcon icon={faHouse} color="#00CED1" />
            <span className={cx("sidebar-text")}>Home page</span>
          </li>
          <Link to="/profile">
            <p className="text-center">
          <li className={cx("sidebar-item")}>
            <FontAwesomeIcon icon={faUser} color="blue" />
            <span className={cx("sidebar-text")}><b>Profile</b> </span>
            </li>
            </p>
            </Link>
            </ul>
      </div>
      <div>
        <div className={cx("sidebar-list")}>
          <ul>
            <li className={cx("sidebar-item")}>
              <FontAwesomeIcon icon={faFeed} />
              <span className={cx("sidebar-text")}>Feed</span>
            </li>
            <Link to="/friendrequests">
            <p className="text-center">
            <li className={cx("sidebar-item")}>
              <FontAwesomeIcon icon={faUserGroup} color="#40E0D0" />
              <span className={cx("sidebar-text")}><b>Friend</b> </span>
            </li>
            </p>
            </Link>
            <li className={cx("sidebar-item")}>
              <FontAwesomeIcon icon={faMessage} color="#8B008B" />
              <span className={cx("sidebar-text")}>Chats</span>
            </li>
            <li className={cx("sidebar-item")}>
              <FontAwesomeIcon icon={faPlayCircle} color="red" />
              <span className={cx("sidebar-text")}>Videos</span>
            </li>
            <li className={cx("sidebar-item")}>
              <FontAwesomeIcon icon={faPeopleGroup} color="rgb(40, 4, 148)" />
              <span className={cx("sidebar-text")}>Groups</span>
            </li>
            <li className={cx("sidebar-item")}>
              <FontAwesomeIcon icon={faBookBookmark} color="#1E90FF" />
              <span className={cx("sidebar-text")}>Bookmarks</span>
            </li>          
            <li className={cx("sidebar-item")}>
              <FontAwesomeIcon icon={faCalendarDay} color="#C71585" />
              <span className={cx("sidebar-text")}>Events</span>
            </li>
            <li className={cx("sidebar-item")}>
              <FontAwesomeIcon icon={faGraduationCap} color="#0000FF"/>
              <span className={cx("sidebar-text")}>Courses</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default LeftBar;

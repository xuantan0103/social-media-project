import styles from "./LeftBar.module.scss";
import classNames from "classnames/bind";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFeed,
  faMessage,
  faPlayCircle,
  faUserGroup,
  faBookBookmark,
  faCircleQuestion,
  faCalendar,
  faSchool,
  faHouse,
  faUser,
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
          <li className={cx("sidebar-item")}>
            <FontAwesomeIcon icon={faUser} color="blue" />
            <span className={cx("sidebar-text")}>Profile</span>
          </li>
        </ul>
      </div>
      <div>
        <div className={cx("sidebar-list")}>
          <ul>
            <li className={cx("sidebar-item")}>
              <FontAwesomeIcon icon={faFeed} />
              <span className={cx("sidebar-text")}>Feed</span>
            </li>
            <li className={cx("sidebar-item")}>
              <FontAwesomeIcon icon={faMessage} color="#8B008B" />
              <span className={cx("sidebar-text")}>Chats</span>
            </li>
            <li className={cx("sidebar-item")}>
              <FontAwesomeIcon icon={faPlayCircle} color="red" />
              <span className={cx("sidebar-text")}>Videos</span>
            </li>
            <li className={cx("sidebar-item")}>
              <FontAwesomeIcon icon={faUserGroup} color="rgb(40, 4, 148)" />
              <span className={cx("sidebar-text")}>Groups</span>
            </li>
            <li className={cx("sidebar-item")}>
              <FontAwesomeIcon icon={faBookBookmark} color="#1E90FF" />
              <span className={cx("sidebar-text")}>Bookmarks</span>
            </li>
            <li className={cx("sidebar-item")}>
              <FontAwesomeIcon icon={faCircleQuestion} color="#DAA520" />
              <span className={cx("sidebar-text")}>Questions</span>
            </li>
            <li className={cx("sidebar-item")}>
              <FontAwesomeIcon icon={faCalendar} color="#C71585" />
              <span className={cx("sidebar-text")}>Events</span>
            </li>
            <li className={cx("sidebar-item")}>
              <FontAwesomeIcon icon={faSchool} color="#FF4500" />
              <span className={cx("sidebar-text")}>Courses</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default LeftBar;

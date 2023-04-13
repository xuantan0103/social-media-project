import styles from "./LeftBar.module.scss";
import classNames from "classnames/bind";
import { useNavigate } from "react-router-dom";
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
  faClock,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function LeftBar({ collapse = false }) {
  const navigate = useNavigate();
  return (
    <div className={cx("sidebar")}>
      <div className={cx("sidebar-list")}>
        <ul>
          <li className={cx("sidebar-item")} onClick={() => navigate("/")}>
            <FontAwesomeIcon
              icon={faHouse}
              color="#00CED1"
              className={cx("icon")}
            />
            <span className={collapse ? cx("hide") : cx("sidebar-text")}>
              Home page
            </span>
          </li>
          <li
            className={cx("sidebar-item")}
            onClick={() => navigate(`/profile/${localStorage.getItem("id")}`)}
          >
            <FontAwesomeIcon
              icon={faUser}
              color="blue"
              className={cx("icon")}
            />
            <span className={collapse ? cx("hide") : cx("sidebar-text")}>
              Profile
            </span>
          </li>
        </ul>
      </div>
      <div>
        <div className={cx("sidebar-list")}>
          <ul>
            <li
              className={cx("sidebar-item")}
              onClick={() => navigate(`/profile/1`)}
            >
              <FontAwesomeIcon icon={faFeed} className={cx("icon")} />
              <span className={collapse ? cx("hide") : cx("sidebar-text")}>
                Feed
              </span>
            </li>
            <li
              className={cx("sidebar-item")}
              onClick={() => navigate("/friends")}
            >
              <FontAwesomeIcon
                icon={faUserGroup}
                color="#40E0D0"
                className={cx("icon")}
              />
              <span className={collapse ? cx("hide") : cx("sidebar-text")}>
                Friends
              </span>
            </li>
            <li className={cx("sidebar-item")} onClick={() => navigate("")}>
              <FontAwesomeIcon
                icon={faClock}
                color="#008A5A"
                className={cx("icon")}
              />
              <span className={collapse ? cx("hide") : cx("sidebar-text")}>
                Celebrate
              </span>
            </li>
            <li className={cx("sidebar-item")}>
              <FontAwesomeIcon
                icon={faMessage}
                color="#8B008B"
                className={cx("icon")}
              />
              <span className={collapse ? cx("hide") : cx("sidebar-text")}>
                Chats
              </span>
            </li>
            <li className={cx("sidebar-item")}>
              <FontAwesomeIcon
                icon={faPlayCircle}
                color="red"
                className={cx("icon")}
              />
              <span className={collapse ? cx("hide") : cx("sidebar-text")}>
                Videos
              </span>
            </li>
            <li className={cx("sidebar-item")}>
              <FontAwesomeIcon
                icon={faPeopleGroup}
                color="rgb(40, 4, 148)"
                className={cx("icon")}
              />
              <span className={collapse ? cx("hide") : cx("sidebar-text")}>
                Groups
              </span>
            </li>
            <li className={cx("sidebar-item")}>
              <FontAwesomeIcon
                icon={faBookBookmark}
                color="#1E90FF"
                className={cx("icon")}
              />
              <span className={collapse ? cx("hide") : cx("sidebar-text")}>
                Bookmarks
              </span>
            </li>
            <li className={cx("sidebar-item")}>
              <FontAwesomeIcon
                icon={faCalendarDay}
                color="#C71585"
                className={cx("icon")}
              />
              <span className={collapse ? cx("hide") : cx("sidebar-text")}>
                Events
              </span>
            </li>
            <li className={cx("sidebar-item")}>
              <FontAwesomeIcon
                icon={faGraduationCap}
                color="#0000FF"
                className={cx("icon")}
              />
              <span className={collapse ? cx("hide") : cx("sidebar-text")}>
                Courses
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default LeftBar;

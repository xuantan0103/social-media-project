import "./LeftBar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFeed,
  faMessage,
  faPlayCircle,
  faUserGroup,
  faBookBookmark,
  faCircleQuestion,
  faGraduationCap,
  faHouse,
  faUser,
  faCalendarDay,
} from "@fortawesome/free-solid-svg-icons";
//import { Users } from "../../dynamicData";
//import CloseFriend from "../closeFriends/CloseFriend";

function LeftBar() {
  return (
    <div className="sidebar">
      <div className="sidebar-Homepage sidebar-list">
        <ul className="sidebar-Home">
          <li className="sidebar-ListItem">
            <FontAwesomeIcon
              className="fa-solid fa-house"
              icon={faHouse}
              color="#00CED1"
            />
            <span className="sidebar-ListItemText">Home page</span>
          </li>
          <li className="sidebar-ListItem">
            <FontAwesomeIcon
              className="fa-solid fa-user"
              icon={faUser}
              color="blue"
            />
            <span className="sidebar-ListItemText">Profile</span>
          </li>
        </ul>
      </div>
      <div className="sidebar">
        <div className="sidebar-Wrapper sidebar-list">
          <ul className="sidebar-List">
            <li className="sidebar-ListItem">
              <FontAwesomeIcon className="fa-solid fa-rss" icon={faFeed} />
              <span className="sidebar-ListItemText">Feed</span>
            </li>
            <li className="side-barListItem">
              <FontAwesomeIcon
                className="fa-solid fa-message"
                icon={faMessage}
                color="#8B008B"
              />
              <span className="sidebar-ListItemText">Chats</span>
            </li>
            <li className="side-barListItem">
              <FontAwesomeIcon
                className="fa-solid fa-play"
                icon={faPlayCircle}
                color="red"
              />
              <span className="sidebar-ListItemText">Videos</span>
            </li>
            <li className="sidebar-ListItem">
              <FontAwesomeIcon
                className="fa-duotone fa-user-group"
                icon={faUserGroup}
                color="rgb(40, 4, 148)"
              />
              <span className="sidebar-ListItemText">Groups</span>
            </li>
            <li className="sidebar-ListItem">
              <FontAwesomeIcon
                className="fa-solid fa-bookmark"
                icon={faBookBookmark}
                color="#1E90FF"
              />
              <span className="sidebar-ListItemText">Bookmarks</span>
            </li>
            <li className="sidebar-ListItem">
              <FontAwesomeIcon
                className="fa-sharp fa-solid fa-circle-question"
                icon={faCircleQuestion}
                color="#DAA520"
              />
              <span className="sidebar-ListItemText">Questions</span>
            </li>
            <li className="sidebar-ListItem">
              <FontAwesomeIcon
                className="fa-solid fa-calendar-days"
                icon={faCalendarDay}
                color="#C71585"
              />
              <span className="sidebar-ListItemText">Events</span>
            </li>
            <li className="sidebar-ListItem">
              <FontAwesomeIcon
                className="fa-solid fa-graduation-cap"
                icon={faGraduationCap}
                color="#0000FF"
              />
              <span className="sidebar-ListItemText">Courses</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default LeftBar;

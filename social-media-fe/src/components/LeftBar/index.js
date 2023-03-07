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
      <div className="sidebarHomepage sidebar-list">
        <ul className="sidebarHome">
          <li className="sidebarListItem">
            <FontAwesomeIcon
              className="fa-solid fa-house"
              icon={faHouse}
              color="#00CED1"
            />
            <span className="sidebarListItemText">Home page</span>
          </li>
          <li className="sidebarListItem">
            <FontAwesomeIcon
              className="fa-solid fa-user"
              icon={faUser}
              color="blue"
            />
            <span className="sidebarListItemText">Profile</span>
          </li>
        </ul>
      </div>
      <div className="sidebar">
        <div className="sidebarWrapper sidebar-list">
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <FontAwesomeIcon className="fa-solid fa-rss" icon={faFeed} />
              <span className="sidebarListItemText">Feed</span>
            </li>
            <li className="sidebarListItem">
              <FontAwesomeIcon
                className="fa-solid fa-message"
                icon={faMessage}
                color="#8B008B"
              />
              <span className="sidebarListItemText">Chats</span>
            </li>
            <li className="sidebarListItem">
              <FontAwesomeIcon
                className="fa-solid fa-play"
                icon={faPlayCircle}
                color="red"
              />
              <span className="sidebarListItemText">Videos</span>
            </li>
            <li className="sidebarListItem">
              <FontAwesomeIcon
                className="fa-duotone fa-user-group"
                icon={faUserGroup}
                color="rgb(40, 4, 148)"
              />
              <span className="sidebarListItemText">Groups</span>
            </li>
            <li className="sidebarListItem">
              <FontAwesomeIcon
                className="fa-solid fa-bookmark"
                icon={faBookBookmark}
                color="#1E90FF"
              />
              <span className="sidebarListItemText">Bookmarks</span>
            </li>
            <li className="sidebarListItem">
              <FontAwesomeIcon
                className="fa-sharp fa-solid fa-circle-question"
                icon={faCircleQuestion}
                color="#DAA520"
              />
              <span className="sidebarListItemText">Questions</span>
            </li>
            <li className="sidebarListItem">
              <FontAwesomeIcon
                className="fa-solid fa-calendar-days"
                icon={faCalendarDay}
                color="#C71585"
              />
              <span className="sidebarListItemText">Events</span>
            </li>
            <li className="sidebarListItem">
              <FontAwesomeIcon
                className="fa-solid fa-graduation-cap"
                icon={faGraduationCap}
                color="#0000FF"
              />
              <span className="sidebarListItemText">Courses</span>
            </li>
          </ul>
     </div>
      </div>
    </div>
  );
}

export default LeftBar;

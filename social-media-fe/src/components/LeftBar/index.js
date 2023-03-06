import './LeftBar.module.scss';
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
}  from "@fortawesome/free-solid-svg-icons";
//import { Users } from "../../dynamicData";
//import CloseFriend from "../closeFriends/CloseFriend";

function LeftBar() {
  return (
  <div className="sidebar">
      <div className="sidebarWrapper sidebar-list">
        <ul className="sidebarList">
          <li className="sidebarListItem">
          <FontAwesomeIcon className="fa-solid fa-rss" icon={faFeed} />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
          <FontAwesomeIcon className="fa-solid fa-message" icon={faMessage}  />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
          <FontAwesomeIcon className="fa-solid fa-play" icon={faPlayCircle}/>
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
          <FontAwesomeIcon className="fa-duotone fa-user-group" icon={faUserGroup}/>
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
          <FontAwesomeIcon className="fa-solid fa-bookmark" icon={faBookBookmark} />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
          <FontAwesomeIcon className="fa-sharp fa-solid fa-circle-question" icon={faCircleQuestion} />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
          <FontAwesomeIcon className="fa-solid fa-calendar-days" icon={faCalendar} />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
          <FontAwesomeIcon className="fa-solid fa-graduation-cap" icon={faSchool} />
            <span className="sidebarListItemText">Courses</span>
          </li>
      </ul>
      </div>
    </div>
  );
}

export default LeftBar;

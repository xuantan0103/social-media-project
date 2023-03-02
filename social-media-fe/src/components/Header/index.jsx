import { useState } from "react";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faBell,
  faSearch,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
import logo10 from "../../assets/logo10.png";

import Button from "../Button/Button";

const cx = classNames.bind(styles);

function Header() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div
      className={
        cx("container") +
        " d-flex flex-row justify-content-around align-items-center"
      }
    >
      <div className="col-lg-3">
        <img src={logo10} alt="logo" className={cx("logo")} />
      </div>
      <div className={cx("searchbar") + " col-lg-6"}>
        <FontAwesomeIcon className={cx("search-icon")} icon={faSearch} />
        <input
          className={cx("search-input") + " ms-3"}
          type="text"
          name=""
          placeholder="Search..."
        />
      </div>
      <div className={cx("action") + " col-lg-3 d-flex justify-content-end"}>
        <Button circle>
          <div className={cx("icon-bell")}>
            <FontAwesomeIcon icon={faBell} />
            <div className={cx("number-tag")}>9</div>
          </div>
        </Button>
        <Button circle>
          <div className={cx("icon-bell")}>
            <FontAwesomeIcon icon={faUserGroup} />
            <div className={cx("number-tag")}>9</div>
          </div>
        </Button>
        <Button circle>
          <div className={cx("icon-bell")}>
            <FontAwesomeIcon icon={faFacebookMessenger} />
            <div className={cx("number-tag")}>9+</div>
          </div>
        </Button>
        <Button circle className={cx("user-image")}>
          <img
            src={
              "https://firebasestorage.googleapis.com/v0/b/plant-seeds-home.appspot.com/o/images%2Fdefaultuser.png?alt=media&token=da4c4242-2573-4c9a-b6cb-68673c9c547f"
            }
            alt=""
            className={cx("avatar")}
          />
          <FontAwesomeIcon icon={faAngleDown} className={cx("user-icon")} />
        </Button>
      </div>
    </div>
  );
}

export default Header;
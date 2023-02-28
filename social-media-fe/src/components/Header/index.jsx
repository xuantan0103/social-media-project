import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import logo10 from "../../assets/logo10.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faBell,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

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
      <div className="col-lg-4">
        <img src={logo10} alt="logo" className={cx("logo")} />
      </div>
      <div className={cx("searchbar") + " col-lg-4"}>
        <FontAwesomeIcon className={cx("search-icon")} icon={faSearch} />
        <input
          className={cx("search-input") + " ms-3"}
          type="text"
          name=""
          placeholder="Search..."
        />
      </div>
      <div className={cx("action") + " col-lg-4 d-flex justify-content-end"}>
        <Button circle>
          <FontAwesomeIcon icon={faBell} />
        </Button>
        <Button circle>
          <FontAwesomeIcon icon={faBell} />
        </Button>
        <Button className={cx("user-image")}>
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

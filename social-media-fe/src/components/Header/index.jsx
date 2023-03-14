import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faBell,
  faSearch,
  faSignOut,
  faUser,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
import logo10 from "../../assets/logo10.png";

import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import { removeToken } from "../../helpers";
import { useEffect, useState } from "react";

const cx = classNames.bind(styles);

function Header() {
  const [authToken, setAuthToken] = useState(localStorage.getItem("authToken"));
  const navigate = useNavigate();
  useEffect(() => {
    if (!authToken) {
      navigate("/login");
    }
  }, [authToken]);
  const handleLogout = () => {
    removeToken();
    setAuthToken(localStorage.getItem("authToken"));
  };
  return (
    <div
      className={
        cx("container") +
        " d-flex flex-row justify-content-around align-items-center"
      }
    >
      <div className="col-lg-2">
        <Button onClick={() => navigate("/")}>
          <img src={logo10} alt="logo" className={cx("logo")} />
        </Button>
      </div>
      <div className=" col-lg-8">
        <div className={cx("searchbar")}>
          <FontAwesomeIcon className={cx("search-icon")} icon={faSearch} />
          <input
            className={cx("search-input") + " ms-3"}
            type="text"
            name=""
            placeholder="Search..."
          />
        </div>
      </div>
      <div className={cx("action") + " col-lg-2 d-flex justify-content-start"}>
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
          <div className={cx("user-action")}>
            <Button
              onClick={() => {
                navigate("/profile");
              }}
              textLeft
              leftIcon={<FontAwesomeIcon icon={faUser} />}
            >
              View your profile
            </Button>
            <Button
              textLeft
              leftIcon={<FontAwesomeIcon icon={faSignOut} />}
              onClick={handleLogout}
            >
              Sign out
            </Button>
          </div>
        </Button>
      </div>
    </div>
  );
}

export default Header;

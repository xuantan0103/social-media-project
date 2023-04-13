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
import defaultAvatar from "../../assets/default-user-image.png";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import { removeToken } from "../../api/helpers";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Spin } from "antd";
import { getCurrentUser } from "../../redux/action/userAction";
import { LOCAL_HOST } from "../../api/constant";

const cx = classNames.bind(styles);

function Header() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const [authToken, setAuthToken] = useState(localStorage.getItem("authToken"));
  const navigate = useNavigate();
  useEffect(() => {
    if (!authToken) {
      navigate("/login");
    }
  }, [authToken]);
  useEffect(() => {
    dispatch(getCurrentUser());
  }, []);
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
            <FontAwesomeIcon icon={faBell} color="#E99A27" />
            <div className={cx("number-tag")}>9</div>
          </div>
        </Button>
        <Button circle>
          <div className={cx("icon-bell")}>
            <FontAwesomeIcon icon={faUserGroup} color="#5E78D6" />
            <div className={cx("number-tag")}>9</div>
          </div>
        </Button>
        <Button circle>
          <div className={cx("icon-bell")}>
            <FontAwesomeIcon icon={faFacebookMessenger} color="#D476EB" />
            <div className={cx("number-tag")}>9+</div>
          </div>
        </Button>
        <Button circle className={cx("user-image")}>
          {state.user.isLoading ? (
            <Spin size="small" />
          ) : state?.user?.currentUser?.avatar?.url ? (
            <img
              src={`${LOCAL_HOST}${state?.user?.currentUser?.avatar?.url}`}
              alt="avatar"
              className={cx("avatar")}
            />
          ) : (
            <Spin size="small" />
          )}
          <FontAwesomeIcon icon={faAngleDown} className={cx("user-icon")} />
          <div className={cx("user-action")}>
            <Button
              onClick={() => {
                navigate(`/profile/${localStorage.getItem("id")}`);
              }}
              textLeft
              leftIcon={<FontAwesomeIcon icon={faUser} color="blue" />}
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

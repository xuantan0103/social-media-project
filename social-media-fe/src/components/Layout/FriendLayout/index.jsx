import Header from "../../Header";
import styles from "../DefaultLayout/DefaultLayout.module.scss";
import classNames from "classnames/bind";
import LeftBar from "../../LeftBar";
import FriendsMenu from "../../Friends/FriendsMenu";

const cx = classNames.bind(styles);

function FriendLayout({ children }) {
  return (
    <div className={cx("container")}>
      <div className={cx("header")}>
        <div className={cx("header-wrapper")}>
          <Header />
        </div>
      </div>
      <div className={cx("content")}>
        <div className="d-flex justify-content-center">
          <div
            className={
              cx("left-bar") + " justify-content-left px-3 pt-4 border-end"
            }
          >
            <LeftBar collapse={true} />
          </div>
          <div
            className={
              cx("menu") + " justify-content-left px-3 pt-4 border-end"
            }
          >
            <FriendsMenu />
          </div>
          <div className={cx("wrapper") + " justify-content-center"}>
            <div className="">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FriendLayout;

import styles from "./RightBar.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function User() {
  return (
    <div className={cx("container")}>
      <img
        src="https://1.bp.blogspot.com/-W1swAyDEpKM/X0AamDSp0vI/AAAAAAAAdUw/NQQiPzGIiUsoTcufNKKW3NPCEvC1WWQtACLcBGAsYHQ/s1600/flower%2Bimages%2Bfor%2Bwhatsapp%2Bprofile%2B%252831%2529.jpg"
        alt=""
        className={cx("profile-img")}
      />
      <span className={cx("username")}>Suong</span>
    </div>
  );
}

function RightBar() {
  return (
    <>
      <div className={cx("sidebar")}>
        <h5 className="mb-3">Friend Requests</h5>
        <User />
        <User />
        <User />
      </div>
      <div className={cx("sidebar")}>
        <h5 className="mb-3">Contacts</h5>
        <User />
        <User />
        <User />
        <User />
        <User />
      </div>
    </>
  );
}

export default RightBar;

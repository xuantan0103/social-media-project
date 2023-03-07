import styles from "./Profile.module.scss";
import classNames from "classnames/bind";
import logo10 from "../../assets/logo10.png";

const cx = classNames.bind(styles);

function Profile() {
  return (
    <>
      <div className={cx("container")}>
        <img
          className={cx("cover-img")}
          src="https://1.bp.blogspot.com/-W1swAyDEpKM/X0AamDSp0vI/AAAAAAAAdUw/NQQiPzGIiUsoTcufNKKW3NPCEvC1WWQtACLcBGAsYHQ/s1600/flower%2Bimages%2Bfor%2Bwhatsapp%2Bprofile%2B%252831%2529.jpg"
          alt=""
        />
        <img
          className={cx("user-img")}
          src="https://1.bp.blogspot.com/-W1swAyDEpKM/X0AamDSp0vI/AAAAAAAAdUw/NQQiPzGIiUsoTcufNKKW3NPCEvC1WWQtACLcBGAsYHQ/s1600/flower%2Bimages%2Bfor%2Bwhatsapp%2Bprofile%2B%252831%2529.jpg"
          alt=""
        />
      </div>
      <h4 className={cx("username")}>Stephen Myburgh</h4>
    </>
  );
}

export default Profile;

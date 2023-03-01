import styles from "./NewPost.module.scss";
import classNames from "classnames/bind";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSmile, faImages } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function NewPost() {
  return (
    <div className={cx("main-container")}>
      <div className={cx("container")}>
        <div className={cx("top")}>
          <img
            src="https://1.bp.blogspot.com/-W1swAyDEpKM/X0AamDSp0vI/AAAAAAAAdUw/NQQiPzGIiUsoTcufNKKW3NPCEvC1WWQtACLcBGAsYHQ/s1600/flower%2Bimages%2Bfor%2Bwhatsapp%2Bprofile%2B%252831%2529.jpg"
            alt=""
            className={cx("profileImg")}
          />
          <input
            className={cx("input-content")}
            placeholder="What's in your mind?"
          />
        </div>
        <hr className={cx("line")} />
        <div className={cx("bottom")}>
          <div className={cx("options")}>
            <Button
              text
              leftIcon={<FontAwesomeIcon icon={faImages} color="#ef4c4c" />}
            >
              Photo/Video
            </Button>
            <Button
              text
              leftIcon={
                <FontAwesomeIcon icon={faFaceSmile} color="rgb(227, 242, 14)" />
              }
            >
              Feelings
            </Button>
          </div>
          <Button primary>Post</Button>
        </div>
      </div>
    </div>
  );
}

export default NewPost;

import styles from "./NewPost.module.scss";
import classNames from "classnames/bind";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSmile, faImages } from "@fortawesome/free-regular-svg-icons";
import { useSelector } from "react-redux";
import { LOCAL_HOST } from "../../api/constant";
import NewPostItem from "./NewPostItem";
import { Spin } from "antd";

const cx = classNames.bind(styles);

function NewPost() {
  const state = useSelector((state) => state);

  return (
    <div className={cx("main-container")}>
      <div className={cx("container")}>
        <div className={cx("top")}>
          {state?.user?.currentUser?.avatar?.url ? (
            <img
              src={`${LOCAL_HOST}${state?.user?.currentUser?.avatar?.url}`}
              alt="profile-img"
              className={cx("profile-img")}
            />
          ) : (
            <Spin size="small" />
          )}
          <input
            className={cx("input-content")}
            placeholder="What's in your mind?"
            data-bs-toggle="modal"
            data-bs-target="#newPostModal"
            required
          />
        </div>
        <hr className={cx("line")} />
        <div className={cx("bottom")}>
          <div className={cx("options")}>
            <Button
              data-bs-toggle="modal"
              data-bs-target="#newPostModal"
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
              data-bs-toggle="modal"
              data-bs-target="#newPostModal"
            >
              Feelings
            </Button>
          </div>
          <Button
            primary
            className={cx("number-comment")}
            data-bs-toggle="modal"
            data-bs-target="#newPostModal"
          >
            Create New Post
          </Button>
        </div>
      </div>
      <NewPostItem />
    </div>
  );
}

export default NewPost;

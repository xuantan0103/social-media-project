import styles from "./NewPost.module.scss";
import classNames from "classnames/bind";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faFaceSmile,
  faImages,
} from "@fortawesome/free-regular-svg-icons";
import { useRef } from "react";

const cx = classNames.bind(styles);

function NewPost() {
  const addImageRef = useRef();
  const handleAddImage = () => {
    addImageRef.current.bind();
  };
  const handleCloseAddImage = () => {};
  return (
    <div className={cx("main-container")}>
      <div className={cx("container")}>
        <div className={cx("top")}>
          <img
            src="https://1.bp.blogspot.com/-W1swAyDEpKM/X0AamDSp0vI/AAAAAAAAdUw/NQQiPzGIiUsoTcufNKKW3NPCEvC1WWQtACLcBGAsYHQ/s1600/flower%2Bimages%2Bfor%2Bwhatsapp%2Bprofile%2B%252831%2529.jpg"
            alt=""
            className={cx("profile-img")}
          />
          <input
            className={cx("input-content")}
            placeholder="What's in your mind?"
            onFocus={() => {
              console.log("click");
            }}
          />
        </div>
        <hr className={cx("line")} />
        <div className={cx("bottom")}>
          <div className={cx("options")}>
            <Button
              onClick={() => handleAddImage()}
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
            type="button"
            className={cx("number-comment")}
            data-bs-toggle="modal"
            data-bs-target="#newPostModal"
          >
            Create New Post
          </Button>
        </div>
      </div>

      <div>
        <div
          className="modal fade"
          id="newPostModal"
          tabIndex="-1"
          aria-labelledby="newPostModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="newPostModalLabel">
                  New Post
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className={cx("modal-body")}>
                <textarea
                  className={cx("form-control")}
                  id="post"
                  rows="4"
                ></textarea>

                <div
                  className={
                    cx("add-image") +
                    " btn btn-primary btn-rounded p-5 w-100 h-100"
                  }
                >
                  <label
                    className="form-label text-white m-1 d-flex flex-column align-items-center justify-content-center"
                    htmlFor="customFile1"
                  >
                    <FontAwesomeIcon
                      icon={faImages}
                      className={cx("image-icon")}
                    />
                    <span>Add Image</span>
                  </label>
                  <input
                    type="file"
                    className="form-control d-none"
                    id="customFile1"
                  />
                  <Button onClick={() => handleCloseAddImage()}>
                    <FontAwesomeIcon
                      icon={faCircleXmark}
                      className={cx("xmark")}
                    />
                  </Button>
                </div>
              </div>
              <div className={cx("modal-footer")}>
                <div>
                  <Button
                    text
                    leftIcon={
                      <FontAwesomeIcon icon={faImages} color="#ef4c4c" />
                    }
                  >
                    Photo/Video
                  </Button>
                  <Button
                    text
                    leftIcon={
                      <FontAwesomeIcon
                        icon={faFaceSmile}
                        color="rgb(227, 242, 14)"
                      />
                    }
                  >
                    Feelings
                  </Button>
                </div>
                <Button
                  primary
                  type="button"
                  className={cx("number-comment")}
                  data-bs-toggle="modal"
                  data-bs-target="#newPostModal"
                >
                  Post
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewPost;

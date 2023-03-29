import styles from "./NewPost.module.scss";
import classNames from "classnames/bind";
import { useSelector } from "react-redux";
import { LOCAL_HOST } from "../../api/constant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages } from "@fortawesome/free-regular-svg-icons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button/Button";

const cx = classNames.bind(styles);

function PostItem({
  post,
  image,
  setPost,
  isShowAddImg,
  handlePreviewAvatar,
  handleShowAddImage,
  handleAddNewPost,
}) {
  const state = useSelector((state) => state);
  return (
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
              <div className="d-flex align-items-center">
                <img
                  src={`${LOCAL_HOST}${state?.user?.data?.avatar?.url}`}
                  alt=""
                  className={cx("profile-img") + " m-2"}
                />
                <div>
                  <div className={cx("username")}>
                    {state?.user?.data?.username}
                  </div>
                  <select
                    className={cx("select-wrapper") + " form-select"}
                    aria-label="select"
                    onSelect={() => post?.audition}
                    onChange={(e) =>
                      setPost({ ...post, audition: e.target.value })
                    }
                  >
                    <option value="Public">Public</option>
                    <option value="Private">Private</option>
                    <option value="Friend">Friend</option>
                  </select>
                </div>
              </div>
              <textarea
                placeholder="What's in your mind?"
                className={cx("form-control") + " my-2"}
                id="post"
                rows="5"
                onChange={(e) => setPost({ ...post, content: e.target.value })}
                value={post?.content}
              ></textarea>

              {isShowAddImg && !image && (
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
                    onChange={(e) => handlePreviewAvatar(e)}
                  />
                  <Button onClick={() => handleShowAddImage(false)}>
                    <FontAwesomeIcon
                      icon={faCircleXmark}
                      className={cx("xmark")}
                    />
                  </Button>
                </div>
              )}
              {image && (
                <img src={image.preview} alt="" className={cx("post-image")} />
              )}
            </div>
            <div className={cx("modal-footer")}>
              <Button
                onClick={() => handleShowAddImage(!isShowAddImg)}
                text
                leftIcon={<FontAwesomeIcon icon={faImages} color="#ef4c4c" />}
              >
                Photo/Video
              </Button>
              <Button primary type="button" onClick={() => handleAddNewPost()}>
                Post
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostItem;

import styles from "./NewPost.module.scss";
import classNames from "classnames/bind";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faFaceSmile,
  faImages,
} from "@fortawesome/free-regular-svg-icons";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { LOCAL_HOST } from "../../api/constant";
import { uploadImage } from "../../redux/action/imageAction";

const cx = classNames.bind(styles);

function NewPost({ type, data }) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [post, setPost] = useState(
    type === "update"
      ? data
      : {
          content: "hello",
          images: {},
          audition: "Public",
          author: "suongphan",
          authorId: 2,
          users_permissions_user: 2,
        }
  );
  const [isShowAddImg, setIsShowAddImg] = useState(false);
  const [image, setImage] = useState();
  const handleShowAddImage = (value) => {
    value === true ? setIsShowAddImg(true) : setIsShowAddImg(false);
  };
  const handlePreviewAvatar = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setImage(file);
  };
  const handleAddNewPost = () => {
    let formData = new FormData();
    formData.append("files", image);
    dispatch(uploadImage(formData));
    console.log("post", post);
  };
  useEffect(() => {
    console.log("image", image);
  }, [image]);
  return (
    <div className={cx("main-container")}>
      <div className={cx("container")}>
        <div className={cx("top")}>
          <img
            src={`${LOCAL_HOST}${state?.user?.data?.avatar?.url}`}
            alt="profile-img"
            className={cx("profile-img")}
          />
          <input
            className={cx("input-content")}
            placeholder="What's in your mind?"
            data-bs-toggle="modal"
            data-bs-target="#newPostModal"
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
                  onChange={(e) =>
                    setPost({ ...post, content: e.target.value })
                  }
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
                  <img
                    src={image.preview}
                    alt=""
                    className={cx("post-image")}
                  />
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
                <Button
                  primary
                  type="button"
                  onClick={() => handleAddNewPost()}
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

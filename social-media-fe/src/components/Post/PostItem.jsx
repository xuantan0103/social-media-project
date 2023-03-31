import styles from "../NewPost/NewPost.module.scss";
import classNames from "classnames/bind";
import { useSelector } from "react-redux";
import { LOCAL_HOST } from "../../api/constant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages } from "@fortawesome/free-regular-svg-icons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button/Button";
import { uploadImage } from "../../api";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updatePost } from "../../redux/action/postAction";

const cx = classNames.bind(styles);

function PostItem({ id, data }) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [post, setPost] = useState(data?.attributes);
  const [isShowAddImg, setIsShowAddImg] = useState(false);
  const [image, setImage] = useState();
  const handleShowAddImage = (value) => {
    value === true ? setIsShowAddImg(true) : setIsShowAddImg(false);
  };
  const handleClear = () => {
    setPost({ ...post, imageURL: "" });
    setImage();
  };
  const handleClose = () => {
    setPost(data?.attributes);
  };
  const handlePreviewAvatar = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setImage(file);
  };

  const handleUpdatePost = () => {
    const addImage = async () => {
      let formData = new FormData();
      formData.append("files", image);
      console.log("image", image);
      await uploadImage(formData)
        .then((res) => {s
          dispatch(updatePost({ ...post, images: [res?.data[0]?.id] }));
          console.log("img", post);
        })
        .catch((err) => {
          console.log("err", err);
        });
    };
    if (!image) {
      dispatch(updatePost({ id: data.id, attributes: post }));
      console.log("1");
      setPost({
        content: "",
        images: [],
        audition: "Public",
        author: localStorage.getItem("username"),
        authorId: localStorage.getItem("id"),
        users_permissions_user: localStorage.getItem("id"),
      });
      setImage();
    } else {
      addImage();
      console.log("2");
      setPost({
        content: "",
        images: [],
        audition: "Public",
        author: localStorage.getItem("username"),
        authorId: localStorage.getItem("id"),
        users_permissions_user: localStorage.getItem("id"),
      });
      setImage();
    }
  };

  return (
    <div
      className="modal fade"
      id={`updatePost${id}`}
      tabIndex="-1"
      aria-labelledby="updatePostModalLabel"
      aria-hidden="true"
      onMouseLeave={handleClose}
    >
      <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="updatePostModalLabel">
              Update Post
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

            {isShowAddImg && !image && !post.images.length && (
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
                  id="customFile"
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
              <div className={cx("image-wrapper")}>
                <img src={image.preview} alt="" className={cx("post-image")} />
                <FontAwesomeIcon
                  icon={faCircleXmark}
                  className={cx("clear")}
                  onClick={() => handleClear()}
                />
              </div>
            )}
            {console.log("len", post.images.length)}
            {post.images && (
              <div className={cx("image-wrapper")}>
                <img
                  src={post?.images[0]?.data?.attributes?.url}
                  alt=""
                  className={cx("post-image")}
                />
                <FontAwesomeIcon
                  icon={faCircleXmark}
                  className={cx("clear")}
                  onClick={() => handleClear()}
                />
              </div>
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
            <Button primary type="button" onClick={() => handleUpdatePost()}>
              Post
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostItem;

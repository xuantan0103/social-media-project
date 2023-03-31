import styles from "./Profile.module.scss";
import classNames from "classnames/bind";
import NewPost from "../../components/NewPost";
import Post from "../../components/Post";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faPen, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { faImage } from "@fortawesome/free-regular-svg-icons";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getPostByUserId } from "../../redux/action/postAction";
import { editUser } from "../../redux/action/userAction";
import defaultCover from "../../assets/default-cover.png";
import defaultUserImg from "../../assets/default-user-image.png";
import { LOCAL_HOST } from "../../api/constant";
import { uploadImage } from "../../api";

const cx = classNames.bind(styles);

function Profile() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPostByUserId(localStorage.getItem("id")));
  }, []);
  const navigate = useNavigate();
  const [image, setImage] = useState();
  const handlePreviewAvatar = (e) => {
    const file = e.target?.files[0];
    file.preview = URL.createObjectURL(file);
    setImage(file);
  };
  const handleChangeImage = (type) => {
    const addImage = async () => {
      let formData = new FormData();
      formData.append("files", image);
      await uploadImage(formData)
        .then((res) => {
          console.log("img", res?.data[0]?.id);
          type === "avatar"
            ? dispatch(editUser({ avatar: res?.data[0]?.id }))
            : dispatch(editUser({ cover_image: res?.data[0]?.id }));
        })
        .catch((err) => {
          console.log("err", err);
        });
    };
    addImage();
  };
  return (
    <>
      <div className={cx("profile-container")}>
        {state.user.isLoading ? (
          <img src={defaultCover} alt="cover" className={cx("cover-img")} />
        ) : (
          <img
            src={`${LOCAL_HOST}${state?.user?.data?.cover_image?.url}`}
            alt="cover"
            className={cx("cover-img")}
          />
        )}
        {state.user.isLoading ? (
          <img src={defaultUserImg} alt="avatar" className={cx("user-img")} />
        ) : (
          <img
            src={`${LOCAL_HOST}${state?.user?.data?.avatar?.url}`}
            alt="avatar"
            className={cx("user-img")}
          />
        )}
        <FontAwesomeIcon
          icon={faCamera}
          className={cx("edit-avatar")}
          data-bs-toggle="modal"
          data-bs-target="#changeAvatar"
        />
        <FontAwesomeIcon
          icon={faCamera}
          className={cx("edit-cover")}
          data-bs-toggle="modal"
          data-bs-target="#changeCover"
        />
        {/* change avatar */}
        <div
          className="modal fade"
          id="changeAvatar"
          tabIndex="-1"
          aria-labelledby="changeAvatarLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="changeAvatarLabel">
                  Change Avatar
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                {!image && (
                  <div className=" btn btn-primary btn-rounded p-5 w-100 h-100">
                    <label
                      className="form-label text-white m-1 d-flex flex-column align-items-center justify-content-center"
                      htmlFor="customFile1"
                    >
                      <FontAwesomeIcon icon={faImage} />
                      <span>Add Image</span>
                    </label>
                    <input
                      type="file"
                      className="form-control d-none"
                      id="customFile1"
                      onChange={(e) => handlePreviewAvatar(e)}
                    />
                  </div>
                )}
                {image && (
                  <div className={cx("preview-container")}>
                    <img
                      src={image.preview}
                      alt=""
                      className={cx("avatar-preview")}
                    />
                    <FontAwesomeIcon
                      icon={faXmark}
                      className={cx("delete-img")}
                      onClick={() => setImage()}
                    />
                  </div>
                )}
              </div>
              <div className="modal-footer">
                <Button
                  primary
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#changeAvatar"
                  onClick={() => setImage()}
                >
                  Cancel
                </Button>
                <Button
                  primary
                  type="button"
                  onClick={handleChangeImage("avatar")}
                >
                  Save
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/* change cover */}
        <div
          className="modal fade"
          id="changeCover"
          tabIndex="-1"
          aria-labelledby="changeCoverLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="changeCoverLabel">
                  Change Cover
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                {!image && (
                  <div className=" btn btn-primary btn-rounded p-5 w-100 h-100">
                    <label
                      className="form-label text-white m-1 d-flex flex-column align-items-center justify-content-center"
                      htmlFor="customFile1"
                    >
                      <FontAwesomeIcon icon={faImage} />
                      <span>Add Image</span>
                    </label>
                    <input
                      type="file"
                      className="form-control d-none"
                      id="customFile1"
                      onChange={(e) => handlePreviewAvatar(e)}
                    />
                  </div>
                )}
                {image && (
                  <div className={cx("preview-container")}>
                    <img
                      src={image.preview}
                      alt=""
                      className={cx("cover-preview")}
                    />
                    <FontAwesomeIcon
                      icon={faXmark}
                      className={cx("delete-img")}
                      onClick={() => setImage()}
                    />
                  </div>
                )}
              </div>
              <div className="modal-footer">
                <Button
                  primary
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#changeCover"
                  onClick={() => setImage()}
                >
                  Cancel
                </Button>
                <Button
                  primary
                  type="button"
                  onClick={handleChangeImage("cover")}
                >
                  Save
                </Button>
              </div>
            </div>
          </div>
        </div>
        <h4 className={cx("username")}>
          {state?.user?.data?.username}
          <FontAwesomeIcon
            icon={faPen}
            className={cx("icon-pen") + " ps-1"}
            onClick={() => navigate("/editprofile")}
          />
        </h4>
      </div>
      <div className="mt-5">
        <NewPost />
        {state.post.isLoading && <h1>Loading..</h1>}
        {state?.post?.data?.map((item) => {
          return <Post key={item.id} post={item} isEdit />;
        })}
      </div>
    </>
  );
}

export default Profile;

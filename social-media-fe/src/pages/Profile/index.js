import styles from "./Profile.module.scss";
import classNames from "classnames/bind";
import NewPost from "../../components/NewPost";
import Post from "../../components/Post";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faPen, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { faImage } from "@fortawesome/free-regular-svg-icons";
import Button from "../../components/Button/Button";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getPostByUserId } from "../../redux/action/postAction";
import {
  editUser,
  getCurrentUser,
  getUserById,
} from "../../redux/action/userAction";
import defaultCover from "../../assets/default-cover.png";
import defaultAvatar from "../../assets/default-user-image.png";
import { LOCAL_HOST } from "../../api/constant";
import { uploadImage } from "../../api";

const cx = classNames.bind(styles);

function Profile() {
  const location = useLocation();
  const paths = location.pathname.split("/").splice(1);
  console.log(location);
  console.log(paths);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    if (paths[1] === localStorage.getItem("id")) {
      dispatch(getCurrentUser(localStorage.getItem("id")));
      dispatch(getPostByUserId(localStorage.getItem("id")));
    } else {
      dispatch(getUserById(paths[1]));
      dispatch(getPostByUserId(paths[1]));
    }
  }, [location]);
  const navigate = useNavigate();
  const [avatar, setAvatar] = useState();
  const handlePreviewAvatar = (e) => {
    const file = e.target?.files[0];
    file.preview = URL.createObjectURL(file);
    setAvatar(file);
  };
  const [cover, setCover] = useState();
  const handlePreviewCover = (e) => {
    const file = e.target?.files[0];
    file.preview = URL.createObjectURL(file);
    setCover(file);
  };
  const handleChangeImage = (type) => {
    const addImage = async () => {
      let formData = new FormData();
      type === "avatar"
        ? formData.append("files", avatar)
        : formData.append("files", cover);
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
        {/* {state.user.isLoading ? (
          <img src={defaultCover} alt="cover" className={cx("cover-img")} />
        ) : state?.user?.data?.cover_image?.url ? (
          <img
            src={`${LOCAL_HOST}${state?.user?.data?.cover_image?.url}`}
            alt="cover"
            className={cx("cover-img")}
          />
        ) : (
          <img src={defaultCover} alt="cover" className={cx("cover-img")} />
        )} */}
        {state.user.isLoading ? (
          <img src={defaultCover} alt="cover" className={cx("cover-img")} />
        ) : paths[1] === localStorage.getItem("id") ? (
          <img
            src={`${LOCAL_HOST}${state?.user?.currentUser?.cover_image?.url}`}
            alt="cover"
            className={cx("cover-img")}
          />
        ) : (
          <img
            src={`${LOCAL_HOST}${state?.user?.otherUser?.cover_image?.url}`}
            alt="cover"
            className={cx("cover-img")}
          />
        )}
        {state.user.isLoading ? (
          <img src={defaultAvatar} alt="avatar" className={cx("user-img")} />
        ) : paths[1] === localStorage.getItem("id") ? (
          <img
            src={`${LOCAL_HOST}${state?.user?.currentUser?.avatar?.url}`}
            alt="avatar"
            className={cx("user-img")}
          />
        ) : (
          <img
            src={`${LOCAL_HOST}${state?.user?.otherUser?.avatar?.url}`}
            alt="avatar"
            className={cx("user-img")}
          />
        )}

        {paths[1] === localStorage.getItem("id") ? (
          <div>
            <h4 className={cx("username")}>
              {state?.user?.currentUser?.username}
              {paths[1] === localStorage.getItem("id") && (
                <FontAwesomeIcon
                  icon={faPen}
                  className={cx("icon-pen") + " ps-1"}
                  onClick={() => navigate("/editprofile")}
                />
              )}
            </h4>
          </div>
        ) : (
          <div>
            <h4 className={cx("username")}>
              {state?.user?.data?.username}
              {paths[1] === localStorage.getItem("id") && (
                <FontAwesomeIcon
                  icon={faPen}
                  className={cx("icon-pen") + " ps-1"}
                  onClick={() => navigate("/editprofile")}
                />
              )}
            </h4>
          </div>
        )}
        {/* <div>
          <h4 className={cx("username")}>
            {state?.user?.data?.username}
            {paths[1] === localStorage.getItem("id") && (
              <FontAwesomeIcon
                icon={faPen}
                className={cx("icon-pen") + " ps-1"}
                onClick={() => navigate("/editprofile")}
              />
            )}
          </h4>
        </div> */}
        {paths[1] === localStorage.getItem("id") && (
          <FontAwesomeIcon
            icon={faCamera}
            className={cx("edit-avatar")}
            data-bs-toggle="modal"
            data-bs-target="#changeAvatar"
          />
        )}
        {paths[1] === localStorage.getItem("id") && (
          <FontAwesomeIcon
            icon={faCamera}
            className={cx("edit-cover")}
            data-bs-toggle="modal"
            data-bs-target="#changeCover"
          />
        )}
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
                {!avatar && (
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
                {avatar && (
                  <div className={cx("preview-container")}>
                    <img
                      src={avatar.preview}
                      alt=""
                      className={cx("avatar-preview")}
                    />
                    <FontAwesomeIcon
                      icon={faXmark}
                      className={cx("delete-img")}
                      onClick={() => setAvatar()}
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
                  onClick={() => setAvatar()}
                >
                  Cancel
                </Button>
                <Button
                  primary
                  type="button"
                  onClick={() => handleChangeImage("avatar")}
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
                {!cover && (
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
                      onChange={(e) => handlePreviewCover(e)}
                    />
                  </div>
                )}
                {cover && (
                  <div className={cx("preview-container")}>
                    <img
                      src={cover.preview}
                      alt=""
                      className={cx("cover-preview")}
                    />
                    <FontAwesomeIcon
                      icon={faXmark}
                      className={cx("delete-img")}
                      onClick={() => setCover()}
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
                  onClick={() => setCover()}
                >
                  Cancel
                </Button>
                <Button
                  primary
                  type="button"
                  onClick={() => handleChangeImage("cover")}
                >
                  Save
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        {paths[1] === localStorage.getItem("id") && <NewPost />}
        {state.post.isLoading && <h1>Loading..</h1>}
        {state?.post?.data?.map((item) => {
          return <Post key={item.id} post={item} isEdit />;
        })}
      </div>
    </>
  );
}

export default Profile;

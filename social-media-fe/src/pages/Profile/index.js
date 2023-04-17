import styles from "./Profile.module.scss";
import classNames from "classnames/bind";
import NewPost from "../../components/NewPost";
import Post from "../../components/Post";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCamera,
  faPen,
  faUserPlus,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
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
import { LOCAL_HOST } from "../../api/constant";
import { uploadImage } from "../../api";
import { Spin } from "antd";
import { checkRelationship } from "../../redux/slice/userSlice";
import { sendFriendRequest } from "../../redux/action/friendAction";

const cx = classNames.bind(styles);

function Profile() {
  const location = useLocation();
  const paths = location.pathname.split("/").splice(1);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
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
  const handleSendRequest = () => {
    dispatch(
      sendFriendRequest({
        status: "pending",
        sender: localStorage.getItem("id"),
        receiver: paths[1],
        sender_id: localStorage.getItem("id"),
        receiver_id: paths[1],
      })
    );
  };
  useEffect(() => {
    const getUser = async () => {
      if (paths[1] !== localStorage.getItem("id")) {
        await dispatch(getUserById(paths[1]));
        await dispatch(getPostByUserId(paths[1]));
        dispatch(checkRelationship());
      } else {
        await dispatch(getCurrentUser());
        await dispatch(getPostByUserId(paths[1]));
        dispatch(checkRelationship());
      }
    };
    getUser();
  }, [location]);
  return (
    <>
      <div className={cx("profile-container")}>
        {state.user.isLoading ? (
          <Spin size="small" className={cx("cover-img") + " align-middle"} />
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
          <Spin size="small" className={cx("user-img")} />
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
            className={cx("other-img")}
          />
        )}

        {paths[1] === localStorage.getItem("id") ? (
          <div>
            <h4 className={cx("username")}>
              {state?.user?.currentUser?.username}
              <FontAwesomeIcon
                icon={faPen}
                className={cx("icon-pen") + " ps-1"}
                onClick={() => navigate("/editprofile")}
              />
            </h4>
          </div>
        ) : (
          <div className={cx("add-friend")}>
            <h4 className={cx("other-username")}>
              {state?.user?.otherUser?.username}
            </h4>
            {state.user.relationship && (
              <Button primary>{state.user.relationship}</Button>
            )}
            {!state.user.relationship && (
              <Button primary onClick={() => handleSendRequest()}>
                Add friend
              </Button>
            )}
          </div>
        )}
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
        {state.post.isLoading && <Spin size="small" />}
        {state?.post?.data?.map((item) => {
          return paths[1] === localStorage.getItem("id") ? (
            <Post key={item.id} post={item} isEdit />
          ) : (
            <Post key={item.id} post={item} />
          );
        })}
      </div>
    </>
  );
}

export default Profile;

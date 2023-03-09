import styles from "./Profile.module.scss";
import classNames from "classnames/bind";
import NewPost from "../../components/NewPost";
import Post from "../../components/Post";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faImages, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { faCircleXmark, faImage } from "@fortawesome/free-regular-svg-icons";
import Button from "../../components/Button/Button";

const cx = classNames.bind(styles);

function Profile() {
  const [image, setImage] = useState();
  const handlePreviewAvatar = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setImage(file);
  };
  return (
    <>
      <div className={cx("profile-container")}>
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
        <FontAwesomeIcon
          icon={faCamera}
          className={cx("edit-avatar")}
          data-bs-toggle="modal"
          data-bs-target="#changeAvatar"
        />
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
                  Update Profile Picture
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
                >
                  Cancel
                </Button>
                <Button primary type="button">
                  Save
                </Button>
              </div>
            </div>
          </div>
        </div>
        <h4 className={cx("username")}>Stephen Myburgh</h4>
      </div>
      <div className="mt-5">
        <NewPost />
        <Post />
      </div>
    </>
  );
}

export default Profile;

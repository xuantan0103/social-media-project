import { useState } from "react";
import { Users } from "./data";
import styles from "./Post.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import Button from "../Button/Button";

const cx = classNames.bind(styles);

function Post() {
  const [like, setLike] = useState(1);
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  return (
    <div className={cx("main-container")}>
      <div>
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Launch static backdrop modal
        </button>
        <div class="modal" id="exampleModal" tabindex="-1">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Modal title</h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <p>Modal body text goes here.</p>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={cx("container")}>
        <div className={cx("top")}>
          <div className={cx("top-left")}>
            <img
              src="https://1.bp.blogspot.com/-W1swAyDEpKM/X0AamDSp0vI/AAAAAAAAdUw/NQQiPzGIiUsoTcufNKKW3NPCEvC1WWQtACLcBGAsYHQ/s1600/flower%2Bimages%2Bfor%2Bwhatsapp%2Bprofile%2B%252831%2529.jpg"
              alt=""
              className={cx("profile-img")}
            />
            <span className={cx("username")}>Suong</span>
            <span className={cx("date")}>22/2/2023</span>
          </div>
          <div className={cx("top-right")}>
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </div>
        </div>
        <div className={cx("content")}>
          <span className={cx("content-text")}>Description</span>
          <img
            src="https://www.templepurohit.com/wp-content/uploads/2016/04/Brihadeeswarar-Temple-Thanjavur-Tamil-Nadu-1.jpg"
            className={cx("post-img")}
            alt=""
          />
        </div>
        <div className={cx("bottom")}>
          <div className={cx("bottom-left")}>
            <Button onClick={handleClick}>
              <FontAwesomeIcon
                icon={faHeart}
                className={
                  isLiked ? cx("icon-heart-checked") : cx("icon-heart")
                }
              />
            </Button>
            <span className={cx("like-counter")}>{like} people liked it</span>
          </div>
          <div className={cx("bottom-right")}>
            <span className={cx("comment-text")}>1 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;

import { useState } from "react";
import styles from "./Post.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import Button from "../Button/Button";
import Comment from "../Comment";
import moment from "moment";
import { BASE_URL } from "../../api/constant";

const cx = classNames.bind(styles);

function Post({ post }) {
  const [like, setLike] = useState(1);
  const [isLiked, setIsLiked] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const handleLike = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  const handleEditPost = () => {
    setIsEdit(true);
  };
  return (
    <div className={cx("main-container")}>
      <div className={cx("container")}>
        <div className={cx("top")}>
          <div className={cx("top-left")}>
            <img
              src="https://1.bp.blogspot.com/-W1swAyDEpKM/X0AamDSp0vI/AAAAAAAAdUw/NQQiPzGIiUsoTcufNKKW3NPCEvC1WWQtACLcBGAsYHQ/s1600/flower%2Bimages%2Bfor%2Bwhatsapp%2Bprofile%2B%252831%2529.jpg"
              alt=""
              className={cx("profile-img")}
            />
            <span className={cx("username")}>{post?.attributes?.author}</span>
            <span className={cx("date")}>
              {moment(post?.attributes?.createdAt).utc().format("DD/MM/YYYY")}
            </span>
          </div>
          <div className={cx("top-right")}>
            <Button>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </Button>
            <div className={cx("show-action")}>
              <Button
                textLeft
                data-bs-toggle="modal"
                data-bs-target="#newPostModal"
              >
                Edit
              </Button>
              <Button textLeft>Delete</Button>
            </div>
          </div>
        </div>
        <div className={cx("content")}>
          <span className={cx("content-text")}>
            {post?.attributes?.content}
          </span>
          <img
            src={`${post?.attributes?.imageURL}`}
            className={cx("post-img")}
            alt=""
          />
        </div>
        <div className={cx("bottom")}>
          <div className={cx("bottom-left")}>
            <Button onClick={handleLike}>
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
            <Comment />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;

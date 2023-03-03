import styles from "../Comment.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import Button from "../../Button/Button";
import { useState } from "react";

const cx = classNames.bind(styles);

function CommentItem({ text = "kk" }) {
  const [like, setLike] = useState(1);
  const [isLiked, setIsLiked] = useState(false);
  const handleClick = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  return (
    <div className="d-flex align-items-start justify-content-start mb-3 me-3">
      <img
        src="https://www.templepurohit.com/wp-content/uploads/2016/04/Brihadeeswarar-Temple-Thanjavur-Tamil-Nadu-1.jpg"
        className={cx("profile-img")}
        alt=""
      />
      <div className={cx("comment-item")}>
        <span className={cx("username")}>Sương</span>
        <span className={cx("comment-text") + " text-break"}>{text}</span>
        <div className="d-flex justify-content-between align-items-center">
          <Button onClick={handleClick} className={cx("heart-number")}>
            <FontAwesomeIcon
              icon={faHeart}
              className={isLiked ? cx("icon-heart-checked") : cx("icon-heart")}
            />
            {" " + like}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CommentItem;

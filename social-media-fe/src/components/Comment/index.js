import styles from "./Comment.module.scss";
import classNames from "classnames/bind";
import CommentItem from "./CommentItem";

const cx = classNames.bind(styles);

function Comment() {
  return (
    <div>
      <button
        type="button"
        className={cx("number-comment")}
        data-bs-toggle="modal"
        data-bs-target="#commentModal"
      >
        1 comments
      </button>

      <div
        className="modal fade"
        id="commentModal"
        tabIndex="-1"
        aria-labelledby="commentModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="commentModalLabel">
                Comments
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className={cx("modal-body")}>
              <CommentItem />
              <CommentItem text="xxxxxxxxxxxxxxxxxxxxxxx" />
              <CommentItem text="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" />
              <CommentItem />
              <CommentItem />
              <CommentItem />
              <CommentItem />
              <CommentItem />
            </div>
            <div className={cx("modal-footer")}>
              <img
                src="https://1.bp.blogspot.com/-W1swAyDEpKM/X0AamDSp0vI/AAAAAAAAdUw/NQQiPzGIiUsoTcufNKKW3NPCEvC1WWQtACLcBGAsYHQ/s1600/flower%2Bimages%2Bfor%2Bwhatsapp%2Bprofile%2B%252831%2529.jpg"
                alt=""
                className={cx("profile-img")}
              />
              <input
                className={cx("input-content")}
                placeholder="Your comment..."
                autoFocus
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comment;

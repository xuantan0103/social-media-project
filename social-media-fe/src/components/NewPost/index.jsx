import styles from "./NewPost.module.scss";
import classNames from "classnames/bind";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSmile, faImages } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { LOCAL_HOST } from "../../api/constant";
import { uploadImage } from "../../api";
import { addNewPost } from "../../redux/action/postAction";
import PostItem from "./PostItem";

const cx = classNames.bind(styles);

function NewPost({ data }) {
  console.log(data);
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [post, setPost] = useState(
    data
      ? data
      : {
          content: "",
          imageURL: "",
          audition: "Public",
          author: localStorage.getItem("username"),
          authorId: localStorage.getItem("id"),
          users_permissions_user: localStorage.getItem("id"),
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
    const addImage = async () => {
      let formData = new FormData();
      formData.append("files", image);
      await uploadImage(formData)
        .then((res) => {
          dispatch(
            addNewPost({ ...post, imageURL: `${LOCAL_HOST}${res.data[0].url}` })
          );
          console.log("img", post);
        })
        .catch((err) => {
          console.log("err", err);
        });
    };
    if (!image) {
      dispatch(addNewPost(post));
      setPost({
        content: "",
        imageURL: "",
        audition: "Public",
        author: localStorage.getItem("username"),
        authorId: localStorage.getItem("id"),
        users_permissions_user: localStorage.getItem("id"),
      });
    } else {
      addImage();
      setPost({
        content: "",
        imageURL: "",
        audition: "Public",
        author: localStorage.getItem("username"),
        authorId: localStorage.getItem("id"),
        users_permissions_user: localStorage.getItem("id"),
      });
    }
  };
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
            required
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
      <PostItem
        post={post}
        image={image}
        setPost={setPost}
        isShowAddImg={isShowAddImg}
        handlePreviewAvatar={handlePreviewAvatar}
        handleShowAddImage={handleShowAddImage}
        handleAddNewPost={handleAddNewPost}
      />
    </div>
  );
}

export default NewPost;

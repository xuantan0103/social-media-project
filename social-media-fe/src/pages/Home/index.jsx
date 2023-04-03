import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import NewPost from "../../components/NewPost";
import Post from "../../components/Post";
import { getAllPosts } from "../../redux/action/postAction";

function Home() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(getAllPosts());
  }, []);
  return (
    <div className="mt-4">
      <NewPost />
      {state.post.isLoading && <h1>Loading..</h1>}
      {state?.post?.data?.map((item) => {
        return <Post key={item.id} post={item} />;
      })}
    </div>
  );
}

export default Home;

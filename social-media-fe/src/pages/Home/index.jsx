import LeftBar from "../../components/LeftBar";
import NewPost from "../../components/NewPost";
import Post from "../../components/Post";

function Home() {
  return (
    <div className="mt-4">
      <NewPost />
      <Post />
    </div>
  );
}

export default Home;

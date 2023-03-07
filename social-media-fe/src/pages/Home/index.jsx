import LeftBar from "../../components/LeftBar";
import NewPost from "../../components/NewPost";
import Post from "../../components/Post";

function Home() {
  return (
    <div className="d-flex justify-content-center ">
      <div className="col-lg-3 mt-4">
        <LeftBar />
      </div>
      <div className="col-lg-6 mt-4">
        <NewPost />
        <Post />
      </div>
      <div className="col-lg-3 mt-4">Right Bar</div>
    </div>
  );
}

export default Home;

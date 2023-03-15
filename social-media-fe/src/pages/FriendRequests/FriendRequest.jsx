import React, { useState } from "react";
import { Image, Transformation } from "cloudinary-react";
import { Link, Route } from "react-router-dom";
import "../FriendRequests/FriendRequest.css";
// import "./FriendRequests.css";
// import { useSelector, useDispatch } from "react-redux";
import { Spin } from "antd";
import axios from "axios";
import logo10 from "../../../src/assets/logo10.png";
import Friends from "../../components/Friends/Friend";

function FriendRequests({ friendsRequest }) {
  // const { list, loading } = useSelector((state) => state.friendsRequest);
  // const dispatch = useDispatch();
  // const [isAccept, setIsAccept] = useState("default");
  const list = [];
  const loading = false;
  const Button = (props) => {
    const [isAccept, setIsAccept] = useState("default");

    const onSubmitFriendRequest = async (type, id) => {
      if (type === "accept") {
        setIsAccept(true);
        await axios.post("", { follow_users_UserId: id });
      } else {
        setIsAccept(false);
        await axios.post("", { follow_users_UserId: id });
      }
    };

    if (!isAccept) {
      return (
        <React.Fragment>
          <button style={{ backgroundColor: "red", color: "white" }}>
            Cancelled
          </button>
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        {isAccept && isAccept === "default" ? (
          <>
            <button
              // onClick={() => onSubmitFriendRequest("accept", props.user.id)}
              style={{ backgroundColor: "rgba(0,128,128)", color: "white" }}
            >
              Xác nhận
            </button>
            <button
            // onClick={() => onSubmitFriendRequest("remove", props.user.id)}
            >
              Cancle
            </button>
          </>
        ) : (
          <button
            style={{ backgroundColor: "rgba(0,128,128)", color: "white" }}
          >
            Friend
          </button>
        )}
      </React.Fragment>
    );
  };

  // if (loading && !list.length) {
  //   return (
  //     <div className="noti-all">
  //       <div
  //         className="noti-container"
  //         style={{
  //           display: "flex",
  //           alignItems: "center",
  //           justifyContent: "center",
  //           height: "100vh",
  //         }}
  //       >
  //         <Spin />
  //       </div>
  //     </div>
  //   );
  // }

  if (!loading && !list.length) {
    return (
      <div className="noti-all ">
        <div className="noti-container">
          <div className="friend-requests-title">
            <h4>Your friend request</h4>
            <Link to="/friend-sent">
              <span>View Sent Requests</span>
            </Link>
          </div>
          <div className="py-2">
            <Friends />
          </div>
        </div>
      </div>
    );
  }

  const FriendRequests = () => {
    return (
      <>
        <div className="friends-requests-all" style={{ marginTop: "65px" }}>
          <div className="friend-requests-container">
            <div className="friend-requests-title">
              <h4>Reply {1} Your friend request</h4>
              <Link to="/friendsent">
                <span>View Sent Requests</span>
              </Link>
            </div>
            {/* {list.map((rq, index) => { */}
            {/* return ( */}
            <div className="friend-requests-item-container" key={1}>
              <div className="friend-requests-item-left">
                <div className="friend-requests-item-avatar">
                  <Link to={"/profile/" + "tan"}>
                    {/* {rq.user_avatar_cropX === null ? (
                      <img src={logo10} alt="a" />
                    ) : ( */}
                    <Image
                      cloudName="socia-media"
                      // publicId={rq.user_avatar + ".jpg"}
                      version="1607061343"
                    >
                      <Transformation
                      // height={rq.user_avatar_cropH}
                      // width={rq.user_avatar_cropW}
                      // x={rq.user_avatar_cropX}
                      // y={rq.user_avatar_cropY}
                      // crop="crop"
                      />
                    </Image>
                    {/* )} */}
                  </Link>
                </div>
                <div className="friend-requests-item-info">
                  <div className="friend-requests-item-name">
                    <Link to={"/profile/" + "tan"}>Tân</Link>
                  </div>
                </div>
              </div>
              <div className="friend-requests-item-right">
                <Button user={""} />
              </div>
            </div>
            {/* ); */}
            {/* })} */}
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <Route component={FriendRequests} />
    </>
  );
}

export default FriendRequests;

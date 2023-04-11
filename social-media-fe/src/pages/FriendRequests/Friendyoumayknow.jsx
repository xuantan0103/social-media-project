import React, { useEffect, useState } from "react";
import "../FriendRequests/Friendyoumayknow.scss";
import FriendSuggestion from "../../components/Friends/Friendsuggestion";
import { getAllUser } from "../../api";

function Friendyoumayknow() {
  const [listUser, setListuser] = useState();
  useEffect(() => {
    const data = getAllUser();
    console.log(data.data);
    setListuser(data.data);
  }, []);

  return (
    <div className="noti-all ">
      <div className="noti-container">
        <div className="friend-requests-title px-4">
          <h4>Friend you may know</h4>
        </div>
        <div className="py-4 px-4">
          <div className="row ">
            {/* {state?.friend?.friendRequest.map((item) => {
                return (
                  <div className="col-md-auto" key={item?.id}>
                    {item?.attributes?.status === "pending" && ( */}
            <FriendSuggestion />
            {/* )}
                  </div>
                );
              })} */}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Friendyoumayknow;

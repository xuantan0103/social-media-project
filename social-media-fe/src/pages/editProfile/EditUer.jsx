import "./EditProfile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  faCakeCandles,
  faEnvelope,
  faLocationDot,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { editUser, getUserById } from "../../redux/action/userAction";

function EditProfile() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(state?.user);
  const [user, setUser] = useState({
    fullname: state?.user?.data?.fullname,
    email: state?.user?.data?.email,
    birthday: state?.user?.data?.birthday,
    phone: state?.user?.data?.phone,
    address: state?.user?.data?.address,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editUser(user));
  };
  useEffect(() => {
    dispatch(getUserById(localStorage.getItem("id")));
    setUser({
      fullname: state?.user?.data?.fullname,
      email: state?.user?.data?.email,
      birthday: state?.user?.data?.birthday,
      phone: state?.user?.data?.phone,
      address: state?.user?.data?.address,
    });
    console.log("user", user);
  }, []);
  return (
    <div className="edit-profile ">
      <div className="edit-container">
        <div className="edit-profile-title">
          <h9>EDIT PROFILE</h9>
          <form onSubmit={handleSubmit}>
            <div className="form-profile">
              <div>
                <FontAwesomeIcon icon={faUser} color="blue" />
                <label htmlFor="fullname">Full Name</label>
                <input
                  type="text"
                  id="fullname"
                  placeholder={"Enter your full name"}
                  value={user.fullname}
                  onChange={(e) =>
                    setUser({
                      ...user,
                      fullname: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <FontAwesomeIcon icon={faEnvelope} color="#D375EB" />
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder={"Enter your email"}
                  value={user.email}
                  onChange={(e) =>
                    setUser({
                      ...user,
                      email: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <FontAwesomeIcon icon={faCakeCandles} color="#D7736D" />
                <label htmlFor="email">Day of birth</label>
                <input
                  type="date"
                  id="dayofbirth"
                  value={user.birthday}
                  onChange={(e) =>
                    setUser({
                      ...user,
                      birthday: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <FontAwesomeIcon icon={faPhone} color="black" />
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  id="phone"
                  pattern="[0-9]*"
                  maxLength="10"
                  placeholder={"Enter your phone number"}
                  value={user.phone}
                  onChange={(e) =>
                    setUser({
                      ...user,
                      phone: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <FontAwesomeIcon icon={faLocationDot} color="#D6281A" />
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  placeholder={"Enter your address"}
                  value={user.address}
                  onChange={(e) =>
                    setUser({
                      ...user,
                      address: e.target.value,
                    })
                  }
                />
              </div>
              <button type="submit" className="btn-save">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default EditProfile;

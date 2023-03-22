
import "../editProfile/EditProfile.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { updateUser } from "../../redux/slice/editProfileSlice";
import { useParams } from "react-router-dom";
import {
  faCakeCandles,
  faEnvelope, 
  faLocationDot, 
  faPhone, 
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import React, {useState} from 'react';

const user = {
  fullname: "a",
  email: "",
  dayofbirth: new Date(),
  phone: "",
  address:"",
};
function editProfile({props}) {
  const { setEdit } = props;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { id } = useParams();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [fullname, setFullname] = useState(user?.displayName);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [email, setEmail] = useState(user?.email);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [phone, setPhone] = useState(user?.phone);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [dayofbirth, setdayofBirth] = useState(user?.dayofbirth);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [address, setAddress] = useState(user?.address );
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setEdit(false);
      const updatedUser = {
        fullname: fullname,
        Email: email,
        phone: phone,
        dayofbirth: dayofbirth,
        address: address,
      };
      updateUser( updatedUser, id, user?.accessToken);
    };

  return (
    <div className="edit-profile ">
      <div className="edit-container">
        <div className="edit-profile-title">
          <h9>EDIT PROFILE</h9>
          <form onSubmit={handleSubmit}>
            <div className="form-profile">
              <div>
              <FontAwesomeIcon icon={faUser} color="black" />
                <label htmlFor="fullname">Full Name</label>
                <input
                  type="text"
                  id="fullname"
                  placeholder={"Enter your full name"}
                value={fullname}
                onChange={(event) => setFullname(event.target.value)}
                />
              </div>
              <div>
              <FontAwesomeIcon icon={faEnvelope} color="black" />
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder={"Enter your email"}
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div>
              <FontAwesomeIcon icon={faCakeCandles} color="black" />
                <label htmlFor="email">Day of birth</label>
                <input
                  type="date"
                  id="dayofbirth"
                value={dayofbirth}
                onChange={(event) => setdayofBirth(event.target.value)}
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
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                />
              </div>
              <div>
              <FontAwesomeIcon icon={faLocationDot} color="black" />
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  placeholder={"Enter your address"}
                value={address}
                onChange={(event) => setAddress(event.target.value)}
                />
              </div>
              <button type="submit" className="btn-save">Save Changes</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default editProfile;
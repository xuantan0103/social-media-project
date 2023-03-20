/* eslint-disable react-hooks/rules-of-hooks */
import "../editProfile/EditProfile.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCakeCandles,
  faEnvelope, 
  faLocationDot, 
  faPhone, 
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import React, {useEffect,useState} from 'react';

const editProfile = () => {
  const [page, setPage] = useState(0);

  useEffect(() => {
    const url = `https://reqres.in/api/users?page=${page}`;
  
    fetch(url)
      .then((results) => results.json())
      .then((data) => {
        console.log("data", data);
      });
  }, [page]);

  const handleChange = e => {  
    setPage(+e.target.value);
  };

  return (
    <div className="edit-profile ">
      <div className="edit-container">
        <div className="edit-profile-title">
          <h9>EDIT PROFILE</h9>
          <form onChange={handleChange}>
            <div className="form-profile">
              <div>
              <FontAwesomeIcon icon={faUser} color="black" />
                <label htmlFor="fullname">Full Name</label>
                <input
                  type="text"
                  id="fullname"
                  placeholder={"Enter your full name"}
                // value={fullname}
                // onChange={(event) => setFullname(event.target.value)}
                />
              </div>
              <div>
              <FontAwesomeIcon icon={faEnvelope} color="black" />
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder={"Enter your email"}
                // value={email}
                // onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div>
              <FontAwesomeIcon icon={faCakeCandles} color="black" />
                <label htmlFor="email">Day of birth</label>
                <input
                  type="date"
                  id="dayofbirth"
                // value={date}
                // onChange={(event) => setdayofBirth(event.target.value)}
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
                // value={phone}
                // onChange={(event) => setPhone(event.target.value)}
                />
              </div>
              <div>
              <FontAwesomeIcon icon={faLocationDot} color="black" />
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  placeholder={"Enter your address"}
                // value={address}
                // onChange={(event) => setAddress(event.target.value)}
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
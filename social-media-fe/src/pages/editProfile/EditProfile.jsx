import React, { useEffect, useState } from 'react';
import "../editProfile/EditProfile.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { updateUser } from "../../redux/slice/editProfileSlice";
import { useParams, useHistory } from "react-router-dom";
import axios from 'axios';
import { getIdUser } from '../../api/helpers';
import {
  faCakeCandles,
  faEnvelope,
  faLocationDot,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { AUTH_TOKEN } from '../../api/constant';
const info = { fullname: '', email: '', phone: '', dayofbirth: '', address: '' }
function editProfile() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [editProfile, seteditProfile] = useState(info);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const history = useHistory();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const id = getIdUser();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  // useEffect(() => {
  //   const editprofileid = async () => {
  //     const reqdata = await fetch('users/$(id)');
  //     const res = await reqdata.json();
  //     seteditProfile(await res);
  //   }
  //   editprofileid();
  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleEdit = (e) => {

    seteditProfile(e)
  }
  console.log(editProfile)
  const handleUserupdate = async (e) => {
    e.preventDefault();
    console.log(editProfile)
    const { res } = await axios.put(
      'users/id',
      editProfile,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic` + localStorage.getItem(AUTH_TOKEN),
        },
      }
    );
    // const response = await axios.put('users/id', { data: editprofile },
    //   {
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: `Basic` + localStorage.getItem(AUTH_TOKEN),
    //     }
    //   }
    // );
    // eslint-disable-next-line no-undef
    setMsg(response.data.msg);
    // setTimeout(() => {
    //   history.push("/user");
    // }, 20000);
  }
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
                  // value={fullname}
                  onChange={(event) => handleEdit(event.target.value)}
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
                  onChange={(event) => handleEdit(event.target.value)}
                />
              </div>
              <div>
                <FontAwesomeIcon icon={faCakeCandles} color="black" />
                <label htmlFor="email">Day of birth</label>
                <input
                  type="date"
                  id="dayofbirth"
                  // value={dayofbirth}
                  onChange={(event) => handleEdit(event.target.value)}
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
                  onChange={(event) => handleEdit(event.target.value)}
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
                  onChange={(event) => handleEdit(event.target.value)}
                />
              </div>
              <button onClick={handleUserupdate} type="submit" className="btn-save">Save Changes</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default editProfile;
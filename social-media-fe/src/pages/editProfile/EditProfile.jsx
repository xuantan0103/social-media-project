// import React, { useEffect, useState } from 'react';
// import "../editProfile/EditProfile.css"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { updateUser } from "../../redux/slice/editProfileSlice";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
// import { getPostByUserId } from "../../redux/action/postAction";
// import {
//   faCakeCandles,
//   faEnvelope,
//   faLocationDot,
//   faPhone,
//   faUser,
// } from "@fortawesome/free-solid-svg-icons";
// import { AUTH_TOKEN } from '../../api/constant';

// function editProfile() {
//   const state = useSelector((state) => state);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getPostByUserId(localStorage.getItem("id")));
//   }, []);
//   const navigate = useNavigate();
//   const [fullname, setFullName] = useState();
//   const [email, setEmail] = useState();
//   const [phone, setPhone] = useState();
//   const [dayofbirth, setDayofbirth] = useState();
//   const [address, setAddress] = useState();
//   updateUser(editProfile, id, localStorage.getItem(AUTH_TOKEN))
//   const handleSubmit = (e) => {
//     e.preventDefault();
//   }
//   return (
//     <div className="edit-profile ">
//       <div className="edit-container">
//         <div className="edit-profile-title">
//           <h9>EDIT PROFILE</h9>
//           <form onSubmit={handleSubmit}>
//             <div className="form-profile">
//               <div>
//                 <FontAwesomeIcon icon={faUser} color="black" />
//                 <label htmlFor="fullname">Full Name</label>
//                 <input
//                   type="text"
//                   id="fullname"
//                   placeholder={"Enter your full name"}
//                   // value={fullname}
//                   onChange={e => setFullName(e.target.value)}
//                 />
//               </div>
//               <div>
//                 <FontAwesomeIcon icon={faEnvelope} color="black" />
//                 <label htmlFor="email">Email</label>
//                 <input
//                   type="email"
//                   id="email"
//                   placeholder={"Enter your email"}
//                   // value={email}
//                   onChange={e => setEmail(e.target.value)}
//                 />
//               </div>
//               <div>
//                 <FontAwesomeIcon icon={faCakeCandles} color="black" />
//                 <label htmlFor="email">Day of birth</label>
//                 <input
//                   type="date"
//                   id="dayofbirth"
//                   // value={dayofbirth}
//                   onChange={e => setDayofbirth(e.target.value)}
//                 />
//               </div>
//               <div>
//                 <FontAwesomeIcon icon={faPhone} color="black" />
//                 <label htmlFor="phone">Phone</label>
//                 <input
//                   type="text"
//                   id="phone"
//                   pattern="[0-9]*"
//                   maxLength="10"
//                   placeholder={"Enter your phone number"}
//                   // value={phone}
//                   onChange={e => setPhone(e.target.value)}
//                 />
//               </div>
//               <div>
//                 <FontAwesomeIcon icon={faLocationDot} color="black" />
//                 <label htmlFor="address">Address</label>
//                 <input
//                   type="text"
//                   id="address"
//                   placeholder={"Enter your address"}
//                   // value={address}
//                   onChange={e => setAddress(e.target.value)}
//                 />
//               </div>
//               <button onClick={handleUserupdate} type="submit" className="btn-save">Save Changes</button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );

// export default editProfile;
import React, { Component, useState } from 'react';
import styles from "./Friend.scss";
import classNames from "classnames/bind";
import { getProfile, getUserById, removeFriend } from "../../api/index";
import {STRINGS} from "../../api/constant";
// import { getUserById } from "../../redux/action/userAction";
// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
// import { Alert, StyleSheet, View, Text, TouchableOpacity, ActivityIndicator } from 'react'

export default class Friend extends Component  {
  constructor(props) {
    super(props);
    getUserById(localStorage.getItem("id"));
    this.state = {
        userName: this.props.item.username,
        userEmail: this.props.item.email,
        relation: this.props.item.relation,
        relationshipID: this.props.item.relationshipID,
        expanded: this.props.item.expanded,
        profileInfo: this.props.item.profileInfo,
        showLoading: this.props.item.showLoading,
        deletingUser: this.props.item.deletingUser,
        delete: false,
    };
  }
// export default class Friend extends Component  {
//   constructor(props) {
//   const state = useSelector((state) => state);
//   const dispatch = useDispatch();
//   console.log(state?.user);
//   const [user, setUser] = useState({
//     fullname: state?.user?.data?.fullname,
//     email: state?.user?.data?.email,
//     // birthday: state?.user?.data?.birthday,
//     // phone: state?.user?.data?.phone,
//     // address: state?.user?.data?.address,
//   });
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(Friend(user));
//   };
//   useEffect(() => {
//     dispatch(getUserById(localStorage.getItem("id")));
//     setUser({
//       fullname: state?.user?.data?.fullname,
//       email: state?.user?.data?.email,
//       // birthday: state?.user?.data?.birthday,
//       // phone: state?.user?.data?.phone,
//       // address: state?.user?.data?.address,
//     });
//     console.log("user", user);
//   }, []);

  rowPressed = () => {

    if (!this.state.deletingUser) {
        this.setState({
            showLoading: !this.state.expanded,
            expanded: !this.state.expanded,
        }, () => {
            if (this.state.expanded) {
                this.getProfileHelper();
            }
        })
    }
  }

  getProfileHelper = () => {

    this.setState({
        showLoading: true,
    })

    let onSuccess = (responseJson) => {
      var profile = ''

      let x = responseJson.data;
      let y = x[0]

      if (y !== undefined) {
        let z = y.profile

        z.forEach(function(obj) { 
          profile +=  "\n" + obj.key + ": " + obj.value
        });
      }
      else {
        profile = '\n' + STRINGS.NO_PROFILE
      }

      this.setState({
          profileInfo: profile,
          showLoading: false,
      })
    }

    let onFailure = (error) => {
      this.setState({
        profileInfo: '',
        showLoading: false,
      })
    }

    getProfile(this.state.userID, onSuccess, onFailure)
  } 

  removeFriendHelper = () =>{
    this.setState({
        deletingUser: true,
        showLoading: true,
    })

    let onSuccess = (responseJson) => {
        this.props.killFriend(this.props.item)
    }

    let onFailure = (error) => {
      this.setState({
        showLoading: false,
        deletingUser: false
      })
    }

    removeFriend(this.state.relationshipID, onSuccess, onFailure)
  }
}

const cx = classNames.bind(styles);
export const Button = (props) => {
  const [isShowaccept, setIsShowaccept] = useState(false);
  const [isShowremove, setIsShowremove] = useState(false);
  const requestAccept = (id) => {
    setIsShowaccept(!isShowaccept)
    props.addFriend(id)
  }
  const requestRemove = (id) => {
    setIsShowremove(!isShowremove)
    props.removeFriend(id)
  }


  return (
    <div className={cx("fr-card")}>
      <div className={cx("fr-card")}>
        <div className="card" style={{ width: "15rem" }}>
          <img className="card-img-top" src="https://i.pinimg.com/564x/f3/5a/0b/f35a0b00f54cbd73ffd65f9b59a5b9af.jpg" alt="" />
          <div className="card-body">
            <h5 className="card-title">Phạm Xuân Tân</h5>
            <p className="card-text">100 bạn chung</p>
            <button onClick={() => requestAccept(props.id)} className="btn-accept">{isShowaccept ? "Accepted Friend Request" : "Accept Friend Request"}</button>
            <button onClick={() => requestRemove(props.id)} className="btn-remove">{isShowremove ? "Removed Friend" : "Remove Friend "}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import "../FriendRequests/FriendRequest.scss";
import Friends from "../../components/Friends/Friend";
import { Link} from "react-router-dom";
import { Component } from "react";
import { acceptRequest, rejectRequest } from '../../api/index';
import { STRINGS } from '../../api/constant';
import { Alert } from "react"

  export default class FriendRequest extends Component {
    constructor(props) {
      super(props);
      this.state = {
          fullname: this.props.item.fullname,
          email: this.props.item.email,
          relationship: this.props.item.relationship,
          expanded: this.props.item.expanded,
          profileInfo: this.props.item.profileInfo,
          showLoading: this.props.item.showLoading,
          deletingUser: this.props.item.deletingUser,
          deleted: false,
      };
    }
  
    rowPressed = () =>{
      Alert.alert(STRINGS.REQUEST_RESPONSE_ALERT_HEADER, STRINGS.REQUEST_RESPONSE_ALERT_BODY + this.state.userEmail + '?',
      [
          {text: STRINGS.REQUEST_RESPONSE_ALERT_CANCEL, style: 'cancel'},
          {text: STRINGS.REQUEST_RESPONSE_ALERT_REJECT, onPress: () => this.rejectRequestHelper()},
          {text: STRINGS.REQUEST_RESPONSE_ALERT_ACCEPT, onPress: () => this.acceptRequestHelper()},
      ],); 
    }
  
    acceptRequestHelper = () =>{
  
      this.setState({
        showLoading: true,
      })
  
      let onSuccess = (responseJson) => {
        this.setState({
            relationship: STRINGS.FRIENDS,
            relationshipID: responseJson._id,
            expanded: false,
            profileInfo: '',
            showLoading: false,
            deletingUser: false,
        })
  
        this.props.moveRequest(this.props.item, responseJson._id)
      }
  
      let onFailure = (error) => {
        this.setState({
          expanded: false,
          profileInfo: '',
          showLoading: false,
          deletingUser: false,
        })
      }
  
      acceptRequest(this.state.relationshipID, onSuccess, onFailure)
    }
  
    rejectRequestHelper = () =>{
  
      this.setState({
          showLoading: true,
      })
  
      let onSuccess = (responseJson) => {
          this.props.killRequest(this.props.item)
      }
  
      let onFailure = (error) => {
        this.setState({
          showLoading: false,
          deleted: false,
        })
      }
  
      rejectRequest(this.state.relationshipID, onSuccess, onFailure)
    }
  }
  const list = [];
  const loading = false;
    if (!loading && !list.length) {
          <div className="noti-all ">
            <div className="noti-container">
              <div className="friend-requests-title">
                <h4>Your friend request</h4>
                <Link to="/friendsent">
                  <span>View submitted requests</span>
                </Link>
              </div>
              <div className="py-2">
                <Friends />
              </div>
            </div>
          </div>
        }

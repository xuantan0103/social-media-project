import React from 'react';
import "../FriendRequests/FriendRequest.scss";
import { acceptRequest, rejectRequest } from '../../api/index';
import { STRINGS, COLORS } from '../../api/constant';
import { Alert, StyleSheet, View, Text, TouchableOpacity, ActivityIndicator, Button } from 'react'
import Friend from './FriendListItem';

const styles = StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor: COLORS.BACKGROUND_COLOR,
  },
  textBold: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 20,
    paddingRight: 20,
    color: COLORS.TEXT_COLOR
  },
  textFaded: {
    fontSize: 12,
    paddingLeft: 20,
    paddingRight: 20,
    color: COLORS.TEXT_COLOR
  },
})

export class FriendRequestListItem extends Friend (){
        constructor(props) {
          super(props);
          this.state = {
              userID: this.props.item.userID,
              userName: this.props.item.userName,
              userEmail: this.props.item.userEmail,
              relationship: this.props.item.relationship,
              relationshipID: this.props.item.relationshipID,
              expanded: this.props.item.expanded,
              profileInfo: this.props.item.profileInfo,
              showLoading: this.props.item.showLoading,
              deletingUser: this.props.item.deletingUser,
              delete: false,
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
render(){
  return(
    <View style={styles.container}>
    {!this.state.deleted && <TouchableOpacity style={{backgroundColor: COLORS.BACKGROUND_COLOR}} onPress={this.rowPressed.bind(this)}>
        <Text style={styles.textBold}>
        {this.state.userName}
        </Text>
        <Text style={styles.textFaded}>
        {this.state.userEmail}
        </Text>
        {this.state.showLoading && <ActivityIndicator size="small" color={COLORS.PRIMARY_COLOR} />}
        {this.state.expanded &&
        <View>
            <Text style={styles.profileText}>{this.state.profileInfo}</Text>
            {!this.state.deletingUser &&
            <View style={styles.deleteButton}>
                <Button
                onPress={() => this.deleteFriendAlert()}//maybe have to add .bind(this)
                title={STRINGS.DELETE_FRIEND}
                color={COLORS.PRIMARY_COLOR}
                />
            </View>
            }
        </View>
        }
        <View
            style={{
            borderBottomColor: COLORS.ROW_BORDER,
            borderBottomWidth: 1,
            }}
        />
    </TouchableOpacity> }
  </View>
  );
}
}

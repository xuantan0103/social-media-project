import React from 'react';
import { getProfile, removeFriend } from "../../api/index";
import { STRINGS, COLORS } from "../../api/constant";
import { Alert, View, Text, TouchableOpacity, ActivityIndicator, Button } from 'react'
import FriendRequest from '../../pages/FriendRequests/FriendRequest';

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
    profileText: {
      paddingLeft: 20,
      paddingRight: 20,
      color: COLORS.TEXT_COLOR
    },
    deleteButton: {
      flexDirection: 'row', 
      alignSelf: 'flex-end',
      padding: 3,
    },
  })
  
  export default class FriendListItem extends FriendRequest {
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
   rowPressed = () => {

    if (!this.setState.deletingUser) {
      this.setState({
        showLoading: !this.setState.expanded,
        expanded: !this.state.expanded,
      }, () => {
        if (this.setState.expanded) {
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

        z.forEach(function (obj) {
          profile += "\n" + obj.key + ": " + obj.value
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

    getProfile(this.state.id, onSuccess, onFailure)
  }

   removeFriendHelper = () => {
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

    removeFriend(this.state.relation.id
      , onSuccess, onFailure)
  }
   deleteFriendAlert = () => {
    Alert.alert(STRINGS.DELETE_FRIEND_ALERT_HEADER, STRINGS.DELETE_FRIEND_ALERT_BODY + this.state.userName + '?',
      [
        {text: STRINGS.DELETE_FRIEND_ALERT_CANCEL, style: 'cancel'},
        {text: STRINGS.DELETE_FRIEND_ALERT_ACCEPT, onPress: () => this.removeFriendHelper()},
      ],);
  }
render(){
    return (
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

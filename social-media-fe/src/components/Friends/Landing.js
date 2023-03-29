import React from 'react';
import { BackHandler, StyleSheet, View, Text, SectionList, RefreshControl, AppState, TouchableWithoutFeedback } from 'react';
import FriendRequestListItem from '../Friends/FriendRequestListItem'
import FriendListItem from '../Friends/FriendListItem'
import {getFriends, getRequests} from './utils/APICalls'
import {COLORS, STRINGS} from './utils/ProjectConstants'
import FriendsMenu from './FriendsMenu';
import { Header } from 'antd/es/layout/layout';
import FriendRequest from '../../pages/FriendRequests/FriendRequest';

const styles = StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor: COLORS.BACKGROUND_COLOR,
  },
  emptyHomeText: {
    fontSize: 14,
    textAlign: 'center',
    color: COLORS.TEXT_COLOR
  },
})

export class Landing extends FriendRequest {
  constructor(props) {
    super(props);
    this.state = {
      userID: this.props.navigation.state.params.userID,

      requestSectionExpanded: false,

      friendSkip: 0,
      friendLimit: 50,
      friendCurrentlyLoading: true,
      friendFullyDoneLoading: false,

      requestSkip: 0,
      requestLimit: 50,
      requestCurrentlyLoading: true,
      requestFullyDoneLoading: false,
      requestTotal: 0,

      requestSectionData: [],
      friendSectionData: [],

      appState: AppState.currentState
    };

    this.getFriendsHelper()
    this.getRequestsHelper()
  }

  componentDidMount() {
    AppState.addEventListener('change', this._handleAppStateChange);
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange);
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }

  _handleAppStateChange = (nextAppState) => {
    if (this.state.appState.match(/inactive|background/) && nextAppState === 'active') {
      //This wont be triggered on tab switching of profile and search. Good thing?
      this.initialLoad();
    }
    this.setState({appState: nextAppState});
  }

  handleBackPress = () => {
    BackHandler.exitApp()
    return true;
  }

  initialLoad = () => {
    this.setState({
      friendSkip: 0,
      friendCurrentlyLoading: true,
      friendFullyDoneLoading: false,

      requestSkip: 0,
      requestCurrentlyLoading: true,
      requestFullyDoneLoading: false,

      requestSectionData: [],
      friendSectionData: [],
    }, () => {
    this.getFriendsHelper()
    this.getRequestsHelper()
    })
  }

  scrolledToBottom = () => {
    this.loadNextFriends()
  }

  loadNextFriends = () => {
    if (!this.state.friendCurrentlyLoading && !this.state.friendFullyDoneLoading) {
      this.setState({
        friendSkip: this.state.friendSkip + this.state.friendLimit,
        friendCurrentlyLoading: true,
      }, () => {
        this.getFriendsHelper()
      })
    }
  }

  loadNextRequests = () => {
    if (!this.state.requestCurrentlyLoading && !this.state.requestFullyDoneLoading) {
      this.setState({
        requestSkip: this.state.requestSkip + this.state.requestLimit,
        requestCurrentlyLoading: true,
      }, () => {
        this.getRequestsHelper()
      })
    }
  }

  getFriendsHelper = () =>{
    let self = this;

    let onSuccess = (responseJson) => {
      let friends = [];

      if (responseJson.friends.total <= this.state.friendLimit + this.state.friendSkip) {
        this.setState({
          friendFullyDoneLoading: true
        })
      }

      responseJson.friends.data.forEach(function(obj) { 
        let friendID = obj.user1

        if (friendID == self.state.userID) {
          friendID = obj.user2
        }
// eslint-disable-next-line no-undef
        friendInfo = {}
        // eslint-disable-next-line no-undef
        friendInfo.userID = friendID

        responseJson.users.data.forEach(function(obj) {
          if (obj._id == friendID) {
            // eslint-disable-next-line no-undef
            friendInfo.userName = obj.name
            // eslint-disable-next-line no-undef
            friendInfo.userEmail = obj.email
            // eslint-disable-next-line no-undef
            friendInfo.relationship = STRINGS.FRIENDS
          }
        })
        // eslint-disable-next-line no-undef
        friendInfo.relationshipID = obj._id
        friendID.expanded = false
        // eslint-disable-next-line no-undef
        friendInfo.profileInfo = ''
        // eslint-disable-next-line no-undef
        friendInfo.showLoading = false
        // eslint-disable-next-line no-undef
        friendInfo.deletingUser = false
// eslint-disable-next-line no-undef
        friends.push(friendInfo)
      });

      this.state.friendSectionData = this.state.friendSectionData.concat(friends)

      this.setState({
        friendCurrentlyLoading: false,
      })
    }

    let onFailure = (error) => {
      this.setState({
        friendCurrentlyLoading: false,
      })
    }

    getFriends(this.state.friendLimit, this.state.friendSkip, onSuccess, onFailure)
  }

  getRequestsHelper = () =>{
    let onSuccess = (responseJson) => {
      let requests = [];

        if (responseJson.requests.total <= this.state.requestLimit + this.state.requestSkip) {
          this.setState({
            requestFullyDoneLoading: true
          })
        }

        this.setState({
          requestTotal: responseJson.requests.total
        })

        responseJson.requests.data.forEach(function(obj) { 
          let requesterID = obj.requester

          // eslint-disable-next-line no-undef
          requestInfo = {}
          // eslint-disable-next-line no-undef
          requestInfo.userID = requesterID

          responseJson.users.data.forEach(function(userObj) {
            if (userObj.id == requesterID) {
              // eslint-disable-next-line no-undef
              requestInfo.username = userObj.name
              // eslint-disable-next-line no-undef
              requestInfo.email = userObj.email
              // eslint-disable-next-line no-undef
              requestInfo.relation = STRINGS.REQUESTEE
            }
          })
          // eslint-disable-next-line no-undef
          friend.relationID = obj._id
          // eslint-disable-next-line no-undef
          requestInfo.expanded = false
          // eslint-disable-next-line no-undef
          requestInfo.profileInfo = ''
          // eslint-disable-next-line no-undef
          requestInfo.showLoading = false
          // eslint-disable-next-line no-undef
          requestInfo.deletingUser = false

          // eslint-disable-next-line no-undef
          requests.push(requestInfo)
        });

        this.state.requestSectionData = this.state.requestSectionData.concat(requests)

        this.setState({
          requestCurrentlyLoading: false,
        })
    }

    let onFailure = (error) => {
      this.setState({
        requestCurrentlyLoading: false,
      })
    }

    getRequests(this.state.requestLimit, this.state.requestSkip, onSuccess, onFailure)
  }

  _onRefresh = () => {
    this.initialLoad();
  }

  toggleRequestVisibility = () => {
    this.setState({requestSectionExpanded: !this.state.requestSectionExpanded})
  }

  viewableItemsChanged = (items) => {
    if (!this.state.requestCurrentlyLoading && !this.state.requestFullyDoneLoading && this.state.requestSectionExpanded) {
      let friendsSectionVisible = false;
      for (let i=0; i<items.viewableItems.length; i++) {
        if ((items.viewableItems[i].item.title !== undefined && items.viewableItems[i].item.title.indexOf(STRINGS.FRIEND_SECTION_HEADER) != -1) 
              || items.viewableItems[i].item.relationship === STRINGS.FRIENDS) {
          friendsSectionVisible = true;
          break;
        }
      }
      if (friendsSectionVisible) {
        this.loadNextRequests();
      }
    }
  }

  _keyExtractor = (item, index) => '' + item.userID;

  killFriend = (item) => {
    let index = this.state.friendSectionData.indexOf(item)
    this.state.friendSectionData.splice(index, 1)

    this.setState({
      friendSkip: this.state.friendSkip - 1,
    })
  }

  killRequest = (item) => {
    this.state.requestSectionData.splice(this.state.requestSectionData.indexOf(item), 1);

    this.setState({
      requestSkip: this.state.requestSkip - 1,
      requestTotal: this.state.requestTotal - 1,
    })
  }

  moveRequest = (item, newRelationshipID) => {
    this.state.requestSectionData.splice(this.state.requestSectionData.indexOf(item), 1);

    item.relationship = STRINGS.FRIENDS
    item.relationshipID = newRelationshipID
    item.expanded = false
    item.profileInfo = ''
    item.showLoading = false
    item.deletingUser = false

    if (this.state.friendFullyDoneLoading) {
      this.state.friendSectionData.push(item)
    }
    this.setState({
      requestSkip: this.state.requestSkip - 1,
      requestTotal: this.state.requestTotal - 1,
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <FriendsMenu mainText={STRINGS.HOME} />
        {!this.state.friendCurrentlyLoading && this.state.friendFullyDoneLoading && !this.state.requestCurrentlyLoading && this.state.requestFullyDoneLoading && this.state.requestSectionData.length === 0 && this.state.friendSectionData.length === 0 ?
        <TouchableWithoutFeedback onPress={() => this._onRefresh()} accessible={false}>
          <Text style={styles.emptyHomeText}>
            {STRINGS.EMPTY_HOME}
          </Text>
        </TouchableWithoutFeedback> :
        <SectionList
          enableEmptySections={true}
          //removeClippedSubviews={true}//use at own risk but improves performance
          renderItem={({item, index, section}) => 
            <View>
            {item.relationship === STRINGS.FRIENDS ? 
              <FriendListItem item={item} killFriend={this.killFriend} /> : 
              <View>
                {this.state.requestSectionExpanded && 
                  <FriendRequestListItem item={item} killRequest={this.killRequest} moveRequest={this.moveRequest} /> 
                }
              </View>
            }
            </View>
          }
          renderSectionHeader={({section: {title}}) => (
            <View>
              {!(title === STRINGS.REQUEST_SECTION_HEADER && this.state.requestFullyDoneLoading && this.state.requestTotal === 0) && 
              <Header title={title} toggleRequestVisibility={this.toggleRequestVisibility} requestTotal={this.state.requestTotal} expanded={this.state.requestSectionExpanded} />}
            </View>
          )}
          sections={[
            {title: STRINGS.REQUEST_SECTION_HEADER, data: this.state.requestSectionData},
            {title: STRINGS.FRIEND_SECTION_HEADER, data: this.state.friendSectionData},
          ]}
          keyExtractor={(item, index) => item.userID}
          onEndReached={() => this.scrolledToBottom()}
          onEndReachedThreshold={0.5}
          onViewableItemsChanged={(items) => this.viewableItemsChanged(items)}
          refreshControl={
            <RefreshControl
              refreshing={this.state.friendCurrentlyLoading || this.state.requestCurrentlyLoading}
              onRefresh={() => this._onRefresh()}
              colors={[COLORS.PRIMARY_COLOR]}
              tintColor={COLORS.PRIMARY_COLOR}
            />
          }
        />}
      </View>
    );
  }
}

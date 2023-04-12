import { createSlice } from "@reduxjs/toolkit";
import * as action from "../action/friendAction";
import userSlice from "./userSlice";

const friendSlice = createSlice({
  name: "friend",
  initialState: {
    isLoading: false,
    friend: [],
    friendRequest: [],
    isError: false,
  },

  extraReducers: (builder) => {
    /* getFriendRequestByUserId */
    builder.addCase(
      action.getFriendRequestByUserId.pending,
      (state, action) => {
        state.isLoading = true;
      }
    );
    builder.addCase(
      action.getFriendRequestByUserId.fulfilled,
      (state, action) => {
        state.isLoading = false;
        state.friendRequest = action.payload;
      }
    );
    builder.addCase(
      action.getFriendRequestByUserId.rejected,
      (state, action) => {
        console.log("Error", action.payload);
        state.isError = true;
      }
    );

    /* updateStatus */
    builder.addCase(action.updateStatus.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(action.updateStatus.fulfilled, (state, action) => {
      state.isLoading = false;
      const index = state.friendRequest.findIndex(
        (request) => request.id === action.payload.id
      );
      state.friendRequest[index] = {
        ...state.friendRequest[index],
        ...action.payload,
      };
    });
    builder.addCase(action.updateStatus.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });

    /* getFriendsByUserId */
    builder.addCase(action.getFriendsByUserId.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(action.getFriendsByUserId.fulfilled, (state, action) => {
      state.isLoading = false;
      state.friend = action.payload;
    });
    builder.addCase(action.getFriendsByUserId.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });

    /*deleteFriend */
    builder.addCase(action.deleteFriend.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(action.deleteFriend.fulfilled, (state, action) => {
      state.isLoading = false;

      const index = state.friend.findIndex(
        (friend) => friend.id === action.payload.id
      );
      state.friend.splice(index, 1);
    });
    builder.addCase(action.deleteFriend.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });

    /* addFriend */
    builder.addCase(action.addFriend.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(action.addFriend.fulfilled, (state, action) => {
      state.isLoading = false;
      state.friend.push(action.payload);
    });
    builder.addCase(action.addFriend.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });

    /* sendFriendRequest */
    builder.addCase(action.sendFriendRequest.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(action.sendFriendRequest.fulfilled, (state, action) => {
      state.isLoading = false;
      state.friendRequest.push(action.payload);
      console.log(action.payload);
      const user = userSlice(undefined, { type: "NO_OP" }); // get state of sliceA
      // state.otherStateValue = stateA.someStateValue * action.payload;
      // user.currentUser?.sent_requests.push(action.payload);
    });
    builder.addCase(action.sendFriendRequest.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});

export default friendSlice.reducer;

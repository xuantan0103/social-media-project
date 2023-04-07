import { createSlice } from "@reduxjs/toolkit";
import * as action from "../action/friendAction";

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
        console.log("get", state.friendRequest);
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
  },
});

export default friendSlice.reducer;

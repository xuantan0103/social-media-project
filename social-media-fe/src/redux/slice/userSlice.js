import { createSlice } from "@reduxjs/toolkit";
import * as action from "../action/userAction";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoading: false,
    currentUser: null,
    otherUser: null,
    relationship: "",
    allUser: [],
    isError: false,
  },
  reducers: {
    checkRelationship: (state, action) => {
      // bạn bè
      const status1 = state?.currentUser?.friendsList.find(
        (item) => item?.friend_id === state?.otherUser?.id
      );
      // đã gửi lời mời
      const status2 = state?.currentUser?.sent_requests.find(
        (item) => item?.receiver_id === state.otherUser?.id
      );
      // xác nhận
      const status3 = state?.currentUser?.received_requests.find(
        (item) => item?.sender_id === state.otherUser?.id
      );
      state.relationship = "Add Friend";

      if (status1) {
        state.relationship = "Friend";
      }
      if (status2) {
        state.relationship = "Request Sent";
      }
      if (status3) {
        state.relationship = "Accept";
      }
    },
  },
  /* getCurrentUser */
  extraReducers: (builder) => {
    builder.addCase(action.getCurrentUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(action.getCurrentUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.currentUser = action.payload;
    });
    builder.addCase(action.getCurrentUser.rejected, (state, action) => {
      state.isError = true;
    });

    /* getAllUser */
    builder.addCase(action.getAllUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(action.getAllUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.allUser = action.payload;
    });
    builder.addCase(action.getAllUser.rejected, (state, action) => {
      state.isError = true;
    });

    /* getUserById */
    builder.addCase(action.getUserById.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(action.getUserById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.otherUser = action.payload;
    });
    builder.addCase(action.getUserById.rejected, (state, action) => {
      state.isError = true;
    });

    /* editUser */
    builder.addCase(action.editUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(action.editUser.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(action.editUser.rejected, (state, action) => {
      state.isError = true;
    });
  },
});
export const { checkRelationship } = userSlice.actions;
export default userSlice.reducer;

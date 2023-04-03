import { createSlice } from "@reduxjs/toolkit";
import * as action from "../action/userAction";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoading: false,
    currentUser: null,
    otherUser: null,
    isError: false,
  },

  /* getCurrentUser */
  extraReducers: (builder) => {
    builder.addCase(action.getCurrentUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(action.getCurrentUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.currentUser = action.payload;
      console.log("payload", action.payload);
      console.log("state.currentUser", state.currentUser);
    });
    builder.addCase(action.getCurrentUser.rejected, (state, action) => {
      state.isError = true;
    });

    /* getUserById */
    builder.addCase(action.getUserById.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(action.getUserById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.otherUser = action.payload;
      console.log("payload", action.payload);
      console.log("state.otherUser", state.otherUser);
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

export default userSlice.reducer;

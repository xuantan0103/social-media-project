import { createSlice } from "@reduxjs/toolkit";
import * as action from "../action/postAction";

const postSlice = createSlice({
  name: "post",
  initialState: {
    isLoading: false,
    data: [],
    isError: false,
  },
  extraReducers: (builder) => {
    /* getAllPosts */
    builder.addCase(action.getAllPosts.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(action.getAllPosts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(action.getAllPosts.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });

    /* getPostByUserId */
    builder.addCase(action.getPostByUserId.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(action.getPostByUserId.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(action.getPostByUserId.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });

    /* addNewPost */
    builder.addCase(action.addNewPost.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(action.addNewPost.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(action.addNewPost.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});

export default postSlice.reducer;

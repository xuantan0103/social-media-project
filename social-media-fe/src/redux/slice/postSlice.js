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
      state.data.push(action.payload);
    });
    builder.addCase(action.addNewPost.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });

    /* updatePost */
    builder.addCase(action.updatePost.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(action.updatePost.fulfilled, (state, action) => {
      state.isLoading = false;
      const index = state.data.findIndex(
        (post) => post.id === action.payload.id
      );
      state.data[index] = {
        ...state.data[index],
        ...action.payload,
      };
    });
    builder.addCase(action.updatePost.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });

    /* deletePost */
    builder.addCase(action.deletePost.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(action.deletePost.fulfilled, (state, action) => {
      state.isLoading = false;

      const index = state.data.findIndex(
        (post) => post.id === action.payload.id
      );
      state.data.splice(index, 1);
    });
    builder.addCase(action.deletePost.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });

    /* uploadPostImage */
    builder.addCase(action.uploadPostImage.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(action.uploadPostImage.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(action.uploadPostImage.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});

export default postSlice.reducer;

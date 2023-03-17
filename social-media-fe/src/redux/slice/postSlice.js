import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../../api/constant";

// Action
export const getAllPosts = createAsyncThunk("getAllPosts", async () => {
  axios
    .get(API + "/posts")
    .then((res) => {
      console.log("s", res.data);
      return res.data;
    })
    .catch((err) => {
      console.log("222", err);
    });
});
const postSlice = createSlice({
  name: "post",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(getAllPosts.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getAllPosts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(getAllPosts.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});

export default postSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import * as api from "../../api";
// Action
export const getAllPosts = createAsyncThunk(
  "post/getAllPosts",
  async (page, { rejectWithValue }) => {
    try {
      const { data } = await api.getAllPosts();
      console.log("all post", data.data);
      return data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
const postSlice = createSlice({
  name: "post",
  initialState: {
    isLoading: false,
    data: [],
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

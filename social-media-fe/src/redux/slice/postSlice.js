import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../api";
// Action
export const getAllPosts = createAsyncThunk(
  "post/getAllPosts",
  async (page, { rejectWithValue }) => {
    try {
      const { data } = await api.getAllPosts();
      return data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const getPostByUseId = createAsyncThunk(
  "post/getPostByUseId",
  async (userId, { rejectWithValue }) => {
    try {
      const { data } = await api.getPostByUseId();
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

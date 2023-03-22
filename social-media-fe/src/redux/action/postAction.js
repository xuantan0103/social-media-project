import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../api";

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
export const getPostByUserId = createAsyncThunk(
  "post/getPostByUserId",
  async (userId, { rejectWithValue }) => {
    try {
      const { data } = await api.getPostByUserId(userId);
      return data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const addNewPost = createAsyncThunk(
  "post/addNewPost",
  async (post, { rejectWithValue }) => {
    try {
      const { data } = await api.addNewPost(post);
      return data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
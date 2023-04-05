import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../api";

export const getAllPosts = createAsyncThunk(
  "post/getAllPosts",
  async (page, { rejectWithValue }) => {
    try {
      const { data } = await api.getAllPosts();
      console.log(data.data);
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
export const updatePost = createAsyncThunk(
  "post/updatePost",
  async (post, { rejectWithValue }) => {
    try {
      const { data } = await api.updatePost(post.id, post.attributes);
      return data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const deletePost = createAsyncThunk(
  "post/deletePost",
  async (postId, { rejectWithValue }) => {
    try {
      const { data } = await api.deletePost(postId);
      return data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const uploadPostImage = createAsyncThunk(
  "post/uploadPostImage",
  async (post, { rejectWithValue }) => {
    try {
      const { data } = await api.uploadPostImage(post);
      return data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

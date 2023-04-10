import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../api";

export const getFriendRequestByUserId = createAsyncThunk(
  "friend/getFriendRequestByUserId",
  async (userId, { rejectWithValue }) => {
    try {
      const data = await api.getFriendRequestByUserId(userId);
      return data.data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const getFriendsByUserId = createAsyncThunk(
  "friend/getFriendsByUserId",
  async (userId, { rejectWithValue }) => {
    try {
      const data = await api.getFriendsByUserId(userId);
      return data.data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const updateStatus = createAsyncThunk(
  "friend/updateStatus",
  async (status, { rejectWithValue }) => {
    try {
      const data = await api.updateStatus(status.id, status.status);
      return data.data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const deleteFriend = createAsyncThunk(
  "friend/deleteFriend",
  async (id, { rejectWithValue }) => {
    try {
      const data = await api.deleteFriend(id);
      return data.data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const addFriend = createAsyncThunk(
  "friend/addFriend",
  async (friend, { rejectWithValue }) => {
    try {
      const data = await api.addFriend(friend);
      console.log(data.data);
      return data.data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

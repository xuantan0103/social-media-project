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

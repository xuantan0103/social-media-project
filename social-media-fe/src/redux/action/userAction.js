import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../api";

export const getCurrentUser = createAsyncThunk(
  "user/getCurrentUser",
  async (_, { rejectWithValue }) => {
    try {
      const data = await api.getCurrentUser();
      return data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const getUserById = createAsyncThunk(
  "user/getUserById",
  async (userId, { rejectWithValue }) => {
    try {
      const data = await api.getUserById(userId);
      return data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const editUser = createAsyncThunk(
  "user/editUser",
  async (user, { rejectWithValue }) => {
    try {
      const data = await api.editUser(user);
      return data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

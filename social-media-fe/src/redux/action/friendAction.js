import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../api";

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
export const friendRequest = createAsyncThunk(
    "friend/friendrequest",
    async (user, { rejectWithValue }) => {
      try {
        const data = await api.acceptRequest(user);
        console.log("friend", data);
        return data.data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );
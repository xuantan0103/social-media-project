import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../api";
// Action
export const getUserById = createAsyncThunk(
  "user/getCurrentUser",
  async (userId, { rejectWithValue }) => {
    try {
      const data = await api.getUserById(userId);
      console.log("user", data.data);
      return data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoading: false,
    user: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(getUserById.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getUserById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      console.log("state.user", action.payload);
    });
    builder.addCase(getUserById.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
  reducers: {
    updateStart: (state) => {
      state.user.pending = true;
    },
    updateSuccess: (state, action) => {
      state.user.pending = false;
      state.user.error = false;
      state.user.currentUser = action.payload;
    },
    updateError: (state) => {
      state.error = true;
      state.pending = false;
    },
    getUserStart: (state) => {
      state.otherUser.pending = true;
    },
    getUserSuccess: (state, action) => {
      state.otherUser.pending = false;
      state.otherUser.otherUser = action.payload;
      state.otherUser.error = false;
    },
    getUserFailed: (state) => {
      state.otherUser.pending = false;
      state.otherUser.error = true;
    },
},
});
export const {
  updateStart,
  updateSuccess,
  updateError,
  getUserStart,
  getUserSuccess,
  getUserFailed,
} = userSlice.actions;

export default userSlice.reducer;

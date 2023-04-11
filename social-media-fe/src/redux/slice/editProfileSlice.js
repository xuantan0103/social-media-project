
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../api";
//Action
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
const editProfileSlice = createSlice({
  name: "user",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(getUserById.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getUserById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(getUserById.rejected, (state, action) => {
      state.isError = true;
    });
  },
});
export default editProfileSlice.reducer;

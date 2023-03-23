// import axios from "axios";
// import {
//   updateStart,
//   updateSuccess,
//   updateError,
//   getUserStart,
//   getUserSuccess,
//   getUserFailed,
// } from "./userSlice";
// import { API, BASE_URL } from "../../api/constant";

// export const updateUser = async (user, id, token) => {
//   updateStart();
//   try {
//     const res = await axios.put(`${BASE_URL}/users/${id}`, user, {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     updateSuccess(res.data);
//   } catch (err) {
//     console.log(err);
//     updateError();
//   }
// };
// export const getUser = async (id, token) => {
//   getUserStart();
//   try {
//     const res = await axios.get(`${API}/users/${id}`, {
//       headers: { "Content-Type": "application/json", token: `Bearer ${token}` },
//     });
//     getUserSuccess(res.data);
//   } catch (err) {
//     getUserFailed();
//   }
// };
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../api";
// Action
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

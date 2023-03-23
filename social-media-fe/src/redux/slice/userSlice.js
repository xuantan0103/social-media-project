import { createSlice } from "@reduxjs/toolkit";
import * as action from "../action/userAction";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },

  /* getUserById */
  extraReducers: (builder) => {
    builder.addCase(action.getUserById.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(action.getUserById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(action.getUserById.rejected, (state, action) => {
      state.isError = true;
    });

    /* editUser */
    builder.addCase(action.editUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(action.editUser.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(action.editUser.rejected, (state, action) => {
      state.isError = true;
    });
  },
});

export default userSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import * as action from "../action/imageAction";

const postSlice = createSlice({
  name: "image",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    /* uploadImage */
    builder.addCase(action.uploadImage.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(action.uploadImage.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      console.log("p", action.payload);
    });
    builder.addCase(action.uploadImage.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});

export default postSlice.reducer;

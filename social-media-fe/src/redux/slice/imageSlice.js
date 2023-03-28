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
      console.log("loading");
    });
    builder.addCase(action.uploadImage.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload[0];
      console.log("p", state.data);
    });
    builder.addCase(action.uploadImage.rejected, (state, action) => {
      console.log("Error");
      state.isError = true;
    });
    /* getImage */
    builder.addCase(action.getImage.pending, (state, action) => {
      state.isLoading = true;
      console.log("loading");
    });
    builder.addCase(action.getImage.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload[0];
      console.log("p", state.data);
    });
    builder.addCase(action.getImage.rejected, (state, action) => {
      console.log("Error");
      state.isError = true;
    });
  },
});

export default postSlice.reducer;

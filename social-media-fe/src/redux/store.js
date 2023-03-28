import { configureStore } from "@reduxjs/toolkit";
import imageSlice from "./slice/imageSlice";
import postSlice from "./slice/postSlice";
import userSlice from "./slice/userSlice";

const store = configureStore({
  reducer: {
    post: postSlice,
    user: userSlice,
    image: imageSlice,
  },
});
export default store;

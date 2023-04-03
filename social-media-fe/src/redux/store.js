import { configureStore } from "@reduxjs/toolkit";
import imageSlice from "./slice/imageSlice";
import postSlice from "./slice/postSlice";
import userSlice from "./slice/userSlice";
import friendSlice from "./slice/friendSlice";

const store = configureStore({
  reducer: {
    post: postSlice,
    user: userSlice,
    image: imageSlice,
    friend: friendSlice,
  },
});
export default store;

import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./slice/postSlice";
import userSlice from "./slice/userSlice";

const store = configureStore({
  reducer: {
    post: postSlice,
    user: userSlice,
  },
});
export default store;

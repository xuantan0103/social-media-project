import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../api";

export const uploadImage = createAsyncThunk(
  "post/uploadImage",
  async (formData, { rejectWithValue }) => {
    try {
      const { data } = await api.uploadImage(formData);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

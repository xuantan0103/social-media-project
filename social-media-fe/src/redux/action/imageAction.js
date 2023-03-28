import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../api";

export const uploadImage = createAsyncThunk(
  "image/uploadImage",
  async (formData, { rejectWithValue }) => {
    try {
      const { data } = await api.uploadImage(formData);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const getImage = createAsyncThunk(
  "image/getImage",
  async (formData, { rejectWithValue }) => {
    try {
      const { data } = await api.getImage(formData);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

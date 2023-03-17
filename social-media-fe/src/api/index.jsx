import axios from "axios";
import { API } from "./constant";

const headers = {
  headers: {
    "Content-Type": "application/json",
  },
};
//Auth API
export const login = (formData) => API.post("/users/login", formData);
export const registerUser = (formData) => API.post("/users/register", formData);
export const getUserById = (id) => API.get(`/users/${id}`);

export const register = (data, navigate, err) => {
  axios
    .post(API + "/auth/local/register", data, headers)
    .then((res) => {
      console.log("data", res.data.user);
    })
    .catch((err) => {
      console.log("err", err);
    });
};

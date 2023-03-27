import axios from "axios";
import { BASE_URL, LOCAL_HOST } from "./constant";

const headers = {
  headers: {
    "Content-Type": "application/json",
  },
};

//Auth API
export const login = (data) => axios.post(BASE_URL + "/auth/local", data);
export const register = (data) => {
  axios
    .post(BASE_URL + "/auth/local/register", data, headers)
    .then((res) => {
      // console.log("data", res.data.user);
    })
    .catch((err) => {
      // console.log("err", err);
    });
};
export const getUserById = (userId) => {
  return axios.get(BASE_URL + `/users/${userId}?populate=*`);
};

// User
export const editUser = (data) => {
  return axios.put(BASE_URL + `/user/me`, data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("authToken")}`,
    },
  });
};

// Post
export const getAllPosts = () => {
  return axios.get(BASE_URL + `/posts?populate=*`);
};
export const getPostById = (id) => {
  return axios.get(BASE_URL + `/posts/${id}?populate=*`);
};
export const getPostByUserId = (userId) => {
  return axios.get(
    BASE_URL + `/posts?filters[authorId][$eq]=${userId}&populate=*`
  );
};
export const addNewPost = (post) => {
  return axios.post(
    BASE_URL + "/posts?populate=*",
    { data: post },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    }
  );
};
export const uploadImage = (formData) => {
  return axios.post(`${LOCAL_HOST}/api/upload`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("authToken")}`,
    },
  });
};

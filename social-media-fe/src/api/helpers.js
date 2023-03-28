import { AUTH_TOKEN } from "./constant";

export const getToken = () => {
  return localStorage.getItem(AUTH_TOKEN);
};

export const setToken = (token) => {
  if (token) {
    localStorage.setItem(AUTH_TOKEN, token);
  }
};
export const setIdUser = (id) => {
  if (id) {
    localStorage.setItem("id", id);
  }
};
export const getIdUser = () => {
  return localStorage.getItem("id");
};
export const setUsername = (username) => {
  if (username) {
    localStorage.setItem("username", username);
  }
};
export const getUsername = () => {
  return localStorage.getItem("username");
};
export const removeToken = () => {
  localStorage.removeItem(AUTH_TOKEN);
  localStorage.removeItem("id");
  localStorage.removeItem("username");
};

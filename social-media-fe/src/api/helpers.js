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
  console.log(id);  
  if (id) {
    localStorage.setItem("id", id);
  }
};
export function getIdUser() {
  console.log(localStorage.getItem("id"));
  return localStorage.getItem("id");
}
export const removeToken = () => {
  localStorage.removeItem(AUTH_TOKEN);
  localStorage.removeItem("id");
};

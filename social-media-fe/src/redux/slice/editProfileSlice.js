import axios from 'axios';
import {
  updateStart,
  updateSuccess,
  updateError,
  getUserStart,
  getUserSuccess,
  getUserFailed,
} from "./userSlice";

export const updateUser = async (user, id, token) => {
 (updateStart());
  try {
    const res = await axios.put(`${URL}/users/${id}`, user, {
      headers: { token: `Bearer ${token}` },
    });
    (updateSuccess(res.data));
  } catch (err) {
    console.log(err);
    (updateError());
  }
};
export const getUser = async (id, token) => {
  (getUserStart());
  try {
    const res = await axios.get(`${URL}/users/${id}`, {
      headers: { token: `Bearer ${token}` },
    });
    (getUserSuccess(res.data));
  } catch (err) {
    (getUserFailed());
  }
};


  
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
export const getCurrentUser = () => {
  return axios.get(
    BASE_URL + `/users/${localStorage.getItem("id")}?populate=*`
  );
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
  return axios.get(
    BASE_URL +
      `/posts?&populate[user][populate][avatar]=*&populate[images][populate]=*`
  );
};
export const getPostById = (id) => {
  return axios.get(
    BASE_URL +
      `/posts/${id}?&populate[user][populate][avatar]=*&populate[images][populate]=*`
  );
};
export const getPostByUserId = (userId) => {
  return axios.get(
    BASE_URL +
      `/posts?filters[user][id][$eq]=${userId}&populate[user][populate][avatar]=*&populate[images][populate]=*`
  );
};
export const addNewPost = (post) => {
  return axios.post(
    BASE_URL +
      "/posts?populate[user][populate][avatar]=*&populate[images][populate]=*",
    { data: post },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    }
  );
};
export const updatePost = (postId, post) => {
  return axios.put(
    BASE_URL +
      `/posts/${postId}?&populate[user][populate][avatar]=*&populate[images][populate]=*`,
    { data: post },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    }
  );
};
export const deletePost = (postId) => {
  return axios.delete(
    BASE_URL +
      `/posts/${postId}?&populate[user][populate][avatar]=*&populate[images][populate]=*`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    }
  );
};
export const uploadPostImage = (postId, image) => {
  return axios.put(
    BASE_URL + `/posts/${postId}?populate=*`,
    { images: image },
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
export const getImage = (id) => {
  return axios.get(`${LOCAL_HOST}/api/upload/files/${id}?populate=*`, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

//////////////////
const serverError = {
  name: "Internal-Error",
  message: "Something went wrong on the server",
  code: 500,
  className: "Internal-Error",
  errors: {},
};

export function handleResponse(response, onSuccess, onFailure) {
  response.json().then(
    function (responseJSON) {
      if (response.status >= 200 && response.status < 400) {
        onSuccess(responseJSON);
      } else {
        onFailure(responseJSON);
      }
    },
    function (error) {
      onFailure(serverError);
    }
  );
}
//getuserinfor
export function getUserInfo(username, onSuccess, onFailure, recurseCount) {
  recurseCount = recurseCount || 1;

  return axios
    .get(BASE_URL + "?email=" + username, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    })
    .then(
      function (response) {
        handleResponse(response, onSuccess, onFailure);
      },
      function (error) {
        setTimeout(
          () => getUserInfo(username, onSuccess, onFailure, recurseCount + 1),
          1000 * recurseCount
        );
      }
    );
}
//getFriend
export function getFriends(limit, skip, onSuccess, onFailure, recurseCount) {
  recurseCount = recurseCount || 1;

  return axios(BASE_URL + "?$limit=" + limit + "&$skip=" + skip, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("authToken")}`,
    },
  }).then(
    function (response) {
      handleResponse(response, onSuccess, onFailure);
    },
    function (error) {
      setTimeout(
        () => getFriends(limit, skip, onSuccess, onFailure, recurseCount + 1),
        1000 * recurseCount
      );
    }
  );
}
//getRequest
export function getRequests(limit, skip, onSuccess, onFailure, recurseCount) {
  recurseCount = recurseCount || 1;

  return axios(BASE_URL + "?$limit=" + limit + "&$skip=" + skip, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("authToken")}`,
    },
  }).then(
    function (response) {
      handleResponse(response, onSuccess, onFailure);
    },
    function (error) {
      setTimeout(
        () => getRequests(limit, skip, onSuccess, onFailure, recurseCount + 1),
        1000 * recurseCount
      );
    }
  );
}
//Acceptrequest
export function acceptRequest(requestID, onSuccess, onFailure, recurseCount) {
  recurseCount = recurseCount || 1;

  return axios(BASE_URL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("authToken")}`,
    },
    body: JSON.stringify({
      requestID: requestID,
    }),
  }).then(
    function (response) {
      handleResponse(response, onSuccess, onFailure);
    },
    function (error) {
      setTimeout(
        () => acceptRequest(requestID, onSuccess, onFailure, recurseCount + 1),
        1000 * recurseCount
      );
    }
  );
}
//rejectRequest
export function rejectRequest(requestID, onSuccess, onFailure, recurseCount) {
  recurseCount = recurseCount || 1;

  return axios(BASE_URL + "/" + requestID, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("authToken")}`,
    },
  }).then(
    function (response) {
      handleResponse(response, onSuccess, onFailure);
    },
    function (error) {
      setTimeout(
        () => rejectRequest(requestID, onSuccess, onFailure, recurseCount + 1),
        1000 * recurseCount
      );
    }
  );
}
//RemoveFriend
export function removeFriend(friendID, onSuccess, onFailure, recurseCount) {
  recurseCount = recurseCount || 1;

  fetch(BASE_URL + "/" + friendID, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("authToken")}`,
    },
  }).then(
    function (response) {
      handleResponse(response, onSuccess, onFailure);
    },
    function (error) {
      setTimeout(
        () => removeFriend(friendID, onSuccess, onFailure, recurseCount + 1),
        1000 * recurseCount
      );
    }
  );
}
//RequestUser
export function requestUser(requesteeID, onSuccess, onFailure, recurseCount) {
  recurseCount = recurseCount || 1;

  return axios(BASE_URL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("authToken")}`,
    },
    body: JSON.stringify({
      requesteeID: requesteeID,
    }),
  }).then(
    function (response) {
      handleResponse(response, onSuccess, onFailure);
    },
    function (error) {
      setTimeout(
        () => requestUser(requesteeID, onSuccess, onFailure, recurseCount + 1),
        1000 * recurseCount
      );
    }
  );
}
export function getProfile(userID, onSuccess, onFailure, recurseCount) {
  recurseCount = recurseCount || 1;

  return axios(BASE_URL + "?userID=" + userID, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("authToken")}`,
    },
  }).then(
    function (response) {
      handleResponse(response, onSuccess, onFailure);
    },
    function (error) {
      setTimeout(
        () => getProfile(userID, onSuccess, onFailure, recurseCount + 1),
        1000 * recurseCount
      );
    }
  );
}

export function search(
  searchText,
  limit,
  skip,
  onSuccess,
  onFailure,
  recurseCount
) {
  recurseCount = recurseCount || 1;

  axios(BASE_URL + "/" + searchText + "?$limit=" + limit + "&$skip=" + skip, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("authToken")}`,
    },
  }).then(
    function (response) {
      handleResponse(response, onSuccess, onFailure);
    },
    function (error) {
      setTimeout(
        () =>
          search(
            searchText,
            limit,
            skip,
            onSuccess,
            onFailure,
            recurseCount + 1
          ),
        1000 * recurseCount
      );
    }
  );
}

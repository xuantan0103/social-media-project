import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import EditProfile from "./pages/Profile";
import { getToken } from "./helpers";
import Login from "./pages/Login";
import Register from "./pages/Register";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/editprofile"
        element={getToken() ? <EditProfile /> : <Navigate to="/login" />}
      />
    </Routes>
  );
};

export default AppRoutes;
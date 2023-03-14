import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoutes({ children, ...rest }) {
  const [currentToken, setCurrentToken] = useState(
    localStorage.getItem("authToken")
  );
  console.log("a", currentToken);
  return currentToken ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoutes;

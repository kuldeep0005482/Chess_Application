import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "./AppContext";

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn, loading } = useContext(AppContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  return isLoggedIn
    ? children
    : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
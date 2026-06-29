import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "./AppContext";
import MatchMakingLoader from "../components/Loading";
import NormalLoader from "../components/ui/NormalLoader";

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn, loading } = useContext(AppContext);

  if (loading) {
    return <NormalLoader/>;
  }

  return isLoggedIn
    ? children
    : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
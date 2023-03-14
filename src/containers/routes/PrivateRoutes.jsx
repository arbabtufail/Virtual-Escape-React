import { Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";
import LoginRoute from "./login/Login";
import { AuthContext } from "context/auth-context/AuthContext";

const PrivateRoutes = () => {
  const { isAuthenticated } = useContext(AuthContext);
  return isAuthenticated ? <Outlet /> : <Navigate to={LoginRoute} />;
};

export default PrivateRoutes;

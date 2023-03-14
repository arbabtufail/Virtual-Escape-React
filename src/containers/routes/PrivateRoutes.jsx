import { Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";
import { LOGIN_ROUTE } from "./constants";
import { AuthContext } from "context/AuthContext";

const PrivateRoutes = () => {
  const { isAuthenticated } = useContext(AuthContext);
  return isAuthenticated ? <Outlet /> : <Navigate to={LOGIN_ROUTE} />;
};

export default PrivateRoutes;

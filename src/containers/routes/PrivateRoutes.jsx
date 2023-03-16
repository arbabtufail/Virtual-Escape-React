import { Outlet, Navigate } from "react-router-dom";
import { LOGIN_ROUTE } from "./constants";
import { useAuthContext } from "context/AuthContainer";

const PrivateRoutes = () => {
  const { isAuthenticated } = useAuthContext();
  return isAuthenticated ? <Outlet /> : <Navigate to={LOGIN_ROUTE} />;
};

export default PrivateRoutes;

import { useState, useContext } from "react";
import { AuthContext, AuthProvider } from "./AuthContext";

const AuthContextContainer = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState();

  const value = {
    isAuthenticated,
    setIsAuthenticated,
  };

  return <AuthProvider value={value}>{children}</AuthProvider>;
};

export const useAuthContext = () => useContext(AuthContext);

export default AuthContextContainer;

import { createContext, useState } from "react";

export const AuthContext = createContext({
  isAuthenticated: false,
  setIsAuthenticated: () => null,
});

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const value = { isAuthenticated, setIsAuthenticated };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

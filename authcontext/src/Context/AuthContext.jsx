import { createContext, useState } from "react";
import { nanoid } from "nanoid";
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState(null);
  const [isTog, setIsTog] = useState(false);

  const handleToggleAuth = () => {
    setIsTog(!isTog);
    setIsAuth(false);
  };

  const handleLogin = (username) => {
    setIsAuth(true);
    setToken(nanoid(10) + " username is " + username);
  };
  const value = { isAuth, isTog, token, handleLogin, handleToggleAuth };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

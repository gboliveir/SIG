import { createContext, ReactNode, useState } from "react";
import { Navigate } from "react-router-dom";

import { AuthService, UserData } from "../services/AuthService";

interface AuthContextProps {
  user: UserData | undefined;
  isAuthenticated: boolean;
  signIn: (userInfo: UserData) => void;
  exit: () => void;
  getUserInfo: () => void;
}

interface AuthProvicerProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: AuthProvicerProps) {
  const [user, setUser] = useState<UserData | undefined>();
  // const authService = new AuthService();

  const isAuthenticated = !!user;

  function signIn(userInfo: UserData) {
    // await authService.signIn(userInfo).then(setUser);
    localStorage.setItem("@lmcontabilidade.auth.v1.0.0", JSON.stringify(userInfo));
    setUser(userInfo);
  }

  function exit() {
    localStorage.removeItem("@lmcontabilidade.auth.v1.0.0");
    setUser(undefined);
  }

  function getUserInfo() {
    const userInfo = localStorage.getItem("@lmcontabilidade.auth.v1.0.0");

    if(userInfo) {
      setUser(JSON.parse(userInfo));
    }
  }



  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn, exit, getUserInfo }}>
      {children}
    </AuthContext.Provider>
  );
}

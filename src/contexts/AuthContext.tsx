import { createContext, ReactNode, useState } from "react";

import { AuthService, UserData } from "../services/AuthService";

interface AuthContextProps {
  user: UserData | undefined;
  isAuthenticated: boolean;
  signIn: (userInfo: UserData) => void; 
}

interface AuthProvicerProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: AuthProvicerProps) {
  const [user, setUser] = useState<UserData | undefined>();
  const authService = new AuthService();

  const isAuthenticated = !!user;

  async function signIn(userInfo: UserData) {
    await authService.signIn(userInfo).then(setUser);    
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}

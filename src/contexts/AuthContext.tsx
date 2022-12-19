import { createContext, ReactNode, useState } from "react";
import { ISignResponse } from "../services/AuthService";

interface AuthContextProps {
  isAuthenticated: boolean;
  accessInfo: ISignResponse
  handleAccessInfo: (value: ISignResponse) => void;
}

interface AuthProvicerProps {
  children: ReactNode;
}

const initialAccessState: ISignResponse = {
  refreshToken: {
    expiresIn: 0,
    id: '',
    userId: ''
  },
  user: {
    name: '',
    email: '',
    role: 'CLIENT',
  },
  token: ''
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: AuthProvicerProps) {
  const [accessInfo, setAccessInfo] = useState<ISignResponse>(initialAccessState);
  const isAuthenticated = accessInfo !== initialAccessState;

  const handleAccessInfo = (value: ISignResponse) => setAccessInfo(value);

  return (
    <AuthContext.Provider value={{ accessInfo, handleAccessInfo, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

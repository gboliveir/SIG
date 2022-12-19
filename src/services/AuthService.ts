import axios from "axios";

type Role = 'CLIENT' | 'ADMINISTRATOR' | 'COUNTER';

type RefreshTokenType = {
  id: string;
  expiresIn: number; 
  userId: string;
}

type UserType = {
  name: string;
  email: string;
  role: Role;
}

interface ISignRequest {
  email: string;
  password: string;
}

export interface ISignResponse {
  refreshToken: RefreshTokenType
  token: string;
  user: UserType;
}

export class AuthService {
  async signIn(accessCredentials: ISignRequest): Promise<ISignResponse> {
    return await axios.post('http://localhost:4003/auth/login', accessCredentials)
      .then(response => response.data) 
      .catch(console.log)
  }
}

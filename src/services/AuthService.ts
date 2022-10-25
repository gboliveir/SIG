import axios from "axios";

export interface UserData {
  email: string,
  password: string,
  userType: 'client' | 'counter',
  name?: string
}

export class AuthService {
  async signIn(userInfo: UserData): Promise<UserData> {
    return await axios.get('http://localhost:3333/auth', { data : userInfo })
      .then(response => response.data) 
      .catch(console.log)
  }
}

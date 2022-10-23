import axios from "axios";

export interface UserData {
  email: string,
  password: string,
  userType: string,
  name?: string
}

export class AuthService {
  signIn(userInfo: UserData): Promise<UserData> {
    return axios.get('http://localhost:3333/auth/login', { data : userInfo })
      .then(response => response.data) 
      .catch(console.log)
  }
}

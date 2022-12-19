import axios from "axios";

export type UserType = {
  id: string;
  name: string;
  email: string;
  cpf: string;
  whatsapp: string;
  phoneNumber: string;
}

export class ManagementUserService {
  async createUser(user: UserType): Promise<UserType> {
    return await axios.post('http://localhost:4003/management/user', user)
      .then(response => response.data)
      .catch(console.log)
  }

  async updateUser(id: string, user: UserType): Promise<UserType> {
    return await axios.put(`http://localhost:4003/management/user/${id}`, user)
      .then(response => response.data)
      .catch(console.log)
  }

  async deleteUser(id: string): Promise<UserType> {
    return await axios.delete(`http://localhost:4003/management/user/${id}`);
  }

  async getUsersByCompany(id: string): Promise<UserType[]> {
    return await axios.get(`http://localhost:4003/management/user/${id}`)
      .then(response => response.data)
      .catch(console.log)
  }
}

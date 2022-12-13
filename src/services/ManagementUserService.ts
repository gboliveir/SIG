import axios from "axios";

export type StatusType = 'Atrasada' | 'Pendente' | 'Entregue'; 

export type CompanyType = {

}

export type UserType = {
  id: string;
  name: string;
  email: string;
  cpf: string;
  whatsapp: string;
  phoneNumber: string;
}

export type ObligationType = { 
  id: string;
  status: StatusType;
  finalDeliveryDate: moment.Moment;
  name: string;
  description: string;
  attatchment: any; //remover depois
}

export interface CustomerMessageDataType { 
  description: string;
  email: string;
  name: string;
  phoneNumber: number;
}

export class ManagementUserService {
  async getUsers(): Promise<UserType[]> {
    return await axios.get('http://localhost:3333/management/users')
      .then(response => response.data)
      .catch(console.log)
  }

  async postUsers(users: UserType[]): Promise<UserType[]> {
    return await axios.post('http://localhost:3333/management/users', users)
      .then(response => response.data)
      .catch(console.log)
  }

  // getObligations(): Promise<ObligationType[]> {
  //   return axios('http://localhost:3333/painel/customer/obligations')
  //     .then(response => response.data)
  //     .catch(console.log)
  // }

  // setCustomerMessage(message: CustomerMessageDataType): Promise<CustomerMessageDataType> {
  //   return axios.post('http://localhost:3333/customer/contacts', message)
  //     .then(response => response.data) 
  //     .catch(console.log)
  // }
}

import axios from "axios";

export interface ContactType {
  id: string;
  customerId: string;
  contact: string;
  type: string;
}

export interface CustomerType {
  id: string;
  cnpj: string;
  name: string;
  status: string;
  contacts: ContactType[],
}

export class AccountantService {
  getCustomers(): Promise<CustomerType[]> {
    return axios('http://localhost:3333/customers')
      .then(response => response.data)
      .catch(console.log)
  }
}

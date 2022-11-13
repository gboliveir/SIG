import axios from "axios";
import { ObligationType } from "./CustomerService";

export type StatusType = 'overdue' | 'pending' | 'inDays';

export type EmployeesType = {
  id: string;
  name: string;
  email: string;
  cpf: string;
  whatsapp: string;
  phoneNumber: string;
};

export type CompanyType = {
  id: string;
  cnpj: string;
  name: string;
  status: StatusType;
  employees: EmployeesType[];
  obligations: ObligationType[];
}

export class AccountantService {
  getCustomers(): Promise<CompanyType[]> {
    return axios('http://localhost:3333/customers')
      .then(response => response.data)
      .catch(console.log)
  }
}

import axios from "axios";
import { ObligationType } from "./ManagementObligationService";
import { UserType } from "./ManagementUserService";

export type StatusType = 'overdue' | 'pending' | 'inDays' | 'neutral';

export interface ICompany {
  id?: string;
  status?: StatusType;
  name: string;
  cnpj: string;
  users?: string[];
  Obligations?: string[];
}

export class ManagementCompanyService {
  async createCompany(company: ICompany): Promise<ICompany> {
    return await axios.post('http://localhost:4003/management/company', company)
      .then(response => response.data)
      .catch(console.log)
  }

  async updateCompany(recordId: string, company: ICompany): Promise<ICompany> {
    return await axios.put(`http://localhost:4003/management/company/${recordId}`, company)
      .then(response => response.data)
      .catch(console.log)
  }

  async deleteCompany(id: string): Promise<void> {
    return await axios.delete(`http://localhost:4003/management/company/${id}`);
  }

  // Rota inexistente
  async getCompany(id: string): Promise<ICompany> {
    return await axios.get(`http://localhost:4003/management/company/${id}`)
      .then(response => response.data)
      .catch(console.log)
  }

  async getCompanies(): Promise<ICompany[]> {
    return await axios.get('http://localhost:4003/management/companies')
      .then(response => response.data)
      .catch(console.log)
  }

  async getObligationsByCompany(id: string): Promise<ObligationType[]> {
    return await axios.get(`http://localhost:4003/management/company/${id}/obligations`)
      .then(response => response.data)
      .catch(console.log)
  }

  async getContactsByCompany(id: string): Promise<UserType[]> {
    return await axios.get(`http://localhost:4003/management/company/${id}/contacts`)
      .then(response => response.data)
      .catch(console.log)
  }
}
import axios from "axios";
import { StatusType } from "./@Types";

export type ObligationType = {
  status: StatusType;
  id?: string
  name: string
  description: string
  develiveryDate: string
  idDocument?: string,
  documentVersion?: string,
  idCompany?: string
}

export class ManagementObligationService {
  async createObligation(obligation: ObligationType): Promise<ObligationType> {
    return await axios.post('http://localhost:4003/management/obligation', obligation)
      .then(response => response.data)
      .catch(console.log)
  }

  async updateObligation(id: string, obligation: ObligationType): Promise<ObligationType> {
    return await axios.put(`http://localhost:4003/management/obligation/${id}`, obligation)
      .then(response => response.data)
      .catch(console.log)
  }

  async deleteObligation(id: string): Promise<ObligationType> {
    return await axios.delete(`http://localhost:4003/management/obligation/${id}`);
  }

  async getObligations(id: string): Promise<ObligationType[]> {
    return await axios.get(`http://localhost:4003/management/obligation/${id}`)
      .then(response => response.data)
      .catch(console.log)
  }
}

import axios from "axios";

interface StatusType {
  id: string;
}

export interface ObligationDataType { 
  id: string;
  status: StatusType;
  finalDeliveryDate: string;
  obligation: string;
  description: string;
  documentFile: boolean; //remover depois
}

export class CustomerService {
  getObligations(): Promise<ObligationDataType[]> {
    return axios('http://localhost:3333/painel/customer/obligations')
      .then(response => response.data)
      .catch(console.log)
  }
}

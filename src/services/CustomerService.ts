import axios from "axios";

export type StatusType = 'Atrasada' | 'Pendente' | 'Entregue'; 

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

export class CustomerService {
  getObligations(): Promise<ObligationType[]> {
    return axios('http://localhost:3333/painel/customer/obligations')
      .then(response => response.data)
      .catch(console.log)
  }

  setCustomerMessage(message: CustomerMessageDataType): Promise<CustomerMessageDataType> {
    return axios.post('http://localhost:3333/customer/contacts', message)
      .then(response => response.data) 
      .catch(console.log)
  }
}

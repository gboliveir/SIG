import statusFilterData from '../mocks/status-filter-data.json';
import customerTableData from '../mocks/customer-table-data.json';

import { DefaultOptionType } from 'antd/lib/select';


export interface ObligationDataType { 
  id: string;
  finalDeliveryDate: string;
  obligation: string;
  description: string;
}

export interface CounterTableDataType {
  id: string;
  status: string;
  cnpj: string;
  corporateName: string;
  contacts: {
    email: string;
    whatsapp: string;
    phoneNumber: string;
  },
  obligations: ObligationDataType[];
}

export function getCustomerFilterData(): DefaultOptionType[] {
  const customerFilterData: DefaultOptionType[] = customerTableData.map(
    (customer) => {
      return {
        label: customer.corporateName,
        value: customer.id
      }
    });

  return customerFilterData;
}

export function getCNPJFilterData(): DefaultOptionType[] {
  const CNPJFilterData: DefaultOptionType[] = customerTableData.map(
    (customer) => {
      return {
        label: customer.cnpj,
        value: customer.id
      }
    });

  return CNPJFilterData;
}

export function getStatusFilterData(): DefaultOptionType[] {
  return statusFilterData;
}

export function getCounterTableData(): CounterTableDataType[] {
  return customerTableData;
}

import axios from "axios";

import { DefaultOptionType } from "antd/lib/select";

export interface FilterCustomerType {
  id: string;
  name: string;
}

export interface FilterCnpjType {
  id: string;
  cnpj: string;
}

export interface FilterStatusType {
  id: string;
  status: string;
}

export class FilterService {
  getCustomerOptions(): Promise<DefaultOptionType[]> {
    return axios('http://localhost:3333/filter/customer')
      .then(response => {
        const data: FilterCustomerType[] = response.data;
      
        const filterValues: DefaultOptionType[] = data.map(item => {
          return {
            value: item.id,
            label: item.name
          }
        })
    
        return filterValues;
      }).catch(err => {
        console.log(err);
        return [];
      })

  }

  getCNPJOptions(): Promise<DefaultOptionType[]> {
    return axios('http://localhost:3333/filter/cnpj').then(response => {
      const data: FilterCnpjType[] = response.data;

      const filterValues: DefaultOptionType[] = data.map(item => {
        return {
          value: item.id,
          label: item.cnpj
        }
      }) 

      return filterValues;
    }).catch(err => {
      console.log(err);
      return [];
    })
  }

  getStatusOptions(): Promise<DefaultOptionType[]> {
    return axios('http://localhost:3333/filter/status').then(response => {
      const data: FilterStatusType[] = response.data;

      const filterValues: DefaultOptionType[] = data.map(item => {
        return {
          value: item.id,
          label: item.status
        }
      }) 

      return filterValues;
    }).catch(err => {
      console.log(err);
      return [];
    })
  }
}

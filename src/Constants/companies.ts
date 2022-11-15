import moment from "moment";
import { CompanyType } from "../services/AccountantService";

export const companies: CompanyType[] = [
  {
    id: 'company1',
    cnpj: '077-299-666-10',
    name: 'Company 1',
    status: "inDays",
    employees: [
      {
        id: 'colaborator1',
        cpf: '07426268308',
        email: 'colaborator2',
        name: 'João da Silva Marques',
        phoneNumber: '(88) 9 9741-6278',
        whatsapp: '(88) 9 9741-6278'
      }
    ],
    obligations: [
      {
        id: 'Documentation1',
        status: "Entregue",
        name: 'Avião',
        description: 'Tributo cobrado para aviões',
        finalDeliveryDate: moment(),
        attatchment: ''
      }
    ],
  }
]

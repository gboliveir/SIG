import moment from "moment";
import { ObligationType } from "../services/ManagementUserService";

export const obligations: ObligationType[] = [
  {
    id: '1',
    status: 'Atrasada',
    finalDeliveryDate: moment(),
    name: 'Tributo 1',
    description: 'Descrição 1',
    attatchment: false,
  },
  {
    id: '2',
    status: 'Atrasada',
    finalDeliveryDate: moment(),
    name: 'Tributo 1',
    description: 'Descrição 1',
    attatchment: false,
  },
  {
    id: '3',
    status: 'Atrasada',
    finalDeliveryDate: moment(),
    name: 'Tributo 1',
    description: 'Descrição 1',
    attatchment: false,
  },
  {
    id: '4',
    status: 'Atrasada',
    finalDeliveryDate: moment(),
    name: 'Tributo 1',
    description: 'Descrição 1',
    attatchment: false,
  },
]
import moment from "moment";
import { ObligationType } from "../services/ManagementObligationService";

export const obligations: ObligationType[] = [
  {
    id: '1',
    status: 'Atrasado',
    develiveryDate: moment().format(),
    name: 'Tributo 1',
    description: 'Descrição 1',
  },
  {
    id: '2',
    status: 'Atrasado',
    develiveryDate: moment().format(),
    name: 'Tributo 1',
    description: 'Descrição 1',
  },
  {
    id: '3',
    status: 'Atrasado',
    develiveryDate: moment().format(),
    name: 'Tributo 1',
    description: 'Descrição 1',
  },
  {
    id: '4',
    status: 'Atrasado',
    develiveryDate: moment().format(),
    name: 'Tributo 1',
    description: 'Descrição 1',
  },
]
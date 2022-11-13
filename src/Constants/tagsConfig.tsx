export const tagConfigs = {
  overdue: {
    color: 'red',
    tooltipTitle: 'A data final de entrega para está documentação já passou, por essa razão a mesma será cadastrada como "Atrasada". Todo e qualquer cliente que tiver vinculo com está obrigação terá seu status geral atualizado para "Em atraso".',
    text: 'Atrasada'
  },
  pending: {
    color: 'yellow',
    tooltipTitle: 'A data final de entrega para está documentação ainda não passou, por essa razão a mesma será cadastrada como "Pendente". Todo e qualquer cliente que tiver vinculo com está obrigação terá seu status geral atualizado para "Em dias".',
    text: 'Pendente'
  },
  inDays: {
    color: 'green',
    tooltipTitle: 'Este cliente tem cumprido com suas obrigações.',
    text: 'Em dias'
  }
}
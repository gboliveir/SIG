import { useContext } from "react";

import { Button, Space, Tag, Tooltip } from "antd";

import { ColumnsType } from "antd/lib/table/interface";
import { Trash } from "phosphor-react";
import { ConfirmModal } from "../../components/ConfirmModal";

import { UserEditingDrawerContext } from "../../contexts/UserEditingDrawerContext";

import { CompanyType } from "../../services/AccountantService";
import { UserDocumentationsDrawerContext } from "../../contexts/UserDocumentationsDrawerContext";

interface UseCompanyTableColumnsData {
  onDelete: (recordInfo: CompanyType) => void;
  onEdit: (recordInfo: CompanyType) => void;
}

export function useCompanyTableColumns({ onDelete, onEdit }: UseCompanyTableColumnsData) {
  const { showDrawer } = useContext(UserEditingDrawerContext);
  const { showDocumentationDrawer } = useContext(UserDocumentationsDrawerContext);
  const tagConfigs = {
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
      tooltipTitle: 'A data final de entrega para está documentação ainda não passou, por essa razão a mesma será cadastrada como "Pendente". Todo e qualquer cliente que tiver vinculo com está obrigação terá seu status geral atualizado para "Em dias".',
      text: 'Pendente'
    }
  }

  const showDeleteConfirm = (recordInfo: CompanyType) => ConfirmModal({
    title: 'Deseja mesmo deletar este cliente da base de dados?',
    content: 'Caso SIM o cliente e todas as obrigações vinculadas ao mesmo serão permanentemente deletadas. Apenas com um novo cadastro será spossível adiciona-lo novamente a base de dados da empresa.',
    onDelete: () => onDelete(recordInfo)
  })

  const companyTableColumns: ColumnsType<CompanyType> = [
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      width: 200,
      render: (_, record) => {
        const tagConfig = tagConfigs[record.status];

        return (
          <Tooltip title={tagConfig.tooltipTitle}>
            <Tag color={tagConfig.color}>
              {tagConfig.text}
            </Tag>
          </Tooltip>
        );
      }
    },
    {
      title: 'CNPJ',
      dataIndex: 'cnpj',
      key: 'cnpj',
      width: 200
    },
    {
      title: 'Razão Social',
      dataIndex: 'name',
      key: 'name',
      width: 200
    },
    {
      title: 'Contatos',
      key: 'contacts',
      width: 250,
    },
    {
      title: 'Detalhes',
      key: 'details',
      width: 350,
      render: (_, record) => (
        <Space size="middle">
          <Button type="primary" onClick={showDocumentationDrawer}>
            + Acessar lista de documentações
          </Button>
        </Space>
      ),
    },
    {
      title: 'Ações',
      key: 'action',
      width: 350,
      render: (_, record) => (
        <Space size="middle">
          <Button type="default" onClick={() => showDrawer(record)}>
            Editar
          </Button>
          <Button
            type="text"
            danger
            onClick={() => showDeleteConfirm(record)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Trash size={20} />
          </Button>
        </Space>
      ),
    }
  ];

  return ({
    companyTableColumns
  });
}
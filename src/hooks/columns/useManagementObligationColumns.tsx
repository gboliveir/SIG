import { Button, Space, Tag, Tooltip, Typography } from "antd";
import { ConfirmModal } from "../../components/ConfirmModal";
import { DownloadOutlined, FileDoneOutlined, FileOutlined } from "@ant-design/icons";
import { Trash } from "phosphor-react";

import { ColumnsType } from "antd/lib/table/interface";
import { ObligationType } from "../../services/CustomerService";
import moment from "moment";

interface UseManagementObligationColumnsData {
  onDelete: (recordInfo: ObligationType) => void;
  onEdit: (recordInfo: ObligationType) => void;
}

export function useManagementObligationColumns({ onDelete, onEdit }: UseManagementObligationColumnsData) {
  const tagConfigs = {
    Atrasada: {
      color: 'red',
      tooltipTitle: 'A data final de entrega para está documentação já passou, por essa razão a mesma será cadastrada como "Atrasada". Todo e qualquer cliente que tiver vinculo com está obrigação terá seu status geral atualizado para "Em atraso".',
      text: 'Atrasada'
    },
    Pendente: {
      color: 'yellow',
      tooltipTitle: 'A data final de entrega para está documentação ainda não passou, por essa razão a mesma será cadastrada como "Pendente". Todo e qualquer cliente que tiver vinculo com está obrigação terá seu status geral atualizado para "Em dias".',
      text: 'Pendente'
    },
  }

  const showDeleteConfirm = (recordInfo: ObligationType) => ConfirmModal({
    title: 'Deseja mesmo deletar esse tributo da lista de obrigações ?',
    content: 'Se sim não será possível restaura-lo de imediato. O mesmo pode ser cadastrado novamente na aba de gestão de obrigações.',
    onDelete: () => onDelete(recordInfo),
  })

  const obligationRecordColumns: ColumnsType<ObligationType> = [
    {
      title: 'status',
      dataIndex: 'status',
      key: 'status',
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
      title: 'Tributo/Obrigação',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Data final de entrega',
      dataIndex: 'finalDeliveryDate',
      key: 'finalDeliveryDate',
      render: (_, record) => {
        return (
          <Typography.Text>
            {moment(record.finalDeliveryDate.format('L'), 'DD/MM/YYYY').format('L')}
          </Typography.Text>
        )
      } 
    },
    {
      title: 'Anexo',
      key: 'attatchment',
      render: (_, record) => (
        <Space size="middle">
          {record.attatchment ? <FileDoneOutlined /> : <FileOutlined />} 
          <Button disabled={!record.attatchment}>
            <DownloadOutlined />
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
          <Button type="default" onClick={() => onEdit(record)}>
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

  return ({ obligationRecordColumns });
}
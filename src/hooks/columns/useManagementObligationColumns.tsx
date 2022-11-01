import { Button, Space } from "antd";
import { ConfirmModal } from "../../components/ConfirmModal";
import { DownloadOutlined, FileDoneOutlined, FileOutlined } from "@ant-design/icons";
import { Trash } from "phosphor-react";

import { ColumnsType } from "antd/lib/table/interface";
import { ObligationDataType } from "../../services/CustomerService";

interface UseManagementObligationColumnsProps {
  showDrawer: () => void;
}

export function useManagementObligationColumns({ showDrawer }: UseManagementObligationColumnsProps) {
  const showDeleteConfirm = () => ConfirmModal({
    title: 'Deseja mesmo deletar esse tributo da lista de obrigações ?',
    content: 'Se sim não será possível restaura-lo de imediato. O mesmo pode ser cadastrado novamente na aba de gestão de obrigações.'
  })

  const managementObligationColumns: ColumnsType<ObligationDataType> = [
    {
      title: 'Tributo/Obrigação',
      dataIndex: 'obligation',
      key: 'obligation',
    },
    {
      title: 'Data final de entrega',
      dataIndex: 'finalDeliveryDate',
      key: 'finalDeliveryDate',
    },
    {
      title: 'Anexo',
      key: 'attatchment',
      render: (_, record) => (
        <Space size="middle">
          {record.documentFile ? <FileDoneOutlined /> : <FileOutlined />} 
          <Button disabled={!record.documentFile}>
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
          <Button type="default" onClick={showDrawer}>
            Editar
          </Button>
          <Button
            type="text"
            danger
            onClick={showDeleteConfirm}
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
    managementObligationColumns
  });
}
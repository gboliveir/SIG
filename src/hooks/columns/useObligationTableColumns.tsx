import { DownloadOutlined, FileDoneOutlined, FileOutlined } from "@ant-design/icons";
import { Button, Space, Tag } from "antd";

import { ColumnsType } from "antd/lib/table/interface";
import { ObligationType } from "../../services/CustomerService";

export function useObligationTableColumns() {
  const statusConfig = [
    {
      color: 'green',
      text: 'Entregue'
    },
    {
      color: 'gold',
      text: 'Pendente'
    },
    {
      color: 'red',
      text: 'Atrasado'
    }
  ]

  const obligationTableColumns: ColumnsType<ObligationType> = [
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      width: 150,
      render: (_, record) => {
        const statusCodeConfig = Number(record.status);
        const config = statusConfig[statusCodeConfig - 1];

        return (
          <Tag color={config.color}>
            {config.text}
          </Tag>
        );
      }
    },
    {
      title: 'Data final de entrega',
      dataIndex: 'finalDeliveryDate',
      key: 'finalDeliveryDate',
      width: 150,
    },
    {
      title: 'Tributo/Obrigação',
      dataIndex: 'obligation',
      key: 'obligation',
      width: 200,
    },
    {
      title: 'Anexo',
      key: 'annex',
      width: 150,
      render: (_, record) => (
        <Space size="middle">
          {record.attatchment ? <FileDoneOutlined /> : <FileOutlined />} 
          <Button disabled={!record.attatchment}>
            <DownloadOutlined />
          </Button>
        </Space>
      ),
    }
  ];

  return ({
    obligationTableColumns
  });
}
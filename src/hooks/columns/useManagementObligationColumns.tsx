import { DownloadOutlined, FileDoneOutlined, FileOutlined } from "@ant-design/icons";
import { Button, Space, Tag } from "antd";

import { ColumnsType } from "antd/lib/table/interface";
import { ObligationDataType } from "../../services/CustomerService";

export function useManagementObligationColumns() {
  const managementObligationColumns: ColumnsType<ObligationDataType> = [
    {
      title: 'Tributo/Obrigação',
      dataIndex: 'obligation',
      key: 'obligation',
      width: 200,
    },
    {
      title: 'Data final de entrega',
      dataIndex: 'finalDeliveryDate',
      key: 'finalDeliveryDate',
      width: 150,
    },
    {
      title: 'Anexo',
      key: 'annex',
      width: 150,
      render: (_, record) => (
        <Space size="middle">
          {record.documentFile ? <FileDoneOutlined /> : <FileOutlined />} 
          <Button disabled={!record.documentFile}>
            <DownloadOutlined />
          </Button>
        </Space>
      ),
    }
  ];

  return ({
    managementObligationColumns
  });
}
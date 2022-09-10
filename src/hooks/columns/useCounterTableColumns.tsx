import { PhoneOutlined, WhatsAppOutlined } from "@ant-design/icons";
import { Button, Col, Row, Space, Typography } from "antd";

import { ColumnsType } from "antd/lib/table/interface";
import { CounterTableDataType, ObligationDataType } from "../../services/CounterService";

const { Text, Link } = Typography;

export function useCounterColumns() {
  function onFilter(value: string | number | boolean, record: any): boolean {
    return record.status.includes(String(value));
  }

  function handleOpenModal(obligations: ObligationDataType[]) {
    console.log('Abrindo modal');
  }

  const customerTableColumns: ColumnsType<CounterTableDataType> = [
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      width: 200
    },
    {
      title: 'CNPJ',
      dataIndex: 'cnpj',
      key: 'cnpj',
      width: 200
    },
    {
      title: 'Razão Social',
      dataIndex: 'corporateName',
      key: 'corporateName',
      width: 200
    },
    {
      title: 'Contatos',
      dataIndex: 'contacts',
      key: 'contacts',
      width: 250,
      render: (_, record) => (
        <Row gutter={[0,6]}>
          <Col span={24}>
            <Space>
              <PhoneOutlined />
              <Text>{record.contacts.phoneNumber}</Text>
            </Space>
          </Col>

          <Col span={24}>
            <Space>
              <WhatsAppOutlined />
              <Text>{record.contacts.whatsapp}</Text>
            </Space>
          </Col>

          <Col span={24}>
            <Space>
              <Link
                href={`mailto:${record.contacts.email}`}
                target='_blank'
              >
                {record.contacts.email}
              </Link>
            </Space>
          </Col>
        </Row>
      ),
    },
    {
      title: 'Detalhes',
      key: 'action',
      width: 350,
      render: (_, record) => (
        <Space size="middle">
          <Button type="primary" onClick={() => handleOpenModal(record.obligations)}>
            + Acessar lista de documentações
          </Button>
        </Space>
      ),
    }
  ];

  return ({
    customerTableColumns
  });
}
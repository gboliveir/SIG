import {
  Button,
  Card,
  Layout,
  Space,
  Table,
  Tag,
  Tooltip,
} from 'antd';
import { Header } from '../components/Header';
import { CustomerFilters } from '../components/CustomerFilters';
import { ColumnsType } from "antd/lib/table/interface";
import { DownloadOutlined, FileDoneOutlined, FileOutlined } from '@ant-design/icons';
import { usePainelCustomerController } from '../hooks/controllers/usePainelCustomerController';
import { ObligationType } from '../services/ManagementObligationService';

export function CustomerDashboard() {
  const { obligationData, obligationTagsConfig } = usePainelCustomerController();

  const obligationTableColumns: ColumnsType<ObligationType> = [
    {
      title: 'Nome',
      dataIndex: 'name',
      key: 'name',
      width: 150,
      render: (_, record) => {
        const tagConfig = obligationTagsConfig[record.status];

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
          {record.idDocument ? <FileDoneOutlined /> : <FileOutlined />} 
          <Button disabled={!record.idDocument}>
            <DownloadOutlined />
          </Button>
        </Space>
      ),
    }
  ];

  return (
    <Layout>
      <Header title="Painel do Cliente">
        <CustomerFilters />
      </Header>

      <Layout.Content style={{ margin: '16px 32px' }}>
        <Card title="Clientes" >
          <Table
            rowKey={(record) => `${record.idCompany}-${record.id}`}
            dataSource={obligationData}
            columns={obligationTableColumns}
            pagination={{
              defaultCurrent: 1,
              pageSize: 5
            }}
          />
        </Card>
      </Layout.Content>
    </Layout>
  )
}

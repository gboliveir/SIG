import {
  Button,
  Card,
  Layout,
  Space,
  Table,
  Tag,
  Tooltip,
} from 'antd';
import { Header } from '../../components/Header';
import { HeaderForm } from './HeaderForm';

import { ColumnsType } from "antd/lib/table/interface";

import { DownloadOutlined, FileDoneOutlined, FileOutlined } from '@ant-design/icons';
import { ObligationType } from '../../services/CustomerService';
import { usePainelCustomerController } from '../../hooks/controllers/usePainelCustomerController';

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
          {record.attatchment ? <FileDoneOutlined /> : <FileOutlined />} 
          <Button disabled={!record.attatchment}>
            <DownloadOutlined />
          </Button>
        </Space>
      ),
    }
  ];

  return (
    <Layout>
      <Header title="Painel do Cliente">
        <HeaderForm />
      </Header>

      <Layout.Content style={{ margin: '16px 32px' }}>
        <Card title="Clientes" >
          <Table
            rowKey={(record) => record.id}
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

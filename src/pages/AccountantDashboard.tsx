import {
  Button,
  Card,
  Layout,
  Row,
  Space,
  Table,
  Tag,
  Tooltip,
  Typography,
} from 'antd';
import { ColumnsType } from "antd/lib/table/interface";
import { DownloadOutlined, FileDoneOutlined, FileOutlined } from '@ant-design/icons';
import { usePainelCounterController, UserType } from '../hooks/controllers/usePainelCounterController';
import { CompanyType } from '../services/AccountantService';
import { ObligationType } from '../services/ManagementUserService';
import { AccountantFilters } from '../components/AccountantFilters';
import { Header } from '../components/Header';
import { StandardizedDrawer } from '../components/StandardizedDrawer';

export function AccountantDashboard() {
  const {
    companyData,
    obligationData,
    userData,
    drawerContentType,
    companyTagsConfigs,
    openDrawer,
    closeDrawer,
    obligationTagsConfig
  } = usePainelCounterController();

  const companyTableColumns: ColumnsType<CompanyType> = [
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      width: 200,
      render: (_, record) => {
        const tagConfig = companyTagsConfigs[record.status];

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
      render: (_, record) => (
        <Space size="middle">
          <Button type="dashed" onClick={() => openDrawer('contacts')}>
            + Acessar lista de contatos
          </Button>
        </Space>
      ),
    },
    {
      title: 'Detalhes',
      key: 'details',
      width: 350,
      render: (_, record) => (
        <Space size="middle">
          <Button type="primary" onClick={() => openDrawer('obligations')}>
            + Acessar lista de documentações
          </Button>
        </Space>
      ),
    }
  ];

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

  const userTableColumns: ColumnsType<UserType> = [
    {
      title: 'Nome',
      dataIndex: 'name',
      key: 'name',
      width: 150,
    },
    {
      title: 'CPF',
      dataIndex: 'cpf',
      key: 'cpf',
      width: 200,
    },
    {
      title: 'Contatos',
      key: 'contacts',
      width: 150,
      render: (_, record) => (
        <Row>
          <Typography.Text>{record.email}</Typography.Text>
          <Typography.Text>{record.phoneNumber}</Typography.Text>
          <Typography.Text>{record.whatsapp}</Typography.Text>
        </Row>
      ),
    }
  ];

  const isDrawerOpen = !!drawerContentType;
  const drawerTitle = drawerContentType === 'obligations'
    ? 'Obrigações da organização'
    : 'Usuários vinculados a empresa';

  return (
    <Layout>
      <Header title="Painel do Contador">
        <AccountantFilters />
      </Header>

      <Layout.Content style={{ margin: '16px 32px' }}>
        <Card title="Clientes" >
          <Table
            rowKey={(record) => record.id}
            dataSource={companyData}
            columns={companyTableColumns}
            pagination={{
              defaultCurrent: 1,
              pageSize: 5
            }}
          />
        </Card>

        <StandardizedDrawer
          title={drawerTitle}
          onClose={closeDrawer}
          open={isDrawerOpen}
        >
          {drawerContentType === 'obligations'
            ? (
              <Table
                rowKey={(record) => record.id}
                dataSource={obligationData}
                columns={obligationTableColumns}
              />
            ) : (
              <Table
                rowKey={(record) => record.id}
                dataSource={userData}
                columns={userTableColumns}
              />
            )}
        </StandardizedDrawer>
      </Layout.Content>
    </Layout>
  )
}

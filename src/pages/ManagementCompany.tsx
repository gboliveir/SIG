import {
  Button,
  Card,
  Col,
  Layout,
  Row,
  Space,
  Table,
  Tag,
  Tooltip,
  Typography
} from 'antd';
import { Header } from '../components/Header';
import { CompanyRegistrationForm } from '../components/CompanyRegistrationForm';
import { Trash } from 'phosphor-react';
import { DownloadOutlined, FileDoneOutlined, FileOutlined } from '@ant-design/icons';
import { ConfirmModal } from '../components/ConfirmModal';
import { ColumnsType } from 'antd/lib/table';
import { useManagementCompanyController } from '../hooks/controllers/useManagementCompanyController';
import { StandardizedDrawer } from '../components/StandardizedDrawer';
import { UserType } from '../hooks/controllers/usePainelCounterController';
import { ObligationType } from '../services/ManagementObligationService';
import { ICompany } from '../services/ManagementCompanyService';
import { useEffect } from 'react';

export function ManagementCompany() {
  const {
    extras: {
      form,
      companyTagsConfigs,
      drawerContentType,
      obligationTagsConfig
    },
    methods: {
      handleCreateCompany,
      handleDeleteCompany,
      handleUpdateCompany,
      handleCloseDrawer,
      handleOpenDrawer,
      fetchInit
    },
    states: {
      companiesData,
      contactsData,
      obligationsData
    }
  } = useManagementCompanyController();

  useEffect(() => {
    fetchInit();
  }, []);

  const showDeleteConfirm = (recordId: string) => ConfirmModal({
    title: 'Tem certeza que desaja deletar esta empresa da base de dados do sistema?',
    content: 'Se sim não será possível restaura-la. Todos os seus dados serão perdidos e a mesma só poderá voltar a base de dados mediante um novo cadastro a partir desta tela.',
    onDelete: () => handleDeleteCompany(recordId),
  });

  const companyTableColumns: ColumnsType<ICompany> = [
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      width: 200,
      render: (_, { status = 'neutral' }) => {
        const tagConfig = companyTagsConfigs[status];

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
          <Button type="dashed" onClick={() => handleOpenDrawer('contacts', record.id || '')}>
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
          <Button type="primary" onClick={() => handleOpenDrawer('obligations', record.id || '')}>
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
          <Button type="default" onClick={() => handleUpdateCompany(record)}>
            Editar
          </Button>
          <Button
            type="text"
            onClick={() => showDeleteConfirm(record.id || '')}
            danger
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

  const obligationTableColumns: ColumnsType<ObligationType> = [
    {
      title: 'status',
      dataIndex: 'status',
      key: 'status',
      render: (_, { status = 'neutral' }) => {
        const tagConfig = obligationTagsConfig[status];

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
            {record.develiveryDate}
          </Typography.Text>
        )
      } 
    },
    {
      title: 'Anexo',
      key: 'attatchment',
      render: (_, record) => (
        <Space size="middle">
          {record.idDocument ? <FileDoneOutlined /> : <FileOutlined />} 
          <Button disabled={!record.idDocument}>
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
          <Button type="default">
            Editar
          </Button>
          <Button
            type="text"
            danger
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
    },
    {
      title: 'Ações',
      key: 'action',
      width: 350,
      render: (_, record) => (
        <Space size="middle">
          <Button type="default">
            Editar
          </Button>
          <Button
            type="text"
            danger
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

  const isDrawerOpen = !!drawerContentType;
  const drawerTitle = drawerContentType === 'obligations'
    ? 'Obrigações da organização'
    : 'Usuários vinculados a empresa';

  return (
    <Layout>
      <Header title="Administração de Empresas" />

      <Layout.Content style={{ margin: '16px 32px' }}>
        <Card title="Cadastro de empresas">
          <Row gutter={[24, 0]}>
            <Col span={10}>
              <CompanyRegistrationForm
                form={form}
                onFinish={handleCreateCompany}
              />
            </Col>
            <Col span={14}>
              <Table
                title={() => <Typography.Text strong>Organizações</Typography.Text>}
                rowKey={(record) => `old-item-${record.id}`}
                dataSource={companiesData}
                columns={companyTableColumns}
                pagination={{
                  defaultPageSize: 1,
                  pageSize: 4
                }}
                bordered
              />
            </Col>
          </Row>
        </Card>

        <StandardizedDrawer
          title={drawerTitle}
          onClose={handleCloseDrawer}
          open={isDrawerOpen}
        > 
          {drawerContentType === 'obligations'
            ? (
              <Table
                rowKey={(record) => `${record.idCompany}-${record.id}`}
                dataSource={obligationsData}
                columns={obligationTableColumns}
              />
            ) : (
              <Table
                rowKey={(record) => record.id}
                dataSource={contactsData}
                columns={userTableColumns}
              />
            )}
        </StandardizedDrawer>
      </Layout.Content>
    </Layout>
  )
}

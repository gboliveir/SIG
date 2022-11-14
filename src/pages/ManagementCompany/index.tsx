import moment from 'moment';
import {
  Button,
  Card,
  Col,
  Layout,
  Row,
  Space,
  Table,
  Tabs,
  Tag,
  Tooltip,
  Typography
} from 'antd';
import { Header } from '../../components/Header';
import { HeaderForm } from './HeaderForm';
import { ObligationType } from '../../services/CustomerService';
import { Trash } from 'phosphor-react';
import { DownloadOutlined, FileDoneOutlined, FileOutlined } from '@ant-design/icons';
import { ConfirmModal } from '../../components/ConfirmModal';
import { ColumnsType } from 'antd/lib/table';
import { useManagementCompanyController } from '../../hooks/controllers/useManagementCompanyController';
import { CompanyType } from '../../services/AccountantService';
import { StandardizedDrawer } from '../../components/StandardizedDrawer';
import { UserType } from '../../hooks/controllers/usePainelCounterController';
import { CompanyForm } from '../../components/CompanyForm';

export function ManagementCompany() {
  const {
    form,
    companiesData,
    newCompaniesData,
    obligationTagsConfig,
    handleSubmitForm,
    handleDeleteObligation,
    handleEditObligation,
    openDrawer,
    closeDrawer,
    companyTagsConfigs,
    obligationData,
    drawerContentType,
    userData
  } = useManagementCompanyController();

  const showDeleteConfirm = (recordInfo: ObligationType) => ConfirmModal({
    title: 'Deseja mesmo deletar esse tributo da lista de obrigações ?',
    content: 'Se sim não será possível restaura-lo de imediato. O mesmo pode ser cadastrado novamente na aba de gestão de obrigações.',
    onDelete: () => handleDeleteObligation(recordInfo),
  })

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

  const obligationTableColumns: ColumnsType<ObligationType> = [
    {
      title: 'status',
      dataIndex: 'status',
      key: 'status',
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
          <Button type="default" onClick={() => handleEditObligation(record)}>
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

  const items = [
    {
      key: 'companies-tab-1',
      label: 'Itens para criação',
      children: (
        <Table
          title={() => (
            <Row justify='space-between'>
              <Typography.Text strong>Obrigações</Typography.Text>
              <Tooltip title="Cadastre todas as organizações listadas abaixo.">
                <Button disabled={newCompaniesData.length === 0}>Criar empresas</Button>
              </Tooltip>
            </Row>
          )}
          rowKey={(record) => `new-item-${record.id}`}
          dataSource={newCompaniesData}
          columns={companyTableColumns}
          pagination={{
            defaultPageSize: 1,
            pageSize: 4
          }}
          bordered
        />
      )
    },
    {
      key: 'companies-tab-2',
      label: 'Itens já criados',
      children: (
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
      )
    },
  ];

  const isDrawerOpen = !!drawerContentType;
  const drawerTitle = drawerContentType === 'obligations'
    ? 'Obrigações da organização'
    : 'Usuários vinculados a empresa';

  return (
    <Layout>
      <Header title="Administração de Empresas">
        <HeaderForm />
      </Header>

      <Layout.Content style={{ margin: '16px 32px' }}>
        <Card title="Cadastro de organizações">
          <Row gutter={[24, 0]}>
            <Col span={10}>
              <CompanyForm form={form} onFinish={handleSubmitForm} />
            </Col>
            <Col span={14}>
              <Tabs items={items} />
            </Col>
          </Row>
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

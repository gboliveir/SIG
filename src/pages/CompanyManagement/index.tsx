import { useContext, useState } from 'react';

import {
  Button,
  Card,
  Col,
  Form,
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

import { CompanyForm } from '../ManagementCompany/CompanyForm';
import { CompanyType } from '../../services/AccountantService';
import { Trash } from 'phosphor-react';
import { ColumnsType } from 'antd/lib/table/interface';
import { UserEditingDrawerContext } from '../../contexts/UserEditingDrawerContext';
import { UserDocumentationsDrawerContext } from '../../contexts/UserDocumentationsDrawerContext';
import { ConfirmModal } from '../../components/ConfirmModal';

export function CompanyManagement() {
  const [form] = Form.useForm();
  const [companiesData, setCompaniesData] = useState<CompanyType[]>([]);
  const [newCompaniesData, setNewCompaniesData] = useState<CompanyType[]>([]);
  const { showDrawer } = useContext(UserEditingDrawerContext);
  const { showDocumentationDrawer } = useContext(UserDocumentationsDrawerContext);
  const tagConfigs = {
    overdue: {
      color: 'red',
      tooltipTitle: 'A data final de entrega para está documentação já passou, por essa razão a mesma será cadastrada como "Atrasada". Todo e qualquer cliente que tiver vinculo com está obrigação terá seu status geral atualizado para "Em atraso".',
      text: 'Atrasada'
    },
    pending: {
      color: 'yellow',
      tooltipTitle: 'A data final de entrega para está documentação ainda não passou, por essa razão a mesma será cadastrada como "Pendente". Todo e qualquer cliente que tiver vinculo com está obrigação terá seu status geral atualizado para "Em dias".',
      text: 'Pendente'
    },
    inDays: {
      color: 'green',
      tooltipTitle: 'A data final de entrega para está documentação ainda não passou, por essa razão a mesma será cadastrada como "Pendente". Todo e qualquer cliente que tiver vinculo com está obrigação terá seu status geral atualizado para "Em dias".',
      text: 'Em dias'
    }
  }

  function onDelete(recordInfo: CompanyType) {

  }

  const showDeleteConfirm = (recordInfo: CompanyType) => ConfirmModal({
    title: 'Deseja mesmo deletar este cliente da base de dados?',
    content: 'Caso SIM o cliente e todas as obrigações vinculadas ao mesmo serão permanentemente deletadas. Apenas com um novo cadastro será spossível adiciona-lo novamente a base de dados da empresa.',
    onDelete: () => onDelete(recordInfo)
  })

  const companyTableColumns: ColumnsType<CompanyType> = [
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      width: 200,
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
    },
    {
      title: 'Detalhes',
      key: 'details',
      width: 350,
      render: (_, record) => (
        <Space size="middle">
          <Button type="primary" onClick={showDocumentationDrawer}>
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
          <Button type="default" onClick={() => showDrawer(record)}>
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

  const items = [
    {
      key: 'company-tab-1',
      label: 'Itens para criação',
      children: (
        <Table
          title={() => (
            <Row justify='space-between'>
              <Typography.Text strong>Empresas</Typography.Text>
              <Tooltip title="Cadastrar todas as empresas listadas abaixo.">
                <Button disabled={newCompaniesData.length === 0}>Adicionar empresas</Button>
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
      key: 'company-tab-2',
      label: 'Itens já criados',
      children: (
        <Table
          title={() => <Typography.Text strong>Empresas</Typography.Text>}
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

  function onFinish() {
    
  }

  return (
    <Layout>
      <Header title="Administração de Empresas">
        <HeaderForm />
      </Header>

      <Layout.Content style={{ margin: '16px 32px' }}>
        <Card title="Gestão de empresas">
          <Row gutter={[24, 0]}>
            <Col span={10}>
              <CompanyForm form={form} onFinish={onFinish} />
            </Col>
            <Col span={14}>
              <Tabs items={items} />
            </Col>
          </Row>
        </Card>
      </Layout.Content>
    </Layout>
  )
}

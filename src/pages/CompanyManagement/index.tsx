import { useState } from 'react';

import {
  Button,
  Card,
  Col,
  Form,
  Layout,
  Row,
  Table,
  Tabs,
  Tooltip,
  Typography
} from 'antd';
import { Header } from '../../components/Header';
import { HeaderForm } from './HeaderForm';

import { CompanyForm } from './CompanyForm';
import { CompanyType } from '../../services/AccountantService';
import { useCompanyTableColumns } from '../../hooks/columns/useCounterTableColumns';

export function CompanyManagement() {
  const [form] = Form.useForm();
  const [companiesData, setCompaniesData] = useState<CompanyType[]>([]);
  const [newCompaniesData, setNewCompaniesData] = useState<CompanyType[]>([]);
  const { companyTableColumns } = useCompanyTableColumns({ onDelete, onEdit });

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

  function handleFinishForm(company: CompanyType) {
   
  }

  function onDelete(record: CompanyType) {
   
  };

  function onEdit(company: CompanyType) {

  }

  return (
    <Layout>
      <Header title="Administração de Empresas">
        <HeaderForm />
      </Header>

      <Layout.Content style={{ margin: '16px 32px' }}>
        <Card title="Cadastro de empresas">
          <Row gutter={[24, 0]}>
            <Col span={10}>
              <CompanyForm form={form} onFinish={handleFinishForm} />
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

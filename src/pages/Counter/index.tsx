import { useEffect, useState } from 'react';
import axios from 'axios';

import {
  Card,
  Layout,
  PageHeader,
  Table,
  Typography
} from 'antd';

import { useCounterColumns } from '../../hooks/columns/useCounterTableColumns';

import { HeaderForm } from './HeaderForm';

const { Header, Content } = Layout;
const { Title } = Typography;

interface ContactType {
  id: string;
  customerId: string;
  contact: string;
  type: string;
}

export interface CustomerType {
  id: string;
  cnpj: string;
  name: string;
  status: string;
  contacts: ContactType[],
}

export function Counter() {
  const [customerDataList, setCustomerDataList] = useState<CustomerType[] | undefined>();
  const { customerTableColumns } = useCounterColumns();

  useEffect(() => {
    axios('http://localhost:3333/customers').then(response => {
      setCustomerDataList(response.data);
    })
  }, []);

  return (
    <Layout>
      <Header
        style={{
          zIndex: 1,
          width: '100%',
          height: 180,
          backgroundColor: 'white',
          padding: '12px 24px 0',
          marginBottom: 16
        }}
      >
        <PageHeader title={<Title>Painel do Contador</Title>} />
        <HeaderForm />
      </Header>

      <Content style={{ margin: '16px 32px' }}>
        <Card title="Clientes" >
          <Table
            rowKey={(record) => record.id}
            dataSource={customerDataList}
            columns={customerTableColumns}
          />
        </Card>
      </Content>
    </Layout>
  )
}

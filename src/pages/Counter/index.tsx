import { useEffect, useState } from 'react';

import {
  Card,
  Layout,
  PageHeader,
  Table,
  Typography
} from 'antd';
import { HeaderForm } from './HeaderForm';

import { useCounterColumns } from '../../hooks/columns/useCounterTableColumns';

import { AccountantService, CustomerType } from '../../services/AccountantService';

import { customers } from '../../Constants/customers';

const { Header, Content } = Layout;
const { Title } = Typography;

export function Counter() {
  const [customerDataList, setCustomerDataList] = useState<CustomerType[] | undefined>(customers);

  const { customerTableColumns } = useCounterColumns();
  const accountantService = new AccountantService();

  useEffect(() => {
    // accountantService.getCustomers().then(setCustomerDataList);
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
            pagination={{
              defaultCurrent: 1,
              pageSize: 5
            }}
          />
        </Card>
      </Content>
    </Layout>
  )
}

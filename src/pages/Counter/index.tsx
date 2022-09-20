import { useState } from 'react';

import {
  Card,
  Layout,
  PageHeader,
  Table,
  Typography
} from 'antd';

import { useCounterColumns } from '../../hooks/columns/useCounterTableColumns';

import {
  CounterTableDataType,
  getCustomerTableData
} from '../../services/CounterService';
import { HeaderForm } from './HeaderForm';

const { Header, Content } = Layout;
const { Title } = Typography;

export function Counter() {
  const [customerDataList, setCustomerDataList] = useState<CounterTableDataType[] | undefined>(
    () => {
      const customerTableData = getCustomerTableData();

      return customerTableData;
    }
  );

  const { customerTableColumns } = useCounterColumns();

  return (
    <Layout>
      <Header
        style={{
          zIndex: 1,
          width: '100%',
          height: 180,
          backgroundColor: 'white',
          padding: '12px 24px 0'
        }}
      >
        <PageHeader
          className='pageHeader'
          title={<Title>Painel do Contador</Title>}
        />
        <HeaderForm />
      </Header>

      <Content
        style={{
          margin: '24px 16px',
          padding: 24
        }}
      >
        <Card title="Clientes">
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

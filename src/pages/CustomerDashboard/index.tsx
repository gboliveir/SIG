import { useEffect, useState } from 'react';

import {
  Card,
  Layout,
  PageHeader,
  Table,
  Typography
} from 'antd';
import { HeaderForm } from './HeaderForm';

import { CustomerService } from '../../services/CustomerService';
import { useObligationTableColumns } from '../../hooks/columns/useObligationTableColumns';
import { ObligationDataType } from '../../services/CustomerService';

const { Header, Content } = Layout;
const { Title } = Typography;

export function CustomerDashboard() {
  const [obligationDataList, setObligationDataList] = useState<ObligationDataType[] | undefined>();

  const { obligationTableColumns } = useObligationTableColumns();
  const customerService = new CustomerService();

  useEffect(() => {
    customerService.getObligations().then(setObligationDataList);
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
        <PageHeader title={<Title>Painel do Cliente</Title>} />
        <HeaderForm />
      </Header>

      <Content style={{ margin: '16px 32px' }}>
        <Card title="Obrigações" >
          <Table
            rowKey={(record) => record.id}
            dataSource={obligationDataList}
            columns={obligationTableColumns}
          />
        </Card>
      </Content>
    </Layout>
  )
}

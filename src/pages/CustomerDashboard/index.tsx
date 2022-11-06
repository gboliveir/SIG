import { useEffect, useState } from 'react';

import {
  Card,
  Layout,
  Table,
} from 'antd';
import { Header } from '../../components/Header';
import { HeaderForm } from './HeaderForm';

import { CustomerService } from '../../services/CustomerService';
import { ObligationType } from '../../services/CustomerService';

import { useObligationTableColumns } from '../../hooks/columns/useObligationTableColumns';

export function CustomerDashboard() {
  const [obligationDataList, setObligationDataList] = useState<ObligationType[] | undefined>();

  const { obligationTableColumns } = useObligationTableColumns();
  const customerService = new CustomerService();

  useEffect(() => {
    customerService.getObligations().then(setObligationDataList);
  }, []);

  return (
    <Layout>
      <Header title="Painel do Cliente">
        <HeaderForm />
      </Header>

      <Layout.Content style={{ margin: '16px 32px' }}>
        <Card title="Obrigações" >
          <Table
            rowKey={(record) => record.id}
            dataSource={obligationDataList}
            columns={obligationTableColumns}
          />
        </Card>
      </Layout.Content>
    </Layout>
  )
}

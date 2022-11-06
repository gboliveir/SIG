import { useEffect, useState } from 'react';

import {
  Card,
  Layout,
  Table,
} from 'antd';
import { Header } from '../../components/Header';
import { HeaderForm } from './HeaderForm';
import { UserEditingDrawer } from './UserEditingDrawer';

import { useCounterColumns } from '../../hooks/columns/useCounterTableColumns';

import { AccountantService, CustomerType } from '../../services/AccountantService';

import { customers } from '../../Constants/customers';
import { UserDocumentationsDrawer } from './UserDocumentationsDrawer';

export function AccountantDashboard() {
  const [customerDataList, setCustomerDataList] = useState<CustomerType[] | undefined>(customers);

  const { customerTableColumns } = useCounterColumns({ onDelete, onEdit });
  const accountantService = new AccountantService();

  function onDelete(record: CustomerType) {

  }

  function onEdit(obligation: CustomerType) {

  }

  useEffect(() => {
    // accountantService.getCustomers().then(setCustomerDataList);
  }, []);

  return (
    <Layout>
      <Header title="Painel do Contador">
        <HeaderForm />
      </Header>

      <Layout.Content style={{ margin: '16px 32px' }}>
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
        <UserEditingDrawer />
        <UserDocumentationsDrawer />
      </Layout.Content>
    </Layout>
  )
}

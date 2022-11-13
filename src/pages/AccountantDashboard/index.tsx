import { useEffect, useState } from 'react';

import {
  Card,
  Layout,
  Table,
} from 'antd';
import { Header } from '../../components/Header';
import { HeaderForm } from './HeaderForm';
import { UserEditingDrawer } from './UserEditingDrawer';

import { useCompanyTableColumns } from '../../hooks/columns/useCounterTableColumns';

import { AccountantService, CompanyType } from '../../services/AccountantService';

import { customers } from '../../Constants/customers';
import { UserDocumentationsDrawer } from './UserDocumentationsDrawer';

export function AccountantDashboard() {
  const [customerDataList, setCustomerDataList] = useState<CompanyType[] | undefined>([]);

  const { companyTableColumns } = useCompanyTableColumns({ onDelete, onEdit });
  const accountantService = new AccountantService();

  function onDelete(record: CompanyType) {

  }

  function onEdit(obligation: CompanyType) {

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
            columns={companyTableColumns}
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

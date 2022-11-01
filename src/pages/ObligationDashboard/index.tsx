import { useState } from 'react';

import {
  Card,
  Layout,
  Table,
} from 'antd';
import { Header } from '../../components/Header';
import { HeaderForm } from './HeaderForm';

import { ObligationDataType } from '../../services/CustomerService';
import { useManagementObligationColumns } from '../../hooks/columns/useManagementObligationColumns';
import { managementObligations } from '../../Constants/managementObligations';
import { ObligationForm } from './ObligationForm';
import { StandardizedDrawer } from '../../components/StandardizedDrawer';

export function ObligationDashboard() {
  const [managementObligationsDatalist, setManagementObligationsDatalist] = useState<ObligationDataType[] | undefined>(managementObligations);
  const [open, setOpen] = useState(false);  
  const { managementObligationColumns } = useManagementObligationColumns({ showDrawer });

  function onClose() {
    setOpen(false);
  }

  function showDrawer() {
    setOpen(true);
  }

  return (
    <Layout>
      <Header title="Controle de Obrigações">
        <HeaderForm />
      </Header>

      <Layout.Content style={{ margin: '16px 32px' }}>
        <Card title="Obrigações" >
          <Table
            rowKey={(record) => record.id}
            dataSource={managementObligationsDatalist}
            columns={managementObligationColumns}
          />
        </Card>
      </Layout.Content>
      <StandardizedDrawer
        title="Obrigação 1"
        open={open}
        onClose={onClose}
      >
        <ObligationForm />
      </StandardizedDrawer>
    </Layout>
  )
}

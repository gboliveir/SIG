import { useState } from 'react';
import moment from 'moment';

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

import { ObligationType, StatusType } from '../../services/CustomerService';
import { useManagementObligationColumns } from '../../hooks/columns/useManagementObligationColumns';
import { obligations } from '../../Constants/obligations';
import { ObligationForm } from './ObligationForm';

export function ObligationDashboard() {
  const [form] = Form.useForm();
  const [obligationsData, setObligationsData] = useState<ObligationType[]>(obligations);
  const [newObligationsData, setNewObligationsData] = useState<ObligationType[]>([]);
  const { obligationRecordColumns } = useManagementObligationColumns({ onDelete, onEdit });

  const items = [
    {
      key: 'obligations-tab-1',
      label: 'Itens para criação',
      children: (
        <Table
          title={() => (
            <Row justify='space-between'>
              <Typography.Text strong>Obrigações</Typography.Text>
              <Tooltip title="Crie todas as obrigações listadas abaixo.">
                <Button disabled={newObligationsData.length === 0}>Criar Obrigações</Button>
              </Tooltip>
            </Row>
          )}
          rowKey={(record) => `new-item-${record.id}`}
          dataSource={newObligationsData}
          columns={obligationRecordColumns}
          pagination={{
            defaultPageSize: 1,
            pageSize: 4
          }}
          bordered
        />
      )
    },
    {
      key: 'obligations-tab-2',
      label: 'Itens já criados',
      children: (
        <Table
          title={() => <Typography.Text strong>Obrigações</Typography.Text>}
          rowKey={(record) => `old-item-${record.id}`}
          dataSource={obligationsData}
          columns={obligationRecordColumns}
          pagination={{
            defaultPageSize: 1,
            pageSize: 4
          }}
          bordered
        />
      )
    },
  ];

  function handleFinishForm(obligation: ObligationType) {
    const status: StatusType = obligation.finalDeliveryDate < moment() ? 'Atrasada' : 'Pendente';
    const newObligations: ObligationType = {
      ...obligation,
      status
    }

    console.log(newObligations);

    setNewObligationsData((state) => [...state, newObligations])
  }

  function onDelete(record: ObligationType) {
    record.id
      ? setObligationsData((state) => state.filter((item) => item.id !== record.id)) 
      : setNewObligationsData((state) => state.filter((item) => item.name !== record.name));
  }

  function onEdit(obligation: ObligationType) {
    const activedObligation = obligations.find((item) => item.id === obligation.id);

    form.setFieldsValue({
      name: obligation.name,
      finalDeliveryDate: obligation.finalDeliveryDate,
      attatchment: obligation.attatchment
    });
  }

  return (
    <Layout>
      <Header title="Administração de Obrigações">
        <HeaderForm />
      </Header>

      <Layout.Content style={{ margin: '16px 32px' }}>
        <Card title="Cadastro de obrigação">
          <Row gutter={[24, 0]}>
            <Col span={10}>
              <ObligationForm form={form} onFinish={handleFinishForm} />
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

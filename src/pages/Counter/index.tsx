import { useState } from 'react';

import {
  Button,
  Card,
  Form,
  Layout,
  PageHeader,
  Select,
  Table,
  Typography
} from 'antd';

import { useCounterColumns } from '../../hooks/columns/useCounterTableColumns';

import {
  CounterTableDataType,
  getCNPJFilterData,
  getCounterTableData,
  getCustomerFilterData,
  getStatusFilterData
} from '../../services/CounterService';

import { DefaultOptionType } from 'antd/lib/select';

const { Header, Content } = Layout;
const { Title } = Typography;

export function Counter() {
  const [customerDataList, setCustomerDataList] = useState<CounterTableDataType[] | undefined>(
    () => {
      const counterTableData = getCounterTableData();

      return counterTableData;
    }
  );
  const [customerFilterList, setCustomerFilterList] = useState<DefaultOptionType[]>(
    () => {
      const counterTableData = getCustomerFilterData();

      return counterTableData;
    }
  );
  const [statusFilterList, setStatusFilterList] = useState<DefaultOptionType[]>(
    () => {
      const statusFilterData = getStatusFilterData();

      return statusFilterData;
    }
  );
  const [CNPJFilterList, setCNPJFilterList] = useState<DefaultOptionType[]>(
    () => {
      const cnpjFilterData = getCNPJFilterData();

      return cnpjFilterData;
    }
  );

  const { customerTableColumns } = useCounterColumns();

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

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
        <PageHeader className='pageHeader' title={<Title>Painel do Contador</Title>} />

        <Form
          name='pageHeaderForm'
          onFinish={onFinish}
          style={{
            display: 'flex', 
            padding: '0 24px', 
            gap: '20px'
          }}
        >
          <Form.Item
            label="Cliente"
            name="client"
          >
            <Select
              style={{ minWidth: 150 }}
              showSearch
              allowClear
              mode='multiple'
              maxTagCount={3}
              optionFilterProp='label'
              options={customerFilterList}
            />
          </Form.Item>

          <Form.Item
            label="CNPJ"
            name="cnpj"
          >
            <Select
              style={{ minWidth: 150 }}
              showSearch
              allowClear
              mode='multiple'
              maxTagCount={3}
              optionFilterProp='label'
              options={CNPJFilterList}
            />
          </Form.Item>

          <Form.Item
            label="Status"
            name="status"
          >
            <Select
              style={{ minWidth: 150 }}
              showSearch
              allowClear
              mode='multiple'
              maxTagCount={3}
              optionFilterProp='label'
              options={statusFilterList}
            />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button
              type="primary"
              htmlType="submit"
            >
              Filtrar
            </Button>
          </Form.Item>
        </Form>
      </Header>

      <Content
        style={{
          margin: '24px 16px',
          padding: 24
        }}
      >
        <Card title="Clientes">
          <Table
            dataSource={customerDataList}
            columns={customerTableColumns}
          />
        </Card>
      </Content>
    </Layout>
  )
}

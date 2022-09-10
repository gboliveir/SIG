import { useState } from 'react';

import { Button, Form, Select } from 'antd';

import { DefaultOptionType } from 'antd/lib/select';

import {
  getCNPJFilterData,
  getCustomerFilterData,
  getStatusFilterData
} from '../../../services/CounterService';

export function HeaderForm() {
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

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  return (
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
  );
}
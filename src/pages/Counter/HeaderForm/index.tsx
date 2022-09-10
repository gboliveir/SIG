import { useState } from 'react';

import { Button, Form, Select } from 'antd';

import { DefaultOptionType } from 'antd/lib/select';

import {
  getCNPJFilterData,
  getCustomerFilterData,
  getStatusFilterData
} from '../../../services/CounterService';
import { FormItem } from '../FormItem';

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
      <FormItem 
        label='Cliente'
        name='client'
        options={customerFilterList}
      />

      <FormItem 
        label='CNPJ'
        name='cnpj'
        options={CNPJFilterList}
      />

      <FormItem 
        label='Status'
        name='status'
        options={statusFilterList}
      />

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
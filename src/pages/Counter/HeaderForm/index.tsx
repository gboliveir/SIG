import { useEffect, useState } from 'react';

import { Button, Form } from 'antd';
import { FormItem } from '../FormItem';

import { DefaultOptionType } from 'antd/lib/select';

import { FilterService } from '../../../services/FilterService';

export function HeaderForm() {
  const [customerFilterList, setCustomerFilterList] = useState<DefaultOptionType[]>([]);
  const [CNPJFilterList, setCNPJFilterList] = useState<DefaultOptionType[]>([]);
  const [statusFilterList, setStatusFilterList] = useState<DefaultOptionType[]>([]);

  const filterService = new FilterService();

  useEffect(() => {
    filterService.getCustomerOptions().then(setCustomerFilterList);
    filterService.getCNPJOptions().then(setCNPJFilterList);
    filterService.getStatusOptions().then(setStatusFilterList);
  }, []);

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
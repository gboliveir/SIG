import { useState } from 'react';

import { Button, DatePicker, Form } from 'antd';
import { StandardizedSelection } from './StandardizedSelection';

import { DefaultOptionType } from 'antd/lib/select';

export function ManagementObligationFilters() {
  const [namelist, setNameList] = useState<DefaultOptionType[]>([]);
  const [dateList, setDateList] = useState<DefaultOptionType[]>([]);

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  return (
    <Form
      name='management-obligation-form'
      onFinish={onFinish}
      style={{
        display: 'flex', 
        padding: '0 24px', 
        gap: '20px'
      }}
    >
      <StandardizedSelection 
        label='Tributo'
        name='obligation'
        options={namelist}
      />

      <Form.Item
        label='Data'
        name='date'
      >
        <DatePicker />
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
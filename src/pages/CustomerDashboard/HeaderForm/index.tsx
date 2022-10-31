import { useEffect, useState } from 'react';

import { Button, Form } from 'antd';

import { DefaultOptionType } from 'antd/lib/select';

import { FilterService } from '../../../services/FilterService';
import { StandardizedSelection } from '../../../components/StandardizedSelection';

export function HeaderForm() {
  const [statusFilterList, setStatusFilterList] = useState<DefaultOptionType[]>([]);

  const filterService = new FilterService();

  useEffect(() => {
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
      <StandardizedSelection 
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
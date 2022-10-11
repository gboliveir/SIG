import { Form, Select } from 'antd';

import { ReactNode } from 'react';
import { NamePath } from 'antd/es/form/interface';
import { DefaultOptionType } from 'antd/lib/select';

interface FormItemsProps {
  label: ReactNode
  name: NamePath
  options: DefaultOptionType[]
  mode?: "multiple" | "tags"
};

export function FormItem({
  label,
  name,
  options,
  mode = "multiple"
}: FormItemsProps) {
  return (
    <Form.Item
      label={label}
      name={name}
    >
      <Select
        style={{ minWidth: 150 }}
        showSearch
        allowClear
        mode={mode}
        maxTagCount={3}
        optionFilterProp='label'
        options={options}
      />
    </Form.Item>
  );
}
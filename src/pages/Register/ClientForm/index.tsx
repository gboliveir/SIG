import { Button, Card, Form, Input, Tabs } from "antd";
import { CompanyType } from "../../../services/AccountantService";

interface ClientFormProps {
  initialValues?: CompanyType;
  submitBtnText?: String;
}

type CustomerFormType = {
  name: string;
  cnpj: string;
  email: string;
  emailValidation: string;
  password: string;
  passwordValidation: string;
  whatsapp: string;
  phoneNumber: string;
}

export function ClientForm({ initialValues, submitBtnText='Criar' }: ClientFormProps) {
  const [form] = Form.useForm<CustomerFormType>();
  const initialFormValues: CustomerFormType = {
    name: initialValues?.name || '',
    cnpj: initialValues?.cnpj || '',
    email: '',
    emailValidation: '',
    password: '',
    passwordValidation: '',
    whatsapp: '',
    phoneNumber: ''
  }

  const items = [
    {
      key: 'whatsapp',
      label: 'Whatsapp',
      children: (
        <Form.Item name="whatsapp">
          <Input placeholder="Insira aqui um numero para Whatsapp" />
        </Form.Item>
      )
    },
    {
      key: 'phoneNumber',
      label: 'Telefone',
      children: (
        <Form.Item name="phoneNumber">
          <Input placeholder="Insira aqui um numero de telefone" />
        </Form.Item>
      )
    }
  ];

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Card style={{ width: 600 }}>
      <Form
        name="register-client-form"
        layout="vertical"
        form={form}
        initialValues={initialFormValues}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Razão Social"
          name="name"
          rules={[{ required: true, message: 'Por favor, insira o nome da empresa!' }]}
        >
          <Input placeholder="Insira aqui o nome da empresa" />
        </Form.Item>

        <Form.Item
          label="CNPJ"
          name="cnpj"
          rules={[{ required: true, message: 'Por favor, insira o cnpj!' }]}
        >
          <Input placeholder="Insira aqui o cnpj" />
        </Form.Item>

        <Form.Item
          label="E-mail"
          name="email"
          rules={[{ required: true, message: 'Por favor, insira um e-mail para futuro acesso!' }]}
        >
          <Input placeholder="Insira aqui o e-mail" />
        </Form.Item>

        <Form.Item
          label="Validação de e-mail"
          name="emailValidation"
          rules={[{ required: true, message: 'Por favor, repita aqui seu e-mail para validação!' }]}
        >
          <Input placeholder="Insira novamente o e-mail" />
        </Form.Item>

        <Form.Item
          label="Senha"
          name="password"
          rules={[{ required: true, message: 'Por favor, insira uma senha!' }]}
        >
          <Input.Password placeholder="Insira aqui a senha" />
        </Form.Item>

        <Form.Item
          label="Validação de senha"
          name="passwordValidation"
          rules={[{ required: true, message: 'Por favor, repita aqui sua senha para validação!' }]}
        >
          <Input.Password placeholder="Insira novamente a senha" />
        </Form.Item>

        <Form.Item>
          <Tabs
            defaultActiveKey="1"
            items={items}
          />  
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{ width: '100%', height: 40 }}
          >
            {submitBtnText}
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}
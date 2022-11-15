import { Button, Card, Form, Input, Tabs } from "antd";
import { FormInstance } from "antd/es/form/Form";

interface CompanyFormData {
  form: FormInstance;
  onFinish: (values: any) => void;
}

export function UserRegistrationForm({ form, onFinish }: CompanyFormData) {
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

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Card
      bodyStyle={{
        maxHeight: 500,
        overflowX: 'auto'
      }}
    >
       <Form
        name="register-client-form"
        layout="vertical"
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Nome"
          name="name"
          rules={[{ required: true, message: 'Por favor, insira o nome do usuario!' }]}
        >
          <Input placeholder="Insira aqui o nome do usuário" />
        </Form.Item>

        <Form.Item
          label="CPF"
          name="cpf"
          rules={[{ required: true, message: 'Por favor, insira o CPF!' }]}
        >
          <Input placeholder="Insira aqui o CPF do usuário" />
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
            Adicionar
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}
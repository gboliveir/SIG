import { Button, Card, Form, Input, Typography } from "antd";

const { Title } = Typography;

export function SectionContactUs() {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <section
      style={{
        maxWidth: 400,
        margin: 'auto',
        textAlign: 'center',
        background: '#364d79',
        padding: 100
      }}
    >
      <Card
        bordered
      >
        <Title
          style={{ 
            color: 'purple',
            fontFamily: 'Rozha One, serif',
            fontSize: '2.75rem',
          }}
        >
          Contate-nos
        </Title>

        <Form
          name="basic"
          layout="vertical"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Nome"
            name="name"
            rules={[{ required: true, message: 'Por favor, insira seu nome!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="E-mail"
            name="email"
            rules={[{ required: true, message: 'Por favor, insira um e-mail para contato!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Número"
            name="phoneNumber"
            rules={[{ required: true, message: 'Por favor, insira um número para contato!' }]}
            style={{ marginBottom: 50 }}
          >
            <Input />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Enviar
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </section>
  );
}
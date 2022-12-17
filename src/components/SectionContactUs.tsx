import { Button, Card, Form, Input } from "antd";
import { ManagementUserService } from "../services/ManagementUserService";
import { Title } from "./Title";

const { TextArea } = Input;

export function SectionContactUs() {
  const customerService = new ManagementUserService();
  const [form] = Form.useForm()

  const onFinish = async (values: any) => {
    const initialValues = {
      description: undefined,
      name: undefined,
      email: undefined,
      phoneNumber: undefined
    }

    // await customerService.setCustomerMessage(values)

    form.setFieldsValue(initialValues)
  };

  return (
    <section
      id="contact_us"
      style={{
        background: 'white',
        padding: 100
      }}
    >
      <Card
        bordered
        style={{
          maxWidth: 400,
          margin: 'auto',
          textAlign: 'center'
        }}
      >
        <Title text="Contate-nos" />
        <Form
          name="basic"
          layout="vertical"
          form={form}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Nome"
            name="name"
            rules={[{ required: true, message: 'Por favor, insira seu nome!' }]}
          >
            <Input type="text" />
          </Form.Item>

          <Form.Item
            label="E-mail"
            name="email"
            rules={[{ required: true, type: 'email', message: 'Por favor, insira um e-mail valido para contato!' }]}
          >
            <Input type="email" />
          </Form.Item>

          <Form.Item
            label="Número"
            name="phoneNumber"
            rules={[{ required: true, message: 'Por favor, insira um número para contato!' }]}
          >
            <Input type="tel" placeholder="88999457684" />
          </Form.Item>

          <Form.Item
            label="Descrição"
            name="description"
            rules={[{ required: true, message: 'Por favor, descreva o seu problema ou interesse especifico!' }]}
            style={{ marginBottom: 50 }}
          >
            <TextArea />
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
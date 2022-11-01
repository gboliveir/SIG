import { Button, Card, Form, Input } from "antd";
import { UploadButton } from "../UploadButton";

export function ObligationForm() {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Card style={{ width: 600 }}>
      <Form
        name="obligation-form"
        layout="vertical"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Tributo/Obrigação"
          name="obligation"
          rules={[{ required: true, message: 'Por favor, insira um nome!' }]}
        >
          <Input placeholder="Insira aqui o nome" />
        </Form.Item>

        <Form.Item
          label="Data final de entrega"
          name="finalDeliveryDate"
          rules={[{ required: true, message: 'Por favor, insira um e-mail para futuro acesso!' }]}
        >
          <Input placeholder="Insira aqui o e-mail" />
        </Form.Item>

        <Form.Item
          label="Anexo"
          name="attatchment"
          rules={[{ required: true, message: 'Por favor, repita aqui seu e-mail para validação!' }]}
        >
          <UploadButton 
            name="obligations-file"
            multiple={false}
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{ width: '100%', height: 40 }}
          >
            Salvar
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}
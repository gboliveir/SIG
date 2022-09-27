import { Card, Form, Button, Checkbox, Input, Row, Col  } from "antd";
import { Key, User } from "phosphor-react";

export function Login() {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Row
      justify="center"
      align="middle"
      style={{ height: '100%' }}
    >
      <Col>
        <Card title="Conecte-se" style={{ width: 600 }}>
          <Form
            name="login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="E-mail"
              name="email"
              rules={[{ required: true, message: 'Por favor, insira seu e-mail!' }]}
            >
              <Input
                prefix={<User size={15} />}
                placeholder="Insira aqui seu e-mail já cadastrado"
              />
            </Form.Item>

            <Form.Item
              label="Senha"
              name="password"
              rules={[{ required: true, message: 'Por favor, insira sua senha!' }]}
            >
              <Input.Password 
                prefix={<Key size={15} />}
                placeholder="Insira aqui sua senha"
              />
            </Form.Item>

            <Form.Item>
              <Form.Item
                name="remember"
                valuePropName="checked"
                style={{ marginRight: 'auto' }}
              >
                <Checkbox>Lembre dos meus dados</Checkbox>
              </Form.Item>

              <a href="" style={{ right: 0 }}>
                Esqueceu a senha?
              </a>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: '100%', height: 40 }}
              >
                Entrar
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
}
import { Card, Form, Button, Checkbox, Input, Col, Row, Typography  } from "antd";
import { Key, User } from "phosphor-react";
import { HomeHeader } from "../components/HomeHeader";
import { Logo } from "../components/Logo";
import { useLoginController } from "../hooks/controllers/useLoginController";

export function Login() {
  const { onFinish, form } = useLoginController()

  return (
    <div>
      <HomeHeader />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', background: '#364d79' }}>
        <Card title="Conecte-se" style={{ width: 600, margin: 20 }}>
          <Row>
            <Col span={24} style={{ marginBottom: 20 }}>
              <Logo style={{ marginBottom: 20 }} />
              <Typography.Text>Entre com seu E-mail e senha para ter acesso aos Paineis de Acompanhamento da LM Contabilidade.</Typography.Text>
            </Col>

            <Col span={24}>
              <Form
                name="login"
                layout="vertical"
                form={form}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                autoComplete="off"
              >
                <Form.Item
                  label="E-mail"
                  name="email"
                  rules={[{ required: true, message: 'Por favor, insira seu e-mail!' }]}
                >
                  <Input
                    prefix={<User size={15} />}
                    placeholder="Insira aqui seu e-mail"
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
                    style={{ width: '100%', height: 40, marginBottom: 20 }}
                  >
                    Entrar
                  </Button>
                  <Button
                    type="default"
                    style={{ width: '100%', height: 40 }}
                    href="/lmcontabilidade/home"
                  >
                    Cancelar
                  </Button>
                </Form.Item>
              </Form>
            </Col>
          </Row>        
        </Card>
      </div>
    </div>
  );
}
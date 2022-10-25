import { Card, Form, Button, Checkbox, Input, Radio  } from "antd";
import { Key, User } from "phosphor-react";
import { HomeHeader } from "../Home/Header";

import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

interface RadioOption {
  label: string;
  value: string;
  disabled?: boolean;
}

interface LoginFormData {
  email: string;
  password: string;
  userType: 'client' | 'counter';
  remember: boolean;
}

export function Login() {
  const { signIn } = useContext(AuthContext)
  const [form] = Form.useForm<LoginFormData>()
  const navigate = useNavigate();

  const userTypeOptions: RadioOption[] = [
    {
      label: 'Cliente',
      value: 'client'
    },
    {
      label: 'Contador',
      value: 'counter'
    }
  ];

  function handleRedirect(to: string) {
    navigate(to);
  }

  const onFinish = (values: LoginFormData) => {
    const initialValues = {
      email: undefined,
      password: undefined,
      userType: undefined,
      remember: undefined
    }

    signIn(values)
    form.setFieldsValue(initialValues)
    handleRedirect('/lmcontabilidade/home')
  };

  return (
    <div>
      <HomeHeader />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', background: '#364d79' }}>
        <Card title="Conecte-se" style={{ width: 600 }}>
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

            <Form.Item
              label="Tipo de usuário"
              name="userType"
              rules={[{ required: true, message: 'Por favor, selecione um tipo de usuário!' }]}
            >
              <Radio.Group options={userTypeOptions} />
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
        </Card>
      </div>
    </div>
  );
}
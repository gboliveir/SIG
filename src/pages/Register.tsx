import { Row, Col, Tabs  } from "antd";
import { RegisterAdmForm } from "../components/RegisterAdmForm";
import { RegisterClientForm } from "../components/RegisterClientForm";

export function Register() {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const items = [
    {
      key: 'register-tab-1-adm',
      label: 'Cliente',
      children: <RegisterClientForm />
    },
    {
      key: 'register-tab-2-adm',
      label: 'Administrador',
      children: <RegisterAdmForm />
    }
  ];

  return (
    <Row
      justify="center"
      align="middle"
      style={{ height: '100%' }}
    >
      <Col>
        <Tabs
          defaultActiveKey="1"
          items={items}
        />
      </Col>
    </Row>
  );
}
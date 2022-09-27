import { Row, Col, Tabs  } from "antd";
import { AdmForm } from "./AdmForm";
import { ClientForm } from "./ClientForm";

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
      children: <ClientForm />
    },
    {
      key: 'register-tab-2-adm',
      label: 'Administrador',
      children: <AdmForm />
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
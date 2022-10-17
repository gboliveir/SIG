import { Button, Card, Col, Divider, Form, Input, List, Row, Tabs, Typography } from "antd";

import usefulLinks from "../../mocks/links.mocks.json";
import services from "../../mocks/services.mocks.json";

import { Layout } from 'antd';
import { HomeHeader } from "./Header";
import { AttractiveSection } from "./AttractiveSection";
import { SectionAboutUs } from "./SectionAboutUs";

const { Link, Title, Text } = Typography;
const { Grid } = Card;
const { Item } = List;
const { Content } = Layout;

export function Home() {
  const itemsData = services.map(service => {
    return ({
      label: service.area,
      key: String(service.key),
      children: (
        <List
          bordered
          dataSource={service.services}
          renderItem={item => (
            <Item>
              <Text>{item.label}</Text>
            </Item>
          )}
        />
      )
    });
  });

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <HomeHeader />
      <Layout>
        <Content>
          <Row>
            <Col span={24}>
              <AttractiveSection />
            </Col>

            <Col span={24}>
              <SectionAboutUs />
            </Col>

            <Col span={24} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
              <Title
                style={{
                  color: 'purple',
                  fontFamily: 'Rozha One, serif',
                  fontSize: '2.75rem',
                  marginBottom: '3rem',
                  width: '70vw'
                }}
              >
                Aqui você encontra alguns Links úteis para o dia a dia!
              </Title>
              <Card style={{ width: '70vw' }}>
                {usefulLinks.map(usefulLink => {
                  return (
                    <Grid key={usefulLink.key}>
                      <Link href={usefulLink.href}>
                        {usefulLink.linkText}
                      </Link>
                    </Grid> 
                  );
                })}
              </Card>
            </Col>
            <Divider />
            <Col
              span={24}
              style={{ height: '100vh', padding: 100 }}
            >
              <section
                style={{
                  width: '70vw',
                  margin: 'auto'
                }}
              >
                <Title
                  style={{
                    color: 'purple',
                    fontFamily: 'Rozha One, serif',
                    fontSize: '2.75rem',
                  }}
                >
                  Diversos serviços para você solicitar!
                </Title>
                <Tabs
                  defaultActiveKey="1"
                  items={itemsData}
                />
              </section>
            </Col>

            <Col
              span={24}
              style={{ background: '#364d79', padding: 100 }}
            >
              <section
                style={{
                  maxWidth: 400,
                  margin: 'auto',
                  textAlign: 'center'
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
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
}
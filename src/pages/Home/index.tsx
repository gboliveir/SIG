import { Button, Card, Carousel, Col, Divider, Form, Input, List, Row, Tabs, Typography } from "antd";
import { CarouselItem } from "./CarouselItem";

import usefulLinks from "../../mocks/links.mocks.json";
import services from "../../mocks/services.mocks.json";

const { Link, Title, Text } = Typography;
const { Grid } = Card;
const { Item } = List;

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
    <Row style={{ height: '100vh' }}>
      <Col span={24} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        <Title style={{ color: 'blue' }}>Contabilidade</Title>
        <Text style={{ display: 'block', marginBottom: '3rem' }} >Uma dimensão do que passou e a projeção do futuro.</Text>
        <Link href="#contact_us">
          Contate-nos
        </Link>
      </Col>

      <Col span={24} style={{ height: '100vh' }}>
        <Carousel style={{ height: '100vh', background: '#364d79' }}>
          <CarouselItem 
            title="Conheça a LM Contabilidade"
            description="Somos o que forma a razão social L desde 1992. Uma empresa de serviços contábeis, fiscais e de recursos humanos!"
          />
          <CarouselItem 
            title="Seus profissionais"
            description="A equipe tem uma vasta experiência com os serviços fiscais e contábeis, estando em constante atualização conforme as transformações na legislação vigente. Conta com um suporte de informações inteligentes que atua como facilitadora em diversas atividades, sejam elas econômicas e/ou tributárias."
          />
          <CarouselItem 
            title="Onde esta localizada?"
            description="A empresa tem apenas uma sede localizada na rua xxxxx, nº xxxxx, centro, xx – xx."
          />
        </Carousel>
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
  );
}
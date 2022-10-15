import { Carousel, Col, Row, Typography } from "antd";
import { CarouselItem } from "./CarouselItem";

const { Link, Title, Text } = Typography;

export function Home() {
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
    </Row>
  );
}
import { Col, Row, Typography } from "antd";

const { Link, Title, Text } = Typography;

export function Home() {
  return (
    <Row justify="center" align="middle" style={{ height: '100vh' }}>
      <Col>
        <Title style={{ color: 'blue' }}>Contabilidade</Title>
        <Text style={{ display: 'block', marginBottom: '3rem' }} >Uma dimensão do que passou e a projeção do futuro.</Text>
        <Link href="#contact_us">
          Contate-nos
        </Link>
      </Col>
    </Row>
  );
}
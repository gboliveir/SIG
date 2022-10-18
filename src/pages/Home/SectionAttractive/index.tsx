import { Typography } from "antd";

const { Link, Title, Text } = Typography;

export function SectionAttractive() {
  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: 100
      }}
    >
      <Title style={{ color: 'blue' }}>
        Contabilidade
      </Title>
      <Text style={{ display: 'block', marginBottom: '3rem' }}>
        Uma dimensão do que passou e a projeção do futuro.
      </Text>
      <Link href="#contact_us">
        Contate-nos
      </Link>
    </section>
  );
}
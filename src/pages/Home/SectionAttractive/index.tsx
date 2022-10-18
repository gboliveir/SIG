import { Typography } from "antd";
import { Title } from "../../../components/Title";

const { Link, Text } = Typography;

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
      <Title text="LMContabilidade" color="#364d79" />        
      <Text style={{ display: 'block', marginBottom: '3rem' }}>
        Uma dimensão do que passou e a projeção do futuro.
      </Text>
      <Link href="#contact_us">
        Contate-nos
      </Link>
    </section>
  );
}
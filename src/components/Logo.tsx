import { Typography } from "antd";

const { Link } = Typography;

interface LogoProps {
  style?: React.CSSProperties;
}

export function Logo({ style }: LogoProps) {
  return (
    <Link
      style={{
        width: 150,
        height: 31,
        background: '#1890ff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        color: 'white',
        ...style
      }}
      href="/lmcontabilidade/home"
    >
      LM Contabilidade
    </Link>
  );
}
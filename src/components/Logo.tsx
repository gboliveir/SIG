import { Button } from "antd";
import { useNavigate } from "react-router-dom";

interface LogoProps {
  style?: React.CSSProperties;
}

export function Logo({ style }: LogoProps) {
  const navigate = useNavigate()

  return (
    <Button
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
      onClick={() => navigate('/lmcontabilidade/home')}
    >
      LM Contabilidade
    </Button>
  );
}
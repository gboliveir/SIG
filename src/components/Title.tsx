import { Typography } from "antd";

interface TitleProps {
  text: string | number;
  color?: string; 
}

export function Title({ text, color = 'purple' }: TitleProps) {
  return (
    <Typography.Title
      style={{
        color,
        fontFamily: 'Rozha One, serif',
        fontSize: '2.75rem'
      }}
    >
      {text}
    </Typography.Title>
  );
}
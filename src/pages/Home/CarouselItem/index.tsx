import { Typography } from "antd";

const { Title, Text } = Typography;

interface CarouselItemProps {
  title: string;
  description: string;
}

export function CarouselItem({ title, description }: CarouselItemProps) {
  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100vh',
        width: '70vw',
        margin: 'auto'
      }}
    >
      <Title
        style={{
          color: 'white',
          fontFamily: 'Rozha One, serif',
          fontSize: '2.75rem'
        }}
      >
        {title}
      </Title>

      <Text 
        style={{
          fontSize: '1.5rem',
          color: 'white'
        }}
      >
        {description}
      </Text>
    </section>
  );
}
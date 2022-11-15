import { Typography } from "antd";
import { Title } from "./Title";

const { Text } = Typography;

interface CarouselItemProps {
  title: string | number;
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
      <Title text={title} color="white" />
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
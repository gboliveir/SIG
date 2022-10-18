import { List, Tabs, Typography } from "antd";

import services from "../../../mocks/services.mocks.json";

const { Title, Text } = Typography;
const { Item } = List;

export function SectionServices() {
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

  return (
    <section
      style={{
        width: '70vw',
        margin: 'auto',
        height: '100vh',
        padding: 100
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
  );
}
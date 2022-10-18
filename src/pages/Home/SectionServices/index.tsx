import { Card, List, Tabs, Typography } from "antd";
import { Title } from "../../../components/Title";

import services from "../../../mocks/services.mocks.json";

const { Text } = Typography;
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
        minHeight: '100vh',
        padding: '100px 0',
        background: '#364d79'
      }}
    >
      <div style={{
        width: '70vw',
        margin: 'auto',
      }}>
        <Title text="Diversos serviços para você solicitar!" color="white"/>
        <Card>
          <Tabs
            defaultActiveKey="1"
            items={itemsData}
            style={{
              color: "white"
            }}
          />
        </Card>       
      </div>
    </section>
  );
}
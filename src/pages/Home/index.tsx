import { Col, Row } from "antd";

import { Layout } from 'antd';
import { HomeHeader } from "./Header";
import { SectionAttractive } from "./SectionAttractive";
import { SectionAboutUs } from "./SectionAboutUs";
import { SectionLinks } from "./SectionLinks";
import { SectionServices } from "./SectionServices";
import { SectionContactUs } from "./SectionContactUs";

const { Content } = Layout;

export function Home() {
  const sectionList = [
    <SectionAttractive />,
    <SectionAboutUs />,
    <SectionLinks />,
    <SectionServices />,
    <SectionContactUs />
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <HomeHeader />
      <Layout>
        <Content>
          <Row>
            {sectionList.map(section => (
              <Col span={24}>
                {section}
              </Col>
            ))}
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
}
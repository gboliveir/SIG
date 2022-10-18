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
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <HomeHeader />
      <Layout>
        <Content>
          <Row>
            <Col span={24}>
              <SectionAttractive />
            </Col>

            <Col span={24}>
              <SectionAboutUs />
            </Col>

            <Col span={24}>
              <SectionLinks />
            </Col>

            <Col span={24}>
              <SectionServices />
            </Col>

            <Col span={24}>
              <SectionContactUs />
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
}
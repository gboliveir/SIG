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
    { 
      key: 'section-1',
      component: <SectionAttractive />
    },
    { 
      key: 'section-2',
      component: <SectionAboutUs />
    },
    { 
      key: 'section-3',
      component: <SectionLinks />
    },
    { 
      key: 'section-4',
      component: <SectionServices />
    },
    { 
      key: 'section-5',
      component: <SectionContactUs />
    }
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <HomeHeader />
      <Layout>
        <Content>
          <Row>
            {sectionList.map(section => (
              <Col key={section.key} span={24}>
                {section.component}
              </Col>
            ))}
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
}
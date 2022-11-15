import { Col, Row } from "antd";

import { Layout } from 'antd';
import { HomeHeader } from "../components/HomeHeader";
import { SectionAboutUs } from "../components/SectionAboutUs";
import { SectionAttractive } from "../components/SectionAttractive";
import { SectionContactUs } from "../components/SectionContactUs";
import { SectionLinks } from "../components/SectionLinks";
import { SectionServices } from "../components/SectionServices";

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
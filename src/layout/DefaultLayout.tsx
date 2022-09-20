import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import { Sidebar } from '../components/Siderbar';
import { LayoutHeader } from '../components/LayoutHeader';

const { Content } = Layout;

import './styles.scss';

export function DefaultLayout() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <LayoutHeader />

      <Layout>
        <Sidebar />

        <Layout style={{ padding: '0 24px 24px' }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}
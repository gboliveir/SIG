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

        <Layout>
          <Content>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}
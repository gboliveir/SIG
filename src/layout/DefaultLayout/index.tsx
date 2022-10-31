import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import { Sidebar } from './Siderbar';
import { Header } from './Header';

const { Content } = Layout;

export function DefaultLayout() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header />

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
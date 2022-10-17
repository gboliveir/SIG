import { Layout, Menu, Typography } from 'antd';
import { User } from 'phosphor-react';
import { Logo } from '../../../components/Logo';

import type { MenuProps } from 'antd';
type MenuItem = Required<MenuProps>['items'][number];

const { Header } = Layout;
const { Text } = Typography;

export function HomeHeader() {
  const menuItems: MenuItem[] = [
    {
      label: <Text style={{ color: 'white' }}>Usuário</Text>,
      key: 'user-menu-item-1',
      icon: <User size={15} />,
      children: [
        {
          label: 'Login',
          key: 'user-submenu-item-1'
        },
        {
          label: 'Sair',
          key: 'user-submenu-item-2'
        },
        {
          label: 'Atualizar dados',
          key: 'user-submenu-item-3'
        }
      ]
    }
  ];

  return (
    <Header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: 0,
        position: 'fixed',
        width: '100%',
        zIndex: 99999
      }}
    >
      <Logo />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ width: 130 }}
        items={menuItems}
      />
    </Header>
  );
}
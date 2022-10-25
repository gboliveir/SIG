import { useContext, useEffect } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

import { Layout, Menu, Typography } from 'antd';
import { User } from 'phosphor-react';
import { Logo } from '../Logo';

import type { MenuProps } from 'antd';
type MenuItem = Required<MenuProps>['items'][number];

const { Header } = Layout;
const { Text } = Typography;

export function LayoutHeader() {
  const navigate = useNavigate();
  const { user, getUserInfo, exit } = useContext(AuthContext);

  useEffect(() => {
    getUserInfo();
  }, []);

  function handleRedirect(to: string) {
    navigate(to);
  }

  function handleExit() {
    exit();
    handleRedirect('/lmcontabilidade/home');
  }
 
  const menuItems: MenuItem[] = [
    {
      label: <Text style={{ color: 'white' }}>{user?.email}</Text>,
      key: 'user-menu-item-1',
      icon: <User size={15} />,
      children: [
        {
          label: 'Sair',
          key: 'user-submenu-item-2',
          onClick: handleExit
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
      }}
    >
      <Logo />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ width: 240 }}
        items={menuItems}
      />
    </Header>
  );
}
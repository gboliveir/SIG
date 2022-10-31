import { useContext, useEffect } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

import { Layout, Menu, Typography } from 'antd';
import { User } from 'phosphor-react';
import { Logo } from '../../../components/Logo';

import type { MenuProps } from 'antd';
type MenuItem = Required<MenuProps>['items'][number];

export function Header() {
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
      label: <Typography.Text style={{ color: 'white' }}>{user?.email}</Typography.Text>,
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
    <Layout.Header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: 0,
      }}
    >
      <Logo style={{ margin: '16px 24px' }}/>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ width: 240 }}
        items={menuItems}
      />
    </Layout.Header>
  );
}
import { useContext, useEffect } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

import { Layout, Menu, Typography } from 'antd';
import { User } from 'phosphor-react';
import { Logo } from '../../../components/Logo';

import type { MenuProps } from 'antd';
type MenuItem = Required<MenuProps>['items'][number];

const { Header } = Layout;
const { Text } = Typography;

export function HomeHeader() {
  const navigate = useNavigate();
  const { user, isAuthenticated, getUserInfo, exit } = useContext(AuthContext);

  useEffect(() => {
    getUserInfo();
  }, []);

  function handleRedirect(to: string) {
    navigate(to);
  }

  const menuItems: MenuItem[] = [
    {
      label: <Text style={{ color: 'white' }}>{isAuthenticated ? user?.email : 'Usuario'}</Text>,
      key: 'user-menu-item-1',
      icon: <User size={15} />,
      children: [
        {
          label: 'Entrar',
          key: 'user-submenu-item-1',
          disabled: isAuthenticated,
          onClick: () => handleRedirect('/lmcontabilidade/login')
        },
        {
          label: 'Sair',
          key: 'user-submenu-item-2',
          disabled: !isAuthenticated,
          onClick: exit
        },
        {
          label: 'Acessar painel de acompanhamento',
          key: 'user-submenu-item-3',
          disabled: !isAuthenticated,
          onClick: () => user?.userType === 'client'
            ? handleRedirect('/lmcontabilidade/painel/customer')
            : handleRedirect('/lmcontabilidade/painel/counter')
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
      <Logo style={{ margin: '16px 24px' }}/>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ width: isAuthenticated ? 240 : 130 }}
        items={menuItems}
      />
    </Header>
  );
}
import { useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";

import { Layout, MenuProps, Menu, Tooltip } from 'antd';
import { ArrowElbowDownRight, House, ListChecks, UserList, Kanban } from 'phosphor-react';
import { AuthContext } from '../../../contexts/AuthContext';
import { UsersType } from '../../../Constants/users-types';

type MenuItem = Required<MenuProps>['items'][number];

const sliceValues = {
  CLIENT: 2,
  COUNTER: 3,
  ADMINISTRATOR: 7
}
  
export function Sidebar() {
  const { accessInfo, isAuthenticated } = useContext(AuthContext);
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const { role } = accessInfo.user;
  const finalSlidePosition = sliceValues[role];
  const menuList: MenuItem[] = [
    {
      label: 'Home',
      key: 'home-menu-item-1',
      icon: <House size={20} />,
      disabled: !isAuthenticated,
      onClick: () => navigate('/lmcontabilidade/home')
    },
    {
      label: 'Acompanhamento',
      key: 'painel-menu-item-2',
      icon: <ArrowElbowDownRight size={20} />,
      disabled: !isAuthenticated,
      onClick: () => accessInfo.user.role === UsersType.CLIENT
        ? navigate('/lmcontabilidade/painel/client')
        : navigate('/lmcontabilidade/painel/counter')
    },
    {
      label: 'Obrigações',
      key: 'painel-menu-item-3',
      icon: <ListChecks size={20} />,
      disabled: !isAuthenticated && [UsersType.CLIENT].includes(role),
      onClick: () => navigate('/lmcontabilidade/painel/management/obligations')
    },
    {
      label: 'Empresas',
      key: 'painel-menu-item-4',
      icon: <UserList size={20} />,
      disabled: !isAuthenticated && [UsersType.CLIENT, UsersType.COUNTER].includes(role),
      onClick: () => navigate('/lmcontabilidade/painel/management/companies')
    },
    {
      label: 'Clientes',
      key: 'painel-menu-item-5',
      icon: <UserList size={20} />,
      disabled: !isAuthenticated && [UsersType.CLIENT, UsersType.COUNTER].includes(role),
      onClick: () => navigate('/lmcontabilidade/painel/management/users')
    }
  ];

  const activeMenus = menuList.slice(0, finalSlidePosition);

  return (
    <Layout.Sider
      width={200}
      className="site-layout-background"
      collapsible
      collapsed={collapsed}
      onCollapse={value => setCollapsed(value)}
    >
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%', borderRight: 0 }}
        theme="dark"
        items={activeMenus}
      />
    </Layout.Sider>
  );
}
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import { Layout, MenuProps, Menu, Tooltip } from 'antd';
import { ArrowElbowDownRight, House, ListChecks, UserList, Kanban } from 'phosphor-react';

type MenuItem = Required<MenuProps>['items'][number];

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  function handleRedirect(to: string) {
    navigate(to);
  }

  function renderLabelDisabled(menuTitle: string) {
    return (
      <Tooltip
        title='Esté menu ainda está em desenvolvimento e por essa razão ainda não foi disponibilizado.'
        placement='topLeft'
      >
        {menuTitle}
      </Tooltip>
    );
  }
    
  const menuItems: MenuItem[] = [
    {
      label: 'Home',
      key: 'home-menu-item-1',
      icon: <House size={20} />,
      onClick: () => handleRedirect('/lmcontabilidade/home')
    },
    {
      label: 'Acompanhamento',
      key: 'painel-menu-item-2',
      icon: <ArrowElbowDownRight size={20} />,
      children: [
        {
          label: 'Contador',
          key: 'painel-menu-item-2-counter',
          onClick: () => handleRedirect('/lmcontabilidade/painel/counter')
        },
        {
          label: 'Cliente',
          key: 'painel-menu-item-2-customer',
          onClick: () => handleRedirect('/lmcontabilidade/painel/customer')
        }
      ]
    },
    {
      label: 'Obrigações',
      key: 'painel-menu-item-3',
      icon: <ListChecks size={20} />,
      onClick: () => handleRedirect('/lmcontabilidade/painel/management/obligations')
    },
    {
      label: 'Empresas',
      key: 'painel-menu-item-4',
      icon: <UserList size={20} />,
      onClick: () => handleRedirect('/lmcontabilidade/painel/management/companies')
    },
    {
      label: 'Clientes',
      key: 'painel-menu-item-5',
      icon: <UserList size={20} />,
    }
  ];

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
        items={menuItems}
      />
    </Layout.Sider>
  );
}
import { useState } from 'react';

import { Layout, MenuProps, Menu, Tooltip } from 'antd';
import { NotePencil, UsersThree, ArrowElbowDownRight, House } from 'phosphor-react';
import { useNavigate } from "react-router-dom";

type MenuItem = Required<MenuProps>['items'][number];

const { Sider } = Layout;

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
      label: renderLabelDisabled('Home'),
      key: 'home-menu-item-1',
      icon: <House size={20} />,
      disabled: true,
    },
    {
      label: 'Painel',
      key: 'painel-menu-item-2',
      icon: <ArrowElbowDownRight size={20} />,

      children: [
        {
          label: 'Painel do contador',
          key: 'painel-submenu-item-1',
          onClick: () => handleRedirect('/lmcontabilidade/painel/counter')
        },
        {
          label: renderLabelDisabled('Painel do cliente'),
          key: 'painel-submenu-item-2',
          disabled: true
        }
      ]
    },
    {
      label: renderLabelDisabled('Clientes'),
      key: 'customer-menu-item-3',
      icon: <UsersThree size={20} />,
      disabled: true,
      children: [
        {
          label: renderLabelDisabled('Adicionar cliente'),
          key: 'customer-submenu-item-1',
          disabled: true
        },
        {
          label: renderLabelDisabled('Excluir cliente'),
          key: 'customer-submenu-item-2',
          disabled: true
        }
      ]
    },
    {
      label: renderLabelDisabled('Obrigações'),
      key: 'obligation-menu-item-4',
      icon: <UsersThree size={20} />,
      disabled: true,
      children: [
        {
          label: renderLabelDisabled('Adicionar obrigação'),
          key: 'obligation-submenu-item-1',
          disabled: true
        },
        {
          label: renderLabelDisabled('Excluir obrigação'),
          key: 'obligation-submenu-item-2',
          disabled: true
        }
      ]
    },
    {
      label: renderLabelDisabled('PDCI'),
      key: 'pdci-menu-item-5',
      icon: <NotePencil size={20} />,
      disabled: true,
      children: [
        {
          label: renderLabelDisabled('Editar tabela PDCI'),
          key: 'pdci-submenu-item-1',
          disabled: true
        }
      ]
    }
  ];

  return (
    <Sider
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
    </Sider>
  );
}
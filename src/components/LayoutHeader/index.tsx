import { Layout, Menu } from 'antd';

import type { MenuProps } from 'antd';
type MenuItem = Required<MenuProps>['items'][number];

import { User } from 'phosphor-react';

import { getItem } from '../../utils/get-item-menu';

const { Header } = Layout;

export function LayoutHeader() {
  const menuItems: MenuItem[] = [
    getItem('Usuário', 'user-menu-item-1', <User size={15} />, [
      getItem('Login', 'user-submenu-item-1'),
      getItem('Sair', 'user-submenu-item-2'),
      getItem('Atualizar dados', 'user-submenu-item-3'),
    ]),
  ];

  return (
    <Header
      className="header"
      style={{ padding: 0 }}
    >
      <div className="logo">LMContabilidade</div>
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
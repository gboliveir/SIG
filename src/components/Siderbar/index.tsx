import { useState } from 'react';

import { Layout, MenuProps, Menu } from 'antd';
import { NotePencil, User, UsersThree, ArrowElbowDownRight, House } from 'phosphor-react';

import { getItem } from '../../utils/get-item-menu';

type MenuItem = Required<MenuProps>['items'][number];

const { Sider } = Layout;

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const menuItems: MenuItem[] = [
    getItem('Home', 'home-menu-item-1', <House size={20} />),
    getItem('Painel', 'painel-menu-item-1', <ArrowElbowDownRight size={20} />, [
      getItem('Painel do contador', 'painel-submenu-item-1'),
      getItem('Painel do cliente', 'painel-submenu-item-2'),
    ]),
    getItem('Clientes', 'customer-menu-item-1', <UsersThree size={20} />, [
      getItem('Adicionar cliente', 'customer-submenu-item-1'),
      getItem('Excluir cliente', 'customer-submenu-item-2'),
    ]),
    getItem('Obrigações', 'obligation-menu-item-2', <UsersThree size={20} />, [
      getItem('Adicionar obrigação', 'obligation-submenu-item-1'),
      getItem('Excluir obrigação', 'obligation-submenu-item-2'),
    ]),
    getItem('PDCI', 'pdci-menu-item-3', <NotePencil size={20} />, [
      getItem('Editar tabela PDCI', 'pdci-submenu-item-1'),
    ])
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
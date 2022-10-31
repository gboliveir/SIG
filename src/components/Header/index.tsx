import { ReactNode } from 'react';

import { Layout, PageHeader, Typography } from 'antd';

interface HeaderProps {
  title: string;
  children: ReactNode;
}

export function Header({ title, children }: HeaderProps) {
  return (
    <Layout.Header
      style={{
        zIndex: 1,
        width: '100%',
        height: 180,
        backgroundColor: 'white',
        padding: '12px 24px 0',
        marginBottom: 16
      }}
    >
      <PageHeader title={<Typography.Title>{title}</Typography.Title>}/>
      {children}
    </Layout.Header>
  );
}
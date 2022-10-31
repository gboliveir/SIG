import { useContext, useState } from "react";

import { Drawer, Table } from "antd";

import { useObligationTableColumns } from '../../../hooks/columns/useObligationTableColumns';

import { UserDocumentationsDrawerContext } from "../../../contexts/UserDocumentationsDrawerContext";

export function UserDocumentationsDrawer() {
  const { isOpenDocumentationDrawer, closeDocumentationDrawer, obligationDrawerData } = useContext(UserDocumentationsDrawerContext);
  const { obligationTableColumns } = useObligationTableColumns();

  return (
    <Drawer
      title="Empresa 1"
      placement='right'
      width={650}
      onClose={closeDocumentationDrawer}
      open={isOpenDocumentationDrawer}
    >
      <Table
        rowKey={(record) => record.id}
        dataSource={obligationDrawerData}
        columns={obligationTableColumns}
      />
    </Drawer>
  );
}
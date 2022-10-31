import { useContext } from "react";

import { Table } from "antd";

import { useObligationTableColumns } from '../../../hooks/columns/useObligationTableColumns';

import { UserDocumentationsDrawerContext } from "../../../contexts/UserDocumentationsDrawerContext";
import { StandardizedDrawer } from "../../../components/StandardizedDrawer";

export function UserDocumentationsDrawer() {
  const { isOpenDocumentationDrawer, closeDocumentationDrawer, obligationDrawerData } = useContext(UserDocumentationsDrawerContext);
  const { obligationTableColumns } = useObligationTableColumns();

  return (
    <StandardizedDrawer
      title="Empresa 1"
      onClose={closeDocumentationDrawer}
      open={isOpenDocumentationDrawer}
    >
      <Table
        rowKey={(record) => record.id}
        dataSource={obligationDrawerData}
        columns={obligationTableColumns}
      />
    </StandardizedDrawer>
  );
}
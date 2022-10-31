import { useContext } from "react";

import { UserEditingDrawerContext } from "../../../contexts/UserEditingDrawerContext";

import { Drawer } from "antd";
import { ClientForm } from "../../Register/ClientForm";

export function UserEditingDrawer() {
  const { open, onClose, customerDrawerData } = useContext(UserEditingDrawerContext);

  return (
    <Drawer
      title="Empresa 1"
      placement='right'
      width={650}
      onClose={onClose}
      open={open}
    >
      <ClientForm initialValues={customerDrawerData} submitBtnText="Salvar" />
    </Drawer>
  );
}
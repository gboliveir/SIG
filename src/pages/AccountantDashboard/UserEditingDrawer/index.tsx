import { useContext } from "react";

import { UserEditingDrawerContext } from "../../../contexts/UserEditingDrawerContext";

import { ClientForm } from "../../Register/ClientForm";
import { StandardizedDrawer } from "../../../components/StandardizedDrawer";

export function UserEditingDrawer() {
  const { open, onClose, customerDrawerData } = useContext(UserEditingDrawerContext);

  return (
    <StandardizedDrawer
      title="Empresa 1"
      onClose={onClose}
      open={open}
    >
      <ClientForm initialValues={customerDrawerData} submitBtnText="Salvar" />
    </StandardizedDrawer>      
  );
}
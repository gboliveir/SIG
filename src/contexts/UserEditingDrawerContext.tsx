import { createContext, ReactNode, useState } from "react";

import { CustomerType } from "../services/AccountantService";

interface UserEditingDrawerContextProps {
  customerDrawerData: CustomerType | undefined,
  open: boolean,
  showDrawer: (record: CustomerType) => void,
  onClose: () => void
}

interface  UserEditingDrawerProvicerProps {
  children: ReactNode;
}

export const UserEditingDrawerContext = createContext({} as UserEditingDrawerContextProps);

export function UserEditingDrawerProvider({ children }: UserEditingDrawerProvicerProps) {
  const [customerDrawerData, setCustomerDrawerData] = useState<CustomerType>();
  const [open, setOpen] = useState(false);  

  const showDrawer = (record: CustomerType) => {
    // Criar requisição para retornar dados do Drawer
    setCustomerDrawerData(record)
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <UserEditingDrawerContext.Provider value={{ open, showDrawer, onClose, customerDrawerData }}>
      {children}
    </UserEditingDrawerContext.Provider>
  );
}

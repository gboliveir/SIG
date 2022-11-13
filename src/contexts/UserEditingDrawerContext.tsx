import { createContext, ReactNode, useState } from "react";

import { CompanyType } from "../services/AccountantService";

interface UserEditingDrawerContextProps {
  customerDrawerData: CompanyType | undefined,
  open: boolean,
  showDrawer: (record: CompanyType) => void,
  onClose: () => void
}

interface  UserEditingDrawerProvicerProps {
  children: ReactNode;
}

export const UserEditingDrawerContext = createContext({} as UserEditingDrawerContextProps);

export function UserEditingDrawerProvider({ children }: UserEditingDrawerProvicerProps) {
  const [customerDrawerData, setCustomerDrawerData] = useState<CompanyType>();
  const [open, setOpen] = useState(false);  

  const showDrawer = (record: CompanyType) => {
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

import { createContext, ReactNode, useState } from "react";
import { obligations } from "../Constants/obligations";

import { ObligationType } from "../services/CustomerService";

interface UserDocumentationsDrawerContextProps {
  obligationDrawerData: ObligationType[] | undefined,
  isOpenDocumentationDrawer: boolean,
  showDocumentationDrawer: () => void,
  closeDocumentationDrawer: () => void
}

interface  UserDocumentationsDrawerProvicerProps {
  children: ReactNode;
}

export const UserDocumentationsDrawerContext = createContext({} as UserDocumentationsDrawerContextProps);

export function UserDocumentationsDrawerProvider({ children }: UserDocumentationsDrawerProvicerProps) {
  const [obligationDrawerData, setObligationDrawerData] = useState<ObligationType[]>(obligations);
  const [isOpenDocumentationDrawer, setIsOpenDocumentationDrawer] = useState(false);  

  const showDocumentationDrawer = () => {
    setIsOpenDocumentationDrawer(true);
  };

  const closeDocumentationDrawer = () => {
    setIsOpenDocumentationDrawer(false);
  };

  return (
    <UserDocumentationsDrawerContext.Provider value={{ isOpenDocumentationDrawer, showDocumentationDrawer, closeDocumentationDrawer, obligationDrawerData }}>
      {children}
    </UserDocumentationsDrawerContext.Provider>
  );
}

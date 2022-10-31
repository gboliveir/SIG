import { createContext, ReactNode, useState } from "react";
import { obligations } from "../Constants/obligations";

import { ObligationDataType } from "../services/CustomerService";

interface UserDocumentationsDrawerContextProps {
  obligationDrawerData: ObligationDataType[] | undefined,
  isOpenDocumentationDrawer: boolean,
  showDocumentationDrawer: () => void,
  closeDocumentationDrawer: () => void
}

interface  UserDocumentationsDrawerProvicerProps {
  children: ReactNode;
}

export const UserDocumentationsDrawerContext = createContext({} as UserDocumentationsDrawerContextProps);

export function UserDocumentationsDrawerProvider({ children }: UserDocumentationsDrawerProvicerProps) {
  const [obligationDrawerData, setObligationDrawerData] = useState<ObligationDataType[]>(obligations);
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

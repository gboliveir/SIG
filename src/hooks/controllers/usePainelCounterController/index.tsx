import { useState } from "react";
import { tagConfigs } from "../../../Constants/tagsConfig";
import { companies } from "../../../Constants/companies";
import { CompanyType } from "../../../services/AccountantService";
import { ObligationType } from "../../../services/CustomerService";

type DrawerContentType = 'obligations' | 'contacts';

export type UserType = {
  id: string;
  name: string;
  email: string;
  cpf: string;
  whatsapp: string;
  phoneNumber: string;
}

export function usePainelCounterController() {
  const [companyData, setCompanyData] = useState<CompanyType[] | undefined>(companies);
  const [obligationData, setObligationData] = useState<ObligationType[] | undefined>([]);
  const [userData, setUserData] = useState<UserType[] | undefined>([]);
  const [drawerContentType, setDrawerContentType] = useState<DrawerContentType | null>(null);

  function openDrawer(contentType: DrawerContentType) {
    setDrawerContentType(contentType)
  };

  function closeDrawer() {
    setDrawerContentType(null);
  };

  return ({
    companyData,
    obligationData,
    userData,
    drawerContentType,
    tagConfigs,
    openDrawer,
    closeDrawer
  });
}
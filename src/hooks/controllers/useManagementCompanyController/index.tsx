import { useState } from "react";
import { Form } from "antd";
import { companyTagsConfigs, obligationTagsConfig } from "../../../Constants/tagsConfig";
import { CompanyType } from "../../../services/AccountantService";
import { companies } from "../../../Constants/companies";
import { UserType } from "../usePainelCounterController";
import { ObligationType } from "../../../services/ManagementObligationService";

type DrawerContentType = 'obligations' | 'contacts';

export function useManagementCompanyController() {
  const [form] = Form.useForm();
  const [companiesData, setCompaniesData] = useState<CompanyType[] | undefined>(companies);
  const [newCompaniesData, setNewCompaniesData] = useState<CompanyType[]>([]);
  const [obligationData, setObligationData] = useState<ObligationType[] | undefined>([]);
  const [userData, setUserData] = useState<UserType[] | undefined>([]);
  const [drawerContentType, setDrawerContentType] = useState<DrawerContentType | null>(null);

  function handleSubmitForm(record: ObligationType) {

  }

  function handleDeleteObligation(record: ObligationType) {

  }

  function handleEditObligation(record: ObligationType) {

  }

  function openDrawer(contentType: DrawerContentType) {
    setDrawerContentType(contentType)
  };

  function closeDrawer() {
    setDrawerContentType(null);
  };

  return ({
    form,
    companiesData,
    newCompaniesData,
    handleSubmitForm,
    handleDeleteObligation,
    handleEditObligation,
    openDrawer,
    closeDrawer,
    companyTagsConfigs,
    obligationTagsConfig,
    obligationData,
    drawerContentType,
    userData
  });
}
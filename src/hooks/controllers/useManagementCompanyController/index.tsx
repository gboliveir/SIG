import { useState } from "react";
import { Form, message } from "antd";
import { companyTagsConfigs, obligationTagsConfig } from "../../../Constants/company-tags-config";
import { UserType } from "../usePainelCounterController";
import { ObligationType } from "../../../services/ManagementObligationService";
import { ICompany, ManagementCompanyService } from "../../../services/ManagementCompanyService";
import { DRAWER_CONTENT_TYPES } from "../../../Constants/drawer-content-types.constants";

type DrawerContentType = 'obligations' | 'contacts';

interface CompanyFormType {
  name: string;
  cnpj: string;
  Obligations?: string[];
}

export function useManagementCompanyController() {
  const [form] = Form.useForm<CompanyFormType>();
  const [recordId, setRecordId] = useState<string>('');
  const [companiesData, setCompaniesData] = useState<ICompany[]>([]);
  const [obligationsData, setObligationsData] = useState<ObligationType[]>([]);
  const [contactsData, setContactsData] = useState<UserType[]>([]);
  const [drawerContentType, setDrawerContentType] = useState<DrawerContentType | null>(null);
  const service = new ManagementCompanyService();

  const showSuccessMessage = () => {
    message.success('Operação realizada com sucesso.');
  }

  const showErrorMessage = () => {
    message.success('Um problema aconteceu, tente novamente.');
  }

  const createCompany = async (record: CompanyFormType) => {
    await service.createCompany(record);
  }

  const updateCompany = async (recordId: string, record: CompanyFormType) => {
    await service.updateCompany(recordId, record)
  }

  const getObligationByCompany = async (recordId: string) => {
    await service.getObligationsByCompany(recordId)
      .then(setObligationsData)
      .catch((err) => console.log(err));
  }

  const getContactsByCompany = async (recordId: string) => {
    await service.getContactsByCompany(recordId)
      .then(setContactsData)
      .catch((err) => console.log(err));
  }

  const getCompanies = async () => {
    await service.getCompanies()
      .then(setCompaniesData)
      .catch((err) => console.log(err));
  }

  const deleteCompany = async (recordId: string) => {
    await service.deleteCompany(recordId);
  }

  const fetchInit = async () => {
    getCompanies();
  }

  async function handleCreateCompany(record: CompanyFormType) {
    try {
      if(recordId) {
        await updateCompany(recordId, record).then(showSuccessMessage);
        await getCompanies();
        setRecordId('')
      } else {
        await createCompany(record).then(showSuccessMessage);
        await getCompanies()
      }

      form.setFieldsValue({
        name: '',
        cnpj: '',
        Obligations: []
      })
    } catch(err) {
      console.log(err)
      message.error('Um problema aconteceu!')
    }
  }

  async function handleDeleteCompany(recordId: string) {
    if (recordId) {
      await deleteCompany(recordId);
      await getCompanies();
    } 
  }

  function handleUpdateCompany(record: ICompany) {
    form.setFieldsValue({ ...record });
    setRecordId(record.id || '')
  }

  async function handleOpenDrawer(contentType: DrawerContentType, recordId: string) {
    setDrawerContentType(contentType)

    contentType.includes(DRAWER_CONTENT_TYPES.OBLIGATIONS)
      ? await getObligationByCompany(recordId)
      : await getContactsByCompany(recordId);
  };

  function handleCloseDrawer() {
    setDrawerContentType(null);
  };

  return ({
    extras: {
      form,
      companyTagsConfigs,
      obligationTagsConfig,
      drawerContentType
    },
    states: {
      companiesData,
      contactsData,
      obligationsData,
    },
    methods: {
      handleCreateCompany,
      handleDeleteCompany,
      handleUpdateCompany,
      handleOpenDrawer,
      handleCloseDrawer,
      fetchInit,
    }
  });
}
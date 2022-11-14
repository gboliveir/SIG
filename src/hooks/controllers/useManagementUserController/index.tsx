import { useState } from "react";
import { Form } from "antd";
import { companyTagsConfigs } from "../../../Constants/tagsConfig";
import { UserType } from "../usePainelCounterController";

export function useManagementUserController() {
  const [form] = Form.useForm();
  const [usersData, setUsersData] = useState<UserType[] | undefined>([]);
  const [newUsersData, setNewUsersData] = useState<UserType[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  function handleSubmitForm(record: UserType) {
  
  }

  function handleDeleteUser(record: UserType) {

  }

  function handleEditUser(record: UserType) {

  }

  function openDrawer() {
    setIsDrawerOpen(true)
  };

  function closeDrawer() {
    setIsDrawerOpen(false);
  };

  return ({
    form,
    usersData,
    newUsersData,
    handleSubmitForm,
    handleDeleteUser,
    handleEditUser,
    openDrawer,
    closeDrawer,
    companyTagsConfigs,
    isDrawerOpen,
  });
}
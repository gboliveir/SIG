import { useState } from "react";
import { Form } from "antd";
import { companyTagsConfigs } from "../../../Constants/tagsConfig";

import { ManagementUserService, UserType } from '../../../services/ManagementUserService';

export function useManagementUserController() {
  const [form] = Form.useForm();
  const [usersData, setUsersData] = useState<UserType[] | undefined>([]);

  const [newUsersData, setNewUsersData] = useState<UserType[]>([]);

  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const api = new ManagementUserService();

  async function fetchUsers() {
  }

  function handleAddUserToCreationList(record: UserType) {
    setNewUsersData(state => [...state, record])
  }

  async function handleCreateUserList() {
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
    handleAddUserToCreationList,
    handleDeleteUser,
    handleEditUser,
    openDrawer,
    closeDrawer,
    companyTagsConfigs,
    isDrawerOpen,
    fetchUsers,
    handleCreateUserList
  });
}
import { Form } from "antd";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UsersType } from "../../../Constants/users-types";
import { AuthContext } from "../../../contexts/AuthContext";
import { AuthService } from "../../../services/AuthService";

interface LoginFormData {
  email: string;
  password: string;
}

export function useLoginController() {
  const { signIn } = new AuthService();
  const { handleAccessInfo } = useContext(AuthContext);
  const [form] = Form.useForm()
  const navigate = useNavigate();

  const onFinish = async (accessCredentials: LoginFormData) => {
    await signIn(accessCredentials).then(data => {
      if (data.token) {
        const role = data.user.role;
        handleAccessInfo(data);

        switch (role) {
          case UsersType.CLIENT:
            navigate('/lmcontabilidade/painel/client');
            break;
          case UsersType.COUNTER:
            navigate('/lmcontabilidade/painel/counter');
            break;
          case UsersType.ADMINISTRATOR:
            navigate('/lmcontabilidade/painel/counter');
            break;
          default:
            break;
        }
      }
    })
  };

  return {
    onFinish,
    form,
  }
}
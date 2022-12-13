import { useState } from "react";
import moment from "moment";
import { Form } from "antd";
import { obligations } from "../../../Constants/obligations";
import { obligationTagsConfig } from "../../../Constants/tagsConfig";
import { ObligationType, StatusType } from "../../../services/ManagementUserService";

export function useManagementObligationController() {
  const [form] = Form.useForm();
  const [obligationsData, setObligationsData] = useState<ObligationType[]>(obligations);
  const [newObligationsData, setNewObligationsData] = useState<ObligationType[]>([]);

  function handleSubmitForm(obligation: ObligationType) {
    const status: StatusType = obligation.finalDeliveryDate < moment() ? 'Atrasada' : 'Pendente';
    const newObligations: ObligationType = {
      ...obligation,
      status
    }

    setNewObligationsData((state) => [...state, newObligations])
  }

  function handleDeleteObligation(record: ObligationType) {
    record.id
      ? setObligationsData((state) => state.filter((item) => item.id !== record.id)) 
      : setNewObligationsData((state) => state.filter((item) => item.name !== record.name));
  }

  function handleEditObligation(obligation: ObligationType) {
    const activedObligation = obligations.find((item) => item.id === obligation.id);

    form.setFieldsValue({
      name: obligation.name,
      finalDeliveryDate: obligation.finalDeliveryDate,
      attatchment: obligation.attatchment
    });
  }

  return ({
    form,
    obligationsData,
    newObligationsData,
    obligationTagsConfig,
    handleSubmitForm,
    handleDeleteObligation,
    handleEditObligation
  });
}
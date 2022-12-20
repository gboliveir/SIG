import { useState } from "react";
import { Form, message } from "antd";
import { obligationTagsConfig } from "../../../Constants/company-tags-config";
import { ObligationType } from "../../../services/ManagementObligationService";
import { ManagementObligationService } from "../../../services/ManagementObligationService";
import moment from "moment";

type RecordType = {
  name: string;
  description: string;
  develiveryDate: moment.Moment;
  attachment: File | null
}

const initialFormState: RecordType = {
  name: '',
  description:'',
  develiveryDate: moment(),
  attachment: null
}

export function useManagementObligationController() {
  const [form] = Form.useForm<RecordType>();
  const [obligationsData, setObligationsData] = useState<ObligationType[]>([]);
  const [newObligationsData, setNewObligationsData] = useState<ObligationType[]>([]);
  const service = new ManagementObligationService();

  async function handleSubmitForm(record: RecordType) {
    try {
      const status = record.develiveryDate > moment() ? 'Atrasado' : 'Pendente';
  
      const data: ObligationType = {
        status,
        name: record.name, 
        description: record.description, 
        develiveryDate: record.develiveryDate.format(),
      }
  
      await service.createObligation(data)
      message.success('Obrigação salva com sucesso!');
      await service.getObligations('200') // ID da company do usuario
        .then(setObligationsData)
        .catch((err) => console.log(err));
    } catch(err) {
      console.log(err)
      message.error('Um problema aconteceu!')
    }
  }

  async function handleDeleteObligation(record: ObligationType) {
    record.id && await service.deleteObligation(record.id)
  }

  function handleEditObligation(obligation: ObligationType) {
    form.setFieldsValue({
      name: obligation.name,
      description: obligation.description,
      develiveryDate: obligation.develiveryDate,
      attachment: null,
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
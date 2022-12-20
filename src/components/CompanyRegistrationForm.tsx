import { Button, Card, Form, Input, Select, Tag, Tooltip } from "antd";
import { FormInstance } from "antd/es/form/Form";
import moment from "moment";
import { ICompany } from "../services/ManagementCompanyService";

interface CompanyFiltersData {
  form: FormInstance<ICompany>;
  onFinish: (values: ICompany) => void;
}

export function CompanyRegistrationForm({ form, onFinish }: CompanyFiltersData) {
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  function renderFinalDeliveryTag(finalDeliveryDate: moment.Moment | null) {
    if (finalDeliveryDate) {
      const tagConfigs = [
        {
          color: 'red',
          tooltipTitle: 'A data final de entrega para está documentação já passou, por essa razão a mesma será cadastrada como "Atrasada". Todo e qualquer cliente que tiver vinculo com está obrigação terá seu status geral atualizado para "Em atraso".',
          text: 'Atrasado'
        },
        {
          color: 'yellow',
          tooltipTitle: 'A data final de entrega para está documentação ainda não passou, por essa razão a mesma será cadastrada como "Pendente". Todo e qualquer cliente que tiver vinculo com está obrigação terá seu status geral atualizado para "Em dias".',
          text: 'Pendente'
        },
      ];
      const finalDeliveryDateHasPassed = finalDeliveryDate < moment();
      const tagConfig = finalDeliveryDateHasPassed ? tagConfigs[0] : tagConfigs[1];

      return (
        <Tooltip title={tagConfig.tooltipTitle}>
          <Tag color={tagConfig.color}>{tagConfig.text}</Tag>
        </Tooltip>
      )
    }

    return null;
  }

  return (
    <Card>
       <Form
        name="register-client-form"
        layout="vertical"
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Razão Social"
          name="name"
          rules={[{ required: true, message: 'Por favor, insira o nome da empresa!' }]}
        >
          <Input placeholder="Insira aqui o nome da empresa" />
        </Form.Item>

        <Form.Item
          label="CNPJ"
          name="cnpj"
          rules={[{ required: true, message: 'Por favor, insira o cnpj!' }]}
        >
          <Input placeholder="Insira aqui o cnpj" />
        </Form.Item>

        <Form.Item
          label="Obrigações"
          name="obligations"
        >
          <Select
            placeholder="Atrele obrigações a está empresa."
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{ width: '100%', height: 40 }}
          >
            Adicionar
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}
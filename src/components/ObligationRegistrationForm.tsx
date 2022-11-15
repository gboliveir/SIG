import { Button, Card, Col, DatePicker, Form, Input, Row, Tag, Tooltip } from "antd";
import { FormInstance } from "antd/es/form/Form";
import moment from "moment";
import { useState } from "react";
import { UploadButton } from "./UploadButton";

interface ObligationFormData {
  form: FormInstance;
  onFinish: (values: any) => void;
}

export function ObligationRegistrationForm({ form, onFinish }: ObligationFormData) {
  const [finalDeliveryDate, setFinalDeliveryDate] = useState<moment.Moment | null>(null);

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  function handleChangedDataPick(value: moment.Moment | null) {
    setFinalDeliveryDate(value)
  }

  function renderFinalDeliveryTag(finalDeliveryDate: moment.Moment | null) {
    if (finalDeliveryDate) {
      const tagConfigs = [
        {
          color: 'red',
          tooltipTitle: 'A data final de entrega para está documentação já passou, por essa razão a mesma será cadastrada como "Atrasada". Todo e qualquer cliente que tiver vinculo com está obrigação terá seu status geral atualizado para "Em atraso".',
          text: 'Atrasada'
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
        form={form}
        name="obligation-form"
        layout="vertical"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Tributo/Obrigação"
          name="name"
          rules={[{ required: true, message: 'Por favor, insira um nome!' }]}
        >
          <Input placeholder="Insira aqui o nome da obrigação" />
        </Form.Item>

        <Form.Item label="Data final de entrega">
          <Row gutter={[24, 0]}>
            <Col>
              <Form.Item
                name="finalDeliveryDate"
                rules={[{ required: true, message: 'Por favor, insira um prazo para a entrega!' }]}
              >
                <DatePicker onChange={handleChangedDataPick} value={finalDeliveryDate}/>
              </Form.Item>
            </Col>
            <Col>{renderFinalDeliveryTag(finalDeliveryDate)}</Col>
          </Row>
        </Form.Item>

        <Form.Item
          label="Anexo"
          name="attatchment"
          rules={[{ required: true, message: 'Por favor, vincule ao menos uma documentação!' }]}
        >
          <UploadButton 
            name="obligations-file"
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
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
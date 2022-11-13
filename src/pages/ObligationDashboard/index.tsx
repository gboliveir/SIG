import moment from 'moment';

import {
  Button,
  Card,
  Col,
  Layout,
  Row,
  Space,
  Table,
  Tabs,
  Tag,
  Tooltip,
  Typography
} from 'antd';
import { Header } from '../../components/Header';
import { HeaderForm } from './HeaderForm';

import { ObligationType } from '../../services/CustomerService';
import { ObligationForm } from './ObligationForm';
import { Trash } from 'phosphor-react';
import { DownloadOutlined, FileDoneOutlined, FileOutlined } from '@ant-design/icons';
import { ConfirmModal } from '../../components/ConfirmModal';
import { ColumnsType } from 'antd/lib/table';
import { useManagementObligationController } from '../../hooks/controllers/useManagementObligationController';

export function ObligationDashboard() {
  const {
    form,
    obligationsData,
    newObligationsData,
    obligationTagsConfig,
    handleSubmitForm,
    handleDeleteObligation,
    handleEditObligation
  } = useManagementObligationController();

  const showDeleteConfirm = (recordInfo: ObligationType) => ConfirmModal({
    title: 'Deseja mesmo deletar esse tributo da lista de obrigações ?',
    content: 'Se sim não será possível restaura-lo de imediato. O mesmo pode ser cadastrado novamente na aba de gestão de obrigações.',
    onDelete: () => handleDeleteObligation(recordInfo),
  })

  const obligationRecordColumns: ColumnsType<ObligationType> = [
    {
      title: 'status',
      dataIndex: 'status',
      key: 'status',
      render: (_, record) => {
        const tagConfig = obligationTagsConfig[record.status];

        return (
          <Tooltip title={tagConfig.tooltipTitle}>
            <Tag color={tagConfig.color}>
              {tagConfig.text}
            </Tag>
          </Tooltip>
        );
      }
    },
    {
      title: 'Tributo/Obrigação',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Data final de entrega',
      dataIndex: 'finalDeliveryDate',
      key: 'finalDeliveryDate',
      render: (_, record) => {
        return (
          <Typography.Text>
            {moment(record.finalDeliveryDate.format('L'), 'DD/MM/YYYY').format('L')}
          </Typography.Text>
        )
      } 
    },
    {
      title: 'Anexo',
      key: 'attatchment',
      render: (_, record) => (
        <Space size="middle">
          {record.attatchment ? <FileDoneOutlined /> : <FileOutlined />} 
          <Button disabled={!record.attatchment}>
            <DownloadOutlined />
          </Button>
        </Space>
      ),
    },
    {
      title: 'Ações',
      key: 'action',
      width: 350,
      render: (_, record) => (
        <Space size="middle">
          <Button type="default" onClick={() => handleEditObligation(record)}>
            Editar
          </Button>
          <Button
            type="text"
            danger
            onClick={() => showDeleteConfirm(record)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Trash size={20} />
          </Button>
        </Space>
      ),
    }
  ];

  const items = [
    {
      key: 'obligations-tab-1',
      label: 'Itens para criação',
      children: (
        <Table
          title={() => (
            <Row justify='space-between'>
              <Typography.Text strong>Obrigações</Typography.Text>
              <Tooltip title="Crie todas as obrigações listadas abaixo.">
                <Button disabled={newObligationsData.length === 0}>Criar Obrigações</Button>
              </Tooltip>
            </Row>
          )}
          rowKey={(record) => `new-item-${record.id}`}
          dataSource={newObligationsData}
          columns={obligationRecordColumns}
          pagination={{
            defaultPageSize: 1,
            pageSize: 4
          }}
          bordered
        />
      )
    },
    {
      key: 'obligations-tab-2',
      label: 'Itens já criados',
      children: (
        <Table
          title={() => <Typography.Text strong>Obrigações</Typography.Text>}
          rowKey={(record) => `old-item-${record.id}`}
          dataSource={obligationsData}
          columns={obligationRecordColumns}
          pagination={{
            defaultPageSize: 1,
            pageSize: 4
          }}
          bordered
        />
      )
    },
  ];

  return (
    <Layout>
      <Header title="Administração de Obrigações">
        <HeaderForm />
      </Header>

      <Layout.Content style={{ margin: '16px 32px' }}>
        <Card title="Cadastro de obrigação">
          <Row gutter={[24, 0]}>
            <Col span={10}>
              <ObligationForm form={form} onFinish={handleSubmitForm} />
            </Col>
            <Col span={14}>
              <Tabs items={items} />
            </Col>
          </Row>
        </Card>
      </Layout.Content>
    </Layout>
  )
}

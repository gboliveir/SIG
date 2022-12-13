import {
  Button,
  Card,
  Col,
  Layout,
  Row,
  Space,
  Table,
  Tabs,
  Tooltip,
  Typography
} from 'antd';
import { Header } from '../components/Header';
import { ConfirmModal } from '../components/ConfirmModal';
import { StandardizedDrawer } from '../components/StandardizedDrawer';
import { useManagementUserController } from '../hooks/controllers/useManagementUserController'
import { UserType } from '../hooks/controllers/usePainelCounterController';
import { ColumnsType } from 'antd/lib/table';
import { Trash } from 'phosphor-react';
import { UserRegistrationForm } from '../components/UserRegistrationForm';
import { useEffect } from 'react';

export function ManagementUser() {
  const {
    form,
    usersData,
    newUsersData,
    handleAddUserToCreationList,
    handleDeleteUser,
    closeDrawer,
    isDrawerOpen,
    fetchUsers,
    handleCreateUserList
  } = useManagementUserController();

  useEffect(() => {
    fetchUsers();
  }, []);

  const showDeleteConfirm = (recordInfo: UserType) => ConfirmModal({
    title: 'Deseja mesmo deletar este usuário ?',
    content: 'Se sim não será possível restaura-lo de imediato. Se encessário o retorno do mesmo a base de dados, será necessário um novo cadastrado através da tela de Adminitração de Usuários.',
    onDelete: () => handleDeleteUser(recordInfo),
  })

  const userTableColumns: ColumnsType<UserType> = [
    {
      title: 'Nome',
      dataIndex: 'name',
      key: 'name',
      width: 150,
    },
    {
      title: 'CPF',
      dataIndex: 'cpf',
      key: 'cpf',
      width: 200,
    },
    {
      title: 'Contatos',
      key: 'contacts',
      width: 150,
      render: (_, record) => (
        <Row>
          <Typography.Text>{record.email}</Typography.Text>
          <Typography.Text>{record.phoneNumber}</Typography.Text>
          <Typography.Text>{record.whatsapp}</Typography.Text>
        </Row>
      ),
    },
    {
      title: 'Ações',
      key: 'action',
      width: 350,
      render: (_, record) => (
        <Space size="middle">
          <Button type="default" onClick={() => handleDeleteUser(record)}>
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
      key: 'users-tab-1',
      label: 'Usuários para criação',
      children: (
        <Table
          title={() => (
            <Row justify='space-between'>
              <Typography.Text strong>Usuários</Typography.Text>
              <Tooltip title="Cadastre todas as organizações listadas abaixo.">
                <Button
                  disabled={newUsersData.length === 0}
                  onClick={handleCreateUserList}
                >
                  Criar usuários
                </Button>
              </Tooltip>
            </Row>
          )}
          rowKey={(record) => `new-item-${record.id}`}
          dataSource={newUsersData}
          columns={userTableColumns}
          pagination={{
            defaultPageSize: 1,
            pageSize: 4
          }}
          bordered
        />
      )
    },
    {
      key: 'users-tab--2',
      label: 'Usuários já criados',
      children: (
        <Table
          title={() => <Typography.Text strong>Usuários</Typography.Text>}
          rowKey={(record) => `old-item-${record.id}`}
          dataSource={usersData}
          columns={userTableColumns}
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
      <Header title="Administração de Usuarios" />

      <Layout.Content style={{ margin: '16px 32px' }}>
        <Card title="Gestão de usuários">
          <Row gutter={[24, 0]}>
            <Col span={10}>
              <UserRegistrationForm form={form} onFinish={handleAddUserToCreationList} />
            </Col>
            <Col span={14}>
              <Tabs items={items} />
            </Col>
          </Row>
        </Card>

        <StandardizedDrawer
          title="Contatos"
          onClose={closeDrawer}
          open={isDrawerOpen}
        > 
          <Table
            rowKey={(record) => record.id}
            dataSource={usersData}
            columns={userTableColumns}
          />
        </StandardizedDrawer>
      </Layout.Content>
    </Layout>
  )
}

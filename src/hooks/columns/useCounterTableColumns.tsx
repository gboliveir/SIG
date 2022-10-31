import { useContext, useState } from "react";

import { Button, Col, Row, Space, Tag, Typography } from "antd";

import { ColumnsType } from "antd/lib/table/interface";
import { EnvelopeSimple, Phone, Trash, WhatsappLogo } from "phosphor-react";

import { UserEditingDrawerContext } from "../../contexts/UserEditingDrawerContext";

import { CustomerType } from "../../services/AccountantService";
import { UserDocumentationsDrawerContext } from "../../contexts/UserDocumentationsDrawerContext";

const { Text, Link } = Typography;

export function useCounterColumns() {
  const { showDrawer } = useContext(UserEditingDrawerContext);
  const { showDocumentationDrawer } = useContext(UserDocumentationsDrawerContext);

  const contactIcons = [
    <Phone size={20} style={{ lineHeight: 0 }}/>,
    <WhatsappLogo size={20} />,
    <EnvelopeSimple size={20} />
  ]

  const statusConfig = [
    {
      color: 'green',
      text: 'Em dias'
    },
    {
      color: 'gold',
      text: 'Pendente'
    },
    {
      color: 'red',
      text: 'Atrasado'
    }
  ]

  const customerTableColumns: ColumnsType<CustomerType> = [
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      width: 200,
      render: (_, record) => {
        console.log(record);
        const statusCodeConfig = Number(record.status.id);
        const config = statusConfig[statusCodeConfig - 1];

        return (
          <Tag color={config.color}>
            {config.text}
          </Tag>
        );
      }
    },
    {
      title: 'CNPJ',
      dataIndex: 'cnpj',
      key: 'cnpj',
      width: 200
    },
    {
      title: 'Razão Social',
      dataIndex: 'name',
      key: 'name',
      width: 200
    },
    {
      title: 'Contatos',
      dataIndex: 'contacts',
      key: 'contacts',
      width: 250,
      render: (_, record) => {
        return (
          <Row>
            {record.contacts.map(contact => {
              const contactType = Number(contact.type);

              return (
                <Col style={{ display: 'flex', gap: 8 }} key={contact.id}>
                  {contactIcons[contactType - 1]}
                  {contactType === 2 ? (
                    <Link
                      href={`mailto:${contact.contact}`}
                      target='_blank'
                    >
                      {contact.contact}
                    </Link>
                  ) : (
                    <Text>{contact.contact}</Text>
                  )}
                </Col>
              );
            })}
          </Row>
        );
      },
    },
    {
      title: 'Detalhes',
      key: 'details',
      width: 350,
      render: (_, record) => (
        <Space size="middle">
          <Button type="primary" onClick={showDocumentationDrawer}>
            + Acessar lista de documentações
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
          <Button type="default" onClick={() => showDrawer(record)}>
            Editar
          </Button>
          <Button
            type="text"
            danger
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

  return ({
    customerTableColumns
  });
}
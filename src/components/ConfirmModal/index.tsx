import { Modal} from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

interface ConfirmModalProps {
  title: string;
  content: string;
}

export function ConfirmModal({ title, content }: ConfirmModalProps) {
  return (
    Modal.confirm({
      title,
      content,
      icon: <ExclamationCircleOutlined />,
      okText: 'Sim',
      okType: 'danger',
      cancelText: 'Não',
      onOk() {
        return new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => console.log('Oops errors!'));
      },
      onCancel() {},
    })
  );
}
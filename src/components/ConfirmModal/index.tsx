import { Modal} from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

interface ConfirmModalProps {
  title: string;
  content: string;
  onDelete: () => void;
}

export function ConfirmModal({ title, content, onDelete }: ConfirmModalProps) {
  return (
    Modal.confirm({
      title,
      content,
      icon: <ExclamationCircleOutlined />,
      okText: 'Sim',
      okType: 'danger',
      cancelText: 'Não',
      onOk() {
        return onDelete();
      },
      onCancel() {},
    })
  );
}
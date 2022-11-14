import { InboxOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { message, Upload } from 'antd';
import { UploadChangeParam } from 'antd/lib/upload';

export function UploadButton({ name, multiple, action, ...props }: UploadProps) {
  function onchange(info: UploadChangeParam) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  }

  function onDrop(event: React.DragEvent<HTMLDivElement>) {
    console.log('Dropped files', event.dataTransfer.files);
  }

  return (
    <Upload.Dragger
      name={name}
      multiple={multiple}
      action={action}
      onChange={onchange}
      onDrop={onDrop}
      {...props}
    >
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">Clique ou arraste o arquivo para esta área para fazer upload</p>
      <p className="ant-upload-hint">É possível realizar o upload de um ou mais arquivos.</p>
    </Upload.Dragger>
  )
}

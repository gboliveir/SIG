import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';

import { ConfigProvider } from 'antd';
import ptBR from 'antd/es/locale/pt_BR';
import { AuthProvider } from './contexts/AuthContext';
import { UserEditingDrawerProvider } from './contexts/UserEditingDrawerContext';
import { UserDocumentationsDrawerProvider } from './contexts/UserDocumentationsDrawerContext';

import './styles/global.scss';
import 'antd/dist/antd.css';

export function App() {
  return (
    <ConfigProvider locale={ptBR}>
      <AuthProvider>
        <UserEditingDrawerProvider>
          <UserDocumentationsDrawerProvider>
            <BrowserRouter>
              <Router />
            </BrowserRouter>
          </UserDocumentationsDrawerProvider>
        </UserEditingDrawerProvider>
      </AuthProvider>
    </ConfigProvider>
  )
}

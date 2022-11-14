import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';
import { AuthProvider } from './contexts/AuthContext';
import { ConfigProvider } from 'antd';
import ptBR from 'antd/es/locale/pt_BR';

import './styles/global.scss';
import 'antd/dist/antd.css';

export function App() {
  return (
    <ConfigProvider locale={ptBR}>
      <AuthProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </AuthProvider>
    </ConfigProvider>
  )
}

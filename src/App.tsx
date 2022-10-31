import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';

import { AuthProvider } from './contexts/AuthContext';
import { UserEditingDrawerProvider } from './contexts/UserEditingDrawerContext';
import { UserDocumentationsDrawerProvider } from './contexts/UserDocumentationsDrawerContext';

import './styles/global.scss';
import 'antd/dist/antd.css';

export function App() {
  return (
    <AuthProvider>
      <UserEditingDrawerProvider>
        <UserDocumentationsDrawerProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </UserDocumentationsDrawerProvider>
      </UserEditingDrawerProvider>
    </AuthProvider>
  )
}

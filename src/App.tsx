import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';

import { AuthProvider } from './contexts/AuthContext';

import './styles/global.scss';
import 'antd/dist/antd.css';

export function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </AuthProvider>
  )
}

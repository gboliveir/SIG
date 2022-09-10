import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';

import './styles/global.scss';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

export function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}

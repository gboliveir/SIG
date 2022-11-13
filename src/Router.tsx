import { Route, Routes } from "react-router-dom";

import { DefaultLayout } from "./layout/DefaultLayout";
import { Home } from "./pages/Home";
import { AccountantDashboard } from "./pages/AccountantDashboard";
import { CustomerDashboard } from "./pages/CustomerDashboard";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { ObligationDashboard } from "./pages/ObligationDashboard";
import { CompanyManagement } from "./pages/CompanyManagement";

export function Router() {
  return (
    <Routes>
      <Route path="/lmcontabilidade">
        <Route path="/lmcontabilidade/home" element={<Home />} />
        <Route path="/lmcontabilidade/login" element={<Login />} />
        <Route path="/lmcontabilidade/register" element={<Register />} />
        <Route path="/lmcontabilidade/painel/" element={<DefaultLayout />}>
          <Route path="/lmcontabilidade/painel/counter" element={<AccountantDashboard />} />
          <Route path="/lmcontabilidade/painel/customer" element={<CustomerDashboard />} />
          <Route path="/lmcontabilidade/painel/management/obligation" element={<ObligationDashboard />} />
          <Route path="/lmcontabilidade/painel/management/company" element={<CompanyManagement />} />
        </Route>
      </Route>
    </Routes>
  )
}
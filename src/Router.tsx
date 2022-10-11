import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layout/DefaultLayout";
import { Counter } from "./pages/Counter";
import { Customer } from "./pages/Customer";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

export function Router() {
  return (
    <Routes>
      <Route path="/lmcontabilidade" element={<DefaultLayout />}>
        <Route path="/lmcontabilidade/painel/counter" element={<Counter />} />
        <Route path="/lmcontabilidade/painel/customer" element={<Customer />} />
        <Route path="/lmcontabilidade/login" element={<Login />} />
        <Route path="/lmcontabilidade/register" element={<Register />} />
      </Route>
    </Routes>
  )
}
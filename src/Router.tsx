import { Route, Routes } from "react-router-dom";

import { DefaultLayout } from "./layout/DefaultLayout";
import { Home } from "./pages/Home";
import { Counter } from "./pages/Counter";
import { Customer } from "./pages/Customer";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

export function Router() {
  return (
    <Routes>
      <Route path="/lmcontabilidade">
        <Route path="/lmcontabilidade/home" element={<Home />} />
        <Route path="/lmcontabilidade/login" element={<Login />} />
        <Route path="/lmcontabilidade/register" element={<Register />} />
        <Route path="/lmcontabilidade/painel/" element={<DefaultLayout />}>
          <Route path="/lmcontabilidade/painel/counter" element={<Counter />} />
          <Route path="/lmcontabilidade/painel/customer" element={<Customer />} />
        </Route>
      </Route>
    </Routes>
  )
}
import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layout/DefaultLayout";
import { Counter } from "./pages/Counter";
import { Client } from "./pages/Client";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

export function Router() {
  return (
    <Routes>
      <Route path="/lmcontabilidade" element={<DefaultLayout />}>
        <Route path="/lmcontabilidade/painel/counter" element={<Counter />} />
        <Route path="/lmcontabilidade/painel/client" element={<Client />} />
        <Route path="/lmcontabilidade/login" element={<Login />} />
        <Route path="/lmcontabilidade/register" element={<Register />} />
      </Route>
    </Routes>
  )
}
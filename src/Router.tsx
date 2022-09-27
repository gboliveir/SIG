import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layout/DefaultLayout";
import { Counter } from "./pages/Counter";
import { Login } from "./pages/login";

export function Router() {
  return (
    <Routes>
      <Route path="/lmcontabilidade" element={<DefaultLayout />}>
        <Route path="/lmcontabilidade/painel/counter" element={<Counter />} />
        <Route path="/lmcontabilidade/login" element={<Login />} />
      </Route>
    </Routes>
  )
}
import { Route, Routes } from "react-router-dom";
import { Counter } from "./pages/Counter";
import { DefaultLayout } from "./layout/DefaultLayout";

export function Router() {
  return (
    <Routes>
      <Route path="/lmcontabilidade" element={<DefaultLayout />}>
        <Route path="/lmcontabilidade/painel/counter" element={<Counter />} />
      </Route>
    </Routes>
  )
}
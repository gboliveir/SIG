import { Route, Routes } from "react-router-dom";
import { Counter } from "./pages/Counter";

export function Router() {
  return (
    <Routes>
      <Route path="/painel">
        <Route path="/painel/counter" element={<Counter />}/>
      </Route>
    </Routes>
  )
}
import { useState } from 'react'

import './styles/global.scss';

export function App() {
  const [count, setCount] = useState(0)

  return (
    <h1>Ola mundo</h1>
  )
}

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { MedList } from './features/medList/medList'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MedList></MedList>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Uncontrolled from './components/useRef/Uncontrolled'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* useRef - uncontrolled form - input */}
      <Uncontrolled />


    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function increaseCount(){
    setCount(count + 1)
  }

  return (
    <>
    <h1>Currently value of count is {count}</h1>
    <button onClick={() => increaseCount()}>Increment Counter</button>
    </>
  )
}

export default App

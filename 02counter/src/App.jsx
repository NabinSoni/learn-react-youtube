import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  const addCount = () => {
    if (counter < 5) 
      setCounter(counter + 1)
  }

  const reduceCount = () => {
    if(counter != 0) 
      setCounter(counter - 1)
  }
  

  return (
    <>
     <h1>Chai aur React | {counter}</h1>
     <button onClick={addCount}>
      Add Count {counter}</button>
     <br />
     <button onClick={reduceCount}>
      Reduce Count {counter}</button>
    </>
  )
}

export default App

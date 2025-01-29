import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    name: 'ChaiAurCode',
    age: 25
  }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwindcss Test</h1>
     <Card username="Nabin" button="Clinck Me"></Card>
     <Card username="Soni" button="Add New"></Card>
    </>
  )
}

export default App

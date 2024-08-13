import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)

  // Correctly declare myObj
  let myObj = {
    username: "niket",
    age: 21
  }

  let newArr = [1, 2, 3]

  return (
    <>
      {/* Tailwind Heading */}
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind</h1>
      
      {/* Card components */}
      <Card username="chaiaurcode" btnText="click me"   />
      <Card username="Niket" btnText="visit me"/>
      <Card username="Narayan" btnText="explore me"/>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(5)
 // let counter = 5
  const addValue = () => {
    if(counter <= 20){
      const newCounter = counter + 1
      setCounter(newCounter)
      console.log("clicked", newCounter)
      
    
    }else{
      console.log("error")
    }
    
  }

  const removeValue = () => {
    if(counter >0){
      setCounter(counter - 1)
      console.log("clicked", counter)
    }else{
      console.log("error")
    }
    
  }

  return (
    <>
     <h1>chai or code</h1>
     <h3>counter value:{counter}</h3>
     <button onClick={addValue}
     >add value</button>
     <br />
     <button  onClick={removeValue}
     >remove value{counter}</button>
     <p>footer:{counter}</p>
    </>
  )
}

export default App

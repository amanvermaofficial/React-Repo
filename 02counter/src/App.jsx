import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter]=useState(15)
// let counter=15;

const addValue = ()=>{
  /* All the Updates you have to send UI are not just in UI in the variables even send them in batches
  
  Earlier also we used to send batches but those batches and control come on our fiber which is an algo,our defying.

    setCounter(counter+1);
    setCounter(counter+1);
    setCounter(counter+1);
    setCounter(counter+1);
  
    Features of callback function
    setCounter((prevCounter)=>{ prevCounter+1})
  */
    setCounter( prevCounter => prevCounter+1)
    setCounter( prevCounter => prevCounter+1)
    setCounter( prevCounter => prevCounter+1)
    setCounter( prevCounter => prevCounter+1)
   //now its not bunches of packets,now its take previous state 
  
} 

const removeValue = ()=>{
if (counter>0) {
  setCounter(counter-1)
}
}

  return (
    <>
    <h1>Chai aur React</h1>
    <h2>Counter value : {counter}</h2>

     <button onClick={addValue}>Add value {counter}</button>
    <br />
    <button onClick={removeValue}>Remove value {counter}</button>
    <p>footer {counter}</p>
    </>
  )
}

export default App

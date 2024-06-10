import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  let myObj = {
    username: "aman",
    age:21
  }

  return (
    //fregment<></>
    <>
       <h1 className='bg-green-400 text-black p-4 rounded-xl mb-5'>Heloo Tailwind</h1> 
  "<Card username ="itipapers" someObj={myObj} btnText="click me" />
    <Card username ="amanvermaofficial" btnText="visit me"/>
    </>
  )
}

export default App

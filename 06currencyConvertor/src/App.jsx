import { useState } from 'react'
import {InputBox} from './components'
import useCurrencyInfo from './hooks/usecurrencyInfo'
import './App.css'


function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("ind")
  
  return (
    <>
  <h1 className='text-3xl bg-orange-400 py-2'>Currency app with chai</h1>
    </>
  )
}

export default App


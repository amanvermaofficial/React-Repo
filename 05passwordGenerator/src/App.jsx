import { useState, useCallback,useEffect,useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("");
  const [buttonText, setButtonText] = useState('Copy')
  
  //useRef Hook :- it give us refrence of any element in our webpage we can take refrence those element and can perform manipulation.
  const passwordRef = useRef(null)
/* useCallback :- useCallback ka use functions ko memoize karke unnecessary re-creations se bachane ke liye kiya jata hai, jo potential performance improvements la sakta hai. its like cache memory*/
  const passwordGenetor = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed,setPassword]/*jis jis pe dependency hai aapki or possible run hoga kaise bhi aap us method ko optimize krlo means yha pe dependency optimization ke liy use hui*/)

const copyPasswordToClipboard = useCallback(()=>{
  setButtonText('Copied!');
  setTimeout(() => {
    setButtonText('Copy');
}, 2000); 
  /*password ref jo h it tells current object hai ya nhi , kya vo mere pass accessiable h ya nhi h,kya vo selectable h ya nhi user ko thoda sa or optimized result bta skte h*/
  passwordRef.current?.select()
  passwordRef.current?.setSelectionRange(0,100)
  window.navigator.clipboard.writeText(password);
},[password])


/* useEffect:- jab bhi hmara page load hota hai first time pe ye called hota h  */
useEffect(()=>{
  passwordGenetor();
},[length, numberAllowed, charAllowed,setPassword]/* but here dependencies mein kuch bhi ched chad ho ye function ko run or use phir se krta hai*/)

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800">
        <h1 className='text-white text-center'>Password genetor</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />

          <button 
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 px-3 py-0.5 text-white'>{buttonText}</button>

        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label> Length : {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={() => {
                setNumberAllowed((prev) => !prev)
              }}
            />
            <label>Number</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={charAllowed}
              id='characterInput'
              onChange={() => {
                setCharAllowed((prev) => !prev)
              }}
            />
            <label htmlFor='characterInput'>Characters</label>
          </div>
        </div>
      </div>

    </>
  )
}

export default App




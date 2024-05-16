
import { useCallback, useEffect, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumallowed] = useState(false);
  const [charAllowed, setCharallowed] = useState(false);
  const [password, setPassword] = useState()

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqurstuvwxyz";

    if(numAllowed) str += "012456789";
    if(charAllowed) str += "!@#$%^&*()_+{}|?><";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random()* str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword])

  useEffect(() => {
    passwordGenerator()
  }, [length, charAllowed, numAllowed])
  

  return (
    <>
      <h1>Password Generator</h1>
      <input type="text"  
      value={password} 
      placeholder='Password'
      />

      <br />

      <input type="range"  
       onClick={passwordGenerator}
       min={6}
       max={20}
       onChange={(e) => {setLength(e.target.value)}}
      />

      <label>{length}</label>

      <input 
        type='checkbox'
        id="characterInput"
        defaultChecked= {charAllowed}
        onChange={() => {setCharallowed((prev) => !prev)}}
      />
      <label htmlFor="characterInput">Character</label>

      <input 
        type='checkbox'
        defaultChecked = {numAllowed}
        onChange={() => {setNumallowed(prev => !prev)}}
        id='numberInput'
      />
      <label htmlFor="numberInput">Numbers</label>
      
    </>
  )
}

export default App

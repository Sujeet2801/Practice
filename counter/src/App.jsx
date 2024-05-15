import { useState } from 'react'

import './App.css'

function App() {

  const [counter, setCounter] = useState(15)

  const addValue = () => {

    // setCounter(counter + 1)
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
    console.log(counter); 
    
  }

  const removeValue = () => {
    setCounter(counter - 1);
  }

  return (
    <>
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <button style={{background: 'blue', color: 'white'}}
        onClick={addValue}>
        Add value {counter}
      </button>
      <br />
      <button style={{background: 'blue', color: 'white'}}
        onClick={removeValue}>
        Remove value {counter}
      </button>
      
      <h2>{counter}</h2>
    </>
  )
}

export default App

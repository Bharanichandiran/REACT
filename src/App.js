import { useState } from "react"
import React from 'react';

function App() {
  const [count, setCount] = useState(0);
  function decrement(){
    setCount(count-1)
  }
  function increment(){
    setCount(count+1)
  }
  return (
    <div className="container">
    <button onClick={()=>decrement()}>-</button>
    <h1>{count}</h1>
    <button onClick={increment}>+</button>
    </div>
  )

}
export default App;
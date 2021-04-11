import { useState } from 'react';

export function Counter(){
  const [counter, setCounter] = useState(0);

  function increment(){
    setCounter(counter + 1);
  }

  return(
    <div>
      <h2>{counter}</h2>
      <h1>Hi</h1>
      <button type="button" onClick={increment}>Increment</button>
    </div>
  )
}
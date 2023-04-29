import { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
    console.log(count);
  }

  return (
    <>
      <h1>Counter {count}</h1>
      <button onClick={()=>increment()}>Increment</button>
    </>
  )
}
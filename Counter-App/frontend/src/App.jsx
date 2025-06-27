import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function increase() {
    setCount(count => count + 1)
  }

  function decrease() {
    setCount(count => {
      if (count == 0) {
        alert('Negative values not allowed')
        return count;
      }
      else
        return count - 1;
    });
  }

  function reset() {
    setCount(count => {
      if (count == 0)
        alert('Count is already set to 0')
      return 0
    });
  }


  return (
    <div className="counter-container">
      <p>Count {count}</p>
      <button onClick={increase}>Increment</button>
      <button onClick={decrease}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default App

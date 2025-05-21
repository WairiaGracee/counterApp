import './App.css';
import { useState } from 'react';

function App() {

  const [count, setCount] = useState(0)

  const myCounter = () =>{
    setCount(count + 1)
  }

  const subtract = () =>{
    setCount(count - 1)
    }
  return (
    <div className="App">
      <h1>Counter App</h1>

      <div className="numberDisplay">
        <p>{count}</p>
        <div className="btns">
          <button onClick={myCounter}>+</button>
          <button onClick={subtract}>-</button>
        </div>
      </div>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div className="counter">
        <h1>{count}</h1>
        <div className="btns">
          <button onClick={() => setCount(count + 1)}>Increment</button>
          <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
      </div>
    </div>
  );
}

export default App
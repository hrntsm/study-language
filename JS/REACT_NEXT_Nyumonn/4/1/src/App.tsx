import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const clickFunc = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <h1 className="bg-primary text-white display-4">React</h1>
      <div className="container">
        <h4 className="my-3">Hooks sample</h4>
        <div className="alert alert-primary text-center">
          <p className="h5 mb-3">click: {count} times!</p>
          <div>
            <button className="btn btn-primary" onClick={clickFunc}>Click me!</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
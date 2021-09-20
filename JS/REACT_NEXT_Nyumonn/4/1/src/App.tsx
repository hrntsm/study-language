import React, { useState } from 'react';
import './App.css';

function App() {
  const [message] = useState("Welcome to Hook!")

  return (
    <div>
      <h1 className="bg-primary text-white display-4">React</h1>
      <div className="container">
        <h4 className="my-3">Hooks sample</h4>
        <div className="alert alert-primary text-center">
          <p className="h5">{message}</p>
        </div>
      </div>
    </div>
  )
}

export default App;
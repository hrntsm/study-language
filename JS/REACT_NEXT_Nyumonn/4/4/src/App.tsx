import React, { useState } from 'react';
import './App.css';

function useCounter() {
  const [num, setNum] = useState(0);

  const count: any = () => {
    setNum(num + 1);
  };

  return [num, count];
}


function AlertMessage(props: any) {
  const [counter, plus] = useCounter();

  return <div className="alert alert-primary h5 text-center">
    <h4>count: {counter} .</h4>
    <button onClick={plus} className="btn btn-primary">count</button>
  </div>
}

function App() {
  return (
    <div>
      <h1 className="bg-primary text-white display-4 text-right">React</h1>
      <div className="container">
        <h4 className="my-3">Hooks sample</h4>
        <AlertMessage />
      </div>
    </div>
  )
}

export default App;
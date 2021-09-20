import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);
  const clickFunc = () => {
    setCount(count + 1);
  }
  const changeFlag = (e: any) => {
    setFlag(e.target.checked);
  }

  return (
    <div>
      <h1 className="bg-primary text-white display-4">React</h1>
      <div className="container">
        <h4 className="my-3">Hooks sample</h4>
        {flag ?
          <div className="alert alert-primary text-center">
            <p className="h5 mb-3">click: {count} times!</p>
            <div>
              <button className="btn btn-primary" onClick={clickFunc}>
                Click me!
              </button>
            </div>
          </div>
          :
          <div className="card p-3 border-primary text-center">
            <p className="h5 mb-3 text-left text-primary">click: {count} times!</p>
            <div>
              <button className="btn btn-primary" onClick={clickFunc}>
                Click me!
              </button>
            </div>
          </div>
        }
        <div className="form-group h6 text-center pt-3">
          <input type="checkbox" className="form-check-input" id="check1" onChange={changeFlag} />
          <label className="form-check-label" htmlFor="check1">Change from style.</label>
        </div>
      </div>
    </div>
  )
}

export default App;
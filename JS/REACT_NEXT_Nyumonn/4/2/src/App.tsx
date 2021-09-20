import React, { useState } from 'react';
import './App.css';

function AlertMessage(props: any) {
  const data = ["Hello!", "Welcome...", "Good-bye?"]

  const actionAlert = () => {
    const re = data[Math.floor(Math.random() * data.length)]
    props.setAlert("message: " + re + ".")
  }

  return <div className="alert alert-primary h5 text-primary">
    <h5>{props.alert}</h5>
    <button onClick={actionAlert} className="btn btn-primary">
      Click me!
    </button>
  </div>
}

function CardMessage(props: any) {
  const [count, setCount] = useState(0)

  const actionCard = () => {
    setCount(count + 1)
    props.setCard("card counter: " + count + " count.")
  }

  return <div className="card p-3 h5 border-primary text-center">
    <h5>{props.card}</h5>
    <button onClick={actionCard} className="btn btn-secondary">
      Click me!
    </button>
  </div>
}

function App() {
  const [alert, setAlert] = useState("This is alert message!")
  const [card, setCard] = useState("This is card message!")

  return (
    <div>
      <h1 className="bg-primary text-white display-4 text-right">React</h1>
      <div className="container">
        <h4 className="my-3">Hooks sample</h4>
        <AlertMessage alert={alert} setAlert={setAlert} />
        <CardMessage card={card} setCard={setCard} />
        <hr />
        <div className="text-right">
          <p>{alert}</p>
          <p>{card}</p>
        </div>
      </div>
    </div>
  )
}

export default App;
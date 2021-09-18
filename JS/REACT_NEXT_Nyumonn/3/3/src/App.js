import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      msg: "count start!",
      counter: 0,
    };
    this.doAction = this.doAction.bind(this);
  }

  doAction() {
    this.setState({
      counter: this.state.counter + 1,
      msg: '*** count: ' + this.state.counter + ' ***',
    });
  }

  render() {
    return <div>
      <h1 className="bg-primary text-white display-4">React</h1>
      <div className="container">
        <p className="subtitle">Count number</p>
          <div className="alert alert-primary text-center">
            <p className="h5 mb-4">{this.state.msg}</p>
            <button className="btn btn-primary"
              onClick={this.doAction}>
              Click</button>
          </div>
      </div>
    </div>
  }
}

export default App;

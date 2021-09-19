import React, { Component } from 'react';
import './App.css';

class App extends Component {
  input = '';

  constructor(props) {
    super(props);
    this.state = {
      title: 'input form',
      message: 'type your name.',
      max: 10,
    }
    this.doCheck = this.doCheck.bind(this);
  };

  doCheck(e) {
    alert(e.target.value + "は長すぎます。（最大" + this.state.max + "文字）");
  }

  render() {
    return <div>
      <h1 className="bg-primary text-white display-4">React</h1>
      <div className="container">
        <h4>{this.state.title}</h4>
        <Message maxlength={this.state.max} onCheck={this.doCheck} />
      </div>
    </div>
  }
}


class Message extends Component {
  li = {
    fontSize: "14px",
    fontWeight: "bold",
    color: "##090"
  }

  constructor(props) {
    super(props);
    this.doChange = this.doChange.bind(this);
  }

  doChange(e) {
    if (e.target.value.length > this.props.maxlength) {
      this.props.onCheck(e);
      e.target.value = e.target.value.substr(0, this.props.maxlength);
    }
  }

  render() {
    return <div className="form-group">
      <label>input:</label>
      <input type="text" className="form-control" onChange={this.doChange} />
    </div>
  }
}

export default App;
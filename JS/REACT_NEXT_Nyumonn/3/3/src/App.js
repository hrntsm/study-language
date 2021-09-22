import React, { Component } from 'react';
import './App.css';

class App extends Component {
  data = [
    "This is list sample.",
    "これはリストのサンプルです",
    "配列をリストに変換します",
  ];

  constructor(props) {
    super(props);
    this.state = {
      list: this.data,
    };
  }

  render() {
    return <div>
      <h1 className="bg-primary text-white display-4">React</h1>
      <div className="container">
        <p className="subtitle">Show List.</p>
        <div style={this.area} onClick={this.doAction}>
          <List title="サンプル リスト" data={this.data} />
        </div>
      </div>
    </div>
  }
}

class List extends Component {
  render() {
    let data = this.props.data;
    return (
      <div>
        <p className="h5 text-center">{this.props.title}</p>
        <ul className="list-group">
          {data.map((item, key) =>
            <li className="list-group" key={key}>
              <Item number={key + 1} value={item} />
            </li>
          )}
        </ul>
      </div>
    )
  }
}

class Item extends Component {
  itm = {
    fontSize: "16pt",
    color: "#00f",
    textDecoration: "underline",
    textDecorationColor: "#ddf",
  };

  num = {
    fontWeight: "bold",
    color: "red",
  }

  render() {
    return (
      <p style={this.itm}>
        <span style={this.num}>
          [{this.props.number}]&nbsp;
        </span>
        {this.props.value}
      </p>
    )
  }
}

export default App;

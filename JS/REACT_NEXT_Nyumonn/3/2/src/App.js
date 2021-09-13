import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return <div>
      <h1 className="bg-primary text-white display-4">React</h1>
      <div className="container">
        <p className="subtitle">This is sample component</p>
        <p>これはサンプルコンポーネントです</p>
        <p>簡単なメッセージを表示します</p>
      </div>
    </div>
  }
}

export default App;

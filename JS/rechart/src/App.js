import React, { Component } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

class App extends Component {
  state = { screen: "home", data: [] }

  handleSubmit = async (file) => {
    var csv = readFileAsText(file);
    var data = mapCSVToArray(csv);
    this.setState({ screen: "report", data })
  }

  render() {
    return <div>
      <FileSelect onSubmitted={this.onSubmitted} />
      {this.state.screen === "home" ? (
        <div>
          <h1>React-Charts</h1>
        </div>
      ) : (
        <div>
          <h1>Wave Graph</h1>
          <LineChart width={600} height={300} data={this.date} margin={{ top: 5, right: 30, bottom: 5, left: 0 }}>
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5.5" />
            <XAxis dataKey="name" interval={1} />
            <YAxis />
            <Tooltip />
          </LineChart>
        </div>)}
    </div>
  }
}

function graphValues() {
  return [
    { name: 'Page A', uv: 4000 },
    { name: 'Page B', uv: 3000 },
    { name: 'Page C', uv: 2000 },
    { name: 'Page D', uv: 2780 },
    { name: 'Page E', uv: 1890 },
    { name: 'Page F', uv: 2390 },
    { name: 'Page G', uv: 3490 }
  ];
}

function readFileAsText(file) {
  return new Promise((resolve, reject) => {
    var reader = new FileReader();
    // reader.onload = () => resolve(reader.result);
    // reader.onerror = reject;
    reader.readAsText(file);
  });
}

function mapCSVToArray(csv) {
  return csv.split('\n').map(row => {
    const values = row.split(',');
    return {
      time: values[0],
      value: parseFloat(values[1], 10)
    };
  });
}

class FileSelect extends Component {
  handleShowReport = async () => {
    this.props.onSubmit(this.file.file[0]);
  }

  render() {
    return (
      <div>
        <p>CSV ファイルを選択してください</p>
        <input
          type="file"
          ref={(input) => { this.file = input; }}
          accept="text/csv"
        />
      </div>
    );
  }
}

export default App;
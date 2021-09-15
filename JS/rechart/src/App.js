import React, { Component } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

class App extends Component {
  render() {
    return <div>
      <h1>Recharts</h1>
      <LineChart width={600} height={300} data={graphValues()} margin={{ top: 5, right: 30, bottom: 5, left: 0 }}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5.5" />
        <XAxis dataKey="name" interval={1} />
        <YAxis />
        <Tooltip />
      </LineChart>
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

export default App;
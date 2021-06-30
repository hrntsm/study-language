import { sums } from '../libs/next_rust_bg.wasm';
import { useState } from "react";

const App = () => {
  const [value, setValue] = useState(1);
  return (
    <div>
      <input
        onChange={(e) => {
          const v = Number(e.target.value);
          !isNaN(v) && setValue(sums(v));
        }}
      />
      <div>{value}</div>
    </div>
  );
};

export default App;

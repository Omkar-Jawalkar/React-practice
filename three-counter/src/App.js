import React, { useState } from "react";
import Button from "./Button";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Counter : {count}</h1>
      <div>
        <button onClick={() => setCount(0)} className="button">
          Reset
        </button>
        <button onClick={() => setCount(count + 1)} className="button">
          Increase
        </button>
        <button
          onClick={() => {
            count <= 0 ? setCount(0) : setCount(count - 1);
          }}
          className="button"
        >
          Decrease
        </button>
      </div>
    </div>
  );
};

export default App;

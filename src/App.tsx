import React, { useState } from "react";
import "./App.css";
import UpdateCountValue from "./components/UpdateCounter";
import { UpdateCounterContext } from "./context";

function App(): JSX.Element {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="App">
      <h2>{count}</h2>

      <UpdateCounterContext.Provider
        value={{
          count,
          setCount,
        }}
      >
        <UpdateCountValue />
      </UpdateCounterContext.Provider>
    </div>
  );
}

export default App;

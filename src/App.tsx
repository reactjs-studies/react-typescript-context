import React, { useState } from "react";
import "./App.css";
import UpdateCountValue from "./components/UpdateCounter";
import { UpdateCounterContext } from "./context";

import type { Props, MouseEventFn } from "./appTypes";

function increaseCount({ count, setCount }: Props): MouseEventFn {
  return (e) => {
    e.preventDefault();
    setCount(count + 1);
  };
}

function decreaseCount({ count, setCount }: Props): MouseEventFn {
  return (e) => {
    e.preventDefault();
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(count);
    }
  };
}

function App(): JSX.Element {
  const [count, setCount] = useState<number>(0);

  const props: Props = {
    count,
    setCount,
  };

  return (
    <div className="App">
      <h2>{count}</h2>

      <UpdateCounterContext.Provider
        value={{
          increaseFn: increaseCount(props),
          decreaseFn: decreaseCount(props),
        }}
      >
        <UpdateCountValue />
      </UpdateCounterContext.Provider>
    </div>
  );
}

export default App;

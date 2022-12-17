import React, { useState } from "react";
import "./App.css";
import UpdateCountValue from "./components/UpdateCounter";
import { UpdateCounbterContext } from "./context";

import type { Props } from "./appTypes";

type SetCountfn = (x: number) => void;

function increaseCount({ count, setCount }: Props): SetCountfn {
  return () => {
    setCount(count + 1);
  };
}

function decreaseCount({ count, setCount }: Props): SetCountfn {
  return () => {
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

      <UpdateCounbterContext.Provider
        value={{
          increaseFn: increaseCount(props),
          decreaseFn: decreaseCount(props),
        }}
      >
        <UpdateCountValue />
      </UpdateCounbterContext.Provider>
    </div>
  );
}

export default App;

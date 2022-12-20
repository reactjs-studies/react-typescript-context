import React from "react";
import { Props } from "./appTypes";

const UpdateCounterContext = React.createContext<Props>({
  count: 0,
  setCount: () => {},
});

export { UpdateCounterContext };

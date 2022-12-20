import React from "react";
import { UpdateCounter } from "./appTypes";

const UpdateCounterContext = React.createContext<UpdateCounter>({
  increaseFn: () => {},
  decreaseFn: () => {},
});

export { UpdateCounterContext };

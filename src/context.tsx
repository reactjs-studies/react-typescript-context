import React from "react";
import { UpdateCounter } from "./appTypes";

const UpdateCounbterContext = React.createContext<UpdateCounter>({
  increaseFn: (x) => x,
  decreaseFn: (x) => x,
});

export { UpdateCounbterContext };

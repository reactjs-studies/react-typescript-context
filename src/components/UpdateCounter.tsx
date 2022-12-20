import React, { useContext } from "react";
import { UpdateCounterContext } from "../context";
import type { UpdateCounter } from "../appTypes";

// given an integer and a Funtion  to set the interger
// should return  the jsx buttons to update the  state for interger
function UpdateCountValue(): JSX.Element {
  const { increaseFn, decreaseFn } =
    useContext<UpdateCounter>(UpdateCounterContext);

  return (
    <>
      <button onClick={increaseFn}>+</button>
      <button onClick={decreaseFn}>-</button>
    </>
  );
}

export default UpdateCountValue;

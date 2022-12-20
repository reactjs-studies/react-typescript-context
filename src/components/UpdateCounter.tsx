import React, { useContext } from "react";
import { UpdateCounterContext } from "../context";
import type { Props } from "../appTypes";

// given an integer and a Funtion  to set the interger
// should return  the jsx buttons to update the  state for interger
function UpdateCountValue(): JSX.Element {
  const { count, setCount } = useContext<Props>(UpdateCounterContext);

  return (
    <>
      <button
        onClick={(evt) => {
          evt.preventDefault();
          setCount(count + 1);
        }}
      >
        +
      </button>
      <button
        onClick={(evt) => {
          evt.preventDefault();
          if (count > 0) {
            setCount(count - 1);
          } else {
            setCount(count);
          }
        }}
      >
        -
      </button>
    </>
  );
}

export default UpdateCountValue;

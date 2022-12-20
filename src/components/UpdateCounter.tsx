import React, { useContext } from "react";
import { UpdateCounterContext } from "../context";
import type { Props } from "../appTypes";

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

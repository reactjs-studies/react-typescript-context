import { MouseEvent } from "react";

export type Props = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

export type MouseEventFn = (e: MouseEvent) => void;

export type UpdateCounter = {
  increaseFn: MouseEventFn;
  decreaseFn: MouseEventFn;
};

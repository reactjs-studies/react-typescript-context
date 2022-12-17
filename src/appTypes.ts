export type Props = {
  count: number;
  setCount: (n: number) => void;
};

export type UpdateCounter = {
  increaseFn: (n: number, f: (n: number) => void) => void;
  decreaseFn: (n: number, f: (n: number) => void) => void;
};

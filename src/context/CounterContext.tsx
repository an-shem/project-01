import { createContext } from 'react';

interface CounterContextType {
  counter: number;
  // setCounter: (a: number) => void;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
}

export const CounterContext = createContext<CounterContextType | undefined>(undefined);

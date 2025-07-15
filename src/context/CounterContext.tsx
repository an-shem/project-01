import { createContext } from 'react';

interface CounterContextType {
  counter: number;
  setConter: (counter: number) => void;
}

export const CounterContext = createContext<CounterContextType | undefined>(undefined);

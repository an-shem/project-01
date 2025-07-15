import { type ReactNode, useState } from 'react';
import { CounterContext } from '../context/CounterContext';

export const CounterProvider = ({ children }: { children: ReactNode }) => {
  const [counter, setConter] = useState<number>(0);

  return <CounterContext.Provider value={{ counter, setConter }}>{children}</CounterContext.Provider>;
};

import { useContext, useEffect } from 'react';
import { CounterContext } from '../context/CounterContext';

export const useCounter = (start: number = 0) => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error('useCounter must be used within CounterProvider');
  }

  const { counter, setCounter } = context;
  useEffect(() => {
    setCounter(start);
  }, [start, setCounter]);

  function increment() {
    setCounter((prev: number) => prev + 1);
  }
  function decrement() {
    setCounter((prev: number) => prev - 1);
  }

  function reset() {
    setCounter(0);
  }

  return { counter, increment, decrement, reset };
};

import { useState } from 'react';
import styles from './Counter.module.css';

export default function Counter() {
  const initialValue = 0;
  const [counter, setConter] = useState<number>(initialValue);
  //tuple
  //state, local state - состояние
  //setter function - функция сеттер
  function handlePlus() {
    // setConter(counter + 1);
    setConter((prev) => prev + 1);
    console.log(counter);
  }
  function handleMinus() {
    setConter((prev) => prev - 1);
  }
  function handleReset() {
    setConter(initialValue);
  }

  return (
    <div className={styles.counterCard}>
      <h2>Counter: {counter}</h2>
      <button type="button" className={styles.counterBtn} onClick={handleMinus}>
        -1
      </button>
      <button type="button" className={styles.counterBtn} onClick={handlePlus}>
        +1
      </button>
      <button type="button" className={styles.counterBtn} onClick={handleReset}>
        reset
      </button>
    </div>
  );
}

import styles from './Counter.module.css';
import { useCounter } from '../../hooks/useCounter';

export default function Counter() {
  const { counter, setConter } = useCounter();
  // const initialValue = 0;
  // const [counter, setConter] = useState<number>(initialValue);
  //tuple
  //state, local state - состояние
  //setter function - функция сеттер
  function handlePlus() {
    setConter(counter + 1);
    // setConter((prev: number) => prev + 1);
    console.log(counter);
  }
  function handleMinus() {
    setConter(counter - 1);
    // setConter((prev: number) => prev - 1);
  }
  function handleReset() {
    setConter(0);
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

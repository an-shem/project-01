import styles from './Counter.module.css';
import { useCounter } from '../../hooks/useCounter';

export default function Counter() {
  const { counter, increment, decrement, reset } = useCounter(10);
  // const initialValue = 0;
  // const [counter, setConter] = useState<number>(initialValue);
  //tuple
  //state, local state - состояние
  //setter function - функция сеттер

  return (
    <div className={styles.counterCard}>
      <h2>Counter: {counter}</h2>
      <button type="button" className={styles.counterBtn} onClick={decrement}>
        -1
      </button>
      <button type="button" className={styles.counterBtn} onClick={increment}>
        +1
      </button>
      <button type="button" className={styles.counterBtn} onClick={reset}>
        reset
      </button>
    </div>
  );
}

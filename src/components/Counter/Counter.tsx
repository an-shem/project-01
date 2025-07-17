import { useCounter } from '../../hooks/useCounter';

export default function Counter() {
  const { counter, increment, decrement, reset } = useCounter(10);
  // const initialValue = 0;
  // const [counter, setConter] = useState<number>(initialValue);
  //tuple
  //state, local state - состояние
  //setter function - функция сеттер

  return (
    <div
      className={
        'flex flex-col gap-10 items-center w-2xl mx-auto mt-5 p-5 rounded-3xl border-2 border-solid border-blue-500 bg-amber-100 text-blue-800 font-bold'
      }
    >
      <h2 className="text-3xl">
        <span className="mr-3 underline">Counter:</span> {counter}
      </h2>
      <div>
        <button
          type="button"
          className={
            'py-2.5 px-5 m-5 rounded-xl border-2 border-solid border-blue-500 cursor-pointer bg-amber-400 hover:bg-amber-500 hover:text-amber-50'
          }
          onClick={decrement}
        >
          -1
        </button>
        <button
          type="button"
          className={
            'py-2.5 px-5 m-5 rounded-xl border-2 border-solid border-blue-500 cursor-pointer bg-amber-400 hover:bg-amber-500 hover:text-amber-50'
          }
          onClick={increment}
        >
          +1
        </button>
        <button
          type="button"
          className={
            'py-2.5 px-5 m-5 rounded-xl border-2 border-solid border-blue-500 cursor-pointer bg-amber-400 hover:bg-amber-500 hover:text-amber-50'
          }
          onClick={reset}
        >
          reset
        </button>
      </div>
    </div>
  );
}

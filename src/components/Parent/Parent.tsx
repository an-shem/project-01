import { cn } from 'clsx-for-tailwind';
import { useCallback, useMemo, useState } from 'react';
import AptonKid from './AptonKid';
import Frederika from './Frederika';

function getBall() {
  return { title: 'Ball' };
}

export const Parent = () => {
  console.log('Parent rendered');

  // Когда происходит рендер компонента
  // - Если меняю стейт копонента? - да
  // - Если меняю стейт родителя - происходит ререндер детей

  const [isBlue, setIsBlue] = useState(false);
  const [counter, setCounter] = useState<number>(0);

  // используем useMemo - для запоминания РЕЗУЛЬТАТА выполнения функции
  const ball = useMemo(getBall, []);

  const paintGiraffe = useCallback(() => {
    console.log(`Picture of giraffe  + ${isBlue}`);
  }, [isBlue]);

  return (
    <div className="border bg-amber-200 m-4">
      <h2>Parent</h2>

      <div
        className={cn('min-h-10 w-10 rounded shadow bg-amber-300 m-4', {
          'bg-blue-200': isBlue,
        })}
      ></div>
      <button type="button" className="border rounded-xl py-2 px-4 m-4" onClick={() => setIsBlue((prev) => !prev)}>
        Change color
      </button>
      <p>Counter: {counter}</p>
      <button
        type="button"
        className="border rounded-xl py-2 px-4 m-4"
        onClick={() => {
          setCounter((prev) => prev + 1);
        }}
      >
        +1
      </button>
      <AptonKid toy={ball} paint={paintGiraffe} />
      <Frederika />
    </div>
  );
};

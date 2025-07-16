import { cn } from 'clsx-for-tailwind';
import { useState } from 'react';
import styles from './Galery.module.css';

export default function Galery() {
  const [isRed, setIsRed] = useState(false);

  return (
    <div>
      <div className="grid grid-cols-3 bg-amber-500 p-4 gap-4">
        <div className="h-24 bg-amber-50  col-span-1 rounded-2xl">1</div>
        <div className="h-24 bg-amber-50 col-span-2">2</div>
        <div className="h-24 bg-amber-50 col-span-2">3</div>
        <div className="h-24 bg-amber-50 col-span-1">4</div>
      </div>
      <div className={cn('h-24 w-24', styles.roundedCustom, { 'bg-red-500': isRed, 'bg-green-500': !isRed })}>Box</div>{' '}
      <button
        type="button"
        onClick={() => {
          setIsRed((prev) => !prev);
        }}
      >
        Change color of box
      </button>
    </div>
  );
}

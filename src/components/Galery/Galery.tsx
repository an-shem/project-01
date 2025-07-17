import { cn } from 'clsx-for-tailwind';
import { useState } from 'react';

export default function Galery() {
  const [isRed, setIsRed] = useState(false);

  return (
    <div>
      <div className="grid grid-cols-3 bg-amber-500 p-4 gap-4">
        <div className="flex items-center justify-center h-24 bg-amber-50  col-span-1 rounded-2xl">1</div>
        <div className="flex items-center justify-center h-24 bg-amber-50 col-span-2">2</div>
        <div className="flex items-center justify-center h-24 bg-amber-50 col-span-2">3</div>
        <div className="flex items-center justify-center h-24 bg-amber-50 col-span-1">4</div>
      </div>
      <div
        className={cn('flex items-center justify-center h-24 w-24 mt-5 mx-auto rounded-2xl', {
          'bg-red-500': isRed,
          'bg-green-500': !isRed,
        })}
      >
        Box
      </div>{' '}
      <button
        className="block min-w-36 py-1.5 px-3 my-5 mx-auto border-2 border-solid border-amber-500 rounded-2xl cursor-pointer hover:bg-amber-500 hover:text-amber-50"
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

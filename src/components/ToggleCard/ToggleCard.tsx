import { cn } from 'clsx-for-tailwind';
import { useState } from 'react';

const ToggleCard = () => {
  const [isBlue, setIsBlue] = useState<boolean>(false);

  return (
    <div className="flex flex-col gap-5 items-center justify-center">
      <div
        className={cn(
          'h-24 w-48 rounded-xl shadow-lg flex items-center justify-center text-xl text-amber-50',
          isBlue ? 'bg-blue-400' : ' bg-yellow-300'
        )}
      >
        ToggleCard
      </div>
      <button
        type="button"
        className="py-2.5 px-5 hover:bg-orange-500 hover:text-cyan-50 rounded-xl bg-amber-700 text-gray-300 cursor-pointer"
        onClick={() => {
          setIsBlue((prev) => !prev);
        }}
      >
        Toggle card color
      </button>
    </div>
  );
};

export default ToggleCard;

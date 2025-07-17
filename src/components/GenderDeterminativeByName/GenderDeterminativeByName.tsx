import { useState } from 'react';
import isValidName from './IsValidName';
import { cn } from 'clsx-for-tailwind';

interface Response {
  name: string;
  country: string;
  gender: string;
  probability: number;
  remaining_credits: number;
}

const key = import.meta.env.VITE_GENDER_API_KEY;

export const GenderDeterminativeByName = () => {
  const initErrMsgValue: string = 'Enter your name to search';
  const [name, setName] = useState<string>('');
  const [data, setData] = useState<Response | undefined>(undefined);
  const [errMessage, setErrMessage] = useState<string>(initErrMsgValue);

  const fetchHandler = async (name: string) => {
    try {
      const verifiedName = isValidName(name);

      const res = await fetch(`https://api.genderapi.io/api/?key=${key}&name=${verifiedName}`);
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.errmsg);
      }

      const correctedName = data?.name.replace(data.name[0], data.name[0].toUpperCase());
      data.name = correctedName;
      setData(data);
      setName('');
      setErrMessage(initErrMsgValue);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setErrMessage(error.message);
      }
    }
  };

  return (
    <div
      className={
        'flex flex-col items-center gap-5 w-[700px] p-5 mx-auto my-11 rounded-4xl border-2 border-solid border-amber-500 text-cyan-800'
      }
    >
      <div className={'flex flex-col items-center gap-5'}>
        <div
          className={cn({
            'text-blue-500': errMessage === initErrMsgValue,
            'text-red-700': errMessage !== initErrMsgValue,
          })}
        >
          {errMessage}
        </div>
        <input
          type="text"
          value={name}
          placeholder="Enter name"
          onChange={(e) => setName(e.target.value)}
          className="py-2.5 px-5 rounded-4xl border-2 border-solid border-amber-500 bg-amber-50"
        />
        <button
          type="button"
          onClick={() => fetchHandler(name)}
          className="min-w-36 py-2.5 px-5 rounded-4xl border-2 border-solid border-amber-500 cursor-pointer bg-amber-300 hover:bg-amber-600 hover:text-amber-50 font-semibold"
        >
          Search
        </button>
      </div>
      <div className={'flex flex-col items-center'}>
        <ul className="flex flex-col items-start">
          <li>
            <span className="font-bold mr-5 underline">Имя: </span>
            {data?.name}
          </li>
          <li>
            <span className="font-bold mr-5 underline">Пол: </span>
            {data?.gender === 'male' ? 'мужской' : data?.gender === 'female' ? 'женский' : ''}{' '}
          </li>
          <li>
            <span className="font-bold mr-5 underline">Страна: </span>
            {data?.country}
          </li>
          <li>
            <span className="font-bold mr-5 underline">Вероятность: </span>
            {data?.probability}
          </li>
          <li>
            <span className="font-bold mr-3 underline">Остаток запросов: </span>
            {data?.remaining_credits}
          </li>
        </ul>
      </div>
    </div>
  );
};

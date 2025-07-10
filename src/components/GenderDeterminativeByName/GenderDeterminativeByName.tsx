import { useState } from 'react';
import styles from './GenderDeterminativeByName.module.css';
import isValidName from './IsValidName';

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
    <div className={styles.genderSearch}>
      <div className={styles.genderSearchForm}>
        <div
          className={styles.genderSearchErrorMsg}
          style={{ color: errMessage === initErrMsgValue ? 'white' : 'red' }}
        >
          {errMessage}
        </div>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <button type="button" onClick={() => fetchHandler(name)}>
          Search
        </button>
      </div>
      <div className={styles.genderSearchOutput}>
        <ul>
          <li>Имя: {data?.name}</li>
          <li>Пол: {data?.gender === 'male' ? 'мужской' : data?.gender === 'female' ? 'женский' : ''} </li>
          <li>Страна: {data?.country}</li>
          <li>Вероятность: {data?.probability}</li>
          <li>Остаток запросов: {data?.remaining_credits}</li>
        </ul>
      </div>
    </div>
  );
};

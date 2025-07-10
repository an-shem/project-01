import { useState } from 'react';

interface NameInfo {
  name: string;
  gender: string;
  country: string;
  probability: number;
  remaining_credits: number;
}

const key = import.meta.env.VITE_GENDER_API_KEY;

export default function GenderPredictor() {
  const [name, setName] = useState<string>('');
  const [nameInfo, setNameInfo] = useState<NameInfo | undefined>(undefined);

  function handelRevealGender() {
    fetchGender(name);
  }

  async function fetchGender(name: string) {
    const res = await fetch(`https://api.genderapi.io/api/?key=${key}&name=${name}`);
    const resObj = await res.json();
    setNameInfo(resObj);
  }
  return (
    <div>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <button type="button" onClick={handelRevealGender}>
        Reveal gender
      </button>
      {nameInfo ? (
        <div>
          <span>Name: {nameInfo.name}</span>
          <span>Gender: {nameInfo.gender}</span>
          <span>Country: {nameInfo.country}</span>
          <span>Probability: {nameInfo.probability}</span>
          <span>Remaining credits: {nameInfo.remaining_credits}</span>
        </div>
      ) : null}
    </div>
  );
}

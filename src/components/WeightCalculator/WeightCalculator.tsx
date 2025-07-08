import { useState } from 'react';
import styles from './WeightCalculator.module.css';

export default function WeightCalculator() {
  // type Gender = 'male' | 'female';
  const [weight, setWeight] = useState<string>('60');
  const [height, setHeight] = useState<string>('170');
  const [gender, setGender] = useState<string>('female');
  const [message, setMessage] = useState<string>('');

  function calculateIdealWeight() {
    let idealWeight = 0;
    if (gender === 'female') {
      idealWeight = (Number(height) - 110) * 1.15;
    } else {
      idealWeight = (Number(height) - 100) * 1.15;
    }

    setMessage(`Your ideal weight is: ${idealWeight}. And your actual weight is: ${weight}`);
  }

  return (
    <div className={styles.weightCalculator}>
      <h2>Weight Calculator</h2>

      <label>
        Weight:
        <input type="text" value={weight} onChange={(e) => setWeight(e.target.value)} />
      </label>

      <label>
        Height:
        <input type="text" value={height} onChange={(e) => setHeight(e.target.value)} />
      </label>

      <select name="gender" id="" value={gender} onChange={(e) => setGender(e.target.value)}>
        <option value="female">female</option>
        <option value="male">male</option>
      </select>

      <button type="button" onClick={calculateIdealWeight}>
        Calculate ideal weight
      </button>

      <div>{message}</div>
    </div>
  );
}

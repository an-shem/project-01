import { useState, type JSX } from 'react';
import styles from './SpaceMissionForm.module.css';

export default function SpaceMissionForm(): JSX.Element {
  const initialValueName = '';
  const initialValuePlanet = 'mars';
  const initialValueMessage = 'Please enter your name to begin your mission.';
  const [name, setName] = useState<string>(initialValueName);
  const [planet, setPlanet] = useState<string>(initialValuePlanet);
  const [message, setMessage] = useState<string>(initialValueMessage);

  function handleRegister(): void {
    if (name.length === 0) {
      setMessage(initialValueMessage);
      return;
    }
    setMessage(`Astronaut ${name} is headed to ${planet.replace(planet[0], planet[0].toUpperCase())}!`);
    setName(initialValueName);
    setPlanet(initialValuePlanet);
  }

  return (
    <div className={styles.registerFormWrapper}>
      <form action="" className={styles.registerForm}>
        <label htmlFor="name-id">
          Name:
          <input type="text" id="name-id" value={name} onChange={(e) => setName(e.target.value.trim())} />
        </label>
        <label htmlFor="planets-id">
          Planets:
          <select name="planets" id="planets-id" value={planet} onChange={(e) => setPlanet(e.target.value)}>
            <option value="mars">Mars</option>
            <option value="venus">Venus</option>
            <option value="jupiter">Jupiter</option>
            <option value="saturn">Saturn</option>
          </select>
        </label>
        <button type="button" onClick={handleRegister}>
          Register
        </button>
      </form>
      <div className={styles.outputMessage}>{message}</div>
    </div>
  );
}

import { useState } from 'react';
import styles from './SpaceMissionForm.module.css';
import Planet from './Planet';

const SpaceMissionForm = () => {
  const [fullName, setFullName] = useState<string | undefined>(undefined);
  // enum Planet {
  //   Mars = 'Mars',
  //   Venus = 'Venus',
  //   Jupiter = 'Jupiter',
  //   Saturn = 'Saturn',
  // }

  const [planet, setPlanet] = useState<string>(Planet.MARS);

  return (
    <div className={styles.registerWrapper}>
      <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
      <select value={planet} onChange={(e) => setPlanet(e.target.value)}>
        <option value={Planet.MARS}>{Planet.MARS}</option>
        <option value={Planet.VENUS}>{Planet.VENUS}</option>
        <option value={Planet.JUPITER}>{Planet.JUPITER}</option>
        <option value={Planet.SATURN}>{Planet.SATURN}</option>
      </select>
      {/* <p>
        {fullName
          ? `🧑‍🚀 Astronaut ${fullName} is headed to ${planet}!`
          : 'Please enter your name to begin your mission.'}
      </p> */}
      {fullName ? (
        <p>
          🧑‍🚀 Astronaut {fullName} is headed to {planet}!
        </p>
      ) : (
        <p>Please enter your name to begin your mission.</p>
      )}
    </div>
  );
};

export default SpaceMissionForm;

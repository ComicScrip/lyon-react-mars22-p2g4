import React from 'react';
import styles from './SummaryRaceInfos.module.css';

export default function SummaryRaceInfos({ distance, time, calorie }) {
  const hours = Math.floor(time / 1000 / 3600);
  const minutes = Math.floor((time / 1000 - hours * 3600) / 60);
  const seconds = Math.floor(time / 1000 - hours * 3600 - minutes * 60);

  const timeString = `${hours.toString().padStart(2, '0')} 
     : 
    ${minutes.toString().padStart(2, '0')}
     : 
    ${seconds.toString().padStart(2, '0')}`;

  return (
    <div className={styles.InformationsContainer}>
      <p className={styles.distanceRace}>
        Distance : <br />
        {distance} km
      </p>
      <p className={styles.timeRace}>
        Temps : <br />
        {timeString}
      </p>
      <p className={styles.calorieRace}>
        Calories : <br />
        {calorie} kcal
      </p>
    </div>
  );
}

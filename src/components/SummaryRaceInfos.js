import React from 'react';
import styles from './SummaryRaceInfos.module.css';

export default function SummaryRaceInfos({
  distance,
  time,
  calorie,
  imageNumber,
}) {
  return (
    <div className={styles.InformationsContainer}>
      <p className={styles.distanceRace}>
        Distance : <br />
        {distance}
      </p>
      <p className={styles.timeRace}>
        Temps : <br />
        {time}
      </p>
      <p className={styles.calorieRace}>
        Calories : <br />
        {calorie}
      </p>
      <p className={styles.numberImagesRace}>
        Images : <br />
        {imageNumber}
      </p>
    </div>
  );
}

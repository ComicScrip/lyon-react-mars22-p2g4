import React from 'react';
import { RestartAlt, Done } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import styles from './SummaryButtons.module.css';

export default function SummaryButtons() {
  return (
    <div className={styles.buttonRecapRaceContainer}>
      <Link to="/journal">
        <button className={styles.buttonRecapRace} type="button">
          <Done fontSize="large" />
        </button>
      </Link>
      <Link to="/paths">
        <button className={styles.buttonRecapRace} type="button">
          <RestartAlt fontSize="large" />
        </button>
      </Link>
    </div>
  );
}

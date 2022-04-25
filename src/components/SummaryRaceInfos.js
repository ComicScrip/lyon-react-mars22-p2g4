import React from 'react';
import '../screens/Summary.css';
import { RestartAlt, Done } from '@mui/icons-material';
import Photos from './Photos';
import { Link } from 'react-router-dom';

// eslint-disable-next-line object-curly-newline
export default function SummaryRaceInfos({ title, distance, time, calorie }) {
  return (
    <div className="InformationsRaceMainContainer">
      <div className="InformationsRaceContainer">
        <h1 className="nameRace">{title}</h1>
        <div className="imagesRace">
          <Photos />
        </div>
        <p className="distanceRace">
          Distance : <br />
          {distance}
        </p>
        <p className="timeRace">
          Temps : <br />
          {time}
        </p>
        <p className="calorieRace">
          Calories : <br />
          {calorie}
        </p>
        <p className="numberImagesRace">
          Images : <br />
          {10}
        </p>
      </div>
      <div className="buttonRecapRaceContainer">
        <Link to="/journal">
          <button className="buttonRecapRace" type="button">
            <Done fontSize="large" />
          </button>
        </Link>
        <Link to="/road">
          <button className="buttonRecapRace" type="button">
            <RestartAlt fontSize="large" />
          </button>
        </Link>
      </div>
    </div>
  );
}

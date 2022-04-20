import React from 'react';
import '../RecapRace.css';
import { RestartAlt, Done } from '@mui/icons-material';

export default function PropsInformationsRace({
  title,
  distance,
  time,
  calorie,
}) {
  return (
    <div className="InformationsRaceMainContainer">
      <div className="InformationsRaceContainer">
        <h1 className="nameRace">{title}</h1>
        <div
          style={{
            backgroundImage:
              'url("https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png")',
          }}
          className="imagesRace"
        />
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
        <button className="buttonRecapRace" type="button">
          <Done fontSize="large" />
        </button>
        <button className="buttonRecapRace" type="button">
          <RestartAlt fontSize="large" />
        </button>
      </div>
    </div>
  );
}

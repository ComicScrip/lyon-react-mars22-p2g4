import React from 'react';
import '../RecapRace.css';

export default function PropsInformationsRace({
  title,
  distance,
  time,
  calorie,
}) {
  return (
    <div className="InformationsRaceContainer">
      <h1 className="nameRace">{title}</h1>
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
    </div>
  );
}

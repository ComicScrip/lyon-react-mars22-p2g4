/* eslint-disable object-curly-newline */
import React from 'react';
import '../History.css';

export default function PropsHistory({ title, raceMap, distance, time }) {
  return (
    <div className="propsHistoryContainer">
      <h1 className="nameRace">{title}</h1>
      <div style={{ backgroundImage: `url(${raceMap})` }} className="raceMap" />
      <p className="distanceRace">
        Distance : <br />
        {distance}
      </p>
      <p className="timeRace">
        Temps : <br />
        {time}
      </p>
    </div>
  );
}

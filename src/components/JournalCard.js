/* eslint-disable object-curly-newline */
import React from 'react';
import '../screens/Journal.css';

export default function JournalCard({ title, pathMap, distance, time }) {
  return (
    <div className="cardJournalContainer">
      <h1 className="namePath">{title}</h1>
      <img
        src={pathMap}
        className="pathMap w-50 h-20"
        alt={`map of ${title}`}
      />
      <p className="distancePath">
        Distance : <br />
        {distance}
      </p>
      <p className="timePath">
        Temps : <br />
        {time}
      </p>
    </div>
  );
}

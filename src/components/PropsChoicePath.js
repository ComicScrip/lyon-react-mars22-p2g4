/* eslint-disable object-curly-newline */
import React from 'react';
import '../ChoicePath.css';

export default function PropsChoicePath({ title, pathMap, distance, time }) {
  return (
    <div className="propsHistoryContainer">
      <h1 className="namePath">{title}</h1>
      <div style={{ backgroundImage: `url(${pathMap})` }} className="pathMap" />
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

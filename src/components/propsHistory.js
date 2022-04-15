/* eslint-disable object-curly-newline */
import React from 'react';
import '../History.css';

export default function PropsHistory({ title, imageOfCourse, distance, time }) {
  return (
    <div className="historyElement">
      <h1 className="nameCourse">{title}</h1>
      <div
        style={{ backgroundImage: `url(${imageOfCourse})` }}
        className="imageCourse"
      />
      <p className="distanceCourse">
        Distance : <br />
        {distance}
      </p>
      <p className="timeCourse">
        Temps : <br />
        {time}
      </p>
    </div>
  );
}

import axios from 'axios';
import { useState, useEffect } from 'react';

const currentPosition = { lat: 45.746156, lon: 4.827308 };
let geolocationActived = true;
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition((position) => {
    currentPosition.lat = position.coords.latitude;
    currentPosition.lon = position.coords.longitude;
  });
} else geolocationActived = false;

function CurrentMeteoData() {
  const [results, setResult] = useState('');
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${currentPosition.lat}&lon=${currentPosition.lon}&appid=${process.env.REACT_APP_SECRET_API_KEY}`
      )
      .then((response) => response.data)
      .then((data) => data.current)
      .then((current) => current.weather)
      .then((weather) => weather[0].description)
      .then((description) => setResult(description));
  }, []);

  return (
    <div>
      {!geolocationActived && (
        <p> Erreur, la géolocalisation n'est pas activée</p>
      )}
      ;
      <p>
        <h2> </h2>{' '}
      </p>
      <ul>{results}</ul>
    </div>
  );
}

export default CurrentMeteoData;

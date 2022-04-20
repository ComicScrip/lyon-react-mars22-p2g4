import axios from 'axios';
import { useState, useEffect } from 'react';

function CurrentMeteoData() {
  const [results, setResult] = useState('');
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=45,75939&lon=4,82898&lang=fr&exclude=minutely&appid=${process.env.REACT_APP_SECRET_API_KEY}`
      )
      .then((response) => response.data)
      .then((data) => data.current)
      .then((current) => current.weather)
      .then((weather) => weather[0].description)
      .then((description) => setResult(description));
  }, []);

  return (
    <div>
      <p>
        <h2> Météo actuelle</h2>{' '}
      </p>
      <ul>{results}</ul>
    </div>
  );
}

export default CurrentMeteoData;

import axios from 'axios';
import { useState, useEffect } from 'react';

const apiKey = 'b9a0c0a87d7845a4ed3bd3a5841bb88e';

function GetMeteoData() {
  const [results, setResult] = useState('');
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=45,75939&lon=4,82898&lang=fr&exclude=minutely&appid=${apiKey}`
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

export default GetMeteoData;

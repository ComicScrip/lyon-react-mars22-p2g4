import axios from 'axios';
import { useState, useEffect } from 'react';

const apiKey = 'b9a0c0a87d7845a4ed3bd3a5841bb88e';

function GetForecast2MeteoData() {
  const [forecast2MeteoData, setForecast2MeteoData] = useState('');
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=45,75939&lon=4,82898&lang=fr&exclude=minutely,hourly&appid=${apiKey}`
      )
      .then((response) => response.data)
      .then((data) => data.daily)
      .then((daily) => daily[2].weather)
      .then((weather) => weather[0].description)
      .then((description) => setForecast2MeteoData(description));
  }, []);

  return (
    <div>
      <p>Prévisions</p>
      <ul>{forecast2MeteoData}</ul>
    </div>
  );
}

export default GetForecast2MeteoData;

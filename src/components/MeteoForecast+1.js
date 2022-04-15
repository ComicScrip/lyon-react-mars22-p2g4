import axios from 'axios';
import { useState, useEffect } from 'react';

const apiKey = 'b9a0c0a87d7845a4ed3bd3a5841bb88e';

function GetForecastMeteoData() {
  const [forecastMeteoData, setForecastMeteoData] = useState('');
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=45,75939&lon=4,82898&lang=fr&exclude=minutely,hourly&appid=${apiKey}`
      )
      .then((response) => response.data)
      .then((data) => data.daily)
      .then((daily) => daily[1].weather)
      .then((weather) => weather[0].description)
      .then((description) => setForecastMeteoData(description));
  }, []);

  return (
    <div>
      <p>Prévisions</p>
      <ul>{forecastMeteoData}</ul>
    </div>
  );
}

export default GetForecastMeteoData;

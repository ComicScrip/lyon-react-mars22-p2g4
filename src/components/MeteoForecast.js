import axios from 'axios';
import { useState, useEffect } from 'react';

function ForecastMeteoData({ dayNumber }) {
  const [forecastMeteoData, setForecastMeteoData] = useState('');
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=45,75939&lon=4,82898&lang=fr&exclude=minutely,hourly&appid=${process.env.REACT_APP_SECRET_API_KEY}`
      )
      .then((response) => response.data)
      .then((data) => data.daily)
      .then((daily) => daily[dayNumber].weather)
      .then((weather) => weather[0].description)
      .then((description) => setForecastMeteoData(description));
  }, []);
  return (
    <div>
      {' '}
      {forecastMeteoData.charAt(0).toUpperCase() + forecastMeteoData.slice(1)}
    </div>
  );
}

export default ForecastMeteoData;

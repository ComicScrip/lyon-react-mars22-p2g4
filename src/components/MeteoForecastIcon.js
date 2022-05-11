/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
import axios from 'axios';
import { useState, useEffect } from 'react';

function ForecastIconMeteoData({ dayNumberIcon }) {
  const [forecastIconMeteoData, setForecastIconMeteoData] = useState('');
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=45,75939&lon=4,82898&exclude=minutely,hourly&appid=${process.env.REACT_APP_SECRET_API_KEY}`
      )
      .then((response) => response.data)
      .then((data) => data.daily)
      .then((daily) => daily[dayNumberIcon].weather)
      .then((weather) => weather[0].icon)
      .then((icon) =>
        setForecastIconMeteoData(
          `http://openweathermap.org/img/wn/${icon}@2x.png`
        )
      );
  }, []);

  return (
    <div>
      <img src={forecastIconMeteoData} alt="forecastMeteoIcon" />
    </div>
  );
}

export default ForecastIconMeteoData;

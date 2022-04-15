/* eslint-disable eol-last */
import axios from 'axios';
import { useState, useEffect } from 'react';

const apiKey = 'b9a0c0a87d7845a4ed3bd3a5841bb88e';

function GetForecast3IconMeteoData() {
  const [forecast3IconMeteoData, setForecast3IconMeteoData] = useState('');
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=45,75939&lon=4,82898&exclude=minutely,hourly&appid=${apiKey}`
      )
      .then((response) => response.data)
      .then((data) => data.daily)
      .then((daily) => daily[3].weather)
      .then((weather) => weather[0].icon)
      .then((icon) => setForecast3IconMeteoData(
        `http://openweathermap.org/img/wn/${icon}@2x.png`
      ));
  }, []);

  return (
    <div>
      <ul>
        <img src={forecast3IconMeteoData} alt="meteoIcon" />
      </ul>
    </div>
  );
}

export default GetForecast3IconMeteoData;

import axios from 'axios';
import { useState, useEffect } from 'react';

function CurrentIconMeteoData() {
  const [currentIconMeteoData, setCurrentIconMeteoData] = useState('');
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=45,75939&lon=4,82898&exclude=minutely,hourly&appid=${process.env.REACT_APP_SECRET_API_KEY}`
      )
      .then((response) => response.data)
      .then((data) => data.current)
      .then((current) => current.weather)
      .then((weather) => weather[0].icon)
      .then((icon) => setCurrentIconMeteoData(
        `http://openweathermap.org/img/wn/${icon}@2x.png`
      ));
  }, []);

  return (
    <div>
      <ul>
        <img src={currentIconMeteoData} alt="meteoIcon" />
      </ul>
    </div>
  );
}

export default CurrentIconMeteoData;

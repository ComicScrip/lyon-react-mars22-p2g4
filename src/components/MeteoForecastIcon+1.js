/* eslint-disable eol-last */
import axios from 'axios';
import { useState, useEffect } from 'react';

const apiKey = 'b9a0c0a87d7845a4ed3bd3a5841bb88e';
// // Get geolocalisation (logitude, latitude)
// const currentPosition = { lat: 45.746156, lon: 4.827308 };
// let geolocationActived = true;
// if (navigator.geolocation) {
//   navigator.geolocation.getCurrentPosition((position) => {
//     currentPosition.lat = position.coords.latitude;
//     currentPosition.lon = position.coords.longitude;
//   });
// } else geolocationActived = false;

function GetForecastIconMeteoData() {
  const [forecastIconMeteoData, setForecastIconMeteoData] = useState('');
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=45,75939&lon=4,82898&lang=fr&exclude=minutely,hourly&appid=${apiKey}`
      )
      .then((response) => response.data)
      .then((data) => data.daily)
      .then((daily) => daily[1].weather)
      .then((weather) => weather[0].icon)
      .then((icon) => setForecastIconMeteoData(
        `http://openweathermap.org/img/wn/${icon}@2x.png`
      ));
  }, []);

  return (
    <div>
      {/* {!geolocationActived && (
        <p> Erreur, la géolocalisation n'est pas activée</p>
      )} */}
      <ul>
        <img src={forecastIconMeteoData} alt="meteoIcon" />
      </ul>
    </div>
  );
}

export default GetForecastIconMeteoData;

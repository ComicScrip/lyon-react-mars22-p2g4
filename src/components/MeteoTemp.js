import axios from 'axios';
import { useState, useEffect } from 'react';

function GetMeteoDataTemp() {
  const [meteoTemp, setMeteoTemp] = useState('');
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=45,75939&lon=4,82898&exclude=minutely&appid=${process.env.REACT_APP_SECRET_API_KEY}&units=metric`
      )
      .then((response) => response.data)
      .then((data) => data.current)
      .then((current) => current.temp)
      .then((temp) => setMeteoTemp(temp));
  }, []);

  return (
    <div>
      <p>
        <ul>{Math.round(meteoTemp)}°C</ul>
      </p>
    </div>
  );
}

export default GetMeteoDataTemp;

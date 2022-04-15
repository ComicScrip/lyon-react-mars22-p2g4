import axios from 'axios';
import { useState, useEffect } from 'react';

const apiKey = 'b9a0c0a87d7845a4ed3bd3a5841bb88e';

function GetMeteoDataTemp() {
  const [meteoTemp, setMeteoTemp] = useState('');
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=45,75939&lon=4,82898&exclude=minutely&appid=${apiKey}&units=metric`
      )
      .then((response) => response.data)
      .then((data) => data.current)
      .then((current) => current.temp)
      .then((temp) => setMeteoTemp(temp));
  }, []);

  return (
    <div>
      <p>
        {' '}
        Température <ul>{meteoTemp}</ul>
      </p>
    </div>
  );
}

export default GetMeteoDataTemp;

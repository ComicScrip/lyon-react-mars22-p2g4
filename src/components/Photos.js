import React, { useState } from 'react';
import axios from 'axios';

// API Call parameter
const apiKey = 'e7ed8a4e38d857a80dd85827ac1012b4';
const radius = '0.1';
const safeSearch = '1';
const contentType = '1';
const minUploadDate = '1420066800';
const perPage = '100';
let lat;
let lon;

navigator.geolocation.getCurrentPosition((position) => {
  lat = position.coords.latitude;
  lon = position.coords.longitude;
});

const defaultPhotosList = [
  {
    id: '51996002337',
    owner: '32215553@N02',
    secret: '8e04c402f9',
    server: '65535',
    farm: 66,
    title: 'Lyon - Place des Jacobins',
    ispublic: 1,
    isfriend: 0,
    isfamily: 0,
  },
];

export default function Photos() {
  const [photosList, setPhotosList] = useState(defaultPhotosList);

  const getPhotos = () => {
    // Send the request
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&radius=${radius}&safe_search=${safeSearch}&content_type=${contentType}&lat=${lat}&lon=${lon}&per_page=${perPage}&min_taken_date=${minUploadDate}&format=json&nojsoncallback=1`
      )
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => data.photos)
      .then((photos) => setPhotosList(photos.photo));
  };

  return (
    <div>
      <p> Photos</p>
      <div className="displayPhotos">
        {photosList.map((p) => (
          <img
            key={p.id}
            src={`https://live.staticflickr.com/${p.server}/${p.id}_${p.secret}_z.jpg`}
            alt=""
          />
        ))}
      </div>

      <button type="button" onClick={getPhotos}>
        Get Photos
      </button>
    </div>
  );
}

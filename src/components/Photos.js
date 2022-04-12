/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import axios from 'axios';
import parse from 'html-react-parser';

// API Call parameter
const apiKey = 'e7ed8a4e38d857a80dd85827ac1012b4';
const radius = '1';
const safeSearch = '1';
const contentType = '1';
const minUploadDate = '2000-01-01 00:00:01';
const perPage = '100';
const tags = 'street_art';
let lat;
let lon;

// Get geolocalisation (logitude, latitude)
navigator.geolocation.getCurrentPosition((position) => {
  lat = position.coords.latitude;
  lon = position.coords.longitude;
});

// Defaut list of photos
const defaultPhotosList = [
  {
    id: '51996002337',
    owner: '32215553@N02',
    secret: '8e04c402f9',
    server: '65535',
    title: 'Lyon - Place des Jacobins',
    description: {
      _content: 'Photo de la Place des <b>Jacobins</b>',
    },
  },
];

const pickRandomPics = (picsList, picsNb) => {
  const newPicsList = [];
  for (let i = 0; i < picsNb; i += 1) {
    const randomIndex = Math.floor(Math.random() * picsList.length);
    newPicsList.push(picsList[randomIndex]);
  }
  return newPicsList;
};

export default function Photos() {
  const [photosList, setPhotosList] = useState(defaultPhotosList);
  const [loadingError, setLoadingError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const getPhotos = () => {
    setLoadingError('');
    setIsLoading(true);
    // Send the request
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&radius=${radius}&safe_search=${safeSearch}&content_type=${contentType}&lat=${lat}&lon=${lon}&per_page=${perPage}&min_taken_date=${minUploadDate}&tags=${tags}&extras=description,geo&format=json&nojsoncallback=1`
      )
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => data.photos)
      .then((photos) => pickRandomPics(photos.photo, 1))
      .then((randomPhotosList) => setPhotosList(randomPhotosList))
      .catch((err) => {
        console.error(err);
        setLoadingError("Impossible de charger les photos depuis l'API");
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div>
      <p> Photos</p>
      {loadingError && <p>{loadingError}</p>}
      {isLoading && <p>Chargement en cours...</p>}
      <button type="button" onClick={getPhotos}>
        Get Photos
      </button>

      <div className="displayPhotos">
        {photosList.map((p) => (
          <div key={p.id}>
            <img
              src={`https://live.staticflickr.com/${p.server}/${p.id}_${p.secret}_z.jpg`}
              alt=""
            />
            <p>{parse(p.description._content)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

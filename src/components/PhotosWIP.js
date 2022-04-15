/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import axios from 'axios';
import parse from 'html-react-parser';
import TestGeoJSON from '../ressources/lyon_touristic.json';

// API Call parameter
const apiKey = process.env.REACT_APP_FLICKR_APIKEY;
const radius = '0.1';
const safeSearch = '1';
const contentType = '1';
const minUploadDate = '2000-01-01 00:00:01';
const perPage = '100';
const tags = 'street_art';
const currentPosition = { lat: 45.746156, lon: 4.827308 };

// Get geolocalisation (logitude, latitude)
let geolocationActived = true;
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition((position) => {
    currentPosition.lat = position.coords.latitude;
    currentPosition.lon = position.coords.longitude;
  });
} else geolocationActived = false;

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

const getRandomPathPoints = (GeoJSONFile, pointsNb = 1) => {
  const randomCoordinatesTab = [];
  const coordinatesPathTab = GeoJSONFile.features[0].geometry.coordinates;
  for (let i = 0; i < pointsNb; i += 1) {
    const randomIndex = Math.floor(Math.random() * coordinatesPathTab.length);
    randomCoordinatesTab.push(coordinatesPathTab[randomIndex]);
  }
  return randomCoordinatesTab;
};

export default function PhotosWIP() {
  const [photosList, setPhotosList] = useState(defaultPhotosList);
  const [currentPhoto, setCurrentPhoto] = useState(defaultPhotosList);
  const [loadingError, setLoadingError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const getPhoto = (lat, lon) => {
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
      .then((randomPhotosList) => setCurrentPhoto(randomPhotosList))
      .catch((err) => {
        console.error(err);
        setLoadingError("Impossible de charger les photos depuis l'API");
      })
      .finally(() => setIsLoading(false));
  };

  const getPhotosTab = () => {
    const randomCoordinatesTab = getRandomPathPoints(TestGeoJSON, 1);
    console.log(randomCoordinatesTab);
    const newphotosList = [];

    for (let i = 0; i < randomCoordinatesTab.length; i += 1) {
      const lat = randomCoordinatesTab[i][1];
      console.log(lat);
      const lon = randomCoordinatesTab[i][0];
      getPhoto(lat, lon);
      newphotosList.push(currentPhoto);
    }
    console.log(newphotosList);
    setPhotosList(newphotosList);
  };

  return (
    <div>
      <p> Photos</p>
      {loadingError && <p>{loadingError}</p>}
      {!geolocationActived && (
        <p>Erreur, la géolocalisation n'est pas activée</p>
      )}
      {isLoading && <p>Chargement en cours...</p>}
      <button type="button" onClick={getPhotosTab}>
        Get Photos
      </button>

      <div className="displayPhotos">
        {photosList.map((p) => (
          <div key={p.id}>
            <img
              src={`https://live.staticflickr.com/${p.server}/${p.id}_${p.secret}_z.jpg`}
              alt=""
            />
            <p key={p.id}>{parse(p.description._content)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

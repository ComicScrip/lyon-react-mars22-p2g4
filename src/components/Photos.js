/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import parse from 'html-react-parser';
import TestGeoJSON from '../ressources/lyon_touristic.json';
import './Photos.css';

// API Call parameter
const apiKey = process.env.REACT_APP_FLICKR_APIKEY;
const radius = '0.2';
const safeSearch = '1';
const contentType = '1';
const minUploadDate = '2000-01-01 00:00:01';
const perPage = '100';
const tags = 'street-art';
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

const pickRandomPic = (picsList) => {
  const randomIndex = Math.floor(Math.random() * picsList.length);
  const newPicsList = picsList[randomIndex];
  return newPicsList;
};

const reducePathPoints = (GeoJSONFile, factor = 10) => {
  const CoordinatesTab = [];
  const coordinatesPathTab = GeoJSONFile.features[0].geometry.coordinates;
  for (let i = 0; i < coordinatesPathTab.length / factor; i += 1) {
    CoordinatesTab.push(coordinatesPathTab[factor * i]);
  }
  return CoordinatesTab;
};

export default function Photos() {
  const [photosList, setPhotosList] = useState(defaultPhotosList);
  const [loadingError, setLoadingError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const handlePhotoIndexRight = () => {
    if (photoIndex < photosList.length - 1) {
      const newPhotoIndex = photoIndex + 1;
      setPhotoIndex(newPhotoIndex);
    } else setPhotoIndex(0);
  };

  const handlePhotoIndexLeft = () => {
    if (photoIndex > 0) {
      const newPhotoIndex = photoIndex - 1;
      setPhotoIndex(newPhotoIndex);
    } else setPhotoIndex(photosList.length - 1);
  };

  const getPhotos = () => {
    setLoadingError('');
    setIsLoading(true);

    const coordinatesTab = reducePathPoints(TestGeoJSON);
    const promisesList = [];

    for (let i = 0; i < coordinatesTab.length; i += 1) {
      const lat = coordinatesTab[i][1];
      const lon = coordinatesTab[i][0];

      const newPromise = new Promise((resolve) => {
        axios
          .get(
            `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&radius=${radius}&safe_search=${safeSearch}&content_type=${contentType}&lat=${lat}&lon=${lon}&per_page=${perPage}&min_taken_date=${minUploadDate}&tags=${tags}&extras=description,geo&format=json&nojsoncallback=1`
          )
          .then((response) => response.data)
          .then((data) => data.photos)
          .then((photos) => pickRandomPic(photos.photo))
          .then((randomPhoto) => {
            if (randomPhoto !== undefined) {
              resolve(randomPhoto);
            } else resolve(null);
          });
      });
      promisesList.push(newPromise);
    }

    Promise.all(promisesList)
      .then((randomPhotos) => randomPhotos.filter((p) => p !== null))
      .then((photos) => setPhotosList(photos))
      .catch((err) => {
        console.error(err);
        setLoadingError("Impossible de charger les photos depuis l'API");
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <div className="container flex flex-col">
      <p> Photos</p>
      {loadingError && <p>{loadingError}</p>}
      {!geolocationActived && (
        <p>Erreur, la géolocalisation n'est pas activée</p>
      )}

      {isLoading && <p>Chargement en cours...</p>}

      {!isLoading && (
        <div
          className="carousel"
          style={{
            backgroundImage: `url(https://live.staticflickr.com/${photosList[photoIndex].server}/${photosList[photoIndex].id}_${photosList[photoIndex].secret}_z.jpg)`,
          }}
        >
          <button
            type="button"
            className="text-5xl font-bold"
            onClick={handlePhotoIndexLeft}
          >
            {'<'}
          </button>
          <div className="photo-container">
            <img
              key={photosList[photoIndex].id}
              src={`https://live.staticflickr.com/${photosList[photoIndex].server}/${photosList[photoIndex].id}_${photosList[photoIndex].secret}_z.jpg`}
              alt={parse(photosList[photoIndex].description._content)}
              className="photo object-contain"
            />
          </div>
          <button
            type="button"
            className="text-5xl font-bold"
            onClick={handlePhotoIndexRight}
          >
            {'>'}
          </button>
        </div>
      )}
    </div>
  );
}

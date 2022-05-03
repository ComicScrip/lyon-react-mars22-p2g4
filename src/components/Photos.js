/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import parse from 'html-react-parser';
import './Photos.css';

// API Call parameter
const apiKey = process.env.REACT_APP_FLICKR_APIKEY;
const radius = '0.2';
const safeSearch = '1';
const contentType = '1';
const minUploadDate = '2000-01-01 00:00:01';
const perPage = '100';
const tags = 'street-art';

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

const reducePathPoints = (trace = [], factor = 10) => {
  const CoordinatesTab = [];
  for (let i = 0; i < trace.length / factor; i += 1) {
    CoordinatesTab.push(trace[factor * i]);
  }
  return CoordinatesTab;
};

export default function Photos({ path }) {
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

    const coordinatesTab = reducePathPoints(path);
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
            if (typeof randomPhoto !== 'undefined') {
              resolve(randomPhoto);
            } else resolve(null);
          });
      });
      promisesList.push(newPromise);
    }

    Promise.all(promisesList)
      .then((randomPhotos) => randomPhotos.filter((p) => p !== null))
      .then((photos) => setPhotosList(photos))
      .catch(() => {
        setLoadingError("Impossible de charger les photos depuis l'API");
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    getPhotos();
  }, []);
  return (
    <div className="flex flex-col">
      {loadingError && <p>{loadingError}</p>}

      {isLoading && <p>Chargement en cours...</p>}

      {!isLoading && photosList.length > 0 ? (
        <div className="photoMaincomponent">
          <button
            type="button"
            className="photoButton text-5xl font-bold text-black"
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
            className="photoButton text-5xl font-bold text-black"
            onClick={handlePhotoIndexRight}
          >
            {'>'}
          </button>
        </div>
      ) : (
        <div>Aucune photo n'a pu être récupérée pour votre parcours</div>
      )}
    </div>
  );
}

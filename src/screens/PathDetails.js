import React from 'react';
import DisplayMap from '../components/DisplayMap';

const handleLetsGo = () => {
  window.location.href = '/liveview';
};

export default function PathDetails({ path, position }) {
  return (
    <div className="flex-auto flex-col items-center justify-center m-5  ">
      <div className="text-xl">Titre du parcours </div>

      <div className="flex flex-row items-center justify-around m-5">
        <div>
          <div>12 km</div>
          <div className="text-xs">Distance</div>
        </div>
        <div>
          <div>100 m</div>
          <div className="text-xs">Dénivelé</div>
        </div>
        <div>
          <div>10 </div>
          <div className="text-xs">Photos à découvrir</div>
        </div>
      </div>

      <DisplayMap path={path} position={position} className="m-5" />
      <div className="text-justify m-2 p-2">
        Lorem ipsum dolor sit amet. Et quia fugit in sint inventore rem nihil
        quo odit atque et nesciunt architecto non minus quam qui nesciunt dicta?
        Ea necessitatibus iusto et eaque sunt 33 neque quae est sunt fugit.
      </div>

      <div className="flex flex-row justify-center m-5">
        <input
          className="m-5"
          type="datetime-local"
          value="2022-04-22T19:30"
          min="2022-04-22T19:30"
          max="2022-04-30T19:30"
        />
        <div className="m-5">Meteo </div>
      </div>

      <button
        type="button"
        className="text-black rounded-md bg-red-500 hover:bg-red-700 h-10 w-80"
        onClick={handleLetsGo}
      >
        Let's GO !
      </button>
    </div>
  );
}

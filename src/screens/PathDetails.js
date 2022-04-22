import React from 'react';
import DisplayMap from '../components/DisplayMap';

export default function PathDetails({ path, position }) {
  return (
    <div className="flex-auto flex-col items-center justify-center m-5">
      <div>Titre du parcours </div>

      <DisplayMap path={path} position={position} />
      <div className="text-justify m-2 p-2">
        Lorem ipsum dolor sit amet. Et quia fugit in sint inventore rem nihil
        quo odit atque et nesciunt architecto non minus quam qui nesciunt dicta?
        Ea necessitatibus iusto et eaque sunt 33 neque quae est sunt fugit. At
        odio amet qui fugiat voluptate sed voluptatem ullam ut voluptatem
        officiis ut placeat totam. Aut voluptatem repellendus eos corrupti
        facere et reiciendis nihil et animi delectus At delectus error in enim
        sunt. Cum nihil autem 33 minima consectetur eos omnis nihil eos corporis
        omnis.
      </div>

      <div>
        <input
          type="datetime-local"
          value="2022-04-22T19:30"
          min="2022-04-22T19:30"
          max="2022-04-30T19:30"
        />
      </div>
      <div>Meteo </div>

      <button
        type="button"
        className="text-black rounded-md bg-red-500 hover:bg-red-700 h-10 w-80"
      >
        Let's GO !
      </button>
    </div>
  );
}

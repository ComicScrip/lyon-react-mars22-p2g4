import React from 'react';
import DisplayMap from '../components/DisplayMap';
import RunInformations from '../components/RunInformations/RunInformations';

export default function Liveview({ path, position }) {
  return (
    <div className="flex-auto flex-col items-center justify-center m-5">
      <div>Titre du parcours </div>

      <DisplayMap path={path} position={position} />

      <RunInformations />
    </div>
  );
}

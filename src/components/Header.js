import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about">A propos</Link>
        <Link to="/journal">Journal</Link>
        <Link to="/road">Parcours</Link>
      </nav>
    </header>
  );
}

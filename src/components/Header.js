import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  const [showLinks, setShowLinks] = useState(false);
  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };
  return (
    <nav className={`navbar ${showLinks ? 'show-nav' : 'hide-nav'}`}>
      <img className="meteo" alt="" src="meteo.png" />
      <div className="navbar_logo">
        <div className="container">
          <h1>PIC 'N' MOVE</h1>
          <img className="logo" alt="" src="shoe.svg" />
        </div>
      </div>

      <ul className="navbar_links">
        <li className="navbar_items">
          <Link to="/" className="navbar_link">
            Accueil
          </Link>
        </li>
        <li className="navbar_items">
          <Link to="/road" className="navbar_link">
            Parcours
          </Link>
        </li>

        <li className="navbar_items">
          <Link to="/journal" className="navbar_link">
            Journal
          </Link>
        </li>

        <li className="navbar_items">
          <Link to="/about" className="navbar_link">
            À propos
          </Link>
        </li>
      </ul>
      <button type="button" className="navbar_burger" onClick={handleShowLinks}>
        <span className="burger_bar" />
      </button>
    </nav>
  );
}

export default Header;

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
      <div className="navbar_logo">
        <img className="meteo" alt="" src="meteo.png" />
        <img className="logo" alt="" src="shoe.png" />
      </div>
      <ul className="navbar_links">
        <li className="navbar_items">
          {/* <a href="/" className="navbar_link">
            Accueil
          </a> */}
          <Link to="/" className="navbar_link">
            Accueil
          </Link>
        </li>
        <li className="navbar_items">
          <Link to="/road" className="navbar_link">
            Parcours
          </Link>
          {/* <a href="/" className="navbar_link">
            Créer un parcours
          </a> */}
        </li>

        {/* <li className="navbar_items">
          <a href="/" className="navbar_link">
            Partir courir
          </a>
        </li> */}

        <li className="navbar_items">
          <Link to="/journal" className="navbar_link">
            Journal
          </Link>
          {/* <a href="/" className="navbar_link">
            Mon historique
          </a> */}
        </li>

        <li className="navbar_items">
          <Link to="/about" className="navbar_link">
            À propos
          </Link>
          {/* <a href="/" className="navbar_link">
            Contact
          </a> */}
        </li>
      </ul>
      <button type="button" className="navbar_burger" onClick={handleShowLinks}>
        <span className="burger_bar" />
      </button>
    </nav>
  );
}

export default Header;

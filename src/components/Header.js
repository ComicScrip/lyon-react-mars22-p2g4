import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [showLinks, setShowLinks] = useState(false);
  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };
  return (
    <nav className={`navbar ${showLinks ? 'show-nav' : 'hide-nav'}`}>
      <div className="navbar_logo">Logo</div>
      <ul className="navbar_links">
        <li className="navbar_items">
          <a href="/" className="navbar_link">
            Accueil
          </a>
        </li>
        <li className="navbar_items">
          <a href="/" className="navbar_link">
            Créer un parcours
          </a>
        </li>

        <li className="navbar_items">
          <a href="/" className="navbar_link">
            Partir courir
          </a>
        </li>

        <li className="navbar_items">
          <a href="/" className="navbar_link">
            Mon historique
          </a>
        </li>

        <li className="navbar_items">
          <a href="/" className="navbar_link">
            Contact
          </a>
        </li>
      </ul>
      <button type="button" className="navbar_burger" onClick={handleShowLinks}>
        <span className="burger_bar" />
      </button>
    </nav>
  );
}

export default Header;

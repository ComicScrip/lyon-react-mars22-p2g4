import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <nav className="containerf">
      <a href="https://twitter.com/?lang=fr" target="_blank" rel="noreferrer">
        <img className="rezof" alt="" src="/twitter.png" />
      </a>
      <a
        href="https://www.facebook.com/runinmarrakech/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="rezof2" alt="" src="/1384021.png" />
      </a>
      <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
        <img className="rezof" alt="" src="/instagram.png" />
      </a>
    </nav>
  );
}

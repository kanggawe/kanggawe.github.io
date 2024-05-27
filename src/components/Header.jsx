import React from 'react';
import "../assets/header.css";

function Header() {
  return  (
  <header className="header">
  <div className="logo">
    <h1>MyWebsite</h1>
  </div>
  <div className="banner">
    <img src="path-to-your-banner.jpg" alt="Banner Ad" />
  </div>
</header>
)
}

export default Header;
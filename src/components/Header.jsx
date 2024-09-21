import React from "react";
import "../assets/css/header.css";

function Header() {
  return (
    <header>
      <div className="container ">
        <div className="logo">
          <h1>MyWebsite</h1>
        </div>
        <div className="banner">
          <img src="path-to-your-banner.jpg" alt="Banner Ad" />
        </div>
      </div>
    </header>
  );
}

export default Header;

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import eLogo from "../assets/img/eslog1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedinIn, faYoutube } from "@fortawesome/free-brands-svg-icons";


const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${isDarkMode ? "navbar-dark bg-dark" : "navbar-light bg-white shadow-sm"}`}>
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img src={eLogo} alt="Logo" style={{ width: "130px", height: "50px" }} />
        </Link>

        {/* Hamburger button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
          aria-controls="navbarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu Items */}
        <div className="collapse navbar-collapse" id="navbarMenu">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link className="nav-link fw-bold" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link fw-bold" to="/about">Tentang Kami</Link></li>
            <li className="nav-item"><Link className="nav-link fw-bold" to="/services">Layanan & Produk</Link></li>
            <li className="nav-item"><Link className="nav-link fw-bold" to="/disclaimer">Disclaimer</Link></li>
            <li className="nav-item"><Link className="nav-link fw-bold" to="/services">Paket Internet</Link></li>
            <li className="nav-item"><Link className="nav-link fw-bold" to="/contact">Contact</Link></li>
            <li className="nav-item"><Link className="nav-link fw-bold" to="/sitemap">Sitemap</Link></li>
          </ul>

          {/* Right section */}
          <div className="d-flex align-items-center gap-3">
            {/* Social Icons */}
            <div className="d-flex gap-3 fs-5">
              <a href="#" className="text-reset" aria-label="Facebook"><FontAwesomeIcon icon={faFacebook} /></a>
              <a href="#" className="text-reset" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedinIn} /></a>
              <a href="#" className="text-reset" aria-label="YouTube"><FontAwesomeIcon icon={faYoutube} /></a>
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="btn btn-outline-secondary btn-sm rounded-pill"
            >
              {isDarkMode ? "Light" : "Dark"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import { Outlet, Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import './RootLayout.css';

const RootLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <Link to="/" onClick={closeMenu}>
                <h1>MyApp</h1>
              </Link>
            </div>
            
            {/* Mobile menu button */}
            <button 
              className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            {/* Navigation */}
            <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
              <ul className="nav-list">
                <li className="nav-item">
                  <Link 
                    to="/" 
                    className={`nav-link ${isActive('/') ? 'active' : ''}`}
                    onClick={closeMenu}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link 
                    to="/about" 
                    className={`nav-link ${isActive('/about') ? 'active' : ''}`}
                    onClick={closeMenu}
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link 
                    to="/services" 
                    className={`nav-link ${isActive('/services') ? 'active' : ''}`}
                    onClick={closeMenu}
                  >
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link 
                    to="/contact" 
                    className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
                    onClick={closeMenu}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="main">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p>&copy; 2024 MyApp. All rights reserved.</p>
            <div className="footer-links">
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RootLayout;

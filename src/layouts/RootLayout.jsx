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

      {/* Footer (from index12.html, adapted for React Router) */}
      <footer className="bg-dark text-gray-300 py-5 mt-auto">
        <div className="container">
          <div className="row">
            {/* Left Section: Logo & Contact */}
            <div className="col-12 col-md-4 mb-4 mb-md-0">
              <div className="h3 fw-bold text-white mb-2">MyApp</div>
              <p className="text-sm text-secondary">Slogan Anda di sini</p>
              <p className="text-sm text-secondary mt-4">
                Alamat: Jalan Contoh No. 123, Kota Contoh, 12345
              </p>
              <p className="text-sm text-secondary">Email: info@example.com</p>
              <p className="text-sm text-secondary">Telepon: (123) 456-7890</p>
            </div>

            {/* Middle Section: Nav Links */}
            <div className="col-12 col-md-4 mb-4 mb-md-0">
              <div className="row">
                <div className="col-6">
                  <h3 className="h6 fw-semibold text-light">Navigasi</h3>
                  <ul className="list-unstyled text-sm">
                    <li><Link to="/" className="text-gray-300 text-decoration-none">Beranda</Link></li>
                    <li><Link to="/about" className="text-gray-300 text-decoration-none">Tentang Kami</Link></li>
                    <li><Link to="/services" className="text-gray-300 text-decoration-none">Layanan</Link></li>
                    <li><Link to="/contact" className="text-gray-300 text-decoration-none">Kontak</Link></li>
                  </ul>
                </div>
                <div className="col-6">
                  <h3 className="h6 fw-semibold text-light">Legal</h3>
                  <ul className="list-unstyled text-sm">
                    <li><Link to="/privacy" className="text-gray-300 text-decoration-none">Kebijakan Privasi</Link></li>
                    <li><Link to="/terms" className="text-gray-300 text-decoration-none">Ketentuan Layanan</Link></li>
                    <li><a href="#" className="text-gray-300 text-decoration-none">Kebijakan Cookie</a></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Section: Social Media */}
            <div className="col-12 col-md-4">
              <h3 className="h6 fw-semibold text-light mb-3">Ikuti Kami</h3>
              <div className="d-flex justify-content-start gap-3">
                <a href="#" aria-label="Facebook" className="text-gray-300">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.04c-5.45 0-9.87 4.29-9.87 9.58 0 4.67 3.33 8.52 7.74 9.42v-6.66H7.13v-2.76h2.74v-2.1c0-2.73 1.63-4.22 4.1-4.22 1.17 0 2.22.09 2.51.13v2.89h-1.55c-1.22 0-1.46.58-1.46 1.44v1.89h3.2l-.52 2.76h-2.68v6.66c4.41-.9 7.74-4.75 7.74-9.42C21.87 6.33 17.45 2.04 12 2.04z" />
                  </svg>
                </a>
                <a href="#" aria-label="Twitter" className="text-gray-300">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6.09c-.83.37-1.72.62-2.65.73.96-.58 1.7-1.5 2.05-2.6-.9.54-1.9.93-2.95 1.14-.85-.91-2.07-1.48-3.41-1.48-2.58 0-4.68 2.08-4.68 4.65 0 .36.04.7.12 1.03-3.9-.2-7.37-2.06-9.7-4.88-.4.7-.63 1.5-.63 2.4 0 1.6 1.08 2.94 2.62 3.75-.85-.02-1.65-.26-2.35-.63v.06c0 2.25 1.59 4.12 3.7 4.56-.38.1-.79.15-1.21.15-.3 0-.58-.03-.86-.08.59 1.83 2.3 3.17 4.34 3.2-1.58 1.25-3.57 2-5.74 2-3.72 0-5.74-.5-5.74-.5.2 1.47 1.15 2.68 2.55 3.32 1.39.65 2.87.97 4.4.97 5.28 0 9.7-4.3 9.7-9.58 0-.15 0-.3-.01-.45.98-.71 1.83-1.6 2.5-2.6z" />
                  </svg>
                </a>
                <a href="#" aria-label="Instagram" className="text-gray-300">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.16c3.2 0 3.6.01 4.85.07 1.18.06 1.7.27 2.1.42.42.15.74.34 1.1.7.35.35.55.68.7 1.1.15.42.36.92.42 2.1.06 1.25.07 1.65.07 4.85s-.01 3.6-.07 4.85c-.06 1.18-.27 1.7-.42 2.1-.15.42-.34.74-.7 1.1-.35.35-.68.55-.7-1.1-.15-.42-.36-.92-.42-2.1-.06-1.25-.07-1.65-.07-4.85s.01-3.6.07-4.85c.06-1.18.27-1.7.42-2.1.15-.42.34-.74.7-1.1.35-.35.68-.55 1.1-.7.42-.15.92-.36 2.1-.42 1.25-.06 1.65-.07 4.85-.07zM12 5.83c-3.4 0-6.17 2.77-6.17 6.17s2.77 6.17 6.17 6.17 6.17-2.77 6.17-6.17-2.77-6.17-6.17-6.17zM12 16.17c-2.3 0-4.17-1.87-4.17-4.17s1.87-4.17 4.17-4.17 4.17 1.87 4.17 4.17-1.87 4.17-4.17 4.17zM19.16 3.7c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Section: Copyright */}
          <div className="border-top border-secondary pt-4 mt-5 text-center">
            <p className="text-sm text-secondary mb-0">
              &copy; 2024 Nama Perusahaan. Hak Cipta Dilindungi Undang-Undang.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RootLayout;

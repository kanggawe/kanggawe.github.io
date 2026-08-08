import { Outlet, Link, NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import './RootLayout.css';

const RootLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <div className="app-wrapper">
      {/* ===== TOP UTILITY BAR ===== */}
      <div className="top-utility-bar">
        <div className="container top-bar-inner">
          <div className="top-bar-left">
            <span><i className="bi bi-headset"></i> Call Center 24/7: <strong>1500-123</strong></span>
            <span className="divider">|</span>
            <span><i className="bi bi-envelope-fill"></i> info@esanet.id</span>
          </div>
          <div className="top-bar-right">
            <span className="net-status">
              <span className="status-dot"></span> Status Jaringan: <strong>Normal (99.9%)</strong>
            </span>
            <span className="divider">|</span>
            <a href="#" className="top-link"><i className="bi bi-person-fill"></i> Portal Pelanggan</a>
            <span className="divider">|</span>
            {/* Theme toggle button top bar */}
            <button 
              className="theme-toggle-btn-sm"
              onClick={toggleTheme}
              title={`Ubah ke ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
            >
              <i className={`bi ${theme === 'light' ? 'bi-moon-stars-fill' : 'bi-sun-fill'}`}></i>
              <span>{theme === 'light' ? 'Dark' : 'Light'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* ===== NAVBAR ===== */}
      <header className={`navbar-esanet ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-inner container">
          {/* Brand */}
          <Link to="/" className="brand">
            <span className="brand-icon">
              <i className="bi bi-wifi"></i>
            </span>
            <div className="brand-text-group">
              <span className="brand-text">
                ESA<span className="brand-accent">NET</span>
              </span>
              <span className="brand-subtext">PT Esanet Telekomunikasi Indonesia</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="nav-desktop">
            <NavLink to="/" end className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>Beranda</NavLink>
            <NavLink to="/about" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>Tentang Kami</NavLink>
            <NavLink to="/services" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>Layanan</NavLink>
            <NavLink to="/contact" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>Kontak</NavLink>
          </nav>

          {/* Theme Switcher & CTA Button Desktop */}
          <div className="nav-cta">
            <button 
              className="theme-toggle-btn"
              onClick={toggleTheme}
              title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
            >
              <i className={`bi ${theme === 'light' ? 'bi-moon-stars-fill' : 'bi-sun-fill'}`}></i>
            </button>
            <Link to="/contact" className="btn btn-accent navbar-btn">
              <i className="bi bi-headset"></i> Hubungi Kami
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className={`hamburger ${isMenuOpen ? 'open' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <nav>
            <NavLink to="/" end className={({ isActive }) => `mobile-nav-item ${isActive ? 'active' : ''}`}>
              <i className="bi bi-house-door"></i> Beranda
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => `mobile-nav-item ${isActive ? 'active' : ''}`}>
              <i className="bi bi-info-circle"></i> Tentang Kami
            </NavLink>
            <NavLink to="/services" className={({ isActive }) => `mobile-nav-item ${isActive ? 'active' : ''}`}>
              <i className="bi bi-grid"></i> Layanan
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => `mobile-nav-item ${isActive ? 'active' : ''}`}>
              <i className="bi bi-envelope"></i> Kontak
            </NavLink>
          </nav>
          <div className="mobile-cta" style={{display:'flex', gap:'0.75rem'}}>
            <button 
              className="theme-toggle-btn"
              onClick={toggleTheme}
              style={{padding:'0.75rem 1rem', borderRadius:'var(--radius-full)'}}
            >
              <i className={`bi ${theme === 'light' ? 'bi-moon-stars-fill' : 'bi-sun-fill'}`}></i>
              <span style={{marginLeft:'0.4rem', fontSize:'0.85rem', fontWeight:'600'}}>
                {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
              </span>
            </button>
            <Link to="/contact" className="btn btn-primary" style={{flex:1, justifyContent:'center'}}>
              <i className="bi bi-headset"></i> Hubungi Kami
            </Link>
          </div>
        </div>
      </header>

      {/* ===== MAIN CONTENT ===== */}
      <main className="main-content">
        <Outlet />
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            {/* Col 1: Brand & Contact */}
            <div className="footer-brand-col">
              <div className="footer-brand">
                <i className="bi bi-wifi"></i>
                ESA<span>NET</span>
              </div>
              <p className="footer-company-legal">PT Esanet Telekomunikasi Indonesia</p>
              <p className="footer-tagline">Penyedia Jasa Akses Internet (ISP) Berlisensi Resmi Kominfo RI & Anggota APJII.</p>
              <div className="footer-contacts">
                <div className="footer-contact-item">
                  <i className="bi bi-geo-alt-fill"></i>
                  <span>Gedung Cyber 2, Lt. 12, Jl. H.R. Rasuna Said, Jakarta Selatan 12950</span>
                </div>
                <div className="footer-contact-item">
                  <i className="bi bi-envelope-fill"></i>
                  <span>info@esanet.id</span>
                </div>
                <div className="footer-contact-item">
                  <i className="bi bi-telephone-fill"></i>
                  <span>1500-123 (Call Center 24/7)</span>
                </div>
              </div>
            </div>

            {/* Col 2: Navigation & Legal */}
            <div className="footer-links-col">
              <div className="footer-links-group">
                <h4 className="footer-heading">Navigasi</h4>
                <ul>
                  <li><Link to="/">Beranda</Link></li>
                  <li><Link to="/about">Tentang Kami</Link></li>
                  <li><Link to="/services">Layanan</Link></li>
                  <li><Link to="/contact">Kontak</Link></li>
                </ul>
              </div>
              <div className="footer-links-group">
                <h4 className="footer-heading">Legal & Sertifikasi</h4>
                <ul>
                  <li><a href="#">Izin Kominfo RI</a></li>
                  <li><a href="#">Keanggotaan APJII</a></li>
                  <li><a href="#">Sertifikasi ISO 27001</a></li>
                  <li><a href="#">Kebijakan Privasi</a></li>
                  <li><a href="#">SLA Service Level Agreement</a></li>
                </ul>
              </div>
            </div>

            {/* Col 3: Social & Support */}
            <div className="footer-social-col">
              <h4 className="footer-heading">Ikuti Kami</h4>
              <div className="footer-socials">
                <a href="#" aria-label="Facebook" className="social-btn"><i className="bi bi-facebook"></i></a>
                <a href="#" aria-label="Instagram" className="social-btn"><i className="bi bi-instagram"></i></a>
                <a href="#" aria-label="Twitter" className="social-btn"><i className="bi bi-twitter-x"></i></a>
                <a href="#" aria-label="YouTube" className="social-btn"><i className="bi bi-youtube"></i></a>
              </div>
              <div className="footer-hours">
                <h4 className="footer-heading" style={{marginTop:'1.5rem'}}>Dukungan Teknis NOC</h4>
                <p><i className="bi bi-clock-fill"></i> 24 Jam / 7 Hari / 365 Hari</p>
                <p><i className="bi bi-shield-check-fill"></i> Uptime Network 99.9%</p>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} PT Esanet Telekomunikasi Indonesia. Hak Cipta Dilindungi Undang-Undang.</p>
            <p>Terdaftar & Diawasi oleh Kominfo RI | Anggota APJII</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RootLayout;

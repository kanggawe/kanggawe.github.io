import { Outlet, Link, NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import logoMitraxcon from '../assets/img/logo mitraxcon.png';
import '../assets/css/RootLayout.css';

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
            <a href="tel:1500123" className="top-info-link">
              <i className="bi bi-headset"></i>
              <span>Call Center 24/7: <strong>1500-123</strong></span>
            </a>
            <span className="top-divider"></span>
            <a href="mailto:info@mitraxcon.id" className="top-info-link">
              <i className="bi bi-envelope-fill"></i>
              <span>info@mitraxcon.id</span>
            </a>
          </div>
          <div className="top-bar-right">
            {/* <div className="net-status-badge">
              <span className="status-indicator">
                <span className="status-ping"></span>
                <span className="status-dot"></span>
              </span>
              <span className="status-text">Status Jaringan: <strong>Normal (99.9%)</strong></span>
            </div> */}
            {/* <span className="top-divider"></span> */}
            <Link to="/portal" className="top-link portal-link">
              <i className="bi bi-person-fill-lock"></i>
              <span>Portal Pelanggan</span>
            </Link>
            <span className="top-divider"></span>
            {/* Theme toggle button top bar */}
            <button
              className="theme-toggle-btn-sm"
              onClick={toggleTheme}
              title={`Ubah ke ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
              aria-label="Toggle theme mode"
            >
              <i className={`bi ${theme === 'light' ? 'bi-moon-stars-fill' : 'bi-sun-fill'}`}></i>
              <span>{theme === 'light' ? 'Dark' : 'Light'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* ===== NAVBAR ===== */}
      <header className={`navbar-mitraxcon ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-inner container">
          {/* Brand */}
          <Link to="/" className="brand">
            <div className="brand-icon-wrapper">
              <img
                src={logoMitraxcon}
                alt="MITRAXCON Logo"
                className="brand-logo-img"
              />
              <div className="brand-icon-glow"></div>
            </div>
            <div className="brand-text-group">
              <span className="brand-text">MITRAXCON</span>
              <span className="brand-subtext">PT Mitraxcon Synergy Utama</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="nav-desktop">
            <NavLink to="/" end className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
              Beranda
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
              Tentang Kami
            </NavLink>
            <NavLink to="/services" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
              Layanan
            </NavLink>
            <NavLink to="/blog" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
              Blog
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
              Kontak
            </NavLink>
            <NavLink to="/portal" className={({ isActive }) => `nav-item nav-item-portal ${isActive ? 'active' : ''}`}>
              <i className="bi bi-person-circle"></i>
              <span>Portal</span>
            </NavLink>
          </nav>

          {/* Theme Switcher & CTA Button Desktop */}
          <div className="nav-cta">
            <button
              className="theme-toggle-btn"
              onClick={toggleTheme}
              title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
              aria-label="Switch theme mode"
            >
              <i className={`bi ${theme === 'light' ? 'bi-moon-stars-fill' : 'bi-sun-fill'}`}></i>
            </button>
            <Link to="/contact" className="btn-navbar-cta">
              <span>Hubungi Kami</span>
              <i className="bi bi-arrow-right-short"></i>
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
          <div className="container mobile-menu-inner">
            <nav className="mobile-nav-list">
              <NavLink to="/" end className={({ isActive }) => `mobile-nav-item ${isActive ? 'active' : ''}`}>
                <span className="mobile-nav-icon"><i className="bi bi-house-door"></i></span>
                <span className="mobile-nav-title">Beranda</span>
                <i className="bi bi-chevron-right mobile-arrow"></i>
              </NavLink>
              <NavLink to="/about" className={({ isActive }) => `mobile-nav-item ${isActive ? 'active' : ''}`}>
                <span className="mobile-nav-icon"><i className="bi bi-info-circle"></i></span>
                <span className="mobile-nav-title">Tentang Kami</span>
                <i className="bi bi-chevron-right mobile-arrow"></i>
              </NavLink>
              <NavLink to="/services" className={({ isActive }) => `mobile-nav-item ${isActive ? 'active' : ''}`}>
                <span className="mobile-nav-icon"><i className="bi bi-grid"></i></span>
                <span className="mobile-nav-title">Layanan</span>
                <i className="bi bi-chevron-right mobile-arrow"></i>
              </NavLink>
              <NavLink to="/blog" className={({ isActive }) => `mobile-nav-item ${isActive ? 'active' : ''}`}>
                <span className="mobile-nav-icon"><i className="bi bi-journal-richtext"></i></span>
                <span className="mobile-nav-title">Blog &amp; Wawasan</span>
                <i className="bi bi-chevron-right mobile-arrow"></i>
              </NavLink>
              <NavLink to="/contact" className={({ isActive }) => `mobile-nav-item ${isActive ? 'active' : ''}`}>
                <span className="mobile-nav-icon"><i className="bi bi-envelope"></i></span>
                <span className="mobile-nav-title">Kontak</span>
                <i className="bi bi-chevron-right mobile-arrow"></i>
              </NavLink>
              <NavLink to="/portal" className={({ isActive }) => `mobile-nav-item mobile-nav-portal ${isActive ? 'active' : ''}`}>
                <span className="mobile-nav-icon"><i className="bi bi-person-badge-fill"></i></span>
                <span className="mobile-nav-title">Portal Pelanggan</span>
                <i className="bi bi-chevron-right mobile-arrow"></i>
              </NavLink>
            </nav>
            <div className="mobile-cta-box">
              <button
                className="mobile-theme-toggle"
                onClick={toggleTheme}
              >
                <i className={`bi ${theme === 'light' ? 'bi-moon-stars-fill' : 'bi-sun-fill'}`}></i>
                <span>Mode Tampilan: <strong>{theme === 'light' ? 'Dark' : 'Light'}</strong></span>
              </button>
              <Link to="/contact" className="btn-navbar-cta mobile-btn-block">
                <span>Hubungi Dukungan 24/7</span>
                <i className="bi bi-arrow-right-short"></i>
              </Link>
            </div>
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
                <img
                  src={logoMitraxcon}
                  alt="MITRAXCON Logo"
                  className="footer-logo-img"
                />
                <span>MITRAXCON</span>
              </div>
              <p className="footer-company-legal">PT MITRAXCON SYNERGY UTAMA</p>
              <p className="footer-tagline">Penyedia Jasa Akses Internet (ISP) Berlisensi Resmi Kominfo RI & Anggota APJII.</p>
              <div className="footer-contacts">
                <div className="footer-contact-item">
                  <i className="bi bi-geo-alt-fill"></i>
                  <span>Gedung Cyber 2, Lt. 12, Jl. H.R. Rasuna Said, Jakarta Selatan 12950</span>
                </div>
                <div className="footer-contact-item">
                  <i className="bi bi-envelope-fill"></i>
                  <span>info@mitraxcon.id</span>
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
                  <li><Link to="/blog">Blog &amp; Wawasan</Link></li>
                  <li><Link to="/contact">Kontak</Link></li>
                  <li><Link to="/portal">Portal Pelanggan</Link></li>
                </ul>
              </div>
              <div className="footer-links-group">
                <h4 className="footer-heading">Legal & Sertifikasi</h4>
                <ul>
                  <li><Link to="/legal#kominfo">Izin Kominfo RI</Link></li>
                  <li><Link to="/legal#apjii">Keanggotaan APJII</Link></li>
                  <li><Link to="/legal#iso">Sertifikasi ISO 27001</Link></li>
                  <li><Link to="/legal#privacy">Kebijakan Privasi</Link></li>
                  <li><Link to="/legal#sla">SLA Service Level Agreement</Link></li>
                </ul>
              </div>
            </div>

            {/* Col 3: Social & Support */}
            <div className="footer-social-col">
              <h4 className="footer-heading">Ikuti Kami</h4>
              <div className="footer-socials">
                <a href="#" aria-label="Facebook" className="social-btn fb"><i className="bi bi-facebook"></i></a>
                <a href="#" aria-label="Instagram" className="social-btn ig"><i className="bi bi-instagram"></i></a>
                <a href="#" aria-label="Twitter" className="social-btn x"><i className="bi bi-twitter-x"></i></a>
                <a href="#" aria-label="YouTube" className="social-btn yt"><i className="bi bi-youtube"></i></a>
              </div>
              <div className="footer-hours">
                <h4 className="footer-heading" style={{ marginTop: '1.5rem' }}>Dukungan Teknis NOC</h4>
                <p><i className="bi bi-clock-fill"></i> 24 Jam / 7 Hari / 365 Hari</p>
                <p><i className="bi bi-shield-check-fill"></i> Uptime Network 99.9%</p>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} PT Mitraxcon Synergy Utama. Hak Cipta Dilindungi Undang-Undang.</p>
            <p>Terdaftar & Diawasi oleh Kominfo RI | Anggota APJII</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RootLayout;

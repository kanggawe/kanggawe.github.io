import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header>
      {/* Top Bar with Contact Info - Normal scroll */}
      <div className="bg-primary-custom text-white py-2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 col-md-6">
              <div className="d-flex flex-wrap gap-4 small">
                <div className="d-flex align-items-center">
                  <i className="bi bi-telephone-fill me-2"></i>
                  <a href="tel:+6282260601982" className="text-white text-decoration-none">
                    +62 822-6060-1982
                  </a>
                </div>
                <div className="d-flex align-items-center">
                  <i className="bi bi-envelope-fill me-2"></i>
                  <a href="mailto:info@mitracom-isp.com" className="text-white text-decoration-none">
                    info@mitracom-isp.com
                  </a>
                </div>
                <div className="d-flex align-items-center">
                  <i className="bi bi-clock-fill me-2"></i>
                  <span>Senin - Minggu: 08:00 - 22:00 WIB</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 text-end">
              <div className="d-flex gap-2 justify-content-end">
                <a 
                  href="https://www.facebook.com/mitracomindramayu" 
                  className="text-white text-decoration-none"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-facebook"></i>
                </a>
                <a 
                  href="https://www.instagram.com/mitracom.id/" 
                  className="text-white text-decoration-none"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation - Fixed on scroll */}
      <nav 
        className={`navbar navbar-expand-lg ${isScrolled ? 'fixed-top bg-white' : 'bg-transparent'}`} 
        style={{ 
          zIndex: 1050,
          minHeight: '80px'
        }}
      >
        <div className="container">
          {/* Logo */}
          <a className="navbar-brand" href="#home">
            <span className="text-primary-custom">
              Mitracom ISP
            </span>
          </a>

          {/* Mobile Toggle */}
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation Menu */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link text-dark" href="#home">Beranda</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#about">Tentang</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#services">Layanan</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#packages">Paket</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#contact">Kontak</a>
              </li>
              <li className="nav-item ms-lg-2">
                <a 
                  href="https://wa.me/6282260601982?text=Hallo, saya ingin bertanya tentang layanan internet Mitracom ISP"
                  className="btn btn-primary-custom"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-whatsapp me-2"></i>
                  Hubungi Kami
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header; 
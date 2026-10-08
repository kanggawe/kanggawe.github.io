import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/css/NotFound.css';

const NotFound = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/blog?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <div className="notfound-page">
      {/* Background ambient lighting */}
      <div className="notfound-glow notfound-glow-1"></div>
      <div className="notfound-glow notfound-glow-2"></div>
      <div className="notfound-cyber-grid"></div>

      <div className="container notfound-container">
        <div className="notfound-card">
          {/* Status Badge */}
          <div className="notfound-status-badge">
            <span className="status-pulse-dot"></span>
            <span>ERROR 404: ROUTE NOT FOUND / PACKET LOST</span>
          </div>

          {/* Creative High-Tech 404 Visual */}
          <div className="notfound-code-wrapper">
            <span className="code-digit">4</span>
            <div className="notfound-icon-center">
              <div className="radar-circle radar-1"></div>
              <div className="radar-circle radar-2"></div>
              <div className="radar-core">
                <i className="bi bi-wifi-off"></i>
              </div>
            </div>
            <span className="code-digit">4</span>
          </div>

          <h1 className="notfound-title">
            Sinyal Terputus — <span className="notfound-title-gradient">Halaman Tidak Ditemukan</span>
          </h1>

          <p className="notfound-desc">
            Alamat URL yang Anda tuju tidak terdaftar di server jaringan ESANET. 
            Mungkin tautan telah kadaluarsa, salah ketik, atau halaman telah dipindahkan ke alamat baru.
          </p>

          {/* Quick Search */}
          <form className="notfound-search-form" onSubmit={handleSearch}>
            <i className="bi bi-search search-icon"></i>
            <input
              type="text"
              placeholder="Cari topik, paket internet, atau artikel..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="notfound-search-input"
            />
            <button type="submit" className="notfound-search-btn">
              Cari
            </button>
          </form>

          {/* Action Buttons */}
          <div className="notfound-actions">
            <Link to="/" className="btn-notfound-primary">
              <i className="bi bi-house-door-fill"></i>
              <span>Kembali ke Beranda</span>
            </Link>
            <button onClick={() => navigate(-1)} className="btn-notfound-secondary">
              <i className="bi bi-arrow-left"></i>
              <span>Halaman Sebelumnya</span>
            </button>
            <a
              href="https://wa.me/6281234567890?text=Halo%20ESANET,%20saya%20menemukan%20halaman%20error%20404"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-notfound-wa"
              title="Bantuan WhatsApp 24 Jam"
            >
              <i className="bi bi-whatsapp"></i>
              <span>Bantuan WhatsApp</span>
            </a>
          </div>

          {/* Quick Destination Cards */}
          <div className="notfound-destinations">
            <p className="destinations-label">Atau kunjungi halaman utama kami:</p>
            <div className="destinations-grid">
              <Link to="/" className="destination-card">
                <div className="dest-icon-box blue">
                  <i className="bi bi-house-door"></i>
                </div>
                <div className="dest-text">
                  <strong>Beranda</strong>
                  <span>Halaman Utama ESANET</span>
                </div>
              </Link>
              <Link to="/services" className="destination-card">
                <div className="dest-icon-box teal">
                  <i className="bi bi-grid-fill"></i>
                </div>
                <div className="dest-text">
                  <strong>Paket &amp; Layanan</strong>
                  <span>Home &amp; Business Fiber</span>
                </div>
              </Link>
              <Link to="/blog" className="destination-card">
                <div className="dest-icon-box indigo">
                  <i className="bi bi-journal-richtext"></i>
                </div>
                <div className="dest-text">
                  <strong>Blog &amp; Tips</strong>
                  <span>Wawasan &amp; Edukasi Digital</span>
                </div>
              </Link>
              <Link to="/contact" className="destination-card">
                <div className="dest-icon-box emerald">
                  <i className="bi bi-headset"></i>
                </div>
                <div className="dest-text">
                  <strong>Kontak &amp; NOC</strong>
                  <span>Dukungan Teknis 24/7</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

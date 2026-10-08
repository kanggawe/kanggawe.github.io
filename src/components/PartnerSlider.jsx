import React from 'react';
import '../assets/css/PartnerSlider.css';

const partnerList = [
  { name: 'Bank Central Asia', category: 'Perbankan', icon: 'bi-bank2', accent: '#00529C' },
  { name: 'Google Cloud Peering', category: 'Global Peering', icon: 'bi-google', accent: '#4285F4' },
  { name: 'Cisco Systems', category: 'Hardware Core', icon: 'bi-diagram-3-fill', accent: '#1BA0D7' },
  { name: 'APJII & IIX', category: 'Internet Exchange', icon: 'bi-globe-americas', accent: '#0D9488' },
  { name: 'Cloudflare Edge', category: 'CDN & Peering', icon: 'bi-shield-check', accent: '#F38020' },
  { name: 'MikroTik RouterOS', category: 'Routing Partner', icon: 'bi-router-fill', accent: '#EE3124' },
  { name: 'Universitas Indonesia', category: 'Pendidikan', icon: 'bi-mortarboard-fill', accent: '#F59E0B' },
  { name: 'Netflix Open Connect', category: 'Direct Peering', icon: 'bi-play-circle-fill', accent: '#E50914' },
  { name: 'Telkom Indonesia', category: 'Telekomunikasi', icon: 'bi-reception-4', accent: '#DC2626' },
  { name: 'Santika Hotels', category: 'Hospitality', icon: 'bi-building', accent: '#2563EB' },
  { name: 'OpenIXP Jakarta', category: 'Peering Exchange', icon: 'bi-hdd-network-fill', accent: '#059669' },
  { name: 'Bukalapak Tech', category: 'E-Commerce', icon: 'bi-laptop', accent: '#E11D48' },
  { name: 'Huawei Enterprise', category: 'Infrastructure', icon: 'bi-cpu-fill', accent: '#EA580C' },
  { name: 'Kementerian Kominfo', category: 'Pemerintahan', icon: 'bi-award-fill', accent: '#3B82F6' },
  { name: 'Kopi Kenangan Chain', category: 'F&B Retail', icon: 'bi-cup-hot-fill', accent: '#7C3AED' },
  { name: 'Meta Open Peering', category: 'Content Peering', icon: 'bi-meta', accent: '#0081FB' },
];

const PartnerSlider = () => {
  return (
    <section className="partner-slider-section">
      <div className="container">
        <div className="partner-slider-header">
          <span className="partner-slider-tag">
            <i className="bi bi-patch-check-fill"></i> Mitra &amp; Klien Korporasi
          </span>
          <h2 className="partner-slider-title">
            Dipercaya oleh Ratusan <span className="partner-title-gradient">Perusahaan &amp; Institusi</span>
          </h2>
          <p className="partner-slider-subtitle">
            ESANET menjadi mitra konektivitas utama untuk perbankan, perhotelan, data center, dan institusi pendidikan di Indonesia.
          </p>
        </div>
      </div>

      <div className="partner-slider-wrapper">
        <div className="partner-slider-track">
          {/* First set */}
          <div className="partner-slider-group">
            {partnerList.map((p, idx) => (
              <div className="partner-card-slider" key={`p1-${idx}`}>
                <div className="partner-card-icon" style={{ '--partner-accent': p.accent }}>
                  <i className={`bi ${p.icon}`}></i>
                </div>
                <div className="partner-card-info">
                  <span className="partner-card-name">{p.name}</span>
                  <span className="partner-card-cat">{p.category}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Duplicated set for seamless loop */}
          <div className="partner-slider-group" aria-hidden="true">
            {partnerList.map((p, idx) => (
              <div className="partner-card-slider" key={`p2-${idx}`}>
                <div className="partner-card-icon" style={{ '--partner-accent': p.accent }}>
                  <i className={`bi ${p.icon}`}></i>
                </div>
                <div className="partner-card-info">
                  <span className="partner-card-name">{p.name}</span>
                  <span className="partner-card-cat">{p.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSlider;

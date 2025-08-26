import React from 'react';
import { Link } from 'react-router-dom';
import "../assets/css/Portfolio.css";

const portfolioItems = [
  { 
    id: 1, 
    title: 'Website Sekolah', 
    img: 'https://via.placeholder.com/640x360?text=Website+Sekolah', 
    category: 'Website', 
    link: '#',
    description: 'Website sekolah modern dengan sistem manajemen konten yang mudah digunakan.'
  },
  { 
    id: 2, 
    title: 'Aplikasi Kasir', 
    img: 'https://via.placeholder.com/640x360?text=Aplikasi+Kasir', 
    category: 'Aplikasi', 
    link: '#',
    description: 'Aplikasi kasir point of sale dengan fitur inventori dan laporan penjualan.'
  },
  { 
    id: 3, 
    title: 'Landing Page UMKM', 
    img: 'https://via.placeholder.com/640x360?text=Landing+Page', 
    category: 'Website', 
    link: '#',
    description: 'Landing page responsif untuk UMKM dengan optimasi SEO dan konversi tinggi.'
  },
  { 
    id: 4, 
    title: 'Portal Informasi', 
    img: 'https://via.placeholder.com/640x360?text=Portal+Informasi', 
    category: 'Website', 
    link: '#',
    description: 'Portal informasi pemerintah dengan sistem manajemen konten yang terintegrasi.'
  },
  { 
    id: 5, 
    title: 'Mobile App Booking', 
    img: 'https://via.placeholder.com/640x360?text=Mobile+App', 
    category: 'Mobile', 
    link: '#',
    description: 'Aplikasi mobile untuk booking layanan dengan sistem pembayaran terintegrasi.'
  },
  { 
    id: 6, 
    title: 'Dashboard Admin', 
    img: 'https://via.placeholder.com/640x360?text=Dashboard+Admin', 
    category: 'Aplikasi', 
    link: '#',
    description: 'Dashboard admin dengan analitik real-time dan sistem manajemen pengguna.'
  }
];

function Portfolio() {
  return (
    <div className="portfolio-page">
      <div className="container">
        {/* Header */}
        <div className="portfolio-header">
          <h1 className="portfolio-title">Portfolio</h1>
          <p className="portfolio-subtitle">Beberapa proyek yang telah kami kerjakan</p>
        </div>

        {/* Portfolio Grid */}
        <div className="portfolio-grid">
          {portfolioItems.map(item => (
            <div key={item.id} className="portfolio-card">
              <img 
                src={item.img} 
                className="portfolio-image" 
                alt={item.title} 
              />
              <div className="portfolio-content">
                <span className="portfolio-category">{item.category}</span>
                <h3 className="portfolio-name">{item.title}</h3>
                <p className="portfolio-description">{item.description}</p>
                <a href={item.link} className="portfolio-btn">
                  Lihat Detail
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="portfolio-cta">
          <Link to="/contact" className="portfolio-cta-btn">
            Diskusikan Proyek Anda
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;



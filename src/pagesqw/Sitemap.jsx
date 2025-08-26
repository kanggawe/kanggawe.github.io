import React from "react";
import { Link } from "react-router-dom";
// import "../assets/css/priceList.css";

function Sitemap() {
  const pages = [
    { 
      id: 1,
      name: 'Beranda', 
      path: '/', 
      icon: 'bi bi-house',
      description: 'Halaman utama website',
      color: 'primary'
    },
    { 
      id: 2,
      name: 'Tentang Kami', 
      path: '/about', 
      icon: 'bi bi-info-circle',
      description: 'Informasi tentang perusahaan',
      color: 'secondary'
    },
    { 
      id: 3,
      name: 'Layanan', 
      path: '/services', 
      icon: 'bi bi-gear',
      description: 'Layanan yang kami tawarkan',
      color: 'accent'
    },
    { 
      id: 4,
      name: 'Paket Internet', 
      path: '/iklan', 
      icon: 'bi bi-wifi',
      description: 'Paket internet yang tersedia',
      color: 'primary'
    },
    { 
      id: 5,
      name: 'Kontak', 
      path: '/contact', 
      icon: 'bi bi-envelope',
      description: 'Hubungi kami',
      color: 'secondary'
    },
    { 
      id: 6,
      name: 'Disclaimer', 
      path: '/disclaimer', 
      icon: 'bi bi-shield-check',
      description: 'Syarat dan ketentuan',
      color: 'accent'
    },
    { 
      id: 7,
      name: 'Sitemap', 
      path: '/sitemap', 
      icon: 'bi bi-diagram-3',
      description: 'Peta situs website',
      color: 'primary'
    },
    { 
      id: 8,
      name: '404 Not Found', 
      path: '/notfound', 
      icon: 'bi bi-exclamation-triangle',
      description: 'Halaman tidak ditemukan',
      color: 'secondary'
    }
  ];

  // Icon Component with fallback
  const Icon = ({ iconClass, size = "fs-6" }) => {
    return (
      <i 
        className={`${iconClass} ${size}`} 
        style={{ 
          fontFamily: '"bootstrap-icons" !important',
          display: 'inline-block',
          verticalAlign: 'middle'
        }}
        title={iconClass.replace('bi bi-', '')}
      />
    );
  };

  const getColorClass = (color) => {
    switch (color) {
      case 'primary':
        return 'package-card';
      case 'secondary':
        return 'package-card secondary';
      case 'accent':
        return 'package-card accent';
      default:
        return 'package-card';
    }
  };

  return (
    <section id="sitemap" className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title" style={{ color: 'var(--text-primary)' }}>Peta Situs</h2>
          <p className="section-subtitle" style={{ color: 'var(--text-secondary)' }}>NAVIGASI LENGKAP WEBSITE KAMI</p>
        </div>
        
        <div className="row g-4">
          {pages.map((page) => (
            <div key={page.id} className="col-lg-3 col-md-6">
              <Link 
                to={page.path}
                style={{ textDecoration: 'none' }}
                className="d-block"
              >
                <div 
                  className={getColorClass(page.color)}
                  style={{ 
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    height: '100%'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-5px)';
                    e.target.style.boxShadow = '0 8px 25px rgba(0,0,0,0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  <div className="package-icon">
                    <Icon iconClass={page.icon} size="fs-1" />
                  </div>
                  
                  <h4 className="h5 fw-semibold mb-2">{page.name}</h4>
                  <p className="mb-3 text-white-75">{page.description}</p>
                  
                  <div className="mb-4">
                    <p className="mb-3 fw-medium">Halaman {page.name}</p>
                  </div>
                  
                  <div 
                    className="btn btn-light text-primary-custom fw-semibold w-100 rounded-pill"
                    style={{ 
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      pointerEvents: 'none'
                    }}
                  >
                    <Icon iconClass={page.icon} size="fs-6" />
                    <span className="ms-2">Kunjungi {page.name}</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

      {/* Additional Information */}
      <div className="row mt-5">
        <div className="col-12">
          <div className="card card-custom">
            <div className="card-body">
              <h5 className="card-title mb-4" style={{ color: 'var(--text-primary)' }}>Quick Links</h5>
              <div className="row">
                <div className="col-md-6">
                  <h6 style={{ color: 'var(--text-primary)' }}>Main Pages</h6>
                  <ul className="list-unstyled">
                    {pages.slice(0, 3).map((page, index) => (
                      <li key={index} className="mb-2">
                        <Link 
                          to={page.path} 
                          style={{ 
                            color: 'var(--text-secondary)', 
                            textDecoration: 'none',
                            display: 'inline-block',
                            padding: '0.5rem 0',
                            transition: 'color 0.3s ease'
                          }}
                          onMouseEnter={(e) => e.target.style.color = 'var(--primary-color)'}
                          onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                        >
                          <i className={`${page.icon} me-2`}></i>
                          {page.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-md-6">
                  <h6 style={{ color: 'var(--text-primary)' }}>Other Pages</h6>
                  <ul className="list-unstyled">
                    {pages.slice(3).map((page, index) => (
                      <li key={index} className="mb-2">
                        <Link 
                          to={page.path} 
                          style={{ 
                            color: 'var(--text-secondary)', 
                            textDecoration: 'none',
                            display: 'inline-block',
                            padding: '0.5rem 0',
                            transition: 'color 0.3s ease'
                          }}
                          onMouseEnter={(e) => e.target.style.color = 'var(--primary-color)'}
                          onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                        >
                          <i className={`${page.icon} me-2`}></i>
                          {page.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Sitemap;

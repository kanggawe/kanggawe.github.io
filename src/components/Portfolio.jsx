import React from 'react';

const Portfolio = () => {
  const packages = [
    {
      id: 1,
      name: 'Classic',
      price: 'Rp. 120.000,-',
      speed: '5 Mbps (Up to*)',
      features: [
        'Home Broadband',
        'Tanpa FUP',
        'Unlimited Download',
        'Unlimited Upload'
      ],
      whatsapp: 'https://wa.me/6282260601982?text=Hallo, saya ingin memesan Home 1',
      color: 'primary'
    },
    {
      id: 2,
      name: 'Bronze',
      price: 'Rp. 165.000,-',
      speed: '10 Mbps (Up to*)',
      features: [
        'Home Broadband',
        'Tanpa FUP',
        'Unlimited Download',
        'Unlimited Upload'
      ],
      whatsapp: 'https://wa.me/6282260601982?text=Hallo, saya ingin memesan Home 2',
      color: 'secondary'
    },
    {
      id: 3,
      name: 'Silver',
      price: 'Rp. 190.000,-',
      speed: '20 Mbps (Up to*)',
      features: [
        'Home Broadband',
        'Tanpa FUP',
        'Unlimited Download',
        'Unlimited Upload'
      ],
      whatsapp: 'https://wa.me/6282260601982?text=Hallo, saya ingin memesan Home 3',
      color: 'accent'
    },
    {
      id: 4,
      name: 'Gold',
      price: 'Rp. 390.000',
      speed: '30 Mbps (Up to*)',
      features: [
        'Home Broadband',
        'Tanpa FUP',
        'Unlimited Download',
        'Unlimited Upload'
      ],
      whatsapp: 'https://wa.me/6282260601982?text=Hallo, saya ingin memesan Home 4',
      color: 'primary'
    }
  ];

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
    <section id="packages" className="section-padding" style={{ backgroundColor: '#2c3e50' }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title text-white">Paket Internet</h2>
          <p className="section-subtitle text-white-75">HOME BROADBAND</p>
        </div>
        
        <div className="row g-4">
          {packages.map((pkg) => (
            <div key={pkg.id} className="col-lg-3 col-md-6">
              <div className={getColorClass(pkg.color)}>
                <div className="package-icon">
                  <i className="bi bi-wifi fs-1"></i>
                </div>
                
                <h4 className="h5 fw-semibold mb-2">{pkg.name}</h4>
                <h2 className="h3 fw-bold mb-3">{pkg.price}</h2>
                
                <div className="mb-4">
                  <p className="mb-3 fw-medium">{pkg.speed}</p>
                  {pkg.features.map((feature, featureIndex) => (
                    <p key={featureIndex} className="small mb-1 text-white-75">
                      {feature}
                    </p>
                  ))}
                </div>
                
                <a 
                  href={pkg.whatsapp}
                  className="btn btn-light text-primary-custom fw-semibold w-100 rounded-pill"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pesan Sekarang
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="bg-white p-4 rounded-4 shadow">
              <h4 className="text-primary-custom text-center mb-4">Fitur Unggulan</h4>
              <div className="row g-3">
                <div className="col-md-6 col-lg-4">
                  <div className="d-flex align-items-center">
                    <div className="bg-primary-custom text-white rounded-circle p-2 me-3">
                      <i className="bi bi-graph-up"></i>
                    </div>
                    <div>
                      <h6 className="mb-1">PRTG</h6>
                      <small className="text-muted">Live Trafik Monitoring service</small>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="d-flex align-items-center">
                    <div className="bg-secondary-custom text-dark rounded-circle p-2 me-3">
                      <i className="bi bi-shield-check"></i>
                    </div>
                    <div>
                      <h6 className="mb-1">SLA</h6>
                      <small className="text-muted">Service level agreement (SLA) 99.9%</small>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="d-flex align-items-center">
                    <div className="bg-accent-custom text-white rounded-circle p-2 me-3">
                      <i className="bi bi-tools"></i>
                    </div>
                    <div>
                      <h6 className="mb-1">Free Installation</h6>
                      <small className="text-muted">Syarat & Ketentuan Berlaku</small>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="d-flex align-items-center">
                    <div className="bg-primary-custom text-white rounded-circle p-2 me-3">
                      <i className="bi bi-lightning-charge"></i>
                    </div>
                    <div>
                      <h6 className="mb-1">Internet Cepat</h6>
                      <small className="text-muted">Super cepat, Stabil & Murah</small>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="d-flex align-items-center">
                    <div className="bg-secondary-custom text-dark rounded-circle p-2 me-3">
                      <i className="bi bi-speedometer2"></i>
                    </div>
                    <div>
                      <h6 className="mb-1">Stabil Latency</h6>
                      <small className="text-muted">Terjamin Ke Stabilan nya</small>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="d-flex align-items-center">
                    <div className="bg-accent-custom text-white rounded-circle p-2 me-3">
                      <i className="bi bi-headset"></i>
                    </div>
                    <div>
                      <h6 className="mb-1">Operator Support 24/7</h6>
                      <small className="text-muted">Cepat respon dan Support yang cepat 24/7</small>
                    </div>
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

export default Portfolio; 
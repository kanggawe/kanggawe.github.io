import React from 'react';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: "bi bi-wifi",
      title: "Internet Fiber Optik",
      description: "Koneksi internet super cepat menggunakan teknologi fiber optic terdepan dengan kecepatan hingga 100 Mbps.",
      color: "primary"
    },
    {
      id: 2,
      icon: "bi bi-router",
      title: "WiFi Hotspot",
      description: "Layanan WiFi hotspot untuk area publik dengan coverage yang luas dan keamanan terjamin.",
      color: "secondary"
    },
    {
      id: 3,
      icon: "bi bi-building",
      title: "Internet Bisnis",
      description: "Solusi internet khusus untuk bisnis dengan bandwidth dedicated dan support 24/7.",
      color: "accent"
    },
    {
      id: 4,
      icon: "bi bi-shield-check",
      title: "Keamanan Jaringan",
      description: "Sistem keamanan jaringan tingkat enterprise dengan firewall dan monitoring real-time.",
      color: "primary"
    },
    {
      id: 5,
      icon: "bi bi-headset",
      title: "Customer Support",
      description: "Tim support profesional siap membantu 24/7 dengan response time yang cepat.",
      color: "secondary"
    },
    {
      id: 6,
      icon: "bi bi-tools",
      title: "Maintenance",
      description: "Layanan maintenance rutin dan perbaikan cepat untuk memastikan koneksi stabil.",
      color: "accent"
    }
  ];

  const getColorClass = (color) => {
    switch (color) {
      case 'primary':
        return 'text-primary-custom';
      case 'secondary':
        return 'text-secondary-custom';
      case 'accent':
        return 'text-accent-custom';
      default:
        return 'text-primary-custom';
    }
  };

  const getBgClass = (color) => {
    switch (color) {
      case 'primary':
        return 'bg-primary-custom';
      case 'secondary':
        return 'bg-secondary-custom';
      case 'accent':
        return 'bg-accent-custom';
      default:
        return 'bg-primary-custom';
    }
  };

  return (
    <section id="services" className="section-padding bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-title">Layanan Kami</h2>
            <p className="section-subtitle">
              Kami menyediakan berbagai layanan internet berkualitas tinggi untuk memenuhi kebutuhan Anda
            </p>
          </div>
        </div>
        
        <div className="row g-4">
          {services.map((service) => (
            <div key={service.id} className="col-lg-4 col-md-6">
              <div className="card card-custom h-100">
                <div className="card-body text-center p-4">
                  <div className={`${getBgClass(service.color)} text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-4`}
                       style={{
                         width: '80px',
                         height: '80px',
                         margin: '0 auto'
                       }}>
                    <i className={`${service.icon} fs-2`}></i>
                  </div>
                  <h5 className={`card-title mb-3 ${getColorClass(service.color)}`}>
                    {service.title}
                  </h5>
                  <p className="card-text text-muted">
                    {service.description}
                  </p>
                  <div className="mt-3">
                    <span className={`badge ${getBgClass(service.color)} text-white px-3 py-2`}>
                      Tersedia
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="row mt-5">
          <div className="col-lg-12 text-center">
            <div className="bg-white p-4 rounded-4 shadow-sm">
              <h4 className="text-primary-custom mb-3">Mengapa Memilih Kami?</h4>
              <div className="row g-3">
                <div className="col-md-3">
                  <div className="d-flex align-items-center">
                    <div className="bg-primary-custom text-white rounded-circle p-2 me-3">
                      <i className="bi bi-check-lg"></i>
                    </div>
                    <span className="fw-semibold">Kecepatan Stabil</span>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="d-flex align-items-center">
                    <div className="bg-secondary-custom text-dark rounded-circle p-2 me-3">
                      <i className="bi bi-check-lg"></i>
                    </div>
                    <span className="fw-semibold">Harga Terjangkau</span>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="d-flex align-items-center">
                    <div className="bg-accent-custom text-white rounded-circle p-2 me-3">
                      <i className="bi bi-check-lg"></i>
                    </div>
                    <span className="fw-semibold">Support 24/7</span>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="d-flex align-items-center">
                    <div className="bg-primary-custom text-white rounded-circle p-2 me-3">
                      <i className="bi bi-check-lg"></i>
                    </div>
                    <span className="fw-semibold">Instalasi Cepat</span>
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

export default Services; 
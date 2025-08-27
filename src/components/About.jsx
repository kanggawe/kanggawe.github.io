import React from 'react';

const About = () => {
  const features = [
    {
      icon: "bi bi-lightning-charge-fill",
      title: "Kecepatan Tinggi",
      description: "Menggunakan teknologi fiber optic terdepan untuk kecepatan internet yang stabil dan cepat",
      color: "primary"
    },
    {
      icon: "bi bi-shield-check-fill",
      title: "Keamanan Terjamin",
      description: "Sistem keamanan jaringan tingkat enterprise dengan monitoring 24/7",
      color: "secondary"
    },
    {
      icon: "bi bi-headset",
      title: "Support 24/7",
      description: "Tim support profesional siap membantu Anda kapan saja dengan response time cepat",
      color: "accent"
    },
    {
      icon: "bi bi-graph-up",
      title: "Monitoring Real-time",
      description: "Sistem monitoring PRTG untuk memastikan kualitas layanan tetap optimal",
      color: "primary"
    }
  ];

  const stats = [
    { number: "1000+", label: "Pelanggan Aktif", color: "primary" },
    { number: "99.9%", label: "Uptime SLA", color: "secondary" },
    { number: "24/7", label: "Customer Support", color: "accent" },
    { number: "5+", label: "Tahun Pengalaman", color: "primary" }
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
    <section id="about" className="section-padding">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="position-relative">
              <img 
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Mitracom ISP" 
                className="img-fluid rounded-4 shadow-lg"
              />
              <div className="position-absolute top-0 start-0 w-100 h-100 bg-primary-custom rounded-4" 
                   style={{ 
                     zIndex: -1, 
                     transform: 'translate(-20px, -20px)',
                     opacity: 0.1 
                   }}></div>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="ps-lg-4">
              <h2 className="section-title text-start">Tentang Mitracom ISP</h2>
              <p className="section-subtitle text-start mb-4">
                Mitracom ISP adalah penyedia layanan internet terpercaya di Indramayu yang berkomitmen memberikan koneksi internet berkualitas tinggi dengan harga terjangkau.
              </p>
              
              <div className="row g-3 mb-4">
                {features.map((feature, index) => (
                  <div key={index} className="col-md-6">
                    <div className="d-flex align-items-start">
                      <div className={`${getBgClass(feature.color)} text-white rounded-circle p-2 me-3 flex-shrink-0`}
                           style={{ width: '40px', height: '40px' }}>
                        <i className={`${feature.icon} fs-6`}></i>
                      </div>
                      <div>
                        <h6 className={`${getColorClass(feature.color)} mb-1`}>
                          {feature.title}
                        </h6>
                        <p className="small text-muted mb-0">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="d-flex gap-3">
                <a href="#packages" className="btn btn-primary-custom">
                  Lihat Paket
                </a>
                <a href="#contact" className="btn btn-secondary-custom">
                  Hubungi Kami
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="row mt-5 pt-5">
          <div className="col-12">
            <div className="bg-gradient-primary text-white p-5 rounded-4">
              <div className="row g-4 text-center">
                {stats.map((stat, index) => (
                  <div key={index} className="col-md-3 col-6">
                    <div className="p-3">
                      <h3 className="display-4 fw-bold mb-2">{stat.number}</h3>
                      <p className="mb-0 opacity-75">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="row mt-5 g-4">
          <div className="col-lg-6">
            <div className="card card-custom h-100">
              <div className="card-body p-4">
                <div className="bg-primary-custom text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                     style={{ width: '60px', height: '60px' }}>
                  <i className="bi bi-bullseye fs-4"></i>
                </div>
                <h4 className="text-primary-custom mb-3">Misi Kami</h4>
                <p className="text-muted">
                  Menyediakan layanan internet berkualitas tinggi dengan teknologi terdepan untuk mendukung pertumbuhan digital masyarakat Indramayu dan sekitarnya.
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="card card-custom h-100">
              <div className="card-body p-4">
                <div className="bg-secondary-custom text-dark rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                     style={{ width: '60px', height: '60px' }}>
                  <i className="bi bi-eye fs-4"></i>
                </div>
                <h4 className="text-secondary-custom mb-3">Visi Kami</h4>
                <p className="text-muted">
                  Menjadi penyedia layanan internet terdepan dan terpercaya di Jawa Barat dengan fokus pada kepuasan pelanggan dan inovasi teknologi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 
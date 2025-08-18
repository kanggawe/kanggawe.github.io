// import "../assets/css/Units.css"; // Assuming you have a CSS file for Units styles

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

function Units() {
  // --- About Section ---
  const aboutFeatures = [
    {
      icon: "bi bi-speedometer",
      title: "Kecepatan Tinggi",
      description: "Menggunakan teknologi fiber optic terdepan untuk kecepatan internet yang stabil dan cepat",
      color: "primary"
    },
    {
      icon: "bi bi-shield-check",
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
  const aboutStats = [
    { number: "1000+", label: "Pelanggan Aktif", color: "primary", icon: "bi bi-people" },
    { number: "99.9%", label: "Uptime SLA", color: "secondary", icon: "bi bi-check-circle" },
    { number: "24/7", label: "Customer Support", color: "accent", icon: "bi bi-clock" },
    { number: "5+", label: "Tahun Pengalaman", color: "primary", icon: "bi bi-award" }
  ];

  // --- Services Section ---
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

  // --- Portfolio Section ---
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
      color: 'primary',
      icon: 'bi bi-star'
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
      color: 'secondary',
      icon: 'bi bi-star'
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
      color: 'accent',
      icon: 'bi bi-star'
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
      color: 'primary',
      icon: 'bi bi-star'
    }
  ];

  // --- Contact Section ---
  const contactInfo = [
    {
      icon: "bi bi-geo-alt",
      title: "Alamat",
      content: "Jl. Raya Indramayu - Cirebon No. 123, Indramayu, Jawa Barat",
      color: "primary"
    },
    {
      icon: "bi bi-telephone",
      title: "Telepon",
      content: "+62 822-6060-1982",
      link: "tel:+6282260601982",
      color: "secondary"
    },
    {
      icon: "bi bi-envelope",
      title: "Email",
      content: "info@mitracom-isp.com",
      link: "mailto:info@mitracom-isp.com",
      color: "accent"
    },
    {
      icon: "bi bi-clock",
      title: "Jam Operasional",
      content: "Senin - Minggu: 08:00 - 22:00 WIB",
      color: "primary"
    }
  ];

  // --- Utilitas Color Class ---
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
  const getPackageColorClass = (color) => {
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
    <div className="wrapper" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      {/* --- About Section --- */}
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
                  {aboutFeatures.map((feature, index) => (
                    <div key={index} className="col-md-6">
                      <div className="d-flex align-items-start">
                        <div className={`${getBgClass(feature.color)} text-white rounded-circle p-2 me-3 flex-shrink-0`} style={{ width: '45px', height: '45px' }}>
                          <Icon iconClass={feature.icon} />
                        </div>
                        <div>
                          <h6 className={`${getColorClass(feature.color)} mb-1 fw-semibold`}>
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
                    <Icon iconClass="bi bi-arrow-down" size="fs-6" />
                    <span className="ms-2">Lihat Paket</span>
                  </a>
                  <a href="#contact" className="btn btn-secondary-custom">
                    <Icon iconClass="bi bi-chat-dots" size="fs-6" />
                    <span className="ms-2">Hubungi Kami</span>
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
                  {aboutStats.map((stat, index) => (
                    <div key={index} className="col-md-3 col-6">
                      <div className="p-3">
                        <div className="mb-3">
                          <Icon iconClass={stat.icon} size="fs-1" />
                        </div>
                        <h3 className="display-4 fw-bold mb-2">{stat.number}</h3>
                        <p className="mb-0 opacity-75 fw-medium">{stat.label}</p>
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
                  <div className="bg-primary-custom text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                    <Icon iconClass="bi bi-bullseye" size="fs-4" />
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
                  <div className="bg-secondary-custom text-dark rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                    <Icon iconClass="bi bi-eye" size="fs-4" />
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

      {/* --- Services Section --- */}
      <section id="services" className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
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
                    <div className={`${getBgClass(service.color)} text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-4`} style={{ width: '80px', height: '80px', margin: '0 auto' }}>
                      <Icon iconClass={service.icon} size="fs-2" />
                    </div>
                    <h5 className={`card-title mb-3 ${getColorClass(service.color)} fw-semibold`}>{service.title}</h5>
                    <p className="card-text text-muted">{service.description}</p>
                    <div className="mt-3">
                      <span className={`badge ${getBgClass(service.color)} text-white px-3 py-2 rounded-pill`}>
                        <Icon iconClass="bi bi-check-circle" size="fs-6" />
                        <span className="ms-1">Tersedia</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row mt-5">
            <div className="col-lg-12 text-center">
              <div className="card card-custom p-4">
                <h4 className="text-primary-custom mb-3">Mengapa Memilih Kami?</h4>
                <div className="row g-3">
                  <div className="col-md-3">
                    <div className="d-flex align-items-center">
                      <div className="bg-primary-custom text-white rounded-circle p-2 me-3">
                        <Icon iconClass="bi bi-check-lg" />
                      </div>
                      <span className="fw-semibold">Kecepatan Stabil</span>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="d-flex align-items-center">
                      <div className="bg-secondary-custom text-dark rounded-circle p-2 me-3">
                        <Icon iconClass="bi bi-check-lg" />
                      </div>
                      <span className="fw-semibold">Harga Terjangkau</span>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="d-flex align-items-center">
                      <div className="bg-accent-custom text-white rounded-circle p-2 me-3">
                        <Icon iconClass="bi bi-check-lg" />
                      </div>
                      <span className="fw-semibold">Support 24/7</span>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="d-flex align-items-center">
                      <div className="bg-primary-custom text-white rounded-circle p-2 me-3">
                        <Icon iconClass="bi bi-check-lg" />
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

      {/* --- Portfolio Section --- */}
      <section id="packages" className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title text-primary-custom">Paket Internet</h2>
            <p className="section-subtitle text-secondary-custom">HOME BROADBAND</p>
          </div>
          <div className="row g-4">
            {packages.map((pkg) => (
              <div key={pkg.id} className="col-lg-3 col-md-6">
                <div className={getPackageColorClass(pkg.color)}>
                  <div className="package-icon">
                    <Icon iconClass={pkg.icon} size="fs-1" />
                  </div>
                  <h4 className="h5 fw-semibold mb-2">{pkg.name}</h4>
                  <h2 className="h3 fw-bold mb-3">{pkg.price}</h2>
                  <div className="mb-4">
                    <p className="mb-3 fw-medium">{pkg.speed}</p>
                    {pkg.features.map((feature, featureIndex) => (
                      <p key={featureIndex} className="small mb-1 text-white-75">
                        <Icon iconClass="bi bi-check-circle" size="fs-6" />
                        <span className="ms-2">{feature}</span>
                      </p>
                    ))}
                  </div>
                  <a href={pkg.whatsapp} className="btn btn-light text-primary-custom fw-semibold w-100 rounded-pill" target="_blank" rel="noopener noreferrer">
                    <Icon iconClass="bi bi-whatsapp" size="fs-6" />
                    <span className="ms-2">Pesan Sekarang</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
          {/* Features Section */}
          <div className="row mt-5">
            <div className="col-12">
              <div className="card card-custom p-4">
                <h4 className="text-primary-custom text-center mb-4">Fitur Unggulan</h4>
                <div className="row g-3">
                  <div className="col-md-6 col-lg-4">
                    <div className="d-flex align-items-center">
                      <div className="bg-primary-custom text-white rounded-circle p-2 me-3">
                        <Icon iconClass="bi bi-graph-up" />
                      </div>
                      <div>
                        <h6 className="mb-1 fw-semibold">PRTG</h6>
                        <small className="text-muted">Live Trafik Monitoring service</small>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div className="d-flex align-items-center">
                      <div className="bg-secondary-custom text-dark rounded-circle p-2 me-3">
                        <Icon iconClass="bi bi-shield-check" />
                      </div>
                      <div>
                        <h6 className="mb-1 fw-semibold">SLA</h6>
                        <small className="text-muted">Service level agreement (SLA) 99.9%</small>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div className="d-flex align-items-center">
                      <div className="bg-accent-custom text-white rounded-circle p-2 me-3">
                        <Icon iconClass="bi bi-tools" />
                      </div>
                      <div>
                        <h6 className="mb-1 fw-semibold">Free Installation</h6>
                        <small className="text-muted">Syarat & Ketentuan Berlaku</small>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div className="d-flex align-items-center">
                      <div className="bg-primary-custom text-white rounded-circle p-2 me-3">
                        <Icon iconClass="bi bi-lightning-charge" />
                      </div>
                      <div>
                        <h6 className="mb-1 fw-semibold">Internet Cepat</h6>
                        <small className="text-muted">Super cepat, Stabil & Murah</small>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div className="d-flex align-items-center">
                      <div className="bg-secondary-custom text-dark rounded-circle p-2 me-3">
                        <Icon iconClass="bi bi-speedometer" />
                      </div>
                      <div>
                        <h6 className="mb-1 fw-semibold">Stabil Latency</h6>
                        <small className="text-muted">Terjamin Ke Stabilan nya</small>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div className="d-flex align-items-center">
                      <div className="bg-accent-custom text-white rounded-circle p-2 me-3">
                        <Icon iconClass="bi bi-headset" />
                      </div>
                      <div>
                        <h6 className="mb-1 fw-semibold">Operator Support 24/7</h6>
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

      {/* --- Contact Section --- */}
      <section id="contact" className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-title">Hubungi Kami</h2>
              <p className="section-subtitle">
                Siap melayani kebutuhan internet Anda dengan profesional dan ramah
              </p>
            </div>
          </div>
          <div className="row g-4 mb-5">
            {contactInfo.map((info, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <div className="card card-custom h-100 text-center">
                  <div className="card-body p-4">
                    <div className={`${getBgClass(info.color)} text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3`} style={{ width: '60px', height: '60px' }}>
                      <Icon iconClass={info.icon} />
                    </div>
                    <h5 className={`card-title ${getColorClass(info.color)} mb-3 fw-semibold`}>{info.title}</h5>
                    {info.link ? (
                      <a href={info.link} className="text-decoration-none text-muted">{info.content}</a>
                    ) : (
                      <p className="card-text text-muted mb-0">{info.content}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="card card-custom">
                <div className="card-body p-5">
                  <h4 className="text-center text-primary-custom mb-4">Kirim Pesan</h4>
                  <form>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input type="text" className="form-control" id="name" placeholder="Nama Lengkap" />
                          <label htmlFor="name">Nama Lengkap</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input type="email" className="form-control" id="email" placeholder="Email" />
                          <label htmlFor="email">Email</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input type="tel" className="form-control" id="phone" placeholder="Nomor Telepon" />
                          <label htmlFor="phone">Nomor Telepon</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating">
                          <select className="form-select" id="service">
                            <option value="">Pilih Layanan</option>
                            <option value="classic">Classic - 5 Mbps</option>
                            <option value="bronze">Bronze - 10 Mbps</option>
                            <option value="silver">Silver - 20 Mbps</option>
                            <option value="gold">Gold - 30 Mbps</option>
                          </select>
                          <label htmlFor="service">Layanan yang Diminati</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating">
                          <textarea className="form-control" id="message" placeholder="Pesan" style={{ height: '120px' }}></textarea>
                          <label htmlFor="message">Pesan</label>
                        </div>
                      </div>
                      <div className="col-12 text-center">
                        <button type="submit" className="btn btn-primary-custom px-5 py-3">
                          <Icon iconClass="bi bi-send" size="fs-6" />
                          <span className="ms-2">Kirim Pesan</span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* Quick Contact Buttons */}
          <div className="row mt-5">
            <div className="col-12 text-center">
              <div className="card card-custom p-4">
                <h5 className="text-primary-custom mb-3">Hubungi Kami Langsung</h5>
                <div className="d-flex flex-wrap justify-content-center gap-3">
                  <a href="https://wa.me/6282260601982?text=Hallo, saya ingin bertanya tentang layanan internet Mitracom ISP" className="btn btn-success rounded-pill px-4 py-2" target="_blank" rel="noopener noreferrer">
                    <Icon iconClass="bi bi-whatsapp" size="fs-6" />
                    <span className="ms-2">WhatsApp</span>
                  </a>
                  <a href="tel:+6282260601982" className="btn btn-primary-custom rounded-pill px-4 py-2">
                    <Icon iconClass="bi bi-telephone" size="fs-6" />
                    <span className="ms-2">Telepon</span>
                  </a>
                  <a href="mailto:info@mitracom-isp.com" className="btn btn-accent-custom rounded-pill px-4 py-2">
                    <Icon iconClass="bi bi-envelope" size="fs-6" />
                    <span className="ms-2">Email</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Units;

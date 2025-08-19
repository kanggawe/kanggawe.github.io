import { useState } from 'react'
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
  const [addressQuery, setAddressQuery] = useState('')
  const [coverageStatus, setCoverageStatus] = useState('')
  const [checking, setChecking] = useState(false)

  const handleCoverageCheck = (event) => {
    event.preventDefault()
    const trimmedQuery = addressQuery.trim()
    if (!trimmedQuery) {
      setCoverageStatus('Masukkan alamat lengkap Anda terlebih dahulu.')
      return
    }
    setChecking(true)
    setCoverageStatus('')
    setTimeout(() => {
      setCoverageStatus('Layanan tersedia di area Anda. Silakan pilih paket di bawah ini!')
      setChecking(false)
    }, 900)
  }
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
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <h2 className="section-title text-center">Cek Ketersediaan</h2>
          <p className="section-subtitle text-center mb-4">Masukkan alamat Anda untuk melihat ketersediaan layanan</p>
          <form className="row g-2 justify-content-center" onSubmit={handleCoverageCheck}>
            <div className="col-lg-6 col-md-8">
              <div className="input-group input-group-lg">
                <span className="input-group-text bg-white border-light"><Icon iconClass="bi bi-geo" /></span>
                <input
                  type="text"
                  className="form-control border-light"
                  placeholder="Contoh: Jl. Raya Indramayu No. 1"
                  value={addressQuery}
                  onChange={(e) => setAddressQuery(e.target.value)}
                />
              </div>
            </div>
            <div className="col-auto">
              <button disabled={checking} type="submit" className="btn btn-primary-custom btn-lg">
                {checking ? 'Memeriksa...' : 'Cek Sekarang'}
              </button>
            </div>
          </form>
          {coverageStatus && (
            <div className="row mt-3">
              <div className="col-lg-8 mx-auto">
                <div className="alert alert-success text-center mb-0" role="status">{coverageStatus}</div>
              </div>
            </div>
          )}
        </div>
      </section>

      <section id="plans" className="section-padding">
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="section-title">Paket Internet Rumah</h2>
            <p className="section-subtitle">Pilih paket terbaik sesuai kebutuhan keluarga</p>
          </div>
          <div className="row g-4">
            {packages.map((pkg) => (
              <div key={pkg.id} className="col-lg-3 col-md-6">
                <div className="h-100 p-4 rounded-4 border" style={{ backgroundColor: 'var(--bg-card)' }}>
                  <div className="d-flex justify-content-center">
                    <span className="badge rounded-pill px-3 py-2" style={{ background: 'var(--bg-secondary)', color: 'var(--text-primary)' }}>{pkg.name}</span>
                  </div>
                  <div className="text-center my-3">
                    <div className="display-6 fw-bold" style={{ color: 'var(--primary-color)' }}>{pkg.speed.replace(' (Up to*)', '')}</div>
                    <div className="text-muted small">Kecepatan hingga</div>
                  </div>
                  <div className="text-center mb-3">
                    <div className="h3 fw-bold mb-0" style={{ color: 'var(--text-primary)' }}>{pkg.price}</div>
                    <div className="small text-muted">per bulan</div>
                  </div>
                  <ul className="list-unstyled mb-4">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="d-flex align-items-center mb-2">
                        <span className="me-2 text-success"><Icon iconClass="bi bi-check-circle" /></span>
                        <span className="small text-muted">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={pkg.whatsapp} className="btn btn-primary-custom w-100 rounded-pill" target="_blank" rel="noopener noreferrer">
                    <Icon iconClass="bi bi-whatsapp" />
                    <span className="ms-2">Berlangganan</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="section-title">Keunggulan Layanan</h2>
            <p className="section-subtitle">Nikmati pengalaman internet terbaik ala Biznet Home</p>
          </div>
          <div className="row g-4">
            {aboutFeatures.map((feature, index) => (
              <div key={index} className="col-md-6 col-lg-3">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center p-4">
                    <div className={`${getBgClass(feature.color)} text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3`} style={{ width: '64px', height: '64px' }}>
                      <Icon iconClass={feature.icon} />
                    </div>
                    <h6 className="fw-semibold mb-1">{feature.title}</h6>
                    <p className="small text-muted mb-0">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <div className="p-4 rounded-4" style={{ background: 'var(--bg-secondary)' }}>
                <h4 className="mb-2">Butuh Bantuan?</h4>
                <p className="text-muted mb-0">Tim support kami siap membantu setiap saat. Hubungi kami melalui WhatsApp atau Telepon.</p>
              </div>
            </div>
            <div className="col-lg-4 text-lg-end">
              <div className="d-flex gap-2 justify-content-lg-end">
                <a href="https://wa.me/6282260601982" className="btn btn-success rounded-pill"><Icon iconClass="bi bi-whatsapp" /><span className="ms-2">WhatsApp</span></a>
                <a href="tel:+6282260601982" className="btn btn-primary-custom rounded-pill"><Icon iconClass="bi bi-telephone" /><span className="ms-2">Telepon</span></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Units;

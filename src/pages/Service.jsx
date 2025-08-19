
import React from "react";
import "../assets/css/priceList.css";

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

const services = [
  {
    title: "Web Design",
    desc: "Desain website profesional dan responsif sesuai kebutuhan bisnis Anda.",
    icon: "bi bi-palette",
    color: "accent"
  },
  {
    title: "Web Development",
    desc: "Pengembangan website dan aplikasi web modern, aman, dan scalable.",
    icon: "bi bi-laptop",
    color: "primary"
  },
  {
    title: "Product Management",
    desc: "Manajemen produk digital, mulai dari perencanaan hingga peluncuran.",
    icon: "bi bi-box-seam",
    color: "secondary"
  },
  {
    title: "Marketing",
    desc: "Jasa digital marketing, promosi online, dan strategi pemasaran efektif.",
    icon: "bi bi-megaphone",
    color: "accent"
  },
  {
    title: "Graphic Design",
    desc: "Desain grafis kreatif untuk branding, promosi, dan kebutuhan bisnis Anda.",
    icon: "bi bi-brush",
    color: "primary"
  },
  {
    title: "Layanan Internet",
    desc: "Paket internet cepat dan stabil untuk rumah & bisnis.",
    icon: "bi bi-wifi",
    color: "primary"
  },
  {
    title: "Service Komputer & Laptop",
    desc: "Perbaikan, upgrade, dan instalasi software/hardware.",
    icon: "bi bi-pc-display",
    color: "secondary"
  },
  {
    title: "Maintenance Jaringan",
    desc: "Perawatan dan troubleshooting jaringan LAN/WiFi.",
    icon: "bi bi-diagram-3",
    color: "accent"
  },
  {
    title: "CCTV & IPTV",
    desc: "Instalasi dan maintenance CCTV serta layanan IPTV.",
    icon: "bi bi-camera-video",
    color: "primary"
  },
  {
    title: "IT Solution & Konsultasi",
    desc: "Solusi IT, konsultasi, dan pengembangan sistem sesuai kebutuhan.",
    icon: "bi bi-lightbulb",
    color: "secondary"
  }
];

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

function Service() {
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
    <section className="section-padding" style={{ background: 'linear-gradient(120deg, #111 60%, var(--primary-color) 100%)', minHeight: '100vh' }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title" style={{ color: 'var(--primary-color)', fontWeight: 'bold', letterSpacing: '2px' }}>Layanan Kami</h2>
          <p className="section-subtitle" style={{ color: 'var(--text-secondary)', fontSize: '1.15rem' }}>Produk & Jasa Unggulan untuk kebutuhan digital Anda</p>
        </div>
        <div className="row g-4 justify-content-center">
          {services.map((srv, idx) => (
            <div key={idx} className="col-lg-4 col-md-6">
              <div className="service-card card-custom p-4 rounded-4 shadow text-center border-0"
                style={{
                  minHeight: '280px',
                  background: 'linear-gradient(135deg, #222 70%, var(--primary-color) 100%)',
                  color: '#eee',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  boxShadow: '0 8px 32px 0 rgba(31,38,135,0.18)'
                }}
                onMouseOver={e => {
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.03)';
                  e.currentTarget.style.boxShadow = '0 16px 40px 0 rgba(31,38,135,0.28)';
                }}
                onMouseOut={e => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(31,38,135,0.18)';
                }}
              >
                <div className="mb-3">
                  <i className={`${srv.icon} fs-1`} style={{ color: 'var(--primary-color)', fontSize: '3rem', textShadow: '0 2px 8px #0002' }}></i>
                </div>
                <h4 className="fw-bold mb-2" style={{ color: 'var(--primary-color)', fontSize: '1.35rem', letterSpacing: '1px' }}>{srv.title}</h4>
                <p className="mb-2" style={{ color: '#ccc', fontSize: '1.08rem' }}>{srv.desc}</p>
                <div className="mt-3">
                  <span className="badge bg-primary" style={{ fontSize: '0.95rem', padding: '0.5em 1em', background: 'var(--primary-color)', color: '#fff', borderRadius: '12px' }}>
                    {srv.title.includes('Internet') && 'Home & Business'}
                    {srv.title.includes('Komputer') && 'Hardware & Software'}
                    {srv.title.includes('Maintenance') && 'Jaringan LAN/WiFi'}
                    {srv.title.includes('CCTV') && 'Keamanan & Hiburan'}
                    {srv.title.includes('IT Solution') && 'Konsultasi & Pengembangan'}
                    {srv.title === 'Web Design' && 'Desain Modern'}
                    {srv.title === 'Web Development' && 'Aplikasi Web'}
                    {srv.title === 'Product Management' && 'Digital Product'}
                    {srv.title === 'Marketing' && 'Promosi Online'}
                    {srv.title === 'Graphic Design' && 'Branding & Promosi'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Paket Internet Section */}
        <div className="text-center mb-5 mt-5 pt-5">
          <h2 className="section-title" style={{ color: 'var(--text-primary)' }}>Paket Internet</h2>
          <p className="section-subtitle" style={{ color: 'var(--text-secondary)' }}>HOME BROADBAND</p>
        </div>
        
        <div className="row g-4">
          {packages.map((pkg) => (
            <div key={pkg.id} className="col-lg-3 col-md-6">
              <div className={getColorClass(pkg.color)}>
                <div className="package-icon">
                  <Icon iconClass="bi bi-wifi" size="fs-1" />
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
                
                <a 
                  href={pkg.whatsapp}
                  className="btn btn-light text-primary-custom fw-semibold w-100 rounded-pill"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon iconClass="bi bi-whatsapp" size="fs-6" />
                  <span className="ms-2">Pesan Sekarang</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Service;
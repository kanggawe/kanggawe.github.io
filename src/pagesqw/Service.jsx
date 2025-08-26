
import React from "react";
import "../assets/css/Service.css";

// Icon Component with fallback
const Icon = ({ iconClass, size = "fs-6" }) => {
  return (
    <i 
      className={`${iconClass} ${size}`} 
      style={{ 
        fontFamily: '"Bootstrap Icons" !important',
        display: 'inline-block',
        verticalAlign: 'middle'
      }}
      title={iconClass.replace('bi bi-', '')}
    />
  );
};

const services = [
  {
    id: 1,
    title: "Web Design",
    description: "Desain website profesional dan responsif sesuai kebutuhan bisnis Anda.",
    icon: "bi bi-palette",
    badge: "Desain Modern"
  },
  {
    id: 2,
    title: "Web Development",
    description: "Pengembangan website dan aplikasi web modern, aman, dan scalable.",
    icon: "bi bi-laptop",
    badge: "Aplikasi Web"
  },
  {
    id: 3,
    title: "Product Management",
    description: "Manajemen produk digital, mulai dari perencanaan hingga peluncuran.",
    icon: "bi bi-box-seam",
    badge: "Digital Product"
  },
  {
    id: 4,
    title: "Marketing",
    description: "Jasa digital marketing, promosi online, dan strategi pemasaran efektif.",
    icon: "bi bi-megaphone",
    badge: "Promosi Online"
  },
  {
    id: 5,
    title: "Graphic Design",
    description: "Desain grafis kreatif untuk branding, promosi, dan kebutuhan bisnis Anda.",
    icon: "bi bi-brush",
    badge: "Branding & Promosi"
  },
  {
    id: 6,
    title: "Layanan Internet",
    description: "Paket internet cepat dan stabil untuk rumah & bisnis.",
    icon: "bi bi-wifi",
    badge: "Home & Business"
  },
  {
    id: 7,
    title: "Service Komputer & Laptop",
    description: "Perbaikan, upgrade, dan instalasi software/hardware.",
    icon: "bi bi-pc-display",
    badge: "Hardware & Software"
  },
  {
    id: 8,
    title: "Maintenance Jaringan",
    description: "Perawatan dan troubleshooting jaringan LAN/WiFi.",
    icon: "bi bi-diagram-3",
    badge: "Jaringan LAN/WiFi"
  },
  {
    id: 9,
    title: "CCTV & IPTV",
    description: "Instalasi dan maintenance CCTV serta layanan IPTV.",
    icon: "bi bi-camera-video",
    badge: "Keamanan & Hiburan"
  },
  {
    id: 10,
    title: "IT Solution & Konsultasi",
    description: "Solusi IT, konsultasi, dan pengembangan sistem sesuai kebutuhan.",
    icon: "bi bi-lightbulb",
    badge: "Konsultasi & Pengembangan"
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
    popular: false
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
    popular: true
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
    popular: false
  },
  {
    id: 4,
    name: 'Gold',
    price: 'Rp. 390.000,-',
    speed: '30 Mbps (Up to*)',
    features: [
      'Home Broadband',
      'Tanpa FUP',
      'Unlimited Download',
      'Unlimited Upload'
    ],
    whatsapp: 'https://wa.me/6282260601982?text=Hallo, saya ingin memesan Home 4',
    popular: false
  }
];

function Service() {
  return (
    <div className="service-page">
      <div className="container">
        {/* Services Section Header */}
        <div className="service-header">
          <h1 className="service-title">Layanan Kami</h1>
          <p className="service-subtitle">Produk & Jasa Unggulan untuk kebutuhan digital Anda</p>
        </div>

        {/* Services Grid */}
        <div className="services-section">
          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="service-card">
                <div className="service-icon">
                  <Icon iconClass={service.icon} size="fs-1" />
                </div>
                
                <h3 className="service-name">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                
                <span className="service-badge">
                  {service.badge}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Internet Packages Section */}
        <div className="packages-section">
          <div className="packages-header">
            <h2 className="packages-title">Paket Internet</h2>
            <p className="packages-subtitle">HOME BROADBAND</p>
          </div>
          
          <div className="packages-grid">
            {packages.map((pkg) => (
              <div key={pkg.id} className={`package-card ${pkg.popular ? 'popular' : ''}`}>
                {pkg.popular && (
                  <div className="popular-badge">
                    🔥 TERPOPULER
                  </div>
                )}
                
                <div className="package-icon">
                  <Icon iconClass="bi bi-wifi" size="fs-1" />
                </div>
                
                <h3 className="package-name">{pkg.name}</h3>
                <div className="package-price">{pkg.price}</div>
                <div className="package-speed">{pkg.speed}</div>
                
                <div className="package-features">
                  {pkg.features.map((feature, index) => (
                    <div key={index} className="package-feature">
                      <Icon iconClass="bi bi-check-circle-fill" size="fs-6" className="package-feature-icon" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <a 
                  href={pkg.whatsapp}
                  className="package-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon iconClass="bi bi-whatsapp" size="fs-6" className="package-button-icon" />
                  <span>Pesan Sekarang</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
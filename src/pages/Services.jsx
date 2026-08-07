import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const services = [
  {
    id: 1,
    icon: 'bi-house-wifi-fill',
    title: 'Home Broadband',
    desc: 'Internet rumah super cepat berbasis fiber optic. Cocok untuk streaming 4K, gaming online, dan work from home tanpa gangguan.',
    features: ['Kecepatan hingga 100 Mbps', 'WiFi Router gratis', 'Instalasi gratis', 'Support 24/7'],
    badge: null,
  },
  {
    id: 2,
    icon: 'bi-building-fill',
    title: 'Business Internet',
    desc: 'Solusi internet korporat dengan jaminan SLA, IP Publik statis, dan dedicated bandwidth untuk operasional bisnis tanpa hambatan.',
    features: ['Dedicated bandwidth', 'IP Publik statis', 'SLA 99.9%', 'Account manager khusus'],
    badge: 'Terpopuler',
  },
  {
    id: 3,
    icon: 'bi-router-fill',
    title: 'WiFi Hotspot',
    desc: 'Sistem manajemen hotspot terintegrasi untuk hotel, kafe, kampus, dan area publik. Dashboard monitoring real-time.',
    features: ['Portal login kustom', 'Manajemen bandwidth', 'Dashboard monitoring', 'Multi-lokasi'],
    badge: null,
  },
  {
    id: 4,
    icon: 'bi-hdd-network-fill',
    title: 'Dedicated Internet',
    desc: 'Koneksi internet dedicated simetris untuk data center, cloud computing, dan enterprise yang membutuhkan performa maksimal.',
    features: ['Bandwidth simetris', 'Latensi ultra rendah', 'Redundansi ganda', 'NOC 24/7'],
    badge: 'Enterprise',
  },
  {
    id: 5,
    icon: 'bi-camera-video-fill',
    title: 'Cloud CCTV',
    desc: 'Sistem pemantauan CCTV berbasis cloud. Rekam, simpan, dan akses video dari mana saja dengan penyimpanan aman di cloud.',
    features: ['Penyimpanan cloud 30 hari', 'Akses remote via app', 'Motion detection', 'Notifikasi real-time'],
    badge: null,
  },
];

const plans = [
  {
    name: 'Starter',
    price: 'Rp 99.000',
    period: '/bulan',
    desc: 'Cocok untuk pengguna rumahan',
    speed: '20 Mbps',
    features: ['Kecepatan hingga 20 Mbps', 'WiFi Router gratis', 'Instalasi gratis', 'Support via WhatsApp', '1 IP Publik (opsional)'],
    cta: 'Pilih Paket',
    featured: false,
  },
  {
    name: 'Professional',
    price: 'Rp 199.000',
    period: '/bulan',
    desc: 'Ideal untuk keluarga & WFH',
    speed: '50 Mbps',
    features: ['Kecepatan hingga 50 Mbps', 'WiFi Router 5GHz gratis', 'Instalasi gratis', 'Support 24/7', 'IP Publik statis', 'SLA 99.5%'],
    cta: 'Pilih Paket',
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Rp 499.000',
    period: '/bulan',
    desc: 'Untuk bisnis & profesional',
    speed: '100 Mbps',
    features: ['Kecepatan hingga 100 Mbps', 'Dedicated bandwidth', 'Instalasi prioritas', 'Account manager khusus', 'Multiple IP Publik', 'SLA 99.9% tertulis'],
    cta: 'Hubungi Sales',
    featured: false,
  },
];

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  return (
    <div className="services-page">

      {/* ===== HERO ===== */}
      <section className="services-hero">
        <div className="sh-shapes">
          <div className="sh-shape sh-s1"></div>
          <div className="sh-shape sh-s2"></div>
        </div>
        <div className="container">
          <div className="services-hero-content">
            <span className="section-tag" style={{background:'rgba(255,255,255,0.15)', color:'#fff'}}>Layanan Kami</span>
            <h1>Solusi Internet untuk <span style={{color:'var(--accent)'}}>Setiap Kebutuhan</span></h1>
            <p>Dari rumah pribadi hingga perusahaan besar, ESANET menyediakan layanan internet lengkap dengan teknologi fiber optic terdepan.</p>
          </div>
        </div>
      </section>

      {/* ===== SERVICES TABS ===== */}
      <section className="services-detail">
        <div className="container">
          {/* Tabs */}
          <div className="service-tabs">
            {services.map((s, i) => (
              <button
                key={s.id}
                className={`service-tab ${activeService === i ? 'active' : ''}`}
                onClick={() => setActiveService(i)}
              >
                <i className={`bi ${s.icon}`}></i>
                <span>{s.title}</span>
                {s.badge && <span className="tab-badge">{s.badge}</span>}
              </button>
            ))}
          </div>

          {/* Active Service Detail */}
          <div className="service-detail-card">
            <div className="sd-icon">
              <i className={`bi ${services[activeService].icon}`}></i>
            </div>
            <div className="sd-content">
              <div className="sd-header">
                <h2>{services[activeService].title}</h2>
                {services[activeService].badge && (
                  <span className="sd-badge">{services[activeService].badge}</span>
                )}
              </div>
              <p>{services[activeService].desc}</p>
              <div className="sd-features">
                {services[activeService].features.map((f, i) => (
                  <div className="sd-feature" key={i}>
                    <i className="bi bi-check2-circle"></i>
                    <span>{f}</span>
                  </div>
                ))}
              </div>
              <div className="sd-actions">
                <Link to="/contact" className="btn btn-primary">
                  <i className="bi bi-telephone-fill"></i> Tanyakan Layanan Ini
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PRICING ===== */}
      <section className="pricing-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Paket Harga</span>
            <h2 className="section-title">Pilih Paket yang Tepat</h2>
            <p className="section-subtitle">Semua paket sudah termasuk instalasi gratis dan router WiFi. Tanpa biaya tersembunyi.</p>
          </div>
          <div className="pricing-grid">
            {plans.map((plan, i) => (
              <div className={`pricing-card ${plan.featured ? 'featured' : ''}`} key={i}>
                {plan.featured && <div className="featured-ribbon">Paling Populer</div>}
                <div className="pricing-header">
                  <h3>{plan.name}</h3>
                  <p className="pricing-desc">{plan.desc}</p>
                  <div className="pricing-speed">
                    <i className="bi bi-speedometer2"></i> {plan.speed}
                  </div>
                </div>
                <div className="pricing-price">
                  <span className="price-amount">{plan.price}</span>
                  <span className="price-period">{plan.period}</span>
                </div>
                <ul className="pricing-features">
                  {plan.features.map((f, j) => (
                    <li key={j}>
                      <i className="bi bi-check2-circle"></i>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`btn ${plan.featured ? 'btn-primary' : 'btn-outline-primary'}`}
                  style={{width:'100%', justifyContent:'center'}}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
          <p className="pricing-note">
            <i className="bi bi-info-circle-fill"></i>
            Harga belum termasuk PPN 11%. Untuk kebutuhan custom atau paket enterprise, <Link to="/contact">hubungi tim sales kami</Link>.
          </p>
        </div>
      </section>

      {/* ===== FAQ / EXTRAS ===== */}
      <section className="services-extras">
        <div className="container">
          <div className="extras-grid">
            <div className="extra-card">
              <i className="bi bi-tools"></i>
              <h3>Instalasi Profesional</h3>
              <p>Tim teknisi berpengalaman kami siap melakukan instalasi di lokasi Anda dalam waktu 1x24 jam.</p>
            </div>
            <div className="extra-card">
              <i className="bi bi-headset"></i>
              <h3>Support 24/7</h3>
              <p>Layanan pelanggan kami siap membantu Anda kapan saja melalui telepon, WhatsApp, atau live chat.</p>
            </div>
            <div className="extra-card">
              <i className="bi bi-shield-check-fill"></i>
              <h3>Jaminan Uptime</h3>
              <p>Kami memberikan jaminan uptime 99.9% dengan kompensasi jika tidak terpenuhi sesuai SLA.</p>
            </div>
            <div className="extra-card">
              <i className="bi bi-arrow-up-right-circle-fill"></i>
              <h3>Upgrade Kapan Saja</h3>
              <p>Tidak puas dengan kecepatan saat ini? Upgrade paket Anda kapan saja tanpa biaya tambahan.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;

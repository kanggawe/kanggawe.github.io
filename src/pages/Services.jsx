import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Services.css';

const services = [
  {
    id: 1,
    icon: 'bi-house-fill',
    title: 'Home Broadband',
    tagline: 'Ultra-Reliable Fiber Connection',
    metric: { value: '100 Mbps', label: 'Max Speed', note: 'Latensi Rendah & Bebas FUP' },
    desc: 'Internet rumah super cepat berbasis fiber optic murni. Dioptimalkan untuk streaming 4K tanpa buffering, gaming online kompetitif minim lag, dan work from home multi-perangkat.',
    features: [
      'Kecepatan simetris hingga 100 Mbps',
      'WiFi Router Dual Band Gigabit gratis',
      'Bebas biaya instalasi & setting teknisi',
      'Dukungan teknis responsif 24/7'
    ],
    badge: null,
  },
  {
    id: 2,
    icon: 'bi-building-fill',
    title: 'Business Internet',
    tagline: 'Corporate-Grade Dedicated Network',
    metric: { value: '99.9%', label: 'SLA Uptime', note: 'Dedicated 1:1 Simetris' },
    desc: 'Solusi internet korporat dengan jaminan SLA uptime 99.9%, IP Publik statis gratis, dan alokasi dedicated bandwidth 1:1 untuk operasional bisnis tanpa hambatan.',
    features: [
      'Dedicated bandwidth simetris 1:1',
      'Subnet IP Publik Statis gratis',
      'Jaminan SLA Uptime 99.9% tertulis',
      'Dedicated Account Manager & Tim NOC'
    ],
    badge: 'Terpopuler',
  },
  {
    id: 3,
    icon: 'bi-router-fill',
    title: 'WiFi Hotspot',
    tagline: 'Public & Enterprise Access Control',
    metric: { value: '1.000+', label: 'User Capacity', note: 'Multi-SSID & Voucher' },
    desc: 'Sistem manajemen hotspot komprehensif untuk hotel, kafe, resto, kampus, dan area publik. Dilengkapi portal login kustom dan monitoring penggunaan real-time.',
    features: [
      'Custom Captive Portal & Brand Logo',
      'Manajemen kuota & pembagian bandwidth',
      'Dashboard monitoring analitik real-time',
      'Dukungan multi-lokasi terintegrasi'
    ],
    badge: null,
  },
  {
    id: 4,
    icon: 'bi-hdd-network-fill',
    title: 'Dedicated Internet',
    tagline: 'Mission-Critical Direct Fiber Link',
    metric: { value: '1 Gbps', label: 'Ultra Peering', note: 'Dual-Ring Redundant' },
    desc: 'Koneksi dedicated direct fiber simetris untuk data center, perbankan, cloud computing, dan enterprise dengan redundansi jalur ganda serta routing terpendek.',
    features: [
      'Bandwidth 1:1 murni tanpa rasio bagi',
      'Latensi ultra rendah ke IIX & OpenIXP',
      'Redundansi jalur ganda (Dual-Ring)',
      'Pemantauan proaktif tim NOC 24/7/365'
    ],
    badge: 'Enterprise',
  },
  {
    id: 5,
    icon: 'bi-camera-video-fill',
    title: 'Cloud CCTV',
    tagline: 'AI-Powered Smart Cloud Surveillance',
    metric: { value: '2K/4K', label: 'Ultra HD Feed', note: 'Enkripsi Cloud AES-256' },
    desc: 'Ekosistem pengawasan kamera keamanan modern berbasis cloud. Rekam kejadian penting, pantau live-feed resolusi tinggi dari HP/laptop, dan simpan secara aman di cloud.',
    features: [
      'Penyimpanan aman cloud hingga 30 hari',
      'Akses pemantauan remote via smartphone',
      'AI Smart Motion & Human Detection',
      'Notifikasi peringatan instan real-time'
    ],
    badge: null,
  },
];

const residentialPlans = [
  {
    name: 'Home Starter',
    price: 'Rp 99.000',
    period: '/bulan',
    desc: 'Cocok untuk pengguna rumahan santai & 1-3 perangkat',
    speed: '20 Mbps',
    badge: null,
    features: [
      'Kecepatan simetris hingga 20 Mbps',
      'WiFi Router Dual Band gratis',
      'Instalasi gratis 100%',
      'Support via WhatsApp 24/7',
      'Kuota Unlimited tanpa FUP',
      'Ideal untuk browsing & media sosial',
    ],
    cta: 'Pilih Paket',
    featured: false,
  },
  {
    name: 'Home Family',
    price: 'Rp 199.000',
    period: '/bulan',
    desc: 'Paling favorit untuk keluarga, streaming 4K & WFH',
    speed: '50 Mbps',
    badge: 'Paling Populer',
    features: [
      'Kecepatan simetris hingga 50 Mbps',
      'WiFi Router 5GHz Gigabit gratis',
      'Instalasi gratis prioritas',
      'Support prioritas 24/7',
      'Streaming 4K & video call lancar',
      'Optimal untuk 4–7 perangkat',
    ],
    cta: 'Pilih Paket',
    featured: true,
  },
  {
    name: 'Home Ultra',
    price: 'Rp 299.000',
    period: '/bulan',
    desc: 'Performa tinggi untuk gaming online & download cepat',
    speed: '100 Mbps',
    badge: 'Super Cepat',
    features: [
      'Kecepatan simetris hingga 100 Mbps',
      'WiFi Router High-Gain 5GHz',
      'Instalasi express 1x24 jam',
      'Support prioritas 24/7',
      'Ultra low-latency untuk gaming',
      'Optimal untuk 8+ perangkat',
    ],
    cta: 'Pilih Paket',
    featured: false,
  },
];

const businessPlans = [
  {
    name: 'Business Lite',
    price: 'Rp 499.000',
    period: '/bulan',
    desc: 'Solusi internet handal untuk UMKM, ruko & kafe',
    speed: '50 Mbps',
    badge: null,
    features: [
      'Dedicated Bandwidth 1:1 Simetris',
      'Router Gigabit WiFi Dual-Band',
      '1 IP Publik Dinamis / Statis opsional',
      'Jaminan SLA Uptime 99.5%',
      'Sistem login hotspot tamu',
      'Support prioritas via WhatsApp & NOC',
    ],
    cta: 'Pilih Paket',
    featured: false,
  },
  {
    name: 'Business Pro',
    price: 'Rp 999.000',
    period: '/bulan',
    desc: 'Koneksi dedicated untuk kantor, startup & co-working',
    speed: '100 Mbps',
    badge: 'Paling Populer',
    features: [
      'Dedicated Bandwidth 1:1 Simetris',
      'Router MikroTik Gigabit Enterprise',
      '1 IP Publik Statis Gratis',
      'Jaminan SLA Uptime 99.8%',
      'Monitoring proaktif NOC 24/7',
      'Dedicated Account Manager khusus',
    ],
    cta: 'Pilih Paket',
    featured: true,
  },
  {
    name: 'Enterprise Dedicated',
    price: 'Rp 2.499.000',
    period: '/bulan',
    desc: 'Infrastruktur mission-critical korporasi & data center',
    speed: 'Hingga 1 Gbps',
    badge: 'Enterprise SLA',
    features: [
      'Pure Fiber Optic Dedicated 1:1',
      'Subnet Multi IP Publik Statis (/29)',
      'Jaminan SLA Uptime 99.9% Tertulis',
      'Redundansi jalur Dual-Ring',
      'BGP Peering & Direct Global Peering',
      'Restitusi downtime & Tim NOC 24/7',
    ],
    cta: 'Hubungi Sales',
    featured: false,
  },
];

const Services = () => {
  const [activeService, setActiveService] = useState(0);
  const [pricingCategory, setPricingCategory] = useState('residential');

  const currentPlans = pricingCategory === 'residential' ? residentialPlans : businessPlans;

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
            <span className="section-tag" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff' }}>Layanan Kami</span>
            <h1>Solusi Internet untuk <span style={{ color: 'var(--accent)' }}>Setiap Kebutuhan</span></h1>
            <p>Dari rumah pribadi hingga perusahaan besar, MITRAXCON menyediakan layanan internet lengkap dengan teknologi fiber optic terdepan.</p>
          </div>
        </div>
      </section>

      {/* ===== SERVICES TABS ===== */}
      <section className="services-detail" id="services-overview">
        <div className="container">
          {/* Futuristic 5-Column Service Selector Grid */}
          <div className="service-nav-grid" role="tablist" aria-label="Pilihan Layanan MITRAXCON">
            {services.map((s, i) => (
              <button
                key={s.id}
                role="tab"
                aria-selected={activeService === i}
                className={`service-nav-card ${activeService === i ? 'active' : ''}`}
                onClick={() => setActiveService(i)}
              >
                <div className="snc-header">
                  <div className="snc-icon">
                    <i className={`bi ${s.icon}`}></i>
                  </div>
                  {s.badge ? (
                    <span className={`snc-badge ${s.badge === 'Terpopuler' ? 'badge-popular' : 'badge-enterprise'}`}>
                      <i className={s.badge === 'Terpopuler' ? 'bi bi-fire' : 'bi bi-shield-fill-check'}></i>
                      {s.badge}
                    </span>
                  ) : (
                    <span className="snc-status-chip">
                      <span className="snc-dot"></span>
                      <span>Ready</span>
                    </span>
                  )}
                </div>
                <div className="snc-body">
                  <h3 className="snc-title">{s.title}</h3>
                  <span className="snc-metric">{s.metric?.value || 'Fiber Optic'}</span>
                </div>
                {activeService === i && <div className="snc-active-line"></div>}
              </button>
            ))}
          </div>

          {/* Active Service Detail Card */}
          <div className="service-detail-card">
            {/* Ambient Lighting & Holographic Grid Backgrounds */}
            <div className="sd-card-ambient"></div>
            <div className="sd-card-grid-layer"></div>

            {/* Left Panel: Glowing Emblem + Holographic Spec HUD */}
            <div className="sd-left-panel">
              <div className="sd-icon-wrapper">
                <div className="sd-icon-halo"></div>
                <div className="sd-icon">
                  <i className={`bi ${services[activeService].icon}`}></i>
                </div>
              </div>

              {/* Spec HUD Telemetry Tile */}
              {services[activeService].metric && (
                <div className="sd-spec-hud">
                  <div className="sd-hud-status">
                    <span className="sd-hud-dot"></span>
                    <span>JARINGAN AKTIF</span>
                  </div>
                  <div className="sd-hud-value">{services[activeService].metric.value}</div>
                  <div className="sd-hud-label">{services[activeService].metric.label}</div>
                  <div className="sd-hud-sub">{services[activeService].metric.note}</div>
                </div>
              )}
            </div>

            {/* Right Panel: Content, Features Grid & Action Buttons */}
            <div className="sd-content">
              <div className="sd-header">
                <div className="sd-header-titles">
                  <div className="sd-pretitle">
                    <i className="bi bi-broadcast-pin"></i>
                    <span>{services[activeService].tagline}</span>
                  </div>
                  <h2>{services[activeService].title}</h2>
                </div>
                {services[activeService].badge && (
                  <span className={`sd-badge ${services[activeService].badge === 'Terpopuler' ? 'badge-popular' : 'badge-enterprise'}`}>
                    <i className={services[activeService].badge === 'Terpopuler' ? 'bi bi-fire' : 'bi bi-shield-fill-check'}></i>
                    {services[activeService].badge}
                  </span>
                )}
              </div>

              <p className="sd-description">{services[activeService].desc}</p>

              {/* Futuristic Feature Chips */}
              <div className="sd-features">
                {services[activeService].features.map((f, i) => (
                  <div className="sd-feature-chip" key={i}>
                    <div className="sd-feature-icon">
                      <i className="bi bi-check2"></i>
                    </div>
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="sd-actions">
                <Link to="/contact" className="btn btn-primary sd-btn-main">
                  <i className="bi bi-chat-dots-fill"></i>
                  <span>Tanyakan Layanan Ini</span>
                  <i className="bi bi-arrow-right"></i>
                </Link>
                <a
                  href="#pricing"
                  className="btn sd-btn-secondary"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <i className="bi bi-tag-fill"></i>
                  <span>Lihat Paket Terkait</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PRICING ===== */}
      <section className="pricing-section" id="pricing">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Paket Harga</span>
            <h2 className="section-title">
              {pricingCategory === 'residential' ? 'Pilih Paket Rumahan Terbaik' : 'Pilih Solusi Internet Bisnis'}
            </h2>
            <p className="section-subtitle">
              {pricingCategory === 'residential'
                ? 'Internet rumah super cepat, kuota tanpa batas (unlimited tanpa FUP), dan instalasi gratis 100%.'
                : 'Koneksi dedicated simetris 1:1 dengan jaminan SLA uptime tinggi dan IP publik statis untuk operasional bisnis.'}
            </p>

            {/* Toggle Kategori Rumahan & Bisnis */}
            <div className="pricing-toggle-wrapper">
              <div className="pricing-toggle-pill" role="tablist" aria-label="Kategori Paket Internet">
                <button
                  type="button"
                  role="tab"
                  aria-selected={pricingCategory === 'residential'}
                  className={`pricing-toggle-btn ${pricingCategory === 'residential' ? 'active' : ''}`}
                  onClick={() => setPricingCategory('residential')}
                >
                  <i className="bi bi-house-door-fill"></i>
                  <span>Paket Rumahan</span>
                  <span className="toggle-chip">Home</span>
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={pricingCategory === 'business'}
                  className={`pricing-toggle-btn ${pricingCategory === 'business' ? 'active' : ''}`}
                  onClick={() => setPricingCategory('business')}
                >
                  <i className="bi bi-building-fill"></i>
                  <span>Paket Bisnis</span>
                  <span className="toggle-chip">Corporate</span>
                </button>
              </div>
            </div>
          </div>

          <div className="pricing-grid" key={pricingCategory}>
            {currentPlans.map((plan, i) => (
              <div className={`pricing-card ${plan.featured ? 'featured' : ''}`} key={`${pricingCategory}-${i}`}>
                {plan.badge && <div className="featured-ribbon">{plan.badge}</div>}
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
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
          <p className="pricing-note">
            <i className="bi bi-info-circle-fill"></i>
            {pricingCategory === 'residential' ? (
              <>Harga sudah termasuk router WiFi. Harga belum termasuk PPN 11%. Butuh paket khusus? <Link to="/contact">Konsultasi dengan tim sales kami</Link>.</>
            ) : (
              <>Harga paket bisnis belum termasuk PPN 11%. Tersedia SLA kustom dan kontrak fleksibel, <Link to="/contact">hubungi tim corporate sales kami</Link>.</>
            )}
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

import { Link } from 'react-router-dom';
import TechMarquee from '../components/TechMarquee';
import PartnerSlider from '../components/PartnerSlider';
import '../assets/css/About.css';

const companyDetails = [
  { label: 'Nama Resmi', val: 'PT Mitraxcon Synergy Utama' },
  { label: 'Izin Penyelenggara ISP', val: 'Kominfo RI No. 1284/TEL.02.02/2012' },
  { label: 'Keanggotaan Resmi', val: 'Anggota APJII (Asosiasi Penyelenggara Jasa Internet Indonesia)' },
  { label: 'Sertifikasi Mutu', val: 'ISO 9001:2015 (Quality) & ISO 27001:2013 (Security)' },
  { label: 'Koneksi Peering', val: 'Direct Peering IIX, OpenIXP, Google, Cloudflare, Meta, Netflix' },
];

const leadership = [
  {
    name: 'Ir. Hendra Wijaya, M.T.',
    role: 'Chief Executive Officer',
    experience: '18+ Tahun di Industri Telekomunikasi',
    icon: 'bi-person-badge-fill',
    bio: 'Memimpin ekspansi strategis MITRAXCON hingga menjadi salah satu penyedia layanan internet fiber terdepan di Indonesia.',
  },
  {
    name: 'Budi Santoso, S.T.',
    role: 'Chief Technology Officer',
    experience: '15+ Tahun Spesialis Infrastruktur Jaringan',
    icon: 'bi-cpu-fill',
    bio: 'Bertanggung jawab atas desain jaringan fiber optic nasional, redundansi data center, dan integrasi Peering global.',
  },
  {
    name: 'Dian Sastrowardoyo, M.M.',
    role: 'VP Customer Experience',
    experience: '12+ Tahun Pelayanan Konsumen & Operations',
    icon: 'bi-headset',
    bio: 'Memastikan standar pelayanan 24/7 selalu responsif dan kepuasan pelanggan tetap pada tingkat tertinggi.',
  },
  {
    name: 'Rizky Pratama, S.Kom.',
    role: 'Head of NOC & Cyber Security',
    experience: '10+ Tahun Keamanan Siber & Monitoring',
    icon: 'bi-shield-lock-fill',
    bio: 'Mengawasi Network Operations Center (NOC) 24 jam nonstop untuk menjamin uptime 99.9% dan keamanan siber.',
  },
];

const milestones = [
  { year: '2010', title: 'Pendirian Perusahaan', desc: 'PT Mitraxcon Synergy Utama resmi didirikan dengan fokus layanan internet broadband.' },
  { year: '2014', title: 'Izin Resmi Kominfo & APJII', desc: 'Memperoleh izin resmi ISP dari Kominfo RI dan resmi bergabung menjadi anggota APJII.' },
  { year: '2017', title: 'Pembangunan Backbone Fiber', desc: 'Membangun jaringan fiber optic mandiri sepanjang 3.000 KM mencakup wilayah Jabodetabek & Jawa Barat.' },
  { year: '2020', title: 'Sertifikasi ISO 27001 & Tier-3', desc: 'Mendapatkan sertifikasi ISO 27001 untuk standar keamanan informasi & peresmian Data Center Tier-3.' },
  { year: '2024', title: '50.000+ Pelanggan Aktif', desc: 'Melayani lebih dari 50.000 pelanggan rumah tangga dan 1.200 korporasi di seluruh Indonesia.' },
];

const infraHighlights = [
  { icon: 'bi-diagram-3-fill', title: 'Backbone Fiber 10.000+ KM', desc: 'Jaringan kabel serat optik berkecepatan tinggi yang menghubungkan kota-kota utama.' },
  { icon: 'bi-server', title: 'Data Center Tier-3 Dual Site', desc: 'Infrastruktur server di Jakarta dan Surabaya dengan redundansi daya ganda (N+1).' },
  { icon: 'bi-lightning-charge-fill', title: 'Direct Global Peering', desc: 'Koneksi langsung ke CDN global (Google, Akamai, Cloudflare, Netflix, Meta) tanpa lompatan ekstra.' },
  { icon: 'bi-shield-fill-check', title: 'Sistem Redundansi Dual-Ring', desc: 'Arsitektur jaringan ring ganda yang otomatis mengalihkan jalur jika terjadi gangguan fisik.' },
];

const certs = [
  { title: 'ISO 27001:2013', desc: 'Sertifikasi Sistem Manajemen Keamanan Informasi' },
  { title: 'ISO 9001:2015', desc: 'Sertifikasi Standar Manajemen Mutu Layanan' },
  { title: 'Izin ISP Kominfo', desc: 'Lisensi Resmi Penyelenggara Jasa Akses Internet' },
  { title: 'Anggota APJII & IIX', desc: 'Terhubung langsung ke Indonesia Internet Exchange' },
];



const About = () => {
  return (
    <div className="about-page">
      {/* ===== HERO ===== */}
      <section className="about-hero">
        <div className="about-hero-shapes">
          <div className="ah-shape ah-shape-1"></div>
          <div className="ah-shape ah-shape-2"></div>
        </div>
        <div className="container">
          <div className="about-hero-content">
            <span className="section-tag" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff' }}>Company Profile</span>
            <h1>PT Mitraxcon Synergy <span style={{ color: 'var(--accent)' }}>Utama</span></h1>
            <p>
              Penyedia layanan jasa akses internet (ISP) terpercaya di Indonesia yang berkomitmen menghadirkan konektivitas fiber optic berkecepatan tinggi, aman, dan dapat diandalkan untuk masyarakat dan dunia usaha.
            </p>
          </div>
        </div>
      </section>

      {/* ===== LEGAL & PERUSAHAAN ===== */}
      <section className="company-legal-section">
        <div className="container">
          <div className="legal-grid">
            <div className="legal-info">
              <span className="section-tag">Legalitas Perusahaan</span>
              <h2 className="section-title" style={{ textAlign: 'left' }}>Profil Resmi & Legalitas</h2>
              <p className="legal-desc">
                MITRAXCON beroperasi penuh berdasarkan regulasi pemerintah Republik Indonesia dan terdaftar resmi di Kementerian Komunikasi dan Digital (Kominfo) serta Asosiasi Penyelenggara Jasa Internet Indonesia (APJII).
              </p>
              <div className="legal-list">
                {companyDetails.map((d, i) => (
                  <div className="legal-item" key={i}>
                    <i className="bi bi-shield-check-fill"></i>
                    <div>
                      <strong className="legal-label">{d.label}</strong>
                      <span className="legal-val">{d.val}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="legal-badges-card">
              <div className="lbc-header">
                <i className="bi bi-award-fill lbc-icon"></i>
                <h3>Sertifikasi & Lisensi Resmi</h3>
                <p>Memenuhi standar internasional dan regulasi nasional</p>
              </div>
              <div className="certs-grid">
                {certs.map((c, i) => (
                  <div className="cert-box" key={i}>
                    <i className="bi bi-patch-check-fill"></i>
                    <div>
                      <h4>{c.title}</h4>
                      <p>{c.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== INFRASTRUKTUR TEKNOLOGI MARQUEE SECTION ===== */}
      <TechMarquee />

      {/* ===== VISI MISI FUTURISTIK ===== */}
      <section className="vision-mission">
        <div className="vm-bg-effects" aria-hidden="true">
          <div className="vm-ambient-orb orb-1"></div>
          <div className="vm-ambient-orb orb-2"></div>
          <div className="vm-grid-lines"></div>
        </div>

        <div className="container vm-container">
          <div className="vm-header">
            <div className="vm-tag">
              <span className="vm-tag-dot"></span>
              <span>// STRATEGIC ORIENTATION 2030</span>
            </div>
            <h2 className="vm-title">
              Kompas <span className="vm-title-highlight">Visi &amp; Misi</span> MITRAXCON
            </h2>
            <p className="vm-subtitle">
              Pondasi fundamental dan peta jalan strategis kami dalam menghadirkan revolusi konektivitas fiber optik tanpa batas ke setiap jengkal Nusantara.
            </p>
          </div>

          <div className="vm-grid">
            {/* CARD 1: VISI */}
            <div className="vm-card vm-card-vision">
              <div className="vm-card-corner top-left"></div>
              <div className="vm-card-corner top-right"></div>
              <div className="vm-card-corner bottom-left"></div>
              <div className="vm-card-corner bottom-right"></div>

              <div className="vm-card-hud-bar">
                <span className="vm-hud-badge">
                  <i className="bi bi-compass-fill"></i> LONG-TERM VISION
                </span>
                <span className="vm-hud-status">
                  <span className="pulse-ping"></span> EST. HORIZON
                </span>
              </div>

              <div className="vm-hero-icon-wrap">
                <div className="vm-icon-ambient"></div>
                <div className="vm-icon-box vision-icon">
                  <i className="bi bi-eye-fill"></i>
                </div>
                <div className="vm-icon-label">
                  <span className="vm-label-sub">CORE DIRECTION</span>
                  <h3 className="vm-card-heading">Visi Perusahaan</h3>
                </div>
              </div>

              <div className="vm-vision-statement">
                <div className="vm-quote-mark" aria-hidden="true">“</div>
                <p className="vm-vision-text">
                  Menjadi penyedia infrastruktur konektivitas digital terdepan di Indonesia yang dipercaya oleh jutaan keluarga dan korporasi melalui kualitas jaringan super cepat, inovatif, dan berstandar internasional.
                </p>
              </div>

              <div className="vm-metrics-row">
                <div className="vm-metric-pill">
                  <i className="bi bi-lightning-charge-fill"></i>
                  <span>Super Cepat</span>
                </div>
                <div className="vm-metric-pill">
                  <i className="bi bi-shield-lock-fill"></i>
                  <span>Global Standard</span>
                </div>
                <div className="vm-metric-pill">
                  <i className="bi bi-globe2"></i>
                  <span>Skala Nasional</span>
                </div>
              </div>
            </div>

            {/* CARD 2: MISI */}
            <div className="vm-card vm-card-mission">
              <div className="vm-card-corner top-left"></div>
              <div className="vm-card-corner top-right"></div>
              <div className="vm-card-corner bottom-left"></div>
              <div className="vm-card-corner bottom-right"></div>

              <div className="vm-card-hud-bar">
                <span className="vm-hud-badge mission-badge">
                  <i className="bi bi-bullseye"></i> STRATEGIC EXECUTION
                </span>
                <span className="vm-hud-status">
                  <span className="pulse-ping ping-emerald"></span> 4 PILLARS
                </span>
              </div>

              <div className="vm-hero-icon-wrap">
                <div className="vm-icon-ambient mission-ambient"></div>
                <div className="vm-icon-box mission-icon">
                  <i className="bi bi-crosshair"></i>
                </div>
                <div className="vm-icon-label">
                  <span className="vm-label-sub">ACTION FRAMEWORK</span>
                  <h3 className="vm-card-heading">Misi Perusahaan</h3>
                </div>
              </div>

              <div className="vm-mission-list">
                <div className="vm-mission-item">
                  <div className="vm-item-index">01</div>
                  <div className="vm-item-content">
                    <h4>Infrastruktur Nusantara</h4>
                    <p>Membangun jaringan kabel serat optik yang handal hingga ke penjuru Nusantara.</p>
                  </div>
                  <i className="bi bi-check2-circle vm-item-check"></i>
                </div>

                <div className="vm-mission-item">
                  <div className="vm-item-index">02</div>
                  <div className="vm-item-content">
                    <h4>SLA 99.9% &amp; Latensi Ultra Rendah</h4>
                    <p>Memberikan jaminan SLA 99.9% dan latensi ultra rendah untuk kebutuhan bisnis.</p>
                  </div>
                  <i className="bi bi-check2-circle vm-item-check"></i>
                </div>

                <div className="vm-mission-item">
                  <div className="vm-item-index">03</div>
                  <div className="vm-item-content">
                    <h4>Layanan Responsif 24/7</h4>
                    <p>Mengedepankan pelayanan pelanggan responsif 24 jam sehari, 7 hari seminggu.</p>
                  </div>
                  <i className="bi bi-check2-circle vm-item-check"></i>
                </div>

                <div className="vm-mission-item">
                  <div className="vm-item-index">04</div>
                  <div className="vm-item-content">
                    <h4>Keamanan Sertifikasi ISO 27001</h4>
                    <p>Menjaga keamanan data &amp; jaringan konsumen dengan standar sertifikasi ISO 27001.</p>
                  </div>
                  <i className="bi bi-check2-circle vm-item-check"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== INFRASTRUKTUR ===== */}
      <section className="infra-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Infrastruktur & Jaringan</span>
            <h2 className="section-title">Teknologi Jaringan Terdepan</h2>
            <p className="section-subtitle">Didukung oleh infrastruktur fiber optic modern dan sistem pemantauan NOC 24/7.</p>
          </div>
          <div className="infra-grid">
            {infraHighlights.map((item, i) => (
              <div className="infra-card" key={i}>
                <div className="infra-icon">
                  <i className={`bi ${item.icon}`}></i>
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TIM MANAJEMEN ===== */}
      <section className="team-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Manajemen Perusahaan</span>
            <h2 className="section-title">Tim Pemimpin Profesional</h2>
            <p className="section-subtitle">Dipimpin oleh para ahli berdedikasi di bidang teknologi informasi dan telekomunikasi.</p>
          </div>
          <div className="team-grid">
            {leadership.map((member, i) => (
              <div className="team-card" key={i}>
                <div className="team-avatar">
                  <i className={`bi ${member.icon}`}></i>
                </div>
                <h3>{member.name}</h3>
                <span className="team-role">{member.role}</span>
                <span className="team-exp"><i className="bi bi-award-fill"></i> {member.experience}</span>
                <p className="team-bio">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SEJARAH / REKAM JEJAK ===== */}
      <section className="timeline-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Rekam Jejak</span>
            <h2 className="section-title">Milestone Perjalanan MITRAXCON</h2>
            <p className="section-subtitle">Perjalanan 14 tahun membangun fondasi jaringan internet untuk bangsa.</p>
          </div>
          <div className="timeline">
            {milestones.map((m, i) => (
              <div className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`} key={i}>
                <div className="timeline-dot">
                  <span>{m.year}</span>
                </div>
                <div className="timeline-card">
                  <h3>{m.title}</h3>
                  <p>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MITRA & KLIEN STRATEGIS SLIDER ===== */}
      <PartnerSlider />

      {/* ===== CTA ===== */}
      <section className="about-cta">
        <div className="container">
          <div className="about-cta-content">
            <h2>Ingin Bermitra dengan MITRAXCON?</h2>
            <p>Konsultasikan kebutuhan jaringan internet bisnis atau perumahan Anda bersama tim spesialis kami.</p>
            <div className="about-cta-actions">
              <Link to="/contact" className="btn btn-accent">
                <i className="bi bi-headset"></i> Hubungi Tim Sales & IT
              </Link>
              <Link to="/services" className="btn btn-outline">
                <i className="bi bi-grid-fill"></i> Lihat Produk & Layanan
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

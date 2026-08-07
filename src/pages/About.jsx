import { Link } from 'react-router-dom';
import './About.css';

const companyDetails = [
  { label: 'Nama Resmi', val: 'PT Esanet Telekomunikasi Indonesia' },
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
    bio: 'Memimpin ekspansi strategis ESANET hingga menjadi salah satu penyedia layanan internet fiber terdepan di Indonesia.',
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
  { year: '2010', title: 'Pendirian Perusahaan', desc: 'PT Esanet Telekomunikasi Indonesia resmi didirikan dengan fokus layanan internet broadband.' },
  { year: '2014', title: 'Izin Resmi Kominfo & APJII', desc: 'Memperoleh izin resmi ISP dari Kominfo RI dan resmi bergabung menjadi anggota APJII.' },
  { year: '2017', title: 'Pembangunan Backbone Fiber', desc: 'Membangun jaringan fiber optic mandiri sepanjang 3.000 KM mencakup wilayah Jabodetabek & Jawa Barat.' },
  { year: '2020', title: 'Sertifikasi ISO 27001 & Tier-3', desc: 'Mendapatkan sertifikasi ISO 27001 untuk standar keamanan informasi & peresmian Data Center Tier-3.' },
  { year: '2024', title: '50.000+ Pelanggan Aktif', desc: 'Melayani lebih dari 50.000 pelanggan rumah tangga dan 1.200 korporasi di seluruh Indonesia.' },
];

const infraHighlights = [
  { icon: 'bi-diagram-3-fill', title: 'Backbone Fiber 10.000+ KM', desc: 'Jaringan kabel serat optik berkecepatan tinggi yang menghubungkan kota-kota utama.' },
  { icon: 'bi-server', title: 'Data Center Tier-3 Dual Site', desc: 'Infrastruktur server di Jakarta dan Surabaya dengan redundansi daya ganda (N+1).' },
  { icon: 'bi-lightning-charge-fill', title: 'Direct Global Peering', desc: 'Koneksi langsung ke CDN global (Google, Akamai, Cloudflare, Netflix, Meta) tanpa lompatan ekstra.' },
  { icon: 'bi-shield-check-fill', title: 'Sistem Redundansi Dual-Ring', desc: 'Arsitektur jaringan ring ganda yang otomatis mengalihkan jalur jika terjadi gangguan fisik.' },
];

const certs = [
  { title: 'ISO 27001:2013', desc: 'Sertifikasi Sistem Manajemen Keamanan Informasi' },
  { title: 'ISO 9001:2015', desc: 'Sertifikasi Standar Manajemen Mutu Layanan' },
  { title: 'Izin ISP Kominfo', desc: 'Lisensi Resmi Penyelenggara Jasa Akses Internet' },
  { title: 'Anggota APJII & IIX', desc: 'Terhubung langsung ke Indonesia Internet Exchange' },
];

// Marquee rows data for Infrastruktur Teknologi
const row1Tags = [
  'Network', 'Server', 'Fiber', 'Router', 'Switch', 'Antenna', 'Satellite', 'Cloud', 'Security', 'Backup', 'Data Center', 'Firewall'
];

const row2Items = [
  { type: 'text', text: 'Security' },
  { type: 'text', text: 'Backup' },
  { type: 'img', src: '/assets/fiber.png', alt: 'Fiber Optic' },
  { type: 'img', src: '/assets/server.png', alt: 'Server Room' },
  { type: 'text', text: 'Network' },
  { type: 'text', text: 'Server' },
  { type: 'text', text: 'Fiber' },
  { type: 'text', text: 'Router' },
  { type: 'text', text: 'Switch' },
  { type: 'text', text: 'Antenna' },
  { type: 'text', text: 'Satellite' },
  { type: 'text', text: 'Cloud' },
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
            <span className="section-tag" style={{background:'rgba(255,255,255,0.15)', color:'#fff'}}>Company Profile</span>
            <h1>PT Esanet Telekomunikasi <span style={{color:'var(--accent)'}}>Indonesia</span></h1>
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
              <h2 className="section-title" style={{textAlign:'left'}}>Profil Resmi & Legalitas</h2>
              <p className="legal-desc">
                ESANET beroperasi penuh berdasarkan regulasi pemerintah Republik Indonesia dan terdaftar resmi di Kementerian Komunikasi dan Digital (Kominfo) serta Asosiasi Penyelenggara Jasa Internet Indonesia (APJII).
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
      <section className="tech-marquee-section">
        <div className="tech-marquee-header">
          <h2 className="tech-marquee-title">
            INFRASTRUK<span className="title-underline">TUR</span> TEKNOLOGI
          </h2>
        </div>

        <div className="marquee-wrapper">
          {/* Row 1 */}
          <div className="marquee-track track-left">
            <div className="marquee-content">
              {row1Tags.map((tag, index) => (
                <div className="tech-pill" key={`r1-1-${index}`}>
                  {tag}
                </div>
              ))}
            </div>
            {/* Duplicated for seamless infinite loop */}
            <div className="marquee-content" aria-hidden="true">
              {row1Tags.map((tag, index) => (
                <div className="tech-pill" key={`r1-2-${index}`}>
                  {tag}
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 */}
          <div className="marquee-track track-right">
            <div className="marquee-content">
              {row2Items.map((item, index) => (
                item.type === 'img' ? (
                  <div className="tech-img-thumb" key={`r2-1-${index}`}>
                    <img src={item.src} alt={item.alt} />
                  </div>
                ) : (
                  <div className="tech-pill" key={`r2-1-${index}`}>
                    {item.text}
                  </div>
                )
              ))}
            </div>
            {/* Duplicated for seamless infinite loop */}
            <div className="marquee-content" aria-hidden="true">
              {row2Items.map((item, index) => (
                item.type === 'img' ? (
                  <div className="tech-img-thumb" key={`r2-2-${index}`}>
                    <img src={item.src} alt={item.alt} />
                  </div>
                ) : (
                  <div className="tech-pill" key={`r2-2-${index}`}>
                    {item.text}
                  </div>
                )
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== VISI MISI ===== */}
      <section className="vision-mission">
        <div className="container">
          <div className="vm-grid">
            <div className="vm-card vm-vision">
              <div className="vm-icon"><i className="bi bi-eye-fill"></i></div>
              <h2>Visi Perusahaan</h2>
              <p>
                Menjadi penyedia infrastruktur konektivitas digital terdepan di Indonesia yang dipercaya oleh jutaan keluarga dan korporasi melalui kualitas jaringan super cepat, inovatif, dan berstandar internasional.
              </p>
            </div>
            <div className="vm-card vm-mission">
              <div className="vm-icon"><i className="bi bi-bullseye"></i></div>
              <h2>Misi Perusahaan</h2>
              <ul>
                <li><i className="bi bi-check2-circle"></i> Membangun jaringan kabel serat optik yang handal hingga ke penjuru Nusantara.</li>
                <li><i className="bi bi-check2-circle"></i> Memberikan jaminan SLA 99.9% dan latensi ultra rendah untuk kebutuhan bisnis.</li>
                <li><i className="bi bi-check2-circle"></i> Mengedepankan pelayanan pelanggan responsif 24 jam sehari, 7 hari seminggu.</li>
                <li><i className="bi bi-check2-circle"></i> Menjaga keamanan data & jaringan konsumen dengan sertifikasi ISO 27001.</li>
              </ul>
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
            <h2 className="section-title">Milestone Perjalanan ESANET</h2>
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

      {/* ===== CTA ===== */}
      <section className="about-cta">
        <div className="container">
          <div className="about-cta-content">
            <h2>Ingin Bermitra dengan ESANET?</h2>
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

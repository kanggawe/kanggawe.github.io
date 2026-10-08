import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TechMarquee from '../components/TechMarquee';
import PartnerSlider from '../components/PartnerSlider';
import { blogPosts } from '../data/blogData';
import '../assets/css/Home.css';

const slides = [
  {
    id: 1,
    badge: 'Penyedia Internet Terpercaya #1',
    badgeIcon: 'bi-stars',
    titlePrefix: 'Internet ',
    highlight: 'Cepat & Andal',
    titleSuffix: ' untuk Semua',
    subtitle: 'MITRAXCON menghadirkan koneksi internet fiber optic berkecepatan tinggi hingga 1 Gbps untuk rumah dan bisnis Anda. Nikmati browsing, streaming, dan gaming tanpa hambatan.',
    primaryBtnText: 'Lihat Paket',
    primaryBtnLink: '/services',
    primaryBtnIcon: 'bi-grid-fill',
    secondaryBtnText: 'Hubungi Kami',
    secondaryBtnLink: '/contact',
    secondaryBtnIcon: 'bi-telephone-fill',
    visualType: 'speedometer',
    bgImage: '/assets/hero-slide-1.jpg',
  },
  {
    id: 2,
    badge: 'Promo Spesial Pelanggan Baru 🚀',
    badgeIcon: 'bi-gift-fill',
    titlePrefix: 'Diskon ',
    highlight: '50% + Gratis',
    titleSuffix: ' Biaya Instalasi',
    subtitle: 'Daftar paket Home Broadband bulan ini dan dapatkan gratis instalasi serta diskon harga langganan untuk 3 bulan pertama. Tanpa biaya tersembunyi!',
    primaryBtnText: 'Klaim Promo',
    primaryBtnLink: '/contact',
    primaryBtnIcon: 'bi-rocket-takeoff-fill',
    secondaryBtnText: 'Cek Area Jangkauan',
    secondaryBtnLink: '/services',
    secondaryBtnIcon: 'bi-geo-alt-fill',
    visualType: 'promo',
    bgImage: '/assets/hero-slide-2.jpg',
  },
  {
    id: 3,
    badge: 'Solusi Korporat & Bisnis 🏢',
    badgeIcon: 'bi-building-check',
    titlePrefix: 'Koneksi ',
    highlight: 'Dedicated SLA 99.9%',
    titleSuffix: ' Tanpa Putus',
    subtitle: 'Bandwidth simetris, IP Publik Statis, dan dukungan tim NOC profesional 24/7 untuk menjaga operasional bisnis Anda tetap produktif tanpa downtime.',
    primaryBtnText: 'Konsultasi Sales',
    primaryBtnLink: '/contact',
    primaryBtnIcon: 'bi-headset',
    secondaryBtnText: 'Layanan Bisnis',
    secondaryBtnLink: '/services',
    secondaryBtnIcon: 'bi-briefcase-fill',
    visualType: 'corporate',
    bgImage: '/assets/hero-slide-3.png',
  },
];

const services = [
  { icon: 'bi-house-fill', title: 'Home Broadband', desc: 'Internet rumah super cepat hingga 1 Gbps dengan harga terjangkau dan koneksi stabil.' },
  { icon: 'bi-building-fill', title: 'Business Internet', desc: 'Solusi internet bisnis dengan SLA terjamin, IP Publik, dan dukungan teknis prioritas.' },
  { icon: 'bi-router-fill', title: 'WiFi Hotspot', desc: 'Sistem manajemen hotspot untuk kafe, hotel, dan area publik dengan dashboard lengkap.' },
  { icon: 'bi-hdd-network-fill', title: 'Dedicated Internet', desc: 'Bandwidth dedicated simetris untuk kebutuhan data center dan enterprise.' },
  { icon: 'bi-camera-video-fill', title: 'Cloud CCTV', desc: 'Rekam dan pantau CCTV dari mana saja melalui cloud dengan penyimpanan aman.' },
];

const stats = [
  { number: '50.000+', label: 'Pelanggan Aktif', icon: 'bi-people-fill' },
  { number: '1 Gbps', label: 'Kecepatan Maks', icon: 'bi-speedometer2' },
  { number: '99.9%', label: 'Uptime SLA', icon: 'bi-shield-fill-check' },
  { number: '24/7', label: 'Dukungan Teknis', icon: 'bi-headset' },
];

const whyUs = [
  { icon: 'bi-lightning-charge-fill', title: 'Super Cepat', desc: 'Fiber optic terdepan dengan kecepatan hingga 1 Gbps untuk streaming, gaming, dan kerja.' },
  { icon: 'bi-geo-alt-fill', title: 'Jangkauan Luas', desc: 'Jaringan kami mencakup ratusan kota di seluruh Indonesia dan terus berkembang.' },
  { icon: 'bi-shield-lock-fill', title: 'Aman & Andal', desc: 'Enkripsi data dan proteksi jaringan berlapis untuk keamanan aktivitas online Anda.' },
  { icon: 'bi-currency-dollar', title: 'Harga Terjangkau', desc: 'Paket mulai dari Rp 99.000/bulan tanpa biaya tersembunyi dan kontrak mengikat.' },
];



const testimonials = [
  {
    name: 'Budi Kurniawan',
    role: 'Pelanggan Home Broadband (Jakarta)',
    rating: 5,
    comment: 'Pindah ke MITRAXCON 1 tahun lalu dan sama sekali tidak pernah kejar-kejaran latensi pas main game atau WFH. Support teknis di WhatsApp juga langsung merespons!',
    avatar: 'bi-person-fill',
  },
  {
    name: 'Siska Febriani',
    role: 'Owner Cafe Kopi & Resto (Bandung)',
    rating: 5,
    comment: 'Layanan WiFi Hotspot dari MITRAXCON sangat stabil walau diakses 50+ pengunjung kafe secara bersamaan. Portal login-nya juga keren ada branding logo toko kami.',
    avatar: 'bi-person-fill',
  },
  {
    name: 'Rahmat Hidayat',
    role: 'IT Manager PT Synergy Indonesia',
    rating: 5,
    comment: 'Memakai Dedicated Internet MITRAXCON untuk kantor cabang. SLA 99.9% bukan cuma janji, uptime beneran stabil dan ada laporan bulanan dari tim NOC.',
    avatar: 'bi-person-fill',
  },
];



// Typewriter effect dengan animasi ketik maju dan hapus mundur + animated cursor
const HeroTypewriter = ({
  prefix = '',
  highlight = '',
  suffix = '',
  speed = 50,
  deleteSpeed = 30,
  pauseDelay = 1500,
}) => {
  const fullText = `${prefix}${highlight}${suffix}`;
  const [charCount, setCharCount] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Reset saat slide berpindah
  useEffect(() => {
    setCharCount(0);
    setIsDeleting(false);
  }, [prefix, highlight, suffix]);

  useEffect(() => {
    let timer;

    if (!isDeleting) {
      // Animasi mengetik maju
      if (charCount < fullText.length) {
        timer = setTimeout(() => {
          setCharCount((prev) => prev + 1);
        }, speed);
      } else {
        // Selesai mengetik: jeda sejenak lalu mulai animasi hapus
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDelay);
      }
    } else {
      // Animasi hapus (mundur)
      if (charCount > 0) {
        timer = setTimeout(() => {
          setCharCount((prev) => prev - 1);
        }, deleteSpeed);
      } else {
        // Selesai menghapus: jeda sejenak lalu ketik ulang
        setIsDeleting(false);
        timer = setTimeout(() => {}, 300);
      }
    }

    return () => clearTimeout(timer);
  }, [charCount, isDeleting, fullText.length, speed, deleteSpeed, pauseDelay]);

  const prefixLen = prefix.length;
  const highlightLen = highlight.length;

  const currentPrefix = fullText.slice(0, Math.min(charCount, prefixLen));
  const currentHighlight = charCount > prefixLen
    ? fullText.slice(prefixLen, Math.min(charCount, prefixLen + highlightLen))
    : '';
  const currentSuffix = charCount > prefixLen + highlightLen
    ? fullText.slice(prefixLen + highlightLen, charCount)
    : '';

  return (
    <span className="typewriter-headline">
      <span>{currentPrefix}</span>
      {currentHighlight && (
        <span className="highlight-text">{currentHighlight}</span>
      )}
      <span>{currentSuffix}</span>
      <span className="typewriter-cursor cursor-line anim-pulse" aria-hidden="true"></span>
    </span>
  );
};

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchLocation, setSearchLocation] = useState('');
  const [coverageResult, setCoverageResult] = useState(null);

  // Auto-play slider every 5.7 seconds (resets timer upon manual change)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5700);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleCoverageSearch = (e) => {
    e.preventDefault();
    if (!searchLocation.trim()) return;
    setCoverageResult('checking');
    setTimeout(() => {
      setCoverageResult('available');
    }, 800);
  };

  return (
    <div className="home">
      {/* ===== HERO SLIDER ===== */}
      <section className="hero">
        {/* Dynamic slide background images with crossfade */}
        <div className="hero-bg-slider" aria-hidden="true">
          {slides.map((slide, index) => (
            <div
              key={`bg-${slide.id}`}
              className={`hero-bg-slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${slide.bgImage})` }}
            />
          ))}
          <div className="hero-bg-overlay" />
        </div>

        <div className="hero-bg-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>

        {/* Slide navigation arrows */}
        <button
          className="slider-arrow arrow-left"
          onClick={prevSlide}
          aria-label="Slide sebelumnya"
        >
          <i className="bi bi-chevron-left"></i>
        </button>
        <button
          className="slider-arrow arrow-right"
          onClick={nextSlide}
          aria-label="Slide berikutnya"
        >
          <i className="bi bi-chevron-right"></i>
        </button>

        <div className="container">
          <div className="hero-slider-wrapper">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`hero-content slide-item ${index === currentSlide ? 'active' : ''}`}
              >
                <div className="hero-text">
                  <div className="hero-badge">
                    <i className={`bi ${slide.badgeIcon}`}></i> {slide.badge}
                  </div>
                  <h1 className="hero-title">
                    {index === currentSlide ? (
                      <HeroTypewriter
                        prefix={slide.titlePrefix}
                        highlight={slide.highlight}
                        suffix={slide.titleSuffix}
                      />
                    ) : (
                      <>
                        {slide.titlePrefix}
                        <span className="highlight-text">{slide.highlight}</span>
                        {slide.titleSuffix}
                      </>
                    )}
                  </h1>
                  <p className="hero-subtitle">
                    {slide.subtitle}
                  </p>
                  <div className="hero-actions">
                    <Link to={slide.primaryBtnLink} className="btn btn-accent">
                      <i className={`bi ${slide.primaryBtnIcon}`}></i> {slide.primaryBtnText}
                    </Link>
                    <Link to={slide.secondaryBtnLink} className="btn btn-outline">
                      <i className={`bi ${slide.secondaryBtnIcon}`}></i> {slide.secondaryBtnText}
                    </Link>
                  </div>
                  <div className="hero-trust">
                    <span><i className="bi bi-check-circle-fill"></i> Tanpa Kontrak</span>
                    <span><i className="bi bi-check-circle-fill"></i> Instalasi Gratis</span>
                    <span><i className="bi bi-check-circle-fill"></i> Support 24/7</span>
                  </div>
                </div>

                <div className="hero-visual">
                  {slide.visualType === 'speedometer' && (
                    <div className="hero-card">
                      <div className="speed-ring">
                        <div className="speed-inner">
                          <span className="speed-number">1</span>
                          <span className="speed-unit">Gbps</span>
                          <span className="speed-label">Kecepatan Maks</span>
                        </div>
                      </div>
                      <div className="hero-stats-mini">
                        <div className="mini-stat">
                          <i className="bi bi-arrow-up-circle-fill"></i>
                          <div>
                            <span className="mini-val">500 Mbps</span>
                            <span className="mini-key">Upload</span>
                          </div>
                        </div>
                        <div className="mini-stat">
                          <i className="bi bi-arrow-down-circle-fill"></i>
                          <div>
                            <span className="mini-val">1000 Mbps</span>
                            <span className="mini-key">Download</span>
                          </div>
                        </div>
                        <div className="mini-stat">
                          <i className="bi bi-activity"></i>
                          <div>
                            <span className="mini-val">{'<'}5 ms</span>
                            <span className="mini-key">Latency</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {slide.visualType === 'promo' && (
                    <div className="hero-card promo-card">
                      <div className="promo-badge-large">PROMO HEBOH</div>
                      <div className="promo-discount-number">50%</div>
                      <div className="promo-discount-text">OFF 3 BULAN PERTAMA</div>
                      <div className="promo-features-list">
                        <div className="promo-feature-item">
                          <i className="bi bi-patch-check-fill"></i> Gratis Biaya Pasang
                        </div>
                        <div className="promo-feature-item">
                          <i className="bi bi-patch-check-fill"></i> Gratis Router Dual Band
                        </div>
                        <div className="promo-feature-item">
                          <i className="bi bi-patch-check-fill"></i> Kuota Unlimited No FUP
                        </div>
                      </div>
                    </div>
                  )}

                  {slide.visualType === 'corporate' && (
                    <div className="hero-card corporate-card">
                      <div className="corp-header">
                        <i className="bi bi-shield-lock-fill corp-icon"></i>
                        <div>
                          <h3>Dedicated Bandwidth</h3>
                          <span className="corp-sub">1:1 Ratio Guaranteed</span>
                        </div>
                      </div>
                      <div className="corp-sla-box">
                        <span className="sla-num">99.9%</span>
                        <span className="sla-text">Jaminan Uptime SLA</span>
                      </div>
                      <div className="hero-stats-mini">
                        <div className="mini-stat">
                          <i className="bi bi-hdd-network-fill"></i>
                          <div>
                            <span className="mini-val">IP Publik Statis</span>
                            <span className="mini-key">Termasuk</span>
                          </div>
                        </div>
                        <div className="mini-stat">
                          <i className="bi bi-headset"></i>
                          <div>
                            <span className="mini-val">Priority NOC 24/7</span>
                            <span className="mini-key">Response {'<'} 15 menit</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="slider-dots">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Ke slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===== CEK JANGKAUAN AREA ===== */}
      <section className="coverage-checker-section">
        <div className="container">
          <div className="checker-box">
            <div className="checker-text">
              <i className="bi bi-geo-alt-fill checker-icon"></i>
              <div>
                <h3>Cek Jangkauan Fiber MITRAXCON di Area Anda</h3>
                <p>Masukkan nama kota, kecamatan, atau kelurahan Anda</p>
              </div>
            </div>
            <form className="checker-form" onSubmit={handleCoverageSearch}>
              <div className="checker-input-group">
                <i className="bi bi-search"></i>
                <input
                  type="text"
                  placeholder="Contoh: Kebayoran Baru, Jakarta Selatan"
                  value={searchLocation}
                  onChange={(e) => {
                    setSearchLocation(e.target.value);
                    setCoverageResult(null);
                  }}
                  required
                />
              </div>
              <button type="submit" className="btn btn-accent">
                {coverageResult === 'checking' ? 'Memeriksa...' : 'Cek Area'}
              </button>
            </form>
          </div>

          {coverageResult === 'available' && (
            <div className="coverage-alert success">
              <i className="bi bi-check-circle-fill"></i>
              <div>
                <strong>Selamat! Jaringan Fiber MITRAXCON sudah tersedia di lokasi "{searchLocation}".</strong>
                <p>Silakan hubungi tim kami untuk jadwal pemasangan gratis hari ini.</p>
              </div>
              <Link to="/contact" className="btn btn-primary" style={{ marginLeft: 'auto' }}>
                Pasang Sekarang
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* ===== INFRASTRUKTUR TEKNOLOGI MARQUEE SECTION ===== */}
      <TechMarquee />

      {/* ===== STATS ===== */}
      <section className="stats-bar">
        <div className="container">
          <div className="stats-grid">
            {stats.map((s, i) => (
              <div className={`stat-item stat-item-${i}`} key={i}>
                <div className="stat-icon"><i className={`bi ${s.icon}`}></i></div>
                <div className="stat-info">
                  <div className="stat-number-wrapper">
                    <span className="stat-number">{s.number}</span>
                    {s.number === '99.9%' && (
                      <span className="stat-live-badge" title="SLA Uptime Terverifikasi">
                        <span className="live-dot"></span>
                      </span>
                    )}
                  </div>
                  <div className="stat-label">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== LAYANAN ===== */}
      <section className="services-preview">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Layanan Kami</span>
            <h2 className="section-title">Solusi Internet Lengkap</h2>
            <p className="section-subtitle">
              Dari rumah hingga perusahaan, kami menyediakan solusi konektivitas yang tepat untuk setiap kebutuhan Anda.
            </p>
          </div>
          <div className="services-grid-home">
            {services.map((s, i) => (
              <div className="service-card-home" key={i}>
                <div className="service-card-icon">
                  <i className={`bi ${s.icon}`}></i>
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <Link to="/services" className="service-link">
                  Selengkapnya <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            ))}
          </div>
          <div className="services-cta">
            <Link to="/services" className="btn btn-primary">
              <i className="bi bi-grid"></i> Lihat Semua Layanan
            </Link>
          </div>
        </div>
      </section>

      {/* ===== MITRA & KLIEN STRATEGIS SLIDER ===== */}
      <PartnerSlider />

      {/* ===== KENAPA MITRAXCON ===== */}
      <section className="why-us">
        <div className="container">
          <div className="why-us-inner">
            <div className="why-us-left">
              <span className="section-tag">Keunggulan Kami</span>
              <h2 className="section-title" style={{ textAlign: 'left', maxWidth: '420px' }}>
                Kenapa Memilih MITRAXCON?
              </h2>
              <p className="section-subtitle" style={{ textAlign: 'left', margin: '0' }}>
                Kami berkomitmen memberikan pengalaman internet terbaik dengan teknologi fiber optic terkini dan dukungan penuh.
              </p>
              <Link to="/about" className="btn btn-primary" style={{ marginTop: '2rem' }}>
                <i className="bi bi-info-circle"></i> Profil Perusahaan
              </Link>
            </div>
            <div className="why-us-right">
              {whyUs.map((item, i) => (
                <div className="why-card" key={i}>
                  <div className="why-icon">
                    <i className={`bi ${item.icon}`}></i>
                  </div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIAL ===== */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Testimoni Pelanggan</span>
            <h2 className="section-title">Apa Kata Mereka Tentang MITRAXCON?</h2>
            <p className="section-subtitle">Pengalaman nyata dari pelanggan rumah tangga hingga tim IT korporasi.</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div className="testimonial-card" key={i}>
                <div className="testi-stars">
                  {[...Array(t.rating)].map((_, r) => (
                    <i key={r} className="bi bi-star-fill"></i>
                  ))}
                </div>
                <p className="testi-comment">"{t.comment}"</p>
                <div className="testi-user">
                  <div className="testi-avatar">
                    <i className={`bi ${t.avatar}`}></i>
                  </div>
                  <div>
                    <h4>{t.name}</h4>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== LATEST BLOG ARTICLES ===== */}
      <section className="home-blog-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Wawasan &amp; Edukasi</span>
            <h2 className="section-title">Artikel &amp; Berita Terbaru</h2>
            <p className="section-subtitle">Pelajari tips internet, teknologi fiber optic, dan kabar terkini dari MITRAXCON.</p>
          </div>
          <div className="blog-posts-grid">
            {blogPosts.slice(0, 3).map((post) => (
              <article className="blog-card" key={post.id}>
                <Link to={`/blog/${post.slug}`} className="blog-card-img-link">
                  <div className="blog-card-img-wrapper">
                    <img src={post.image} alt={post.title} className="blog-card-img" />
                    <span className="blog-card-category">{post.category}</span>
                  </div>
                </Link>
                <div className="blog-card-content">
                  <div className="blog-card-meta">
                    <span><i className="bi bi-calendar3"></i> {post.date}</span>
                    <span className="meta-sep">•</span>
                    <span><i className="bi bi-clock"></i> {post.readTime}</span>
                  </div>
                  <h3 className="blog-card-title">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="blog-card-excerpt">{post.excerpt}</p>
                  <div className="blog-card-footer">
                    <div className="card-author">
                      <i className={`bi ${post.author.avatar}`}></i>
                      <span>{post.author.name}</span>
                    </div>
                    <Link to={`/blog/${post.slug}`} className="card-arrow-link" aria-label={`Baca ${post.title}`}>
                      <i className="bi bi-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/blog" className="btn btn-outline-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              <span>Lihat Semua Artikel Blog</span>
              <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="cta-banner">
        <div className="container">
          <div className="cta-content">
            <div className="cta-text">
              <h2>Siap Merasakan Internet Tanpa Batas?</h2>
              <p>Daftar sekarang dan dapatkan instalasi gratis + 1 bulan bonus untuk pelanggan baru.</p>
            </div>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-accent">
                <i className="bi bi-rocket-takeoff-fill"></i> Daftar Sekarang
              </Link>
              <Link to="/services" className="btn btn-outline">
                <i className="bi bi-list-ul"></i> Cek Paket
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

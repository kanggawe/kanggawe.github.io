import { useState } from 'react';
import './Contact.css';

const contactInfo = [
  { icon: 'bi-geo-alt-fill', title: 'Alamat Kami', lines: ['Jl. Teknologi No. 88', 'Jakarta Selatan, 12345'] },
  { icon: 'bi-envelope-fill', title: 'Email', lines: ['info@esanet.id', 'support@esanet.id'] },
  { icon: 'bi-telephone-fill', title: 'Telepon', lines: ['0800-1234-5678 (Gratis)', '(021) 1234-5678'] },
  { icon: 'bi-clock-fill', title: 'Jam Operasional', lines: ['Senin - Jumat: 08.00 - 20.00', 'Sabtu: 09.00 - 17.00'] },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'home-broadband',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(res => setTimeout(res, 900));
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: 'home-broadband', message: '' });
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <div className="contact-page">

      {/* ===== HERO ===== */}
      <section className="contact-hero">
        <div className="ch-shapes">
          <div className="ch-shape ch-s1"></div>
          <div className="ch-shape ch-s2"></div>
        </div>
        <div className="container">
          <div className="contact-hero-content">
            <span className="section-tag" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff' }}>Hubungi Kami</span>
            <h1>Siap Membantu <span style={{ color: 'var(--accent)' }}>Anda</span></h1>
            <p>Tim kami siap menjawab pertanyaan dan membantu Anda mendapatkan layanan internet terbaik dari ESANET.</p>
          </div>
        </div>
      </section>

      {/* ===== MAIN CONTACT ===== */}
      <section className="contact-main">
        <div className="container">
          <div className="contact-grid">

            {/* ===== FORM ===== */}
            <div className="contact-form-wrapper">
              <div className="cf-header">
                <h2>Kirim Pesan</h2>
                <p>Isi formulir di bawah dan kami akan menghubungi Anda sesegera mungkin.</p>
              </div>

              {submitted && (
                <div className="success-banner" role="alert">
                  <i className="bi bi-check-circle-fill"></i>
                  <div>
                    <strong>Pesan terkirim!</strong>
                    <p>Terima kasih, {formData.name || 'Anda'}. Tim kami akan menghubungi Anda dalam 1x24 jam.</p>
                  </div>
                </div>
              )}

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">
                      <i className="bi bi-person-fill"></i> Nama Lengkap
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Nama lengkap Anda"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">
                      <i className="bi bi-telephone-fill"></i> Nomor HP
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="08xx-xxxx-xxxx"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    <i className="bi bi-envelope-fill"></i> Alamat Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="email@contoh.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">
                    <i className="bi bi-chat-dots-fill"></i> Topik Pertanyaan
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  >
                    <option value="home-broadband">Home Broadband</option>
                    <option value="business-internet">Business Internet</option>
                    <option value="wifi-hotspot">WiFi Hotspot</option>
                    <option value="dedicated-internet">Dedicated Internet</option>
                    <option value="cloud-cctv">Cloud CCTV</option>
                    <option value="gangguan">Gangguan / Keluhan</option>
                    <option value="lainnya">Lainnya</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">
                    <i className="bi bi-pencil-fill"></i> Pesan Anda
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Ceritakan kebutuhan internet Anda atau pertanyaan yang ingin diajukan..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <><i className="bi bi-hourglass-split spin"></i> Mengirim...</>
                  ) : (
                    <><i className="bi bi-send-fill"></i> Kirim Pesan</>
                  )}
                </button>
              </form>
            </div>

            {/* ===== INFO PANEL ===== */}
            <div className="contact-info-panel">
              <div className="cip-header">
                <h2>Informasi Kontak</h2>
                <p>Atau hubungi kami langsung melalui saluran berikut.</p>
              </div>

              <div className="contact-info-cards">
                {contactInfo.map((info, i) => (
                  <div className="contact-info-card" key={i}>
                    <div className="cic-icon">
                      <i className={`bi ${info.icon}`}></i>
                    </div>
                    <div>
                      <h4>{info.title}</h4>
                      {info.lines.map((line, j) => (
                        <p key={j}>{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Hotline box */}
              <div className="hotline-box">
                <div className="hotline-icon"><i className="bi bi-headset"></i></div>
                <div>
                  <h3>Dukungan Teknis 24/7</h3>
                  <p>Hubungi hotline kami kapan saja untuk bantuan teknis segera.</p>
                  <a href="tel:1500123" className="hotline-number">
                    <i className="bi bi-telephone-fill"></i> 1500-123
                  </a>
                </div>
              </div>

              {/* Social Media */}
              <div className="contact-socials">
                <p className="social-title">Ikuti kami di media sosial</p>
                <div className="social-row">
                  <a href="#" aria-label="Facebook" className="social-btn fb">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="#" aria-label="Instagram" className="social-btn ig">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="#" aria-label="Twitter" className="social-btn x">
                    <i className="bi bi-twitter-x"></i>
                  </a>
                  <a href="#" aria-label="YouTube" className="social-btn yt">
                    <i className="bi bi-youtube"></i>
                  </a>
                  <a href="#" aria-label="WhatsApp" className="social-btn wa">
                    <i className="bi bi-whatsapp"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;

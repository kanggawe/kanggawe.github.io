import React from "react";
import "../assets/css/Contact.css";

function Contact() {
  const contactMethods = [
    {
      id: 1,
      name: 'WhatsApp',
      description: 'Hubungi kami via WhatsApp untuk konsultasi cepat',
      icon: 'bi bi-whatsapp',
      link: 'https://wa.me/6282260601982?text=Hallo, saya ingin berkonsultasi',
      color: 'primary',
      response: 'Respon dalam 5 menit'
    },
    {
      id: 2,
      name: 'Email',
      description: 'Kirim email ke tim support kami',
      icon: 'bi bi-envelope',
      link: 'mailto:info@mitracom-isp.com',
      color: 'secondary',
      response: 'Respon dalam 24 jam'
    },
    {
      id: 3,
      name: 'Telepon',
      description: 'Hubungi langsung via telepon',
      icon: 'bi bi-telephone',
      link: 'tel:+6282260601982',
      color: 'accent',
      response: 'Respon langsung'
    },
    {
      id: 4,
      name: 'Live Chat',
      description: 'Chat langsung dengan tim support',
      icon: 'bi bi-chat-dots',
      link: '#',
      color: 'primary',
      response: 'Respon real-time'
    }
  ];

  const contactInfo = [
    {
      id: 1,
      title: 'Alamat',
      value: 'Jakarta, Indonesia',
      icon: 'bi bi-geo-alt',
      color: 'primary'
    },
    {
      id: 2,
      title: 'Jam Kerja',
      value: 'Senin - Jumat: 09:00 - 18:00',
      icon: 'bi bi-clock',
      color: 'secondary'
    },
    {
      id: 3,
      title: 'Telepon',
      value: '+62 822 6060 1982',
      icon: 'bi bi-phone',
      color: 'accent'
    },
    {
      id: 4,
      title: 'Email',
      value: 'info@mitracom-isp.com',
      icon: 'bi bi-envelope',
      color: 'primary'
    },
    {
      id: 5,
      title: 'WhatsApp',
      value: '+62 822 6060 1982',
      icon: 'bi bi-whatsapp',
      color: 'secondary'
    },
    {
      id: 6,
      title: 'Support 24/7',
      value: 'Untuk layanan darurat',
      icon: 'bi bi-headset',
      color: 'accent'
    }
  ];

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

  return (
    <section className="contact-section">
      <div className="container">
        {/* Header Section */}
        <div className="contact-header">
          <h2 className="contact-title">Hubungi Kami</h2>
          <p className="contact-subtitle">PILIH METODE KONTAK YANG TEPAT</p>
        </div>
        
        {/* Contact Methods Section */}
        <div className="row g-4 mb-5">
          {contactMethods.map((method) => (
            <div key={method.id} className="col-lg-3 col-md-6">
              <div className={`contact-method-card ${method.color}`}>
                <div className="contact-method-icon">
                  <Icon iconClass={method.icon} size="fs-1" />
                </div>
                
                <h4 className="contact-method-name">{method.name}</h4>
                <p className="contact-method-description">{method.description}</p>
                
                <div className="contact-method-response">
                  {method.response}
                </div>
                
                <a 
                  href={method.link}
                  className="contact-method-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon iconClass={method.icon} size="fs-6" />
                  <span className="ms-2">Hubungi Sekarang</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form Section */}
        <div className="row mb-5">
          <div className="col-12">
            <div className="contact-form-card">
              <h4 className="contact-form-title">Kirim Pesan</h4>
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <input 
                      type="text" 
                      className="form-control contact-form-control" 
                      placeholder="Nama Lengkap"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input 
                      type="email" 
                      className="form-control contact-form-control" 
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="col-12">
                    <input 
                      type="text" 
                      className="form-control contact-form-control" 
                      placeholder="Subjek"
                      required
                    />
                  </div>
                  <div className="col-12">
                    <textarea 
                      className="form-control contact-form-control contact-textarea" 
                      rows="5" 
                      placeholder="Pesan Anda"
                      required
                    ></textarea>
                  </div>
                  <div className="col-12 text-center">
                    <button 
                      type="submit" 
                      className="contact-submit-btn"
                    >
                      <Icon iconClass="bi bi-send" size="fs-6" />
                      <span className="ms-2">Kirim Pesan</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="row mb-5">
          <div className="col-12">
            <div className="contact-info-card">
              <h4 className="contact-info-title">Informasi Kontak</h4>
              <div className="row g-3">
                {contactInfo.map((info) => (
                  <div key={info.id} className="col-md-6 col-lg-4">
                    <div className="contact-info-item">
                      <div className={`contact-info-icon ${info.color}`}>
                        <Icon iconClass={info.icon} />
                      </div>
                      <div className="contact-info-content">
                        <h6>{info.title}</h6>
                        <small>{info.value}</small>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps Section */}
        <div className="row">
          <div className="col-12">
            <div className="contact-map-card">
              <h4 className="contact-map-title">Lokasi Kami</h4>
              <div className="map-responsive">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d198317.998403377!2d106.68942835110445!3d-6.229386697615586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e8a679f3b7%3A0x301e8f1fc28bf70!2sJakarta!5e0!3m2!1sen!2sid!4v1602095955400!5m2!1sen!2sid"
                  width="100%"
                  height="400"
                  frameBorder="0"
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                  title="Google Maps - Lokasi ESANET"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact; 
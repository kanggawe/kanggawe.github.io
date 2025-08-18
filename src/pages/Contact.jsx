import React from "react";
// import "../assets/css/priceList.css";

function Contact() {
  const contactMethods = [
    {
      id: 1,
      name: 'WhatsApp',
      description: 'Hubungi kami via WhatsApp',
      icon: 'bi bi-whatsapp',
      link: 'https://wa.me/6282260601982?text=Hallo, saya ingin berkonsultasi',
      color: 'primary',
      response: 'Respon dalam 5 menit'
    },
    {
      id: 2,
      name: 'Email',
      description: 'Kirim email ke tim kami',
      icon: 'bi bi-envelope',
      link: 'mailto:info@kanggawe.com',
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
    <section id="contact" className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title" style={{ color: 'var(--text-primary)' }}>Hubungi Kami</h2>
          <p className="section-subtitle" style={{ color: 'var(--text-secondary)' }}>PILIH METODE KONTAK YANG TEPAT</p>
        </div>
        
        <div className="row g-4">
          {contactMethods.map((method) => (
            <div key={method.id} className="col-lg-3 col-md-6">
              <div className={getColorClass(method.color)}>
                <div className="package-icon">
                  <Icon iconClass={method.icon} size="fs-1" />
                </div>
                
                <h4 className="h5 fw-semibold mb-2">{method.name}</h4>
                <p className="mb-3 text-white-75">{method.description}</p>
                
                <div className="mb-4">
                  <p className="mb-3 fw-medium">{method.response}</p>
                </div>
                
                <a 
                  href={method.link}
                  className="btn btn-light text-primary-custom fw-semibold w-100 rounded-pill"
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
        <div className="row mt-5">
          <div className="col-12">
            <div className="card card-custom p-4 rounded-4 shadow">
              <h4 className="text-primary-custom text-center mb-4">Kirim Pesan</h4>
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="Nama Lengkap"
                      style={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }}
                    />
                  </div>
                  <div className="col-md-6">
                    <input 
                      type="email" 
                      className="form-control" 
                      placeholder="Email"
                      style={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }}
                    />
                  </div>
                  <div className="col-12">
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="Subjek"
                      style={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }}
                    />
                  </div>
                  <div className="col-12">
                    <textarea 
                      className="form-control" 
                      rows="5" 
                      placeholder="Pesan Anda"
                      style={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }}
                    ></textarea>
                  </div>
                  <div className="col-12 text-center">
                    <button 
                      type="submit" 
                      className="btn btn-primary-custom fw-semibold px-4 py-2"
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
        <div className="row mt-5">
          <div className="col-12">
            <div className="card card-custom p-4 rounded-4 shadow">
              <h4 className="text-primary-custom text-center mb-4">Informasi Kontak</h4>
              <div className="row g-3">
                <div className="col-md-6 col-lg-4">
                  <div className="d-flex align-items-center">
                    <div className="bg-primary-custom text-white rounded-circle p-2 me-3">
                      <Icon iconClass="bi bi-geo-alt" />
                    </div>
                    <div>
                      <h6 className="mb-1 fw-semibold" style={{ color: 'var(--text-primary)' }}>Alamat</h6>
                      <small style={{ color: 'var(--text-secondary)' }}>Jakarta, Indonesia</small>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="d-flex align-items-center">
                    <div className="bg-secondary-custom text-dark rounded-circle p-2 me-3">
                      <Icon iconClass="bi bi-clock" />
                    </div>
                    <div>
                      <h6 className="mb-1 fw-semibold" style={{ color: 'var(--text-primary)' }}>Jam Kerja</h6>
                      <small style={{ color: 'var(--text-secondary)' }}>Senin - Jumat: 09:00 - 18:00</small>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="d-flex align-items-center">
                    <div className="bg-accent-custom text-white rounded-circle p-2 me-3">
                      <Icon iconClass="bi bi-phone" />
                    </div>
                    <div>
                      <h6 className="mb-1 fw-semibold" style={{ color: 'var(--text-primary)' }}>Telepon</h6>
                      <small style={{ color: 'var(--text-secondary)' }}>+62 822 6060 1982</small>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="d-flex align-items-center">
                    <div className="bg-primary-custom text-white rounded-circle p-2 me-3">
                      <Icon iconClass="bi bi-envelope" />
                    </div>
                    <div>
                      <h6 className="mb-1 fw-semibold" style={{ color: 'var(--text-primary)' }}>Email</h6>
                      <small style={{ color: 'var(--text-secondary)' }}>info@kanggawe.com</small>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="d-flex align-items-center">
                    <div className="bg-secondary-custom text-dark rounded-circle p-2 me-3">
                      <Icon iconClass="bi bi-whatsapp" />
                    </div>
                    <div>
                      <h6 className="mb-1 fw-semibold" style={{ color: 'var(--text-primary)' }}>WhatsApp</h6>
                      <small style={{ color: 'var(--text-secondary)' }}>+62 822 6060 1982</small>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="d-flex align-items-center">
                    <div className="bg-accent-custom text-white rounded-circle p-2 me-3">
                      <Icon iconClass="bi bi-headset" />
                    </div>
                    <div>
                      <h6 className="mb-1 fw-semibold" style={{ color: 'var(--text-primary)' }}>Support 24/7</h6>
                      <small style={{ color: 'var(--text-secondary)' }}>Untuk layanan darurat</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps Section */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="card card-custom p-4 rounded-4 shadow">
              <h4 className="text-primary-custom text-center mb-4">Lokasi Kami</h4>
              <div className="map-responsive">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d198317.998403377!2d106.68942835110445!3d-6.229386697615586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e8a679f3b7%3A0x301e8f1fc28bf70!2sJakarta!5e0!3m2!1sen!2sid!4v1602095955400!5m2!1sen!2sid"
                  width="100%"
                  height="400"
                  frameBorder="0"
                  style={{ border: 0, borderRadius: 'var(--border-radius)' }}
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                  title="Google Maps"
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
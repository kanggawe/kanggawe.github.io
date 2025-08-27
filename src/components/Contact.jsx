import React from 'react';

const Contact = () => {
  const contactInfo = [
    {
      icon: "bi bi-geo-alt-fill",
      title: "Alamat",
      content: "Jl. Raya Indramayu - Cirebon No. 123, Indramayu, Jawa Barat",
      color: "primary"
    },
    {
      icon: "bi bi-telephone-fill",
      title: "Telepon",
      content: "+62 822-6060-1982",
      link: "tel:+6282260601982",
      color: "secondary"
    },
    {
      icon: "bi bi-envelope-fill",
      title: "Email",
      content: "info@mitracom-isp.com",
      link: "mailto:info@mitracom-isp.com",
      color: "accent"
    },
    {
      icon: "bi bi-clock-fill",
      title: "Jam Operasional",
      content: "Senin - Minggu: 08:00 - 22:00 WIB",
      color: "primary"
    }
  ];

  const getColorClass = (color) => {
    switch (color) {
      case 'primary':
        return 'text-primary-custom';
      case 'secondary':
        return 'text-secondary-custom';
      case 'accent':
        return 'text-accent-custom';
      default:
        return 'text-primary-custom';
    }
  };

  const getBgClass = (color) => {
    switch (color) {
      case 'primary':
        return 'bg-primary-custom';
      case 'secondary':
        return 'bg-secondary-custom';
      case 'accent':
        return 'bg-accent-custom';
      default:
        return 'bg-primary-custom';
    }
  };

  return (
    <section id="contact" className="section-padding bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-title">Hubungi Kami</h2>
            <p className="section-subtitle">
              Siap melayani kebutuhan internet Anda dengan profesional dan ramah
            </p>
          </div>
        </div>

        <div className="row g-4 mb-5">
          {contactInfo.map((info, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              <div className="card card-custom h-100 text-center">
                <div className="card-body p-4">
                  <div className={`${getBgClass(info.color)} text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3`}
                       style={{ width: '60px', height: '60px' }}>
                    <i className={`${info.icon} fs-4`}></i>
                  </div>
                  <h5 className={`card-title ${getColorClass(info.color)} mb-3`}>
                    {info.title}
                  </h5>
                  {info.link ? (
                    <a href={info.link} className="text-decoration-none text-muted">
                      {info.content}
                    </a>
                  ) : (
                    <p className="card-text text-muted mb-0">
                      {info.content}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="card card-custom">
              <div className="card-body p-5">
                <h4 className="text-center text-primary-custom mb-4">Kirim Pesan</h4>
                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Nama Lengkap"
                        />
                        <label htmlFor="name">Nama Lengkap</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Email"
                        />
                        <label htmlFor="email">Email</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="tel"
                          className="form-control"
                          id="phone"
                          placeholder="Nomor Telepon"
                        />
                        <label htmlFor="phone">Nomor Telepon</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <select className="form-select" id="service">
                          <option value="">Pilih Layanan</option>
                          <option value="classic">Classic - 5 Mbps</option>
                          <option value="bronze">Bronze - 10 Mbps</option>
                          <option value="silver">Silver - 20 Mbps</option>
                          <option value="gold">Gold - 30 Mbps</option>
                        </select>
                        <label htmlFor="service">Layanan yang Diminati</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          id="message"
                          placeholder="Pesan"
                          style={{ height: '120px' }}
                        ></textarea>
                        <label htmlFor="message">Pesan</label>
                      </div>
                    </div>
                    <div className="col-12 text-center">
                      <button type="submit" className="btn btn-primary-custom px-5 py-3">
                        <i className="bi bi-send me-2"></i>
                        Kirim Pesan
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Contact Buttons */}
        <div className="row mt-5">
          <div className="col-12 text-center">
            <div className="bg-white p-4 rounded-4 shadow-sm">
              <h5 className="text-primary-custom mb-3">Hubungi Kami Langsung</h5>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                <a 
                  href="https://wa.me/6282260601982?text=Hallo, saya ingin bertanya tentang layanan internet Mitracom ISP"
                  className="btn btn-success rounded-pill px-4 py-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-whatsapp me-2"></i>
                  WhatsApp
                </a>
                <a 
                  href="tel:+6282260601982"
                  className="btn btn-primary-custom rounded-pill px-4 py-2"
                >
                  <i className="bi bi-telephone me-2"></i>
                  Telepon
                </a>
                <a 
                  href="mailto:info@mitracom-isp.com"
                  className="btn btn-accent-custom rounded-pill px-4 py-2"
                >
                  <i className="bi bi-envelope me-2"></i>
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 
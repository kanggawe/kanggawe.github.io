
import React from "react";

const services = [
  {
    title: "Web Design",
    desc: "Desain website profesional dan responsif sesuai kebutuhan bisnis Anda.",
    icon: "bi bi-palette",
    color: "accent"
  },
  {
    title: "Web Development",
    desc: "Pengembangan website dan aplikasi web modern, aman, dan scalable.",
    icon: "bi bi-laptop",
    color: "primary"
  },
  {
    title: "Product Management",
    desc: "Manajemen produk digital, mulai dari perencanaan hingga peluncuran.",
    icon: "bi bi-box-seam",
    color: "secondary"
  },
  {
    title: "Marketing",
    desc: "Jasa digital marketing, promosi online, dan strategi pemasaran efektif.",
    icon: "bi bi-megaphone",
    color: "accent"
  },
  {
    title: "Graphic Design",
    desc: "Desain grafis kreatif untuk branding, promosi, dan kebutuhan bisnis Anda.",
    icon: "bi bi-brush",
    color: "primary"
  },
  {
    title: "Layanan Internet",
    desc: "Paket internet cepat dan stabil untuk rumah & bisnis.",
    icon: "bi bi-wifi",
    color: "primary"
  },
  {
    title: "Service Komputer & Laptop",
    desc: "Perbaikan, upgrade, dan instalasi software/hardware.",
    icon: "bi bi-pc-display",
    color: "secondary"
  },
  {
    title: "Maintenance Jaringan",
    desc: "Perawatan dan troubleshooting jaringan LAN/WiFi.",
    icon: "bi bi-diagram-3",
    color: "accent"
  },
  {
    title: "CCTV & IPTV",
    desc: "Instalasi dan maintenance CCTV serta layanan IPTV.",
    icon: "bi bi-camera-video",
    color: "primary"
  },
  {
    title: "IT Solution & Konsultasi",
    desc: "Solusi IT, konsultasi, dan pengembangan sistem sesuai kebutuhan.",
    icon: "bi bi-lightbulb",
    color: "secondary"
  }
];

function Service() {
  return (
    <section className="section-padding" style={{ background: 'linear-gradient(120deg, #111 60%, var(--primary-color) 100%)', minHeight: '100vh' }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title" style={{ color: 'var(--primary-color)', fontWeight: 'bold', letterSpacing: '2px' }}>Layanan Kami</h2>
          <p className="section-subtitle" style={{ color: 'var(--text-secondary)', fontSize: '1.15rem' }}>Produk & Jasa Unggulan untuk kebutuhan digital Anda</p>
        </div>
        <div className="row g-4 justify-content-center">
          {services.map((srv, idx) => (
            <div key={idx} className="col-lg-4 col-md-6">
              <div className="service-card card-custom p-4 rounded-4 shadow text-center border-0"
                style={{
                  minHeight: '280px',
                  background: 'linear-gradient(135deg, #222 70%, var(--primary-color) 100%)',
                  color: '#eee',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  boxShadow: '0 8px 32px 0 rgba(31,38,135,0.18)'
                }}
                onMouseOver={e => {
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.03)';
                  e.currentTarget.style.boxShadow = '0 16px 40px 0 rgba(31,38,135,0.28)';
                }}
                onMouseOut={e => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(31,38,135,0.18)';
                }}
              >
                <div className="mb-3">
                  <i className={`${srv.icon} fs-1`} style={{ color: 'var(--primary-color)', fontSize: '3rem', textShadow: '0 2px 8px #0002' }}></i>
                </div>
                <h4 className="fw-bold mb-2" style={{ color: 'var(--primary-color)', fontSize: '1.35rem', letterSpacing: '1px' }}>{srv.title}</h4>
                <p className="mb-2" style={{ color: '#ccc', fontSize: '1.08rem' }}>{srv.desc}</p>
                <div className="mt-3">
                  <span className="badge bg-primary" style={{ fontSize: '0.95rem', padding: '0.5em 1em', background: 'var(--primary-color)', color: '#fff', borderRadius: '12px' }}>
                    {srv.title.includes('Internet') && 'Home & Business'}
                    {srv.title.includes('Komputer') && 'Hardware & Software'}
                    {srv.title.includes('Maintenance') && 'Jaringan LAN/WiFi'}
                    {srv.title.includes('CCTV') && 'Keamanan & Hiburan'}
                    {srv.title.includes('IT Solution') && 'Konsultasi & Pengembangan'}
                    {srv.title === 'Web Design' && 'Desain Modern'}
                    {srv.title === 'Web Development' && 'Aplikasi Web'}
                    {srv.title === 'Product Management' && 'Digital Product'}
                    {srv.title === 'Marketing' && 'Promosi Online'}
                    {srv.title === 'Graphic Design' && 'Branding & Promosi'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Service;
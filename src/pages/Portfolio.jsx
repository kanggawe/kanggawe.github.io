import React from 'react'

const portfolioItems = [
  { id: 1, title: 'Website Sekolah', img: 'https://via.placeholder.com/640x360?text=Website+Sekolah', category: 'Website', link: '#' },
  { id: 2, title: 'Aplikasi Kasir', img: 'https://via.placeholder.com/640x360?text=Aplikasi+Kasir', category: 'Aplikasi', link: '#' },
  { id: 3, title: 'Landing Page UMKM', img: 'https://via.placeholder.com/640x360?text=Landing+Page', category: 'Website', link: '#' },
  { id: 4, title: 'Portal Informasi', img: 'https://via.placeholder.com/640x360?text=Portal+Informasi', category: 'Website', link: '#' },
  { id: 5, title: 'Mobile App Booking', img: 'https://via.placeholder.com/640x360?text=Mobile+App', category: 'Mobile', link: '#' },
  { id: 6, title: 'Dashboard Admin', img: 'https://via.placeholder.com/640x360?text=Dashboard+Admin', category: 'Aplikasi', link: '#' }
]

function Portfolio() {
  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)', paddingTop: '70px' }}>
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-4">
            <h1 className="section-title">Portfolio</h1>
            <p className="section-subtitle">Beberapa proyek yang telah kami kerjakan</p>
          </div>

          <div className="row g-4">
            {portfolioItems.map(item => (
              <div key={item.id} className="col-lg-4 col-md-6">
                <div className="card h-100 border-0 shadow-sm">
                  <img src={item.img} className="card-img-top" alt={item.title} />
                  <div className="card-body">
                    <span className="badge bg-primary" style={{ background: 'var(--primary-color)' }}>{item.category}</span>
                    <h5 className="card-title mt-2" style={{ color: 'var(--text-primary)' }}>{item.title}</h5>
                    <p className="card-text" style={{ color: 'var(--text-secondary)' }}>Solusi modern dengan performa dan keamanan optimal.</p>
                    <a href={item.link} className="btn btn-primary-custom rounded-pill">Lihat Detail</a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-5">
            <a href="/contact" className="btn btn-accent-custom rounded-pill px-4">Diskusikan Proyek Anda</a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio



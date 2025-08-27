import React from 'react';
import './index.css';
import './fix-spacing.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <p className="small mb-0">
              © Copyright Mitracom Solusi Teknologi All Rights Reserved. 
              Designed & Developed by mitracom
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <div className="d-flex gap-3 justify-content-center justify-content-md-end">
              <a 
                href="https://www.facebook.com/mitracomindramayu" 
                className="text-white text-decoration-none"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-facebook fs-5"></i>
              </a>
              <a 
                href="https://www.instagram.com/mitracom.id/" 
                className="text-white text-decoration-none"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-instagram fs-5"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppFloat = () => {
  return (
    <a 
      href="https://wa.me/6282260601982?text=Hallo, saya ingin bertanya tentang layanan internet Mitracom ISP"
      className="btn btn-success rounded-circle position-fixed"
      style={{
        bottom: '20px',
        right: '20px',
        width: '60px',
        height: '60px',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
      }}
      target="_blank"
      rel="noopener noreferrer"
      title="Hubungi Kami via WhatsApp"
    >
      <i className="bi bi-whatsapp fs-4"></i>
    </a>
  );
};

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;

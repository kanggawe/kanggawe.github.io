import React from 'react';
import { useState, useEffect } from 'react';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Internet Cepat & Stabil",
      subtitle: "Solusi Internet Terbaik untuk Rumah dan Bisnis",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1920&h=696&fit=crop"
    },
    {
      id: 2,
      title: "Paket Internet Murah",
      subtitle: "Dari Rp 120.000/bulan - Tanpa FUP",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920&h=696&fit=crop"
    },
    {
      id: 3,
      title: "Layanan 24/7",
      subtitle: "Support Teknis dan Customer Service",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=696&fit=crop"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="hero-section">
      <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2"></button>
        </div>
        
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="hero-slide" style={{
              backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
              minHeight: '50vh'
            }}>
              <div className="container">
                <div className="row align-items-center" style={{ minHeight: '50vh' }}>
                  <div className="col-lg-6">
                    <div className="hero-content text-white">
                      <h1 className="display-6 fw-bold mb-2">
                        Internet Cepat & Stabil
                      </h1>
                      <p className="lead mb-3">
                        Nikmati koneksi internet berkecepatan tinggi dengan layanan terbaik dari Mitracom ISP Indramayu
                      </p>
                      <div className="hero-buttons">
                        <a href="#packages" className="btn btn-primary-custom me-2 mb-2">
                          Lihat Paket
                        </a>
                        <a href="#contact" className="btn btn-secondary-custom mb-2">
                          Hubungi Kami
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="carousel-item">
            <div className="hero-slide" style={{
              backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80")',
              minHeight: '50vh'
            }}>
              <div className="container">
                <div className="row align-items-center" style={{ minHeight: '50vh' }}>
                  <div className="col-lg-6">
                    <div className="hero-content text-white">
                      <h1 className="display-6 fw-bold mb-2">
                        Layanan 24/7
                      </h1>
                      <p className="lead mb-3">
                        Tim support kami siap membantu Anda kapan saja dengan layanan customer service yang ramah dan profesional
                      </p>
                      <div className="hero-buttons">
                        <a href="#contact" className="btn btn-accent-custom me-2 mb-2">
                          Hubungi Support
                        </a>
                        <a href="#about" className="btn btn-secondary-custom mb-2">
                          Pelajari Lebih Lanjut
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="carousel-item">
            <div className="hero-slide" style={{
              backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80")',
              minHeight: '50vh'
            }}>
              <div className="container">
                <div className="row align-items-center" style={{ minHeight: '50vh' }}>
                  <div className="col-lg-6">
                    <div className="hero-content text-white">
                      <h1 className="display-6 fw-bold mb-2">
                        Teknologi Terdepan
                      </h1>
                      <p className="lead mb-3">
                        Menggunakan infrastruktur fiber optic terbaru untuk memberikan pengalaman internet terbaik
                      </p>
                      <div className="hero-buttons">
                        <a href="#services" className="btn btn-primary-custom me-2 mb-2">
                          Lihat Layanan
                        </a>
                        <a href="#packages" className="btn btn-accent-custom mb-2">
                          Pilih Paket
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </section>
  );
};

export default Hero; 
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../assets/css/Slider.css'
import SliderLib from 'react-slick'
import banner1 from '../assets/img/banner-1.jpg'
import banner2 from '../assets/img/banner-2.jpg'

function Slider() {
  const slides = [
    {
      id: 1,
      image: banner1,
      title: 'Konektivitas Cepat dan Stabil',
      subtitle: 'Solusi internet andal untuk kebutuhan rumah dan bisnis Anda',
      ctaText: 'Pelajari Layanan',
      ctaLink: '/services',
    },
    {
      id: 2,
      image: banner2,
      title: 'Dukungan 24/7 Profesional',
      subtitle: 'Tim support siap membantu kapan pun Anda membutuhkan',
      ctaText: 'Hubungi Kami',
      ctaLink: '/contact',
    },
  ]

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    fade: true,
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,
    cssEase: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    beforeChange: () => {
      // Reset animations when slide changes
      const slides = document.querySelectorAll('.hero-slide__title, .hero-slide__subtitle, .hero-slide__content .btn');
      slides.forEach(slide => {
        slide.style.animation = 'none';
        slide.offsetHeight; // Trigger reflow
        slide.style.animation = null;
      });
    },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
        }
      }
    ]
  }

  return (
    <div className="hero-slider">
      <SliderLib {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="hero-slide">
            <div
              className="hero-slide__bg"
              style={{ backgroundImage: `url(${slide.image})` }}
              role="img"
              aria-label={slide.title}
            />
            <div className="hero-slide__overlay" />
            <div className="hero-slide__content container">
              <h2 className="hero-slide__title">{slide.title}</h2>
              <p className="hero-slide__subtitle">{slide.subtitle}</p>
              <a 
                href={slide.ctaLink} 
                className="btn btn-light text-primary-custom fw-semibold rounded-pill px-4 py-2 hero-cta-btn"
                style={{
                  background: 'linear-gradient(135deg, #fff 0%, #f8f9fa 100%)',
                  border: '2px solid rgba(255,255,255,0.3)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                }}
              >
                <span className="btn-text">{slide.ctaText}</span>
                <span className="btn-icon">→</span>
              </a>
            </div>
          </div>
        ))}
      </SliderLib>
    </div>
  )
}

export default Slider



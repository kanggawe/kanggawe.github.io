import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Welcome to <span className="highlight">MyApp</span>
              </h1>
              <p className="hero-subtitle">
                A modern React application built with Vite and React Router DOM v7. 
                Experience fast development and smooth navigation.
              </p>
              <div className="hero-buttons">
                <Link to="/about" className="btn btn-primary">
                  Learn More
                </Link>
                <Link to="/contact" className="btn btn-secondary">
                  Get Started
                </Link>
              </div>
            </div>
            <div className="hero-image">
              <div className="hero-placeholder">
                <div className="placeholder-icon">🚀</div>
                <p>Your App Here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose MyApp?</h2>
            <p>Built with modern technologies for the best development experience</p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Fast Development</h3>
              <p>Vite provides lightning-fast hot module replacement and build times.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🔄</div>
              <h3>Modern Routing</h3>
              <p>React Router DOM v7 with the latest features and performance improvements.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Responsive Design</h3>
              <p>Mobile-first approach with beautiful responsive layouts.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3>Clean UI</h3>
              <p>Modern and clean user interface with smooth animations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Get Started?</h2>
            <p>Explore our services and see what we can do for you.</p>
            <Link to="/services" className="btn btn-primary">
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

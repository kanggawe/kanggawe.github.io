import { useState, useEffect } from 'react';
import { serviceService } from '../services/api';
import './Services.css';

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        const response = await serviceService.getActiveServices();
        if (response.success) {
          setServices(response.data);
        }
      } catch (err) {
        setError('Failed to load services');
        console.error('Error fetching services:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return (
      <div className="services">
        <div className="container">
          <div className="loading">
            <h2>Loading services...</h2>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="services">
        <div className="container">
          <div className="error">
            <h2>Error: {error}</h2>
            <p>Please try again later.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="services">
      <div className="container">
        {/* Hero Section */}
        <section className="services-hero">
          <div className="services-hero-content">
            <h1>Our Services</h1>
            <p>Comprehensive solutions for modern web development</p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">
                <i className={service.icon || 'fas fa-cog'}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              {service.price && (
                <div className="service-price">
                  <span className="price">${service.price}</span>
                </div>
              )}
              <div className="service-status">
                <span className={`status ${service.status}`}>
                  {service.status}
                </span>
              </div>
            </div>
          ))}
        </section>

        {/* Pricing Section */}
        <section className="pricing-section">
          <h2>Pricing Plans</h2>
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Starter</h3>
              <div className="price">$99</div>
              <p>Perfect for small projects</p>
              <ul>
                <li>Basic setup</li>
                <li>Responsive design</li>
                <li>3 pages</li>
                <li>Basic SEO</li>
              </ul>
              <button className="btn btn-primary">Get Started</button>
            </div>
            
            <div className="pricing-card featured">
              <div className="featured-badge">Most Popular</div>
              <h3>Professional</h3>
              <div className="price">$299</div>
              <p>Ideal for growing businesses</p>
              <ul>
                <li>Everything in Starter</li>
                <li>Custom components</li>
                <li>10 pages</li>
                <li>Advanced SEO</li>
                <li>Performance optimization</li>
              </ul>
              <button className="btn btn-primary">Get Started</button>
            </div>
            
            <div className="pricing-card">
              <h3>Enterprise</h3>
              <div className="price">$599</div>
              <p>For large-scale applications</p>
              <ul>
                <li>Everything in Professional</li>
                <li>Custom features</li>
                <li>Unlimited pages</li>
                <li>Priority support</li>
                <li>Advanced analytics</li>
              </ul>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;

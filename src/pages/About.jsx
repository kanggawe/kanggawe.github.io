import './About.css';

const About = () => {
  return (
    <div className="about">
      <div className="container">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="about-hero-content">
            <h1>About MyApp</h1>
            <p>A modern React application showcasing the power of Vite and React Router DOM v7</p>
          </div>
        </section>

        {/* Main Content */}
        <section className="about-content">
          <div className="about-grid">
            <div className="about-text">
              <h2>Our Story</h2>
              <p>
                MyApp was created to demonstrate the capabilities of modern React development 
                tools and best practices. Built with Vite for lightning-fast development and 
                React Router DOM v7 for seamless navigation, this application serves as a 
                foundation for building scalable web applications.
              </p>
              
              <h3>Technology Stack</h3>
              <ul className="tech-list">
                <li><strong>Vite:</strong> Next-generation frontend tooling</li>
                <li><strong>React 18:</strong> Latest React features and improvements</li>
                <li><strong>React Router DOM v7:</strong> Modern routing solution</li>
                <li><strong>CSS3:</strong> Modern styling with responsive design</li>
                <li><strong>ES6+:</strong> Latest JavaScript features</li>
              </ul>

              <h3>Key Features</h3>
              <ul className="features-list">
                <li>⚡ Fast development with hot module replacement</li>
                <li>🔄 Modern routing with React Router DOM v7</li>
                <li>📱 Responsive design for all devices</li>
                <li>🎨 Clean and modern UI/UX</li>
                <li>🔧 Easy to customize and extend</li>
              </ul>
            </div>
            
            <div className="about-stats">
              <div className="stat-card">
                <div className="stat-number">100%</div>
                <div className="stat-label">Modern</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">⚡</div>
                <div className="stat-label">Fast</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">📱</div>
                <div className="stat-label">Responsive</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">🎯</div>
                <div className="stat-label">Reliable</div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="team-section">
          <h2>Development Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-avatar">👨‍💻</div>
              <h3>React Developer</h3>
              <p>Frontend specialist with expertise in modern React development</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">🎨</div>
              <h3>UI/UX Designer</h3>
              <p>Creating beautiful and intuitive user experiences</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">⚡</div>
              <h3>Performance Engineer</h3>
              <p>Optimizing for speed and efficiency</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;

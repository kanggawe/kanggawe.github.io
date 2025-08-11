import ScrollToTopButton from "./ScrollToTopBotton";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div
        className="info pt-5 pb-4"
        style={{
          backgroundColor: "#111",
          borderTop: "3px solid var(--primary-color)",
          borderBottom: "3px solid var(--primary-color)",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)"
        }}
      >
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6">
              <div className="py-5 h-100 d-flex flex-column justify-content-between">
                <h3 className="fw-bold mb-3" style={{ color: "var(--text-primary)", letterSpacing: "2px" }}>
                  <span style={{ verticalAlign: "middle", marginRight: "8px" }}>🚀</span>QuickStart
                </h3>
                <address className="footer-contact pt-3 mb-0" style={{ color: "var(--text-light)", fontSize: "1.1rem" }}>
                  <div><span style={{ marginRight: "8px" }}>🏢</span>A108 Adam Street</div>
                  <div><span style={{ marginRight: "8px" }}>🌆</span>New York, NY 535022</div>
                  <div className="mt-3">
                    <strong><span style={{ marginRight: "6px" }}>📞</span>Phone:</strong> <span>+1 5589 55488 55</span>
                  </div>
                  <div>
                    <strong><span style={{ marginRight: "6px" }}>✉️</span>Email:</strong>{" "}
                    <a
                      href="mailto:info@example.com"
                      style={{ color: "var(--primary-color)", textDecoration: "none", fontWeight: "bold" }}
                    >
                      info@example.com
                    </a>
                  </div>
                </address>
              </div>
            </div>

            <div className="col-lg-2 col-md-3">
              <div className="py-5 h-100">
                <h4 className="mb-3" style={{ color: "var(--text-primary)", letterSpacing: "1px" }}>Useful Links</h4>
                <ul className="list-unstyled mb-0">
                  {[
                    { name: "Home", icon: "🏠", link: "/" },
                    { name: "About us", icon: "👥", link: "/about" },
                    { name: "Services", icon: "🛠️", link: "/services" },
                    { name: "Terms of service", icon: "📄", link: "/terms-of-service" },
                    { name: "Privacy policy", icon: "🔒", link: "/privacy-policy" }
                  ].map((item, idx) => (
                    <li key={idx}>
                      <Link
                        to={item.link}
                        className="footer-link"
                        style={{
                          color: "var(--text-light)",
                          textDecoration: "none",
                          transition: "color 0.3s, border-bottom 0.3s",
                          borderBottom: "2px solid transparent",
                          paddingLeft: "2px"
                        }}
                        onMouseOver={e => {
                          e.target.style.color = "var(--primary-color)";
                          e.target.style.borderBottom = "2px solid var(--primary-color)";
                        }}
                        onMouseOut={e => {
                          e.target.style.color = "var(--text-light)";
                          e.target.style.borderBottom = "2px solid transparent";
                        }}
                      >
                        <span style={{ marginRight: "6px" }}>{item.icon}</span>{item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-md-3">
              <div className="py-5 h-100">
                <h4 className="mb-3" style={{ color: "var(--text-primary)", letterSpacing: "1px" }}>Our Services</h4>
                <ul className="list-unstyled mb-0">
                  {[
                    { name: "Web Design", icon: "🎨" },
                    { name: "Web Development", icon: "💻" },
                    { name: "Product Management", icon: "📦" },
                    { name: "Marketing", icon: "📢" },
                    { name: "Graphic Design", icon: "🖌️" }
                  ].map((item, idx) => (
                    <li key={idx}>
                      <span
                        className="footer-link"
                        style={{
                          color: "var(--text-light)",
                          textDecoration: "none",
                          transition: "color 0.3s, border-bottom 0.3s",
                          borderBottom: "2px solid transparent",
                          paddingLeft: "2px",
                          cursor: "default"
                        }}
                        onMouseOver={e => {
                          e.target.style.color = "var(--primary-color)";
                          e.target.style.borderBottom = "2px solid var(--primary-color)";
                        }}
                        onMouseOut={e => {
                          e.target.style.color = "var(--text-light)";
                          e.target.style.borderBottom = "2px solid transparent";
                        }}
                      >
                        <span style={{ marginRight: "6px" }}>{item.icon}</span>{item.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="py-5 h-100">
                <h4 className="mb-3" style={{ color: "var(--text-primary)", letterSpacing: "1px" }}>Subscribe to our Newsletter</h4>
                <form
                  action="#"
                  method="post"
                  className="newsletter-form d-flex"
                  style={{ gap: "10px" }}
                >
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    required
                    style={{
                      backgroundColor: "var(--bg-card)",
                      borderColor: "var(--primary-color)",
                      color: "var(--text-primary)",
                      borderRadius: "8px",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
                    }}
                  />
                  <button
                    type="submit"
                    className="btn btn-primary px-4"
                    style={{
                      background: "linear-gradient(90deg, var(--primary-color) 60%, var(--bg-dark) 100%)",
                      border: "none",
                      borderRadius: "8px",
                      fontWeight: "bold",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.12)"
                    }}
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Credit Section */}
      <footer className="footer" id="footer-credit" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <div id="credit-kiri">
            <strong>Support :</strong>
            <a
              href="http://webanakcirebon.blogspot.com"
              rel="nofollow"
              target="_blank"
              style={{ color: 'var(--text-light)' }}
            >
              {" "}
              Blog Gado Gado
            </a>{" "}
            |
            <a
              href="http://indomediakita.blogspot.com"
              rel="nofollow"
              target="_blank"
              style={{ color: 'var(--text-light)' }}
            >
              {" "}
              Indo Media Kita
            </a>{" "}
            |
            <a
              href="http://gistechindo.blogspot.com"
              rel="nofollow"
              target="_blank"
              style={{ color: 'var(--text-light)' }}
            >
              {" "}
              Gistechindo
            </a>{" "}
            |
            <a
              href="http://wongaslicirebon.blogspot.com"
              rel="nofollow"
              target="_blank"
              style={{ color: 'var(--text-light)' }}
            >
              {" "}
              Wong Asli Cirebon
            </a>
            <br />
            Copyright © {currentYear}
            <a
              className="sitename"
              href="https://gistechindo.blogspot.com/"
              title="GISTECHINDO"
              style={{ color: 'var(--text-light)' }}
            >
              {" "}
              ESANET.ID
            </a>
            &nbsp; All rights reserved.
          </div>
          <div id="credit-kanan">
            Design by{" "}
            <a href="http://www.duniakomputer.net/" title="Mas Kholis" style={{ color: 'var(--text-light)' }}>
              {" "}
              ESANET.ID
            </a>
            {/* <br />
            powered by <a href="//www.blogger.com"> </a> */}
          </div>
        </div>
      </footer>
      <ScrollToTopButton />
    </>
  );
}
export default Footer;

import React from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import eLogo from "../assets/img/eslog1.png";
import "./Footer.css";

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
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        }}
      >
        <div className="container">
          <div className="row gy-4">
            {/* Brand & About */}
            <div className="col-lg-4 col-md-6">
              <div className="py-5 h-100 d-flex flex-column">
                <div className="d-flex align-items-center mb-3">
                  <img src={eLogo} alt="ESANET" style={{ height: 48 }} />
                </div>
                <p style={{ color: "var(--text-light)", fontSize: "1rem", lineHeight: 1.7 }}>
                  Penyedia layanan internet rumah dan bisnis dengan jaringan stabil,
                  dukungan teknis 24/7, serta berbagai paket yang fleksibel sesuai kebutuhan Anda.
                </p>
              </div>
            </div>

            {/* Layanan Kami */}
            <div className="col-lg-4 col-md-6">
              <div className="py-5 h-100">
                <h4 className="mb-3" style={{ color: "#fff", letterSpacing: "1px" }}>Layanan Kami</h4>
                <ul className="list-unstyled mb-0">
                  {[
                    { name: "Home Broadband", link: "/services" },
                    { name: "Business Internet", link: "/services" },
                    { name: "Wifi Hotspot", link: "/services" },
                    { name: "Dedicated Internet", link: "/services" },
                    { name: "Cloud CCTV", link: "/services" },
                  ].map((item, idx) => (
                    <li key={idx} className="mb-2">
                      <Link
                        to={item.link}
                        className="footer-link"
                        style={{
                          color: "var(--text-light)",
                          textDecoration: "none",
                          transition: "color 0.3s, border-bottom 0.3s",
                          borderBottom: "2px solid transparent",
                          paddingLeft: "2px",
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
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Jam Operasional & Kontak */}
            <div className="col-lg-3 col-md-6">
              <div className="py-5 h-100">
                <h4 className="mb-3" style={{ color: "#fff", letterSpacing: "1px" }}>Jam Operasional</h4>
                <ul className="list-unstyled" style={{ color: "var(--text-light)" }}>
                  <li className="mb-1"><strong>Administrasi:</strong> Senin - Jumat 08.00–17.00</li>
                  <li className="mb-3"><strong>Teknis:</strong> Senin - Minggu 08.00–21.00</li>
                </ul>

                <h4 className="mb-2" style={{ color: "#fff", letterSpacing: "1px" }}>Kontak Kami</h4>
                <ul className="list-unstyled mb-0" style={{ color: "var(--text-light)" }}>
                  <li className="mb-1">
                    📞 <a href="tel:+6282117777187" style={{ color: "var(--text-light)", textDecoration: "none" }}>+62 821-1777-7187</a>
                  </li>
                  <li className="mb-1">
                    ✉️ <a href="mailto:info@esanet.id" style={{ color: "var(--text-light)", textDecoration: "none" }}>info@esanet.id</a>
                  </li>
                  <li>
                    🌐 <a href="https://esanet.id" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-light)", textDecoration: "none" }}>esanet.id</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Newsletter */}
            <div className="col-lg-4 col-md-12">
              <div className="py-5 h-100 d-flex flex-column justify-content-between">
                <h4 className="mb-3" style={{ color: "#fff", letterSpacing: "1px" }}>
                  <span style={{ verticalAlign: "middle", marginRight: "8px" }}>📧</span>Newsletter
                </h4>
                <p className="mb-3" style={{ color: "var(--text-light)", fontSize: "1rem", lineHeight: 1.6 }}>
                  Dapatkan info terbaru tentang layanan dan promo menarik dari kami!
                </p>
                <form className="d-flex flex-column gap-3" autoComplete="off">
                  <div className="position-relative">
                    <input
                      type="email"
                      className="form-control newsletter-input"
                      placeholder="Masukkan email Anda"
                      required
                      style={{
                        backgroundColor: "rgba(255,255,255,0.1)",
                        border: "1px solid rgba(255,255,255,0.2)",
                        color: "#fff",
                        borderRadius: "8px",
                        padding: "12px 16px",
                        fontSize: "0.95rem",
                      }}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn newsletter-btn"
                    style={{
                      background: "linear-gradient(135deg, var(--primary-color) 0%, var(--accent-color) 100%)",
                      border: "none",
                      borderRadius: "8px",
                      fontWeight: "600",
                      padding: "12px 24px",
                      color: "#fff",
                      transition: "all 0.3s ease",
                    }}
                  >
                    Berlangganan
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
      <ScrollToTop />
    </>
  );
};

// ...existing code...
export default Footer;

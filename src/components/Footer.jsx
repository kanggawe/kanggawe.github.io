import React from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import eLogo from "../assets/img/eslog1.png";
import "../assets/css/Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const servicesLinks = [
    { name: "Home Broadband", link: "/services" },
    { name: "Business Internet", link: "/services" },
    { name: "Wifi Hotspot", link: "/services" },
    { name: "Dedicated Internet", link: "/services" },
    { name: "Cloud CCTV", link: "/services" },
  ];

  const hoursItems = [
    { label: "Administrasi", value: "Senin - Jumat 08.00–17.00" },
    { label: "Teknis", value: "Senin - Minggu 08.00–21.00" },
  ];

  const contacts = [
    { label: "Telepon", display: "+62 821-1777-7187", href: "tel:+6282117777187" },
    { label: "Email", display: "info@esanet.id", href: "mailto:info@esanet.id" },
    { label: "Website", display: "esanet.id", href: "https://esanet.id", external: true },
  ];

  const columns = [
    { key: 'brand', type: 'brand' },
    { key: 'services', type: 'links', title: 'Layanan Kami', items: servicesLinks },
    { key: 'hours', type: 'hours', title: 'Jam Operasional', items: hoursItems },
    { key: 'contacts', type: 'contacts', title: 'Kontak Kami', items: contacts },
  ];
  return (
    <>
      <div
        className="info pt-5 pb-4"
        style={{
          backgroundImage:
            "linear-gradient(-10deg, #dc3545 9%, #ffc107 33%, #007bff 66%)",
          backgroundSize: "120% 120%",
          // borderTop: "3px solid var(--primary-color)",
          // borderBottom: "3px solid var(--primary-color)",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        }}
      >
        <div className="container">
          <div className="row gy-4">
            {columns.map((col, idx) => (
              <div key={col.key} className="col-lg-3 col-md-6">
                <div className="py-5 h-100 d-flex flex-column">
                  {col.type === 'brand' && (
                    <>
                      <div className="d-flex align-items-center mb-3">
                        <img src={eLogo} alt="ESANET" style={{ height: 48 }} />
                      </div>
                      <p style={{ color: "var(--text-light)", fontSize: "1rem", lineHeight: 1.7 }}>
                        Penyedia layanan internet rumah dan bisnis dengan jaringan stabil,
                        dukungan teknis 24/7, serta berbagai paket yang fleksibel sesuai kebutuhan Anda.
                      </p>
                    </>
                  )}

                  {col.type === 'links' && (
                    <>
                      <h4 className="mb-3" style={{ color: "#fff", letterSpacing: "1px" }}>{col.title}</h4>
                      <ul className="list-unstyled mb-0">
                        {col.items.map((item) => (
                          <li key={item.name} className="mb-2">
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
                    </>
                  )}

                  {col.type === 'hours' && (
                    <>
                      <h4 className="mb-3" style={{ color: "#fff", letterSpacing: "1px" }}>{col.title}</h4>
                      <ul className="list-unstyled" style={{ color: "var(--text-light)" }}>
                        {col.items.map((h) => (
                          <li key={h.label} className="mb-2"><strong>{h.label}:</strong> {h.value}</li>
                        ))}
                      </ul>
                    </>
                  )}

                  {col.type === 'contacts' && (
                    <>
                      <h4 className="mb-3" style={{ color: "#fff", letterSpacing: "1px" }}>{col.title}</h4>
                      <ul className="list-unstyled mb-0" style={{ color: "var(--text-light)" }}>
                        {col.items.map((c) => (
                          <li key={c.label} className="mb-1">
                            {c.label === 'Telepon' && '📞 '}
                            {c.label === 'Email' && '✉️ '}
                            {c.label === 'Website' && '🌐 '}
                            <a
                              href={c.href}
                              target={c.external ? "_blank" : undefined}
                              rel={c.external ? "noopener noreferrer" : undefined}
                              style={{ color: "var(--text-light)", textDecoration: "none" }}
                            >
                              {c.display}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>
            ))}
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

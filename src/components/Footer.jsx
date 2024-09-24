import React from "react";
import "../assets/css/footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="b-example-divider pt-5"></div>

      <div className="bg-dark text-secondary px-4 py-5 text-center info">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="py-5">
                <h1 className="display-5 fw-bold text-white">Dark mode hero</h1>
                <div className="mx-auto">
                  <p className="fs-5 mb-4">
                    Quickly design and customize responsive mobile-first sites
                    with Bootstrap, the world’s most popular front-end open
                    source toolkit, featuring Sass variables and mixins,
                    responsive grid system, extensive prebuilt components, and
                    powerful JavaScript plugins.
                  </p>
                  <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <button
                      type="button"
                      className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold"
                    >
                      Custom button
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-light btn-lg px-4"
                    >
                      Secondary
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="py-5">
                <h1 className="display-5 fw-bold text-white">Dark mode hero</h1>
                <div className="mx-auto">
                  <p className="fs-5 mb-4">
                    Quickly design and customize responsive mobile-first sites
                    with Bootstrap, the world’s most popular front-end open
                    source toolkit, featuring Sass variables and mixins,
                    responsive grid system, extensive prebuilt components, and
                    powerful JavaScript plugins.
                  </p>
                  <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <button
                      type="button"
                      className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold"
                    >
                      Custom button
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-light btn-lg px-4"
                    >
                      Secondary
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="py-5">
              <h1 className="display-5 fw-bold text-white">Dark mode hero</h1>
              <div className="col-lg-6 mx-auto">
                <p className="fs-5 mb-4">
                  Quickly design and customize responsive mobile-first sites
                  with Bootstrap, the world’s most popular front-end open source
                  toolkit, featuring Sass variables and mixins, responsive grid
                  system, extensive prebuilt components, and powerful JavaScript
                  plugins.
                </p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                  <button
                    type="button"
                    className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold"
                  >
                    Custom button
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-light btn-lg px-4"
                  >
                    Secondary
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="row gy-4">
            <div className="col-lg-4 col-md-6 footer-about">
              <a href="index.html" className="logo d-flex align-items-center">
                <span className="sitename">QuickStart</span>
              </a>
              <div className="footer-contact pt-3">
                <p>A108 Adam Street</p>
                <p>New York, NY 535022</p>
                <p className="mt-3">
                  <strong>Phone:</strong> <span>+1 5589 55488 55</span>
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <span>
                    <a
                      href="/cdn-cgi/l/email-protection"
                      className="__cf_email__"
                      data-cfemail="c5acaba3aa85a0bda4a8b5a9a0eba6aaa8"
                    >
                      [email&#160;protected]
                    </a>
                  </span>
                </p>
              </div>
              <div className="social-links d-flex mt-4">
                <a href="">
                  <i className="bi bi-twitter-x"></i>
                </a>
                <a href="">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Terms of service</a>
                </li>
                <li>
                  <a href="#">Privacy policy</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <a href="#">Web Design</a>
                </li>
                <li>
                  <a href="#">Web Development</a>
                </li>
                <li>
                  <a href="#">Product Management</a>
                </li>
                <li>
                  <a href="#">Marketing</a>
                </li>
                <li>
                  <a href="#">Graphic Design</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-12 footer-newsletter">
              <h4>Our Newsletter</h4>
              <p>
                Subscribe to our newsletter and receive the latest news about
                our products and services!
              </p>
              <form
                action="forms/newsletter.php"
                method="post"
                className="php-email-form"
              >
                <div className="newsletter-form">
                  <input type="email" name="email" />
                  <input type="submit" value="Subscribe" />
                </div>
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">
                  Your subscription request has been sent. Thank you!
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer" id="footer-credit">
        <div className="container">
          <div id="credit-kiri" className="fs-6">
            <strong>Support :</strong>
            <a
              href="http://webanakcirebon.blogspot.com"
              rel="nofollow"
              target="_blank"
            >
              {" "}
              Blog Gado Gado
            </a>{" "}
            |
            <a
              href="http://indomediakita.blogspot.com"
              rel="nofollow"
              target="_blank"
            >
              {" "}
              Indo Media Kita
            </a>{" "}
            |
            <a
              href="http://gistechindo.blogspot.com"
              rel="nofollow"
              target="_blank"
            >
              {" "}
              Gistechindo
            </a>{" "}
            |
            <a
              href="http://wongaslicirebon.blogspot.com"
              rel="nofollow"
              target="_blank"
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
            >
              {" "}
              ESANET.ID
            </a>
            &nbsp; All rights reserved.
          </div>
          <div id="credit-kanan" className="fw-bold">
            Design by{" "}
            <a href="http://www.duniakomputer.net/" title="Mas Kholis">
              {" "}
              ESANET.ID
            </a>
            {/* <br />
            powered by <a href="//www.blogger.com"> </a> */}
          </div>
        </div>
      </footer>
      <a
        href="#"
        id="scroll-top"
        className="scroll-top d-flex align-items-center justify-content-center active"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </>
  );
};

export default Footer;

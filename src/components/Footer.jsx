import React from "react";
//import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="b-example-divider"></div>

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


        </div>
      </div>

      <footer className="footer" id="footer-credit">
        <div className="container">
          <div id="credit-kiri">
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
          <div id="credit-kanan">
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

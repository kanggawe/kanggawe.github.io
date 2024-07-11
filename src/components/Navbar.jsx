import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div id="menutop-wrapper">
        <div className="container topmenu section fixed" id="topmenu">
          <nav id="menutop">
            <input type="checkbox" />
            <label htmlFor="toggleMenu">
              <span>&nbsp;</span>
            </label>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/disclaimer">Disclaimer</Link>
              </li>
              <li>
                <Link to="/sitemap">Sitemap</Link>
              </li>
              <li>
                <Link to="/contact">contact</Link>
              </li>
              <li>
                <Link to="/iklan">Pasang Iklan</Link>
              </li>
              <li>
                <a
                  href="https://www.blogger.com/follow-blog.g?blogID=6192590825799115879"
                  target="_blank"
                  title="Follow CB Blogger"
                >
                  <i className="fa fa-angle-double-right"></i> Follow DuniaKompi
                </a>
              </li>

              <li className="rss">
                <a
                  href="https://feedburner.google.com/fb/a/mailverify?uri=duniakompi"
                  rel="nofollow"
                  target="_blank"
                >
                  <i className="fa fa-rss fa-lg"></i>
                  <span className="inv"></span>
                </a>
              </li>
              <li className="youtube">
                <a
                  href="https://www.youtube.com/c/dukom"
                  rel="nofollow"
                  target="_blank"
                >
                  <i className="fa fa-youtube fa-lg"></i>
                  <span className="inv"></span>
                </a>
              </li>
              <li className="linkedin">
                <a
                  href="https://www.linkedin.com/in/cbblogger"
                  rel="nofollow"
                  target="_blank"
                >
                  <i className="fa fa-linkedin fa-lg"></i>
                  <span className="inv"></span>
                </a>
              </li>
              <li className="googleplus">
                <a
                  href="https://plus.google.com/115114184327107516104"
                  rel="nofollow"
                  target="_blank"
                >
                  <i className="fa fa-google-plus fa-lg"></i>
                  <span className="inv"></span>
                </a>
              </li>
              <li className="facebook">
                <a
                  href="https://facebook.com/duniakomputer.net"
                  rel="nofollow"
                  target="_blank"
                >
                  <i className="fa fa-facebook fa-lg"></i>
                  <span className="inv"></span>
                </a>
              </li>
              <li className="twitter">
                <a
                  href="https://twitter.com/kangbajuri"
                  rel="nofollow"
                  target="_blank"
                >
                  <i className="fa fa-twitter fa-lg"></i>
                  <span className="inv"></span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;

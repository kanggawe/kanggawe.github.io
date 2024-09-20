// import { Link } from "react-router-dom";

// function Navbar() {
//   return (
//     <>
//       <div id="menutop-wrapper">
//         <div className="container topmenu section fixed" id="topmenu">
//           <nav id="menutop">
//             <input type="checkbox" />
//             <label htmlFor="toggleMenu">
//               <span>&nbsp;</span>
//             </label>
//             <ul>
//               <li>
//                 <Link to="/">Home</Link>
//               </li>
//               <li>
//                 <Link to="/about">About</Link>
//               </li>
//               <li>
//                 <Link to="/disclaimer">Disclaimer</Link>
//               </li>
//               <li>
//                 <Link to="/sitemap">Sitemap</Link>
//               </li>
//               <li>
//                 <Link to="/contact">contact</Link>
//               </li>
//               <li>
//                 <Link to="/iklan">Pasang Iklan</Link>
//               </li>
//               <li>
//                 <a
//                   href="https://www.blogger.com/follow-blog.g?blogID=6192590825799115879"
//                   target="_blank"
//                   title="Follow CB Blogger"
//                 >
//                   <i className="fa fa-angle-double-right"></i> Follow DuniaKompi
//                 </a>
//               </li>

//               <li className="rss">
//                 <a
//                   href="https://feedburner.google.com/fb/a/mailverify?uri=duniakompi"
//                   rel="nofollow"
//                   target="_blank"
//                 >
//                   <i className="fa fa-rss fa-lg"></i>
//                   <span className="inv"></span>
//                 </a>
//               </li>
//               <li className="youtube">
//                 <a
//                   href="https://www.youtube.com/c/dukom"
//                   rel="nofollow"
//                   target="_blank"
//                 >
//                   <i className="fa fa-youtube fa-lg"></i>
//                   <span className="inv"></span>
//                 </a>
//               </li>
//               <li className="linkedin">
//                 <a
//                   href="https://www.linkedin.com/in/cbblogger"
//                   rel="nofollow"
//                   target="_blank"
//                 >
//                   <i className="fa fa-linkedin fa-lg"></i>
//                   <span className="inv"></span>
//                 </a>
//               </li>
//               <li className="googleplus">
//                 <a
//                   href="https://plus.google.com/115114184327107516104"
//                   rel="nofollow"
//                   target="_blank"
//                 >
//                   <i className="fa fa-google-plus fa-lg"></i>
//                   <span className="inv"></span>
//                 </a>
//               </li>
//               <li className="facebook">
//                 <a
//                   href="https://facebook.com/duniakomputer.net"
//                   rel="nofollow"
//                   target="_blank"
//                 >
//                   <i className="fa fa-facebook fa-lg"></i>
//                   <span className="inv"></span>
//                 </a>
//               </li>
//               <li className="twitter">
//                 <a
//                   href="https://twitter.com/kangbajuri"
//                   rel="nofollow"
//                   target="_blank"
//                 >
//                   <i className="fa fa-twitter fa-lg"></i>
//                   <span className="inv"></span>
//                 </a>
//               </li>
//             </ul>
//           </nav>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Navbar;

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedinIn, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { Toggle } from "./Toggle";
import "../assets/css/main.css";

function Navbar() {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useState(preference);

  // Menggunakan useEffect untuk menerapkan preferensi yang tersimpan di localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDark(true);
      document.body.classList.add("dark-mode");
    } else {
      setIsDark(false);
      document.body.classList.remove("dark-mode");
    }
  }, []);

  // Fungsi untuk toggle mode dan menyimpan preferensi pengguna
  const toggleMode = () => {
    if (isDark) {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    } else {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    }
    setIsDark(!isDark);
  };

  return (
//     <>
//       <nav className="navbar navbar-expand-lg navbar-light bg-light" id="menutop-wrapper">
//         <div className="container" id="topmenu">
//           <Link className="navbar-brand" to="/">
//             YourBrand
//           </Link>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarNav"
//             aria-controls="navbarNav"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <Link className="nav-link" to="/">
//                   Home
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/about">
//                   About
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/disclaimer">
//                   Disclaimer
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/sitemap">
//                   Sitemap
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/contact">
//                   Contact
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/iklan">
//                   Pasang Iklan
//                 </Link>
//               </li>
//             </ul>
//             <ul className="navbar-nav">
//               <li className="nav-item">
//                 <a
//                   className="nav-link"
//                   href="https://www.blogger.com/follow-blog.g?blogID=6192590825799115879"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <FontAwesomeIcon icon={faFacebook} /> Follow DuniaKompi
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a
//                   className="nav-link"
//                   href="https://www.youtube.com/c/dukom"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <FontAwesomeIcon icon={faYoutube} />
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a
//                   className="nav-link"
//                   href="https://www.linkedin.com/in/cbblogger"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <FontAwesomeIcon icon={faLinkedinIn} />
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <div className="App" data-theme={isDark ? "dark" : "light"}>
//                   {/* Ganti dengan ikon bulan dan matahari */}
//                   <FontAwesomeIcon
//                     icon={isDark ? faMoon : faSun}
//                     onClick={toggleMode}
//                     style={{ cursor: "pointer", fontSize: "1.5rem", marginRight: "10px" }}
//                   />
//                   <Toggle
//                     isChecked={isDark}
//                     handleChange={() => {
//                       toggleMode();
//                     }}
//                   />
//                 </div>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }

// export default Navbar;


    <>
      <nav className="navbar navbar-expand-lg sticky" style={{ backgroundColor: isDark ? "#333" : "#555" }} id="menutop-wrapper">
        <div className="container">
          {/* Ganti nama brand dengan logo */}
          <Link className="navbar-brand" to="/">
            <img
              src="../react.svg" // Ganti dengan URL atau path logo Anda
              alt="Your Logo"
              style={{ width: "50px", height: "50px" }} // Atur ukuran logo
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav menutop">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/disclaimer">
                  Disclaimer
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sitemap">
                  Sitemap
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/iklan">
                  Pasang Iklan
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.blogger.com/follow-blog.g?blogID=6192590825799115879"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebook} /> Follow DuniaKompi
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.youtube.com/c/dukom"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.linkedin.com/in/cbblogger"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </li>
              <li className="nav-item">
                <div className="App" data-theme={isDark ? "dark" : "light"}>
                  <FontAwesomeIcon
                    icon={isDark ? faMoon : faSun} // Gunakan faMoon dan faSun
                    onClick={toggleMode}
                    style={{ cursor: "pointer", fontSize: "1.5rem", marginRight: "10px", color: "white" }}
                  />
                  <Toggle
                    isChecked={isDark}
                    handleChange={() => {
                      toggleMode();
                    }}
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Tambahkan padding-top untuk menghindari konten yang tertutup oleh navbar */}
      <div style={{ paddingTop: '70px' }}>
        {/* Konten halaman lainnya */}
      </div>
    </>
  );
}

export default Navbar;



import "../assets/css/navbar.css";
import viteLogo from '../../public/vite.svg'
import eLogo from '../assets/img/eslog.png'
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedinIn, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons"; // Impor faSun dan faMoon
import { Toggle } from "./Toggle";
import "../assets/css/main.css"; // Pastikan file CSS ada dan benar

function Navbar() {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useState(preference);
  const [isVisible, setIsVisible] = useState(true); // Menyimpan status visibilitas navbar
  const [lastScrollY, setLastScrollY] = useState(0); // Menyimpan posisi scroll terakhir

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDark(true);
      document.body.classList.add("dark-mode");
    } else {
      setIsDark(false);
      document.body.classList.remove("dark-mode");
    }
  }, []);

  const toggleMode = () => {
    if (isDark) {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    } else {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    }
    setIsDark(!isDark);
  };

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // Ketika scroll ke bawah
        setIsVisible(false);
      } else {
        // Ketika scroll ke atas
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      // Cleanup event listener ketika komponen di-unmount
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <>
      {/* Navbar dengan sticky behavior dan toggling visibilitas */}
      <nav
        className={`navbar navbar-expand-lg navbar-sticky ${isVisible ? "" : "navbar-hidden"} ${
          isDark ? "navbar-dark-mode" : "navbar-light-mode"
        }`}
        id="menutop-wrapper"
      >
        <div className="container">
          {/* Ganti nama brand dengan logo */}
          <Link className="navbar-brand" to="/">
            <img src={eLogo} className="logo" alt="Esanet Logo" 
              style={{ width: "100px", height: "30px" }} // Atur ukuran logo
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link fw-bold" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold" to="/disclaimer">
                  Disclaimer
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold" to="/sitemap">
                  Sitemap
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold" to="/iklan">
                  Pasang Iklan
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link fw-bold"
                  href="https://www.blogger.com/follow-blog.g?blogID=6192590825799115879"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebook} /> Follow DuniaKompi
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.youtube.com/c/dukom"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.linkedin.com/in/cbblogger"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </li>
              <li className="nav-item">
                <div className="App" data-theme={isDark ? "dark" : "light"}>
                  <FontAwesomeIcon
                    icon={isDark ? faMoon : faSun} // Gunakan faMoon dan faSun
                    onClick={toggleMode}
                    style={{ cursor: "pointer", fontSize: "1.5rem", marginRight: "10px", color: "white" }}
                  />
                  <Toggle
                    isChecked={isDark}
                    handleChange={() => {
                      toggleMode();
                    }}
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Tambahkan padding-top untuk menghindari konten yang tertutup oleh navbar */}
      {/* <div style={{ paddingTop: '70px' }}> */}
        {/* Konten halaman lainnya */}
      {/* </div> */}
    </>
  );
}

export default Navbar;

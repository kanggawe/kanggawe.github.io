import { Link } from 'react-router-dom';
import { useState } from 'react'

function Navigation() {
  const [count, setCount] = useState(0)
  return (
   <>
       <div id="menutop-wrapper">
      <div className="topmenu section" id="topmenu">
        <nav id="menutop">
          <input type="checkbox" />
          <label htmlFor="toggleMenu"><span>&nbsp;</span></label>
          <ul>
            <li>
            <Link to="/">Home</Link>
            <a href="/p/about.html" title="Tentang">About</a></li>
            <li><a href="/p/kontak.html" title="Kontak">Kontak</a></li>
            <li>
              <a href="/p/disclaimer.html" title="Disclaimer">Disclaimer</a>
            </li>
            <li>
              <a href="/p/sitemap.html" title="Daftar Isi Blog">Sitemap</a>
            </li>
            <li>
              <a href="/p/pasang-iklan.html" title="Pasang Iklan">Pasang Iklan</a>
            </li>
            <li>
              <a href="https://www.blogger.com/follow-blog.g?blogID=6192590825799115879" target="_blank" title="Follow CB Blogger">
                <i className="fa fa-angle-double-right"></i> Follow DuniaKompi
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
      <h1>Eling Semesta Alam</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
   </>
  );
}

export default Navigation;
import React from 'react';
// import { Outlet } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Disclaimer from '../pages/Disclaimer';
import Sitemap from '../pages/Sitemap';
import Contact from '../pages/Contact';
import Iklan from '../pages/Iklan';


const MainContent = () => {
  return (
    <main className="main-content">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/iklan" element={<Iklan />} />
        </Routes>
    </main>
  );
};

export default MainContent;
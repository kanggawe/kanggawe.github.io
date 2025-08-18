import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';   
import Disclaimer from '../pages/Disclaimer';
import Service from '../pages/Service';
import Sitemap from '../pages/Sitemap';
import Contact from '../pages/Contact';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import TermsOfService from '../pages/TermsOfService'; 
import NotFound from '../pages/NotFound';

const MainContent = () => {
  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)', minHeight: '100vh' }}>
      <main className="col-xs-12 col-ml-9 main-content" style={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/services" element={<Service />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}   
export default MainContent;
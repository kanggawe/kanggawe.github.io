import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// Lazy load semua halaman untuk optimasi bundle size
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));   
const Portfolio = lazy(() => import('../pages/Portfolio'));
const Disclaimer = lazy(() => import('../pages/Disclaimer'));
const Service = lazy(() => import('../pages/Service'));
const Sitemap = lazy(() => import('../pages/Sitemap'));
const Contact = lazy(() => import('../pages/Contact'));
const PrivacyPolicy = lazy(() => import('../pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('../pages/TermsOfService')); 
const NotFound = lazy(() => import('../pages/NotFound'));

// Loading component
const LoadingSpinner = () => (
  <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);

const MainContent = () => {
  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)', minHeight: '100vh' }}>
      <main className="col-xs-12 col-ml-9 main-content" style={{ flexGrow: 1 }}>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/services" element={<Service />} />
            <Route path="/sitemap" element={<Sitemap />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}   
export default MainContent;
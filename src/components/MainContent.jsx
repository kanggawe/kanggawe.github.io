import React from "react";
import * as bootstrap from "bootstrap";
// import { Outlet } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Disclaimer from "../pages/Disclaimer";
import Sitemap from "../pages/Sitemap";
import Contact from "../pages/Contact";
import Iklan from "../pages/Iklan";
import Service from "../pages/Service";
import NotFound from "../pages/NotFound";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsOfService from "../pages/TermsOfService";
// import Sidebar from "./Sidebar";
// import CarouselComponent from "./CarouselComponent";

const MainContent = () => {
  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)', minHeight: '100vh' }}>
      {/* <sidebar className="col-xs-12 col-ml-3" style={{ width: "200px" }}>
       
      </sidebar> */}
      {/* <Sidebar /> */}

      <main className="col-xs-12 col-ml-9 main-content" style={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/services" element={<Service />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pricelist" element={<Iklan />} />          
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
};

export default MainContent;

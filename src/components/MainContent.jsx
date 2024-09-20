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
// import Sidebar from "./Sidebar";
// import CarouselComponent from "./CarouselComponent";

const MainContent = () => {
  return (
    <>
      {/* <sidebar className="col-xs-12 col-ml-3" style={{ width: "200px" }}>
       
      </sidebar> */}
      {/* <Sidebar /> */}

      <main className="col-xs-12 col-ml-9 main-content" style={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/iklan" element={<Iklan />} />
        </Routes>
      </main>
    </>
  );
};

export default MainContent;

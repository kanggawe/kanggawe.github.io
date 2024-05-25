//import Button from "@mui/material/Button";
import "./App.css";
//import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Sitemap from "./pages/Sitemap";
// import Disclaimer from "./pages/Disclaimer";
// import Iklan from "./pages/Iklan";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <MainContent />
        <Footer />
      </Router>
    </>
  );
}

export default App;

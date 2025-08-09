//import Button from "@mui/material/Button";
import "./App.css";
//import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import ScrollToTopButton from "./components/ScrollToTopBotton";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <MainContent/>
        <Footer/>
      </Router>
      <ScrollToTopButton/>
    </>
  );
}

export default App;

//import Button from "@mui/material/Button";
import "./App.css";
//import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        {/* <Header /> */}
        <MainContent />
        <Footer />
      </Router>
    </>
  );
}

export default App;

//import Button from "@mui/material/Button";
import "./App.css";
//import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import ScrollToTopButton from "./components/ScrollToTopBotton";

function App() {
  return (
  <BrowserRouter basename="/">
      <Navbar />
      <Routes>
        <Route path="/" element={<MainContent />} />
        {/* Tambahkan rute lain di sini */}
      </Routes>
      <Footer />
      <ScrollToTopButton />
    </BrowserRouter>
  );
}

export default App;

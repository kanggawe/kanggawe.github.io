import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";

function App() {
  
  return (
    <>
      <Router>
        <Navbar />
        <MainContent />
        <Footer />
      </Router>
    </>
  )
}

export default App

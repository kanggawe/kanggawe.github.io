// src/pages/Home.jsx
import React from "react";
import Hero from "../components/Hero";
import CarouselComponent from "../components/CarouselComponent";
import Units from "../components/Units";
//import Contact from "../components/Contact";

const Home = () => {
  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      <CarouselComponent />
      <Units />
    </div>
  );
};

export default Home;

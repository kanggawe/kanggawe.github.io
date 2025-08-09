// src/components/Sidebar.jsx
import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <p>hallo</p>
    </>
  );
}

export default Sidebar;

import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/notfound.css"

function NotFound() {
  return (
    <div className="container text-center" style={{ paddingTop: "50px" }}>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/" className="btn btn-primary">
        Go Back to Home
      </Link>
    </div>
  );
}

export default NotFound;

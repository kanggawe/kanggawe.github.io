import React from "react";
import { Link } from "react-router-dom";
// import "../assets/css/notfound.css"

function NotFound() {
  return (
    <div className="container text-center" style={{ 
      paddingTop: "50px", 
      backgroundColor: 'var(--bg-primary)', 
      color: 'var(--text-primary)',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div className="card card-custom p-5" style={{ maxWidth: '500px' }}>
        <div className="card-body">
          <h1 style={{ 
            fontSize: '6rem', 
            fontWeight: 'bold', 
            color: 'var(--primary-color)',
            marginBottom: '1rem'
          }}>404</h1>
          <h2 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>Page Not Found</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            Sorry, the page you are looking for does not exist or has been moved.
          </p>
          <div className="d-flex gap-3 justify-content-center">
            <Link to="/" className="btn btn-primary-custom">
              <i className="bi bi-house me-2"></i>
              Go Back to Home
            </Link>
            <button className="btn btn-secondary-custom" onClick={() => window.history.back()}>
              <i className="bi bi-arrow-left me-2"></i>
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;

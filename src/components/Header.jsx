import React from "react";

function Header() {
  return (
    <header style={{ backgroundColor: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        <div className="logo">
          <h1 style={{ color: 'var(--text-primary)' }}>MyWebsite</h1>
        </div>
        <div className="banner">
          <img 
            src="path-to-your-banner.jpg" 
            alt="Banner Ad" 
            style={{ 
              maxWidth: '100%', 
              height: 'auto',
              borderRadius: 'var(--border-radius)'
            }} 
          />
        </div>
      </div>
    </header>
  );
}

export default Header;

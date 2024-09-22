import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap'; // Gunakan Bootstrap untuk styling

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Fungsi untuk menangani scroll
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Fungsi untuk scroll ke atas
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          className="scroll-to-top-btn"
          style={{
            position: 'fixed',
            bottom: '50px',
            right: '50px',
            zIndex: 1000,
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            backgroundColor: '#007bff',
            color: 'white',
            fontSize: '24px',
            textAlign: 'center',
          }}
        >
          ↑
        </Button>
      )}
    </div>
  );
};

export default ScrollToTopButton;

import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap'; // Gunakan Bootstrap untuk styling
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";


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

  // Fungsi untuk scroll ke atas dengan animasi slow motion
  const scrollToTop = () => {
    const scrollStep = -window.scrollY / (1500 / 15); // Durasi lebih lambat (1500 ms)
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15); // Mengatur kecepatan per frame
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
         <FontAwesomeIcon icon={faChevronUp} />
        </Button>
      )}
    </div>
  );
};

export default ScrollToTopButton;

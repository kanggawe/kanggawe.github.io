const ScrollToTop = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button 
      onClick={handleScrollToTop} 
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        cursor: 'pointer'
      }}
    >
      ↑
    </button>
  );
}
export default ScrollToTop;
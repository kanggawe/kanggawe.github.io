import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div id="footer-credit">
        <div id="credit-kiri">
          <strong>Support :</strong>
          <a href="http://webanakcirebon.blogspot.com" rel="nofollow" target="_blank">Blog Gado Gado</a> | 
          <a href="http://indomediakita.blogspot.com" rel="nofollow" target="_blank">Indo Media Kita</a> | 
          <a href="http://gistechindo.blogspot.com" rel="nofollow" target="_blank">Gistechindo</a> | 
          <a href="http://wongaslicirebon.blogspot.com" rel="nofollow" target="_blank">Wong Asli Cirebon</a><br />
          Copyright © {currentYear}  
          <a className="sitename" href="https://gistechindo.blogspot.com/" title="GISTECHINDO"> GISTECHINDO</a>. All rights reserved.
        </div>
        <div id="credit-kanan">
          Template Modif by <a href="http://www.duniakomputer.net/" title="Mas Kholis">Dunia Komputer</a><br />
          powered by <a href="//www.blogger.com">Blogger</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
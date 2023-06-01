import React from 'react';
import "./Footer.css"

const Footer = () => {
  return (
    <footer >
       <div className='footer-wrapper'>
      <p>© 2023 Your Health Blog. All rights reserved.</p>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      </div>
    </footer>
  );
};

export default Footer;


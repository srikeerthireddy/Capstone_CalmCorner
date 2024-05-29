// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>Calm Corner</h2>
          <p>Dedicated platform for mental health support. Promoting well-being & guidance.</p>
        </div>
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Address: 123 Calm Street, Calmville, CA 12345</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@calmcorner.com</p>
        </div>
        <div className="footer-section social">
          <h3>Follow Us</h3>
          <a href="https://facebook.com" className="social-link">Facebook</a>
          <a href="https://twitter.com" className="social-link">Twitter</a>
          <a href="https://instagram.com" className="social-link">Instagram</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Calm Corner. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

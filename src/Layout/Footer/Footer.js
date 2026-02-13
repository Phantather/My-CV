import React from 'react';
import { FiMail, FiPhone, FiLinkedin, FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer" id="contact">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <div className="footer__content">
          <div className="footer__info">
            <a href="mailto:akdil.hstech@gmail.com" className="footer__link">
              <FiMail /> akdil.hstech@gmail.com
            </a>
            <a href="tel:+996501251221" className="footer__link">
              <FiPhone /> +996 (501) 25-12-21
            </a>
            <a
              href="https://www.linkedin.com/in/akdilkubanychbekov"
              target="_blank"
              rel="noreferrer"
              className="footer__link"
            >
              <FiLinkedin /> LinkedIn
            </a>
          </div>
          <div className="footer__languages">
            <h4>Languages</h4>
            <p>Kyrgyz - Native</p>
            <p>Russian - Full Professional</p>
            <p>German - Elementary</p>
          </div>
        </div>
        <div className="footer__bottom">
          <p>&copy; 2026 Akdil Kubanychbekov. All rights reserved.</p>
          <button className="footer__up" onClick={scrollToTop}>
            <FiArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { FiMail, FiPhone, FiLinkedin, FiArrowUp, FiSend } from 'react-icons/fi';
import { useLanguage } from '../i18n/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer" id="contact">
      <div className="container">
        <h2 className="section-title">{t('footer.contact')}</h2>
        <div className="footer__content">
          <div className="footer__info">
            <a
                href="http://linkedin.com/in/akdil-kubanychbekov"
                target="_blank"
                rel="noreferrer"
                className="footer__link"
            >
              <FiLinkedin /> LinkedIn
            </a>
            <a href="mailto:akdil.hstech@gmail.com" className="footer__link">
              <FiMail /> akdil.hstech@gmail.com
            </a>
            <a
                href="https://t.me/phanti_dev"
                target="_blank"
                rel="noreferrer"
                className="footer__link"
            >
              <FiSend /> Telegram
            </a>

            <a href="tel:+996501251221" className="footer__link">
              <FiPhone /> +996 (501) 25-12-21
            </a>
          </div>
          <div className="footer__languages">
            <h4>{t('footer.languages')}</h4>
            <p>{t('footer.kyrgyz')}</p>
            <p>{t('footer.russian')}</p>
            <p>{t('footer.german')}</p>
          </div>
        </div>
        <div className="footer__bottom">
          <p>&copy; {t('footer.copyright')}</p>
          <button className="footer__up" onClick={scrollToTop}>
            <FiArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

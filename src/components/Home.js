import React from 'react';
import { FiMail, FiPhone, FiLinkedin, FiMapPin, FiDownload, FiSend } from 'react-icons/fi';
import { useLanguage } from '../i18n/LanguageContext';
import img from '../assets/photo.jpg';

const Home = () => {
  const { t } = useLanguage();

  return (
    <section className="home" id="home">
      <div className="container">
        <div className="home__row">
          <div className="home__content">
            <p className="home__greeting">{t('home.greeting')}</p>
            <h1 className="home__name">{t('home.name')}</h1>
            <p className="home__title">{t('home.title')}</p>
            <p className="home__subtitle">
              TS | React | Next.js | Node.js
            </p>
            <p className="home__info">
              {t('home.info')}
            </p>
            <div className="home__contacts">
              <a href="http://linkedin.com/in/akdil-kubanychbekov" target="_blank" rel="noreferrer" className="home__contact-item">
                <FiLinkedin /> LinkedIn
              </a>
              <a href="mailto:akdil.hstech@gmail.com" className="home__contact-item">
                <FiMail /> akdil.hstech@gmail.com
              </a>
              <a href="https://t.me/phanti_dev" target="_blank" rel="noreferrer" className="home__contact-item">
                <FiSend /> Telegram
              </a>
              <a href="tel:+996999251221" className="home__contact-item">
                <FiPhone /> +996 999 251 221
              </a>
              <span className="home__contact-item">
                <FiMapPin /> {t('home.location')}
              </span>
            </div>
            <div className="home__actions">
              <a href="/Profile.pdf" download className="home__btn home__btn--primary">
                <FiDownload /> {t('home.downloadCv')}
              </a>
            </div>
          </div>
          <div className="home__photo">
            <img src={img} alt="Akdil Kubanychbekov" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

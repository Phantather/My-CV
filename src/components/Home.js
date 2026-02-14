import React from 'react';
import { FiMail, FiPhone, FiLinkedin, FiMapPin, FiDownload } from 'react-icons/fi';
import img from '../assets/photo.jpg';

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="container">
        <div className="home__row">
          <div className="home__content">
            <p className="home__greeting">Hello, I'm</p>
            <h1 className="home__name">Akdil Kubanychbekov</h1>
            <p className="home__title">Middle Front-End Engineer</p>
            <p className="home__subtitle">
              TS | React | Next.js | Node.js
            </p>
            <p className="home__info">
              Middle Front-End Engineer at the "Department of Digital Education"
              in OJSC "Tunduk". Passionate about creating modern digital solutions
              for educational institutions.
            </p>
            <div className="home__contacts">
              <a href="tel:+996999251221" className="home__contact-item">
                <FiPhone /> +996 999 251 221
              </a>
              <a href="mailto:akdil.hstech@gmail.com" className="home__contact-item">
                <FiMail /> akdil.hstech@gmail.com
              </a>
              <a href="http://linkedin.com/in/akdil-kubanychbekov" target="_blank" rel="noreferrer" className="home__contact-item">
                <FiLinkedin /> LinkedIn
              </a>
              <span className="home__contact-item">
                <FiMapPin /> Bishkek, Kyrgyzstan
              </span>
            </div>
            <div className="home__actions">
              <a href="/Profile.pdf" download className="home__btn home__btn--primary">
                <FiDownload /> Download CV
              </a>
              <button
                className="home__btn home__btn--secondary"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Contact me
              </button>
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

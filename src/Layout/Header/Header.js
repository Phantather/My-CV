import React, { useState } from 'react';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import Logo from '../../components/Logo';

const Header = ({ theme, toggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <nav className="header__nav">
          <a href="#home" className="header__logo" onClick={(e) => { e.preventDefault(); scrollTo('home'); }}>
            <Logo size={42} />
          </a>

          <button className="header__burger" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>

          <ul className={`header__list ${menuOpen ? 'header__list--open' : ''}`}>
            {['home', 'skills', 'experience', 'portfolio', 'contact'].map((section) => (
              <li key={section} className="header__list-item">
                <button
                  className="header__link"
                  onClick={() => scrollTo(section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              </li>
            ))}
          </ul>

          <button className="header__theme-btn" onClick={toggleTheme} title="Toggle theme">
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;

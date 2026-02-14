import React from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import Logo from './Logo';

const Header = ({ theme, toggleTheme }) => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="header">
      <div className="container">
        <nav className="header__nav">
          <a href="#home" className="header__logo" onClick={(e) => { e.preventDefault(); scrollTo('home'); }}>
            <Logo size={42} />
          </a>

          <ul className="header__list">
            {[{ id: 'home', label: 'About Me' }, { id: 'skills', label: 'Skills' }, { id: 'experience', label: 'Experience' }, { id: 'portfolio', label: 'Portfolio' }, { id: 'contact', label: 'Contact' }].map((item) => (
              <li key={item.id} className="header__list-item">
                <button
                  className="header__link"
                  onClick={() => scrollTo(item.id)}
                >
                  {item.label}
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

import React, { useState } from 'react';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { useLanguage } from '../i18n/LanguageContext';
import Logo from './Logo';

const Header = ({ theme, toggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useLanguage();

  const navItems = [
    { id: 'home', label: t('nav.home') },
    { id: 'skills', label: t('nav.skills') },
    { id: 'experience', label: t('nav.experience') },
    { id: 'portfolio', label: t('nav.portfolio') },
    { id: 'contact', label: t('nav.contact') },
  ];

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
            {navItems.map((item) => (
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

          <button className="header__theme-btn" onClick={toggleTheme} title={t('theme.toggle')}>
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Skills from './components/Skills';
import Works from './components/Works';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import './app.scss';

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="App">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Home />
        <Skills />
        <Works />
        <Portfolio />
      </main>
      <Footer />

      <div className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`}>
        {[{ id: 'home', label: 'About Me' }, { id: 'skills', label: 'Skills' }, { id: 'experience', label: 'Experience' }, { id: 'portfolio', label: 'Portfolio' }, { id: 'contact', label: 'Contact' }].map((item) => (
          <button
            key={item.id}
            className="mobile-menu__link"
            onClick={() => scrollTo(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? '✕' : '☰'}
      </button>
    </div>
  );
}

export default App;

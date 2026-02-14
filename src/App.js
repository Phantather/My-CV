import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './i18n/LanguageContext';
import Header from './components/Header';
import Home from './components/Home';
import Skills from './components/Skills';
import Works from './components/Works';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import LanguageSwitcher from './components/LanguageSwitcher';
import './app.scss';

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <LanguageProvider>
      <div className="App">
        <Header theme={theme} toggleTheme={toggleTheme} />
        <main>
          <Home />
          <Skills />
          <Works />
          <Portfolio />
        </main>
        <Footer />
        <LanguageSwitcher />
      </div>
    </LanguageProvider>
  );
}

export default App;

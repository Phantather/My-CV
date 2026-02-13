import React, { useState, useEffect } from 'react';
import Header from './Layout/Header/Header';
import Home from './pages/Main/Home/Home';
import Skills from './pages/Main/Skills/Skills';
import Works from './pages/Main/Works/Works';
import Portfolio from './pages/Main/Portfolio/Portfolio';
import Footer from './Layout/Footer/Footer';
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
    <div className="App">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Home />
        <Skills />
        <Works />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
}

export default App;

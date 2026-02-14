import React, { createContext, useContext, useState } from 'react';
import translations from './translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('lang') || 'en';
  });

  const changeLang = (newLang) => {
    setLang(newLang);
    localStorage.setItem('lang', newLang);
  };

  const t = (key) => {
    return translations[lang]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang: changeLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

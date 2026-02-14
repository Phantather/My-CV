import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';

const languages = ['kg', 'ru', 'de', 'en'];

const LanguageSwitcher = () => {
  const { lang, setLang } = useLanguage();

  const handleClick = () => {
    const currentIndex = languages.indexOf(lang);
    const nextIndex = (currentIndex + 1) % languages.length;
    setLang(languages[nextIndex]);
  };

  return (
    <button className="lang-switcher" onClick={handleClick} title="Switch language">
      {lang.toUpperCase()}
    </button>
  );
};

export default LanguageSwitcher;

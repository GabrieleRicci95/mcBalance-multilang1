'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useTranslation } from '../context/TranslationContext';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { t, currentLanguage, changeLanguage } = useTranslation();

  const [selectedLanguage, setSelectedLanguage] = useState({
    code: 'it',
    flag: '🇮🇹',
    name: 'Italiano'
  });

  const languages = [
    { code: 'it', flag: '🇮🇹', name: 'Italiano' },
    { code: 'en', flag: '🇬🇧', name: 'English' },
    { code: 'es', flag: '🇪🇸', name: 'Español' },
    { code: 'fr', flag: '🇫🇷', name: 'Français' },
    { code: 'de', flag: '🇩🇪', name: 'Deutsch' }
  ];

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const selectLanguage = (language) => {
    setSelectedLanguage(language);
    changeLanguage(language.code);
    setActiveDropdown(null);
    setIsMenuOpen(false); // chiude menu mobile alla selezione lingua
  };

  return (
    <nav className="deloitte-navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-brand">
          <Link href="/" className="brand-link" onClick={() => setIsMenuOpen(false)}>
            <img src="/img/logo-mcbalance.png" alt="McBalance Logo" className="navbar-logo" />
            McBalance
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-menu left-menu">
          {/* Chi siamo */}
          <div className={`dropdown mega-dropdown ${activeDropdown === 'chi-siamo' ? 'active' : ''}`}>
            <button
              className="dropdown-toggle"
              onClick={() => toggleDropdown('chi-siamo')}
            >
              {t('chi-siamo')}
              <svg className="dropdown-arrow" viewBox="0 0 24 24" width="20" height="20">
                <path d="M7 10l5 5 5-5z" fill="currentColor" />
              </svg>
            </button>
            {activeDropdown === 'chi-siamo' && (
              <div className="mega-menu">
                {/* ... contenuto del menu chi siamo ... */}
              </div>
            )}
          </div>

          {/* Cosa facciamo */}
          <div className={`dropdown mega-dropdown ${activeDropdown === 'cosa-facciamo' ? 'active' : ''}`}>
            <button
              className="dropdown-toggle"
              onClick={() => toggleDropdown('cosa-facciamo')}
            >
              {t('cosa-facciamo')}
              <svg className="dropdown-arrow" viewBox="0 0 24 24" width="20" height="20">
                <path d="M7 10l5 5 5-5z" fill="currentColor" />
              </svg>
            </button>
            {activeDropdown === 'cosa-facciamo' && (
              <div className="mega-menu">
                {/* ... contenuto del menu cosa facciamo ... */}
              </div>
            )}
          </div>
        </div>

        {/* Right Side Icons */}
        <div className="navbar-actions">
          {/* Language */}
          <div className="dropdown">
            <button
              className="navbar-icon location dropdown-toggle"
              onClick={() => toggleDropdown('language')}
            >
              <svg viewBox="0 0 24 24" width="16" height="16">
                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z" fill="currentColor" />
              </svg>
              <span className="selected-flag">{selectedLanguage.flag}</span>
              <svg className="dropdown-arrow" viewBox="0 0 24 24" width="16" height="16">
                <path d="M7 10l5 5 5-5z" fill="currentColor" />
              </svg>
            </button>
            {activeDropdown === 'language' && (
              <div className="dropdown-menu language-menu">
                {languages.map((language) => (
                  <button
                    key={language.code}
                    className={`language-option ${selectedLanguage.code === language.code ? 'active' : ''}`}
                    onClick={() => selectLanguage(language)}
                  >
                    <span className="flag">{language.flag}</span>
                    <span>{language.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <Link href="/chi-siamo" onClick={() => setIsMenuOpen(false)}>{t('chi-siamo')}</Link>
          <Link href="/overview" onClick={() => setIsMenuOpen(false)}>{t('overview')}</Link>
          <Link href="/settori" onClick={() => setIsMenuOpen(false)}>{t('settori')}</Link>
          <Link href="/servizi" onClick={() => setIsMenuOpen(false)}>{t('servizi')}</Link>

          {/* Selettore lingua con mappamondo */}
          <div className="mobile-language-selector">
            <button onClick={() => toggleDropdown('language')} className="language-toggle">
              <svg viewBox="0 0 24 24" width="16" height="16">
                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z" fill="currentColor" />
              </svg>
              <span className="selected-flag">{selectedLanguage.flag}</span>
              <svg className="dropdown-arrow" viewBox="0 0 24 24" width="16" height="16">
                <path d="M7 10l5 5 5-5z" fill="currentColor" />
              </svg>
            </button>

            {activeDropdown === 'language' && (
              <div className="dropdown-menu language-menu">
                {languages.map((language) => (
                  <button
                    key={language.code}
                    className={`language-option ${selectedLanguage.code === language.code ? 'active' : ''}`}
                    onClick={() => {
                      selectLanguage(language);
                      setIsMenuOpen(false); // chiude menu mobile dopo selezione
                    }}
                  >
                    <span className="flag">{language.flag}</span>
                    <span>{language.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
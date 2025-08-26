'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useTranslation } from '../context/TranslationContext';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [expandedSection, setExpandedSection] = useState(null);
  const [mobileExpandedSection, setMobileExpandedSection] = useState(null);
  const { t, changeLanguage } = useTranslation();

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

  const settoriList = [
    'settore-pharma',
    'settore-consumer',
    'settore-food',
    'settore-oil-gas',
    'settore-medical',
    'settore-educations',
    'settore-compliance',
    'settore-standards'
  ];

  const serviziList = [
    'servizio-reliability',
    'servizio-maintenance-management',
    'servizio-asset-management',
    'servizio-cmms-digitalization',
    'servizio-industrial-safety',
    'servizio-management-systems',
    'servizio-training'
  ];

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
    if (menu === 'cosa-facciamo') setExpandedSection(null);
  };

  const selectLanguage = (language) => {
    setSelectedLanguage(language);
    changeLanguage(language.code);
    setActiveDropdown(null);
    setIsMenuOpen(false);
  };

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const toggleMobileSection = (section) => {
    setMobileExpandedSection(mobileExpandedSection === section ? null : section);
  };

  const getRightPanelContent = () => ({
    title: t('nostri-servizi'),
    description: t('servizi-description')
  });

  const getServiceLink = (servizio) => {
    const links = {
      'servizio-reliability': '/servizi/reliability',
      'servizio-maintenance-management': '/servizi/maintenance',
      'servizio-asset-management': '/servizi/asset-management',
      'servizio-cmms-digitalization': '/servizi/cmms-digitalization',
      'servizio-industrial-safety': '/servizi/industrial-safety',
      'servizio-management-systems': '/servizi/management-systems',
      'servizio-training': '/servizi/training'
    };
    return links[servizio] || '#';
  };

  const rightPanel = getRightPanelContent();

  return (
    <nav className="deloitte-navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-brand">
          <Link href="/" className="brand-link">
            <img src="/img/logo-mcbalance.png" alt="McBalance Logo" className="navbar-logo" />
            McBalance
          </Link>
        </div>

        {/* Toggle mobile: POSIZIONATO QUI (fuori da .navbar-actions/.navbar-menu) */}
        <button
          id="mobile-toggle"
          className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`}
          aria-label={isMenuOpen ? 'Chiudi menu' : 'Apri menu'}
          aria-controls="mobile-menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span><span></span><span></span>
        </button>

        {/* Menu desktop */}
        <div className="navbar-menu left-menu">
          {/* Chi siamo */}
          <div className={`dropdown mega-dropdown ${activeDropdown === 'chi-siamo' ? 'active' : ''}`}>
            <button className="dropdown-toggle" onClick={() => toggleDropdown('chi-siamo')}>
              {t('chi-siamo')}
              <svg className="dropdown-arrow" viewBox="0 0 24 24" width="20" height="20">
                <path d="M7 10l5 5 5-5z" fill="currentColor" />
              </svg>
            </button>
            {activeDropdown === 'chi-siamo' && (
              <div className="mega-menu">
                <div className="mega-menu-content">
                  <div className="mega-sidebar mega-sidebar-dynamic">
                    <div className="sidebar-item">
                      <Link href="/chi-siamo" onClick={() => setActiveDropdown(null)}>
                        {t('nostra-storia')}
                      </Link>
                    </div>
                    <div className="sidebar-item">
                      <Link href="/comitato-scientifico" onClick={() => setActiveDropdown(null)}>
                        Comitato tecnico scientifico di indirizzo
                      </Link>
                    </div>
                  </div>
                  <div className="mega-center">
                    <div className="mega-placeholder"></div>
                  </div>
                  <div className="mega-right">
                    <div className="mega-card">
                      <div className="mega-card-icon">
                        <div className="mcbalance-icon">
                          <div className="icon-square red"></div>
                          <div className="icon-square red"></div>
                          <div className="icon-square red"></div>
                        </div>
                      </div>
                      <h3>{t('chi-siamo')}</h3>
                      <p>{t('chi-siamo-card-description')}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Cosa facciamo */}
          <div className={`dropdown mega-dropdown ${activeDropdown === 'cosa-facciamo' ? 'active' : ''}`}>
            <button className="dropdown-toggle" onClick={() => toggleDropdown('cosa-facciamo')}>
              {t('cosa-facciamo')}
              <svg className="dropdown-arrow" viewBox="0 0 24 24" width="20" height="20">
                <path d="M7 10l5 5 5-5z" fill="currentColor" />
              </svg>
            </button>
            {activeDropdown === 'cosa-facciamo' && (
              <div className="mega-menu">
                <div className="mega-menu-content">
                  <div className="mega-sidebar mega-sidebar-dynamic">
                    <div className="sidebar-item">
                      <Link href="/overview" onClick={() => setActiveDropdown(null)}>
                        {t('overview')}
                      </Link>
                    </div>
                    <div className="sidebar-item">
                      <a
                        href="#"
                        onClick={(e) => { e.preventDefault(); toggleSection('settori'); }}
                        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}
                      >
                        <span>{t('settori')}</span>
                        <svg className={`sidebar-arrow ${expandedSection === 'settori' ? 'expanded' : ''}`} viewBox="0 0 24 24" width="14" height="14">
                          <path d="M9 6l6 6-6 6z" fill="currentColor" />
                        </svg>
                      </a>
                    </div>
                    <div className="sidebar-item">
                      <a
                        href="#"
                        onClick={(e) => { e.preventDefault(); toggleSection('servizi'); }}
                        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}
                      >
                        <span>{t('servizi')}</span>
                        <svg className={`sidebar-arrow ${expandedSection === 'servizi' ? 'expanded' : ''}`} viewBox="0 0 24 24" width="14" height="14">
                          <path d="M9 6l6 6-6 6z" fill="currentColor" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="mega-center">
                    {expandedSection === 'settori' && (
                      <div className="mega-services-list">
                        {settoriList.map((settore, index) => (
                          <div key={index} className="mega-service-item">
                            <span className="bullet">•</span>
                            <span>{t(settore)}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    {expandedSection === 'servizi' && (
                      <div className="mega-services-list">
                        {serviziList.map((servizio, index) => (
                          <Link
                            key={index}
                            href={getServiceLink(servizio)}
                            className="mega-service-item-link"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {t(servizio)}
                          </Link>
                        ))}
                      </div>
                    )}
                    {!expandedSection && <div className="mega-placeholder"></div>}
                  </div>
                  <div className="mega-right">
                    <div className="mega-card">
                      <div className="mega-card-icon">
                        <div className="mcbalance-icon">
                          <div className="icon-square red"></div>
                          <div className="icon-square red"></div>
                          <div className="icon-square red"></div>
                        </div>
                      </div>
                      <h3>{rightPanel.title}</h3>
                      <p>{rightPanel.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Contattaci — link semplice a destra (desktop) */}
        <div className="dropdown mega-dropdown">
          <Link href="/contattaci" className="dropdown-toggle" onClick={() => setActiveDropdown(null)}>
            {t('contattaci')}
          </Link>
        </div>

        {/* Area destra (lingue desktop) */}
        <div className="navbar-actions">
          <div className="dropdown desktop-language">
            <button className="navbar-icon location dropdown-toggle" onClick={() => toggleDropdown('language')}>
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
        </div>
      </div>

      {/* MENU MOBILE */}
      <div id="mobile-menu" className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-content">
          {/* Link diretti */}
          <Link
            href="/chi-siamo"
            className="mobile-menu-link"
            onClick={() => setIsMenuOpen(false)}
          >
            {t('chi-siamo') || 'Chi siamo'}
          </Link>

          <Link
            href="/overview"
            className="mobile-menu-link"
            onClick={() => setIsMenuOpen(false)}
          >
            {t('overview') || 'Panoramica'}
          </Link>

          {/* >>> CONTATTACI con fallback testuale <<< */}
          <Link
            href="/contattaci"
            className="mobile-menu-link mobile-menu-link-contattaci"
            onClick={() => setIsMenuOpen(false)}
            data-test="mobile-contattaci"
          >
            {t('contattaci') || 'Contattaci'}
          </Link>

          {/* Dropdown Settori */}
          <div className="mobile-dropdown">
            <button
              className="mobile-dropdown-toggle"
              onClick={() => toggleMobileSection('settori')}
            >
              {t('settori') || 'Settori'}
              <svg
                className={`mobile-dropdown-arrow ${mobileExpandedSection === 'settori' ? 'expanded' : ''}`}
                viewBox="0 0 24 24"
                width="20"
                height="20"
              >
                <path d="M7 10l5 5 5-5z" fill="currentColor" />
              </svg>
            </button>
            {mobileExpandedSection === 'settori' && (
              <div className="mobile-dropdown-content">
                {settoriList.map((settore, index) => (
                  <div key={index} className="mobile-dropdown-item">{t(settore)}</div>
                ))}
              </div>
            )}
          </div>

          {/* Dropdown Servizi */}
          <div className="mobile-dropdown">
            <button
              className="mobile-dropdown-toggle"
              onClick={() => toggleMobileSection('servizi')}
            >
              {t('servizi') || 'Servizi'}
              <svg
                className={`mobile-dropdown-arrow ${mobileExpandedSection === 'servizi' ? 'expanded' : ''}`}
                viewBox="0 0 24 24"
                width="20"
                height="20"
              >
                <path d="M7 10l5 5 5-5z" fill="currentColor" />
              </svg>
            </button>
            {mobileExpandedSection === 'servizi' && (
              <div className="mobile-dropdown-content">
                {serviziList.map((servizio, index) => (
                  <Link
                    key={index}
                    href={getServiceLink(servizio)}
                    className="mobile-dropdown-item"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t(servizio)}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Selettore lingua mobile */}
          <div className="mobile-language-selector">
            <div className="mobile-language-title">{t('seleziona-lingua') || 'Seleziona lingua'}</div>
            {languages.map((language) => (
              <button
                key={language.code}
                className={`mobile-language-option ${selectedLanguage.code === language.code ? 'active' : ''}`}
                onClick={() => selectLanguage(language)}
              >
                <span className="flag">{language.flag}</span>
                <span>{language.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
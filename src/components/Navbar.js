'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useTranslation } from '../context/TranslationContext';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [expandedSection, setExpandedSection] = useState(null);
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
    if (menu === 'cosa-facciamo') {
      setExpandedSection(null);
    }
  };

  const selectLanguage = (language) => {
    setSelectedLanguage(language);
    changeLanguage(language.code);
    setActiveDropdown(null);
  };

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const getRightPanelContent = () => {
    return {
      title: t('nostri-servizi'),
      description: t('servizi-description')
    };
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

        {/* Desktop Menu */}
        <div className="navbar-menu left-menu">
          {/* ... il resto del menu desktop come prima ... */}
        </div>

        {/* Right Side Icons */}
        <div className="navbar-actions">
          {/* Language selector */}
          {/* ... come prima ... */}
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

          <button
            className="mobile-menu-button"
            onClick={() => setExpandedSection(expandedSection === 'settori' ? null : 'settori')}
          >
            {t('settori')}
          </button>
          {expandedSection === 'settori' && (
            <div className="mobile-submenu">
              {settoriList.map((settore, index) => (
                <Link
                  key={index}
                  href={`/settori/${settore}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(settore)}
                </Link>
              ))}
            </div>
          )}

          <button
            className="mobile-menu-button"
            onClick={() => setExpandedSection(expandedSection === 'servizi' ? null : 'servizi')}
          >
            {t('servizi')}
          </button>
          {expandedSection === 'servizi' && (
            <div className="mobile-submenu">
              {serviziList.map((servizio, index) => (
                <Link
                  key={index}
                  href={`/servizi/${servizio}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(servizio)}
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
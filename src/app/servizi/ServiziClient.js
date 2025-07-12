'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useTranslation } from '../../context/TranslationContext';

export default function ServiziClient() {
  const { t } = useTranslation();
  const searchParams = useSearchParams();
  const [activeSection, setActiveSection] = useState('servizi');

  useEffect(() => {
    const section = searchParams.get('section');
    if (section === 'settori') {
      setActiveSection('settori');
    } else {
      setActiveSection('servizi');
    }
  }, [searchParams]);

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
    { key: 'servizio-reliability', href: '/servizi/reliability' },
    { key: 'servizio-maintenance-management', href: '#maintenance-management' },
    { key: 'servizio-asset-management', href: '#asset-management' },
    { key: 'servizio-cmms-digitalization', href: '#cmms-digitalization' },
    { key: 'servizio-industrial-safety', href: '#industrial-safety' },
    { key: 'servizio-management-systems', href: '#management-systems' },
    { key: 'servizio-training', href: '#training' }
  ];

  const renderContent = () => {
    if (activeSection === 'settori') {
      return (
        <div className="services-grid">
          <div className="services-column">
            {settoriList.slice(0, 4).map((settore, index) => (
              <Link href="#" key={index} className="service-item">
                {t(settore)}
              </Link>
            ))}
          </div>
          <div className="services-column">
            {settoriList.slice(4).map((settore, index) => (
              <Link href="#" key={index} className="service-item">
                {t(settore)}
              </Link>
            ))}
          </div>
        </div>
      );
    }

    if (activeSection === 'servizi') {
      return (
        <div className="services-grid">
          <div className="services-column">
            {serviziList.slice(0, Math.ceil(serviziList.length / 2)).map((servizio, index) => (
              <Link href={servizio.href} key={index} className="service-item">
                {t(servizio.key)}
              </Link>
            ))}
          </div>
          <div className="services-column">
            {serviziList.slice(Math.ceil(serviziList.length / 2)).map((servizio, index) => (
              <Link href={servizio.href} key={index} className="service-item">
                {t(servizio.key)}
              </Link>
            ))}
          </div>
        </div>
      );
    }
  };

  const getRightPanelContent = () => {
    if (activeSection === 'settori') {
      return {
        title: t('settori-title'),
        description: t('settori-description')
      };
    }
    return {
      title: t('servizi-title'),
      description: t('servizi-description')
    };
  };

  const rightPanel = getRightPanelContent();

  return (
    <>
      {/* Small Hero Section */}
      <section className="small-hero">
        <div className="hero-overlay">
          <h1>{activeSection === 'settori' ? t('settori') : t('servizi')}</h1>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="deloitte-layout">
        <div className="layout-container">
          
          {/* Sidebar Sinistra */}
          <div className="layout-sidebar">
            <div className="sidebar-menu">
              <Link 
                href="/overview" 
                className="sidebar-link"
              >
                {t('overview')}
              </Link>
              <button 
                onClick={() => setActiveSection('settori')}
                className={`sidebar-link sidebar-button ${activeSection === 'settori' ? 'active' : ''}`}
              >
                {t('settori')}
              </button>
              <button 
                onClick={() => setActiveSection('servizi')}
                className={`sidebar-link sidebar-button ${activeSection === 'servizi' ? 'active' : ''}`}
              >
                {t('servizi')}
              </button>
            </div>
          </div>

          {/* Area Centrale - Lista Dinamica */}
          <div className="layout-center">
            {renderContent()}
          </div>

          {/* Area Destra - Logo e Descrizione Dinamica */}
          <div className="layout-right">
            <div className="service-card">
              <div className="service-icon">
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
      </section>

      {/* Sezioni dettagliate dei servizi */}
      {activeSection === 'servizi' && (
        <div className="services-detail">
          
          {/* Maintenance Management Section */}
          <section id="maintenance-management" className="service-detail-section">
            <div className="service-content">
              <h2>{t('MAINTENANCE_MANAGEMENT')}</h2>
              <div className="text-block">
                <p>{t('maintenance-management-description')}</p>
                
                <p>{t('maintenance-management-services-intro')}</p>

                <ul>
                  <li>{t('maintenance-management-service-1')}</li>
                  <li>{t('maintenance-management-service-2')}</li>
                  <li>{t('maintenance-management-service-3')}</li>
                  <li>{t('maintenance-management-service-4')}</li>
                  <li>{t('maintenance-management-service-5')}</li>
                  <li>{t('maintenance-management-service-6')}</li>
                  <li>{t('maintenance-management-service-7')}</li>
                  <li>{t('maintenance-management-service-8')}</li>
                  <li>{t('maintenance-management-service-9')}</li>
                </ul>

                <p>{t('maintenance-management-conclusion')}</p>
              </div>
            </div>
          </section>

          {/* Placeholder per altri servizi */} 
          <section id="asset-management" className="service-detail-section">
            <div className="service-content">
              <h2>{t('servizio-asset-management')}</h2>
              <div className="text-block">
                <p>Contenuto per Asset Management - da implementare</p>
              </div>
            </div>
          </section>

          <section id="cmms-digitalization" className="service-detail-section">
            <div className="service-content">
              <h2>{t('servizio-cmms-digitalization')}</h2>
              <div className="text-block">
                <p>Contenuto per CMMS & Process digitalization - da implementare</p>
              </div>
            </div>
          </section>

          <section id="industrial-safety" className="service-detail-section">
            <div className="service-content">
              <h2>{t('servizio-industrial-safety')}</h2>
              <div className="text-block">
                <p>Contenuto per Industrial Safety - da implementare</p>
              </div>
            </div>
          </section>

          <section id="management-systems" className="service-detail-section">
            <div className="service-content">
              <h2>{t('servizio-management-systems')}</h2>
              <div className="text-block">
                <p>Contenuto per Management Systems - da implementare</p>
              </div>
            </div>
          </section>

          <section id="training" className="service-detail-section">
            <div className="service-content">
              <h2>{t('servizio-training')}</h2>
              <div className="text-block">
                <p>Contenuto per Training - da implementare</p>
              </div>
            </div>
          </section>

        </div>
      )}
    </>
  );
}
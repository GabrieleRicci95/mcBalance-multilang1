'use client';

import { useTranslation } from '../../../context/TranslationContext';
import { useEffect } from 'react';

export default function MaintenanceManagementPage() {
  const { t } = useTranslation();

  useEffect(() => {
    // Aggiungi classe per triggare animazioni
    document.body.classList.add('maintenance-management-loaded');

    return () => {
      document.body.classList.remove('maintenance-management-loaded');
    };
  }, []);

  return (
    <>
      {/* Hero Section con immagine di sfondo */}
      <section className="hero-background maintenance-management-hero">
        {/* Immagine di sfondo */}
        <div className="hero-background-image">
          <img src="/img/manutenzione.jpg" alt="Maintenance" />
        </div>
        
        {/* Overlay scuro */}
        <div className="hero-background-overlay"></div>
        
        {/* Contenuto sopra l'immagine */}
        <div className="hero-background-content" style={{
          maxWidth: '1400px',
          width: '100%',
          textAlign: 'left',
          padding: '80px 40px 40px 40px'
        }}>
          <div className="maintenance-text maintenance-animate-text">
            <h1>{t('MAINTENANCE_MANAGEMENT')}</h1>
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
    </>
  );
}
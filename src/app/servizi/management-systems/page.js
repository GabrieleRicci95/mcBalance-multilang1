'use client';

import { useTranslation } from '../../../context/TranslationContext';
import { useEffect } from 'react';

export default function ManagementSystemsPage() {
  const { t } = useTranslation();

  useEffect(() => {
    // Aggiungi classe per triggare animazioni
    document.body.classList.add('management-systems-loaded');

    return () => {
      document.body.classList.remove('management-systems-loaded');
    };
  }, []);

  return (
    <>
      {/* Hero Section con immagine di sfondo */}
      <section className="hero-background management-systems-hero">
        {/* Immagine di sfondo */}
        <div className="hero-background-image">
          <img src="/img/sicurezza.jpg" alt="Management Systems" />
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
          <div className="management-text management-animate-text">
            <h1>{t('MANAGEMENT_SYSTEMS')}</h1>
            <p>{t('management-systems-description')}</p>
            <p>{t('management-systems-services-intro')}</p>
            <ul>
              <li>{t('management-systems-service-1')}</li>
              <li>{t('management-systems-service-2')}</li>
            </ul>
            <p>{t('management-systems-conclusion')}</p>
          </div>
        </div>
      </section>
    </>
  );
}
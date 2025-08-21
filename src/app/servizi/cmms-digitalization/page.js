'use client';

import { useTranslation } from '../../../context/TranslationContext';
import { useEffect } from 'react';

export default function CMMSDigitalizationPage() {
  const { t } = useTranslation();

  useEffect(() => {
    // Aggiungi classe per triggare animazioni
    document.body.classList.add('cmms-digitalization-loaded');

    return () => {
      document.body.classList.remove('cmms-digitalization-loaded');
    };
  }, []);

  return (
    <>
      {/* Hero Section con immagine di sfondo */}
      <section className="hero-background cmms-digitalization-hero">
        {/* Immagine di sfondo */}
        <div className="hero-background-image">
          <img src="/img/digi.jpg" alt="CMMS Digitalization" />
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
          <div className="cmms-text cmms-animate-text">
            <h1>{t('CMMS_DIGITALIZATION')}</h1>
            <p>{t('cmms-digitalization-description')}</p>
            <p>{t('cmms-digitalization-services-intro')}</p>
            <ul>
              <li>{t('cmms-digitalization-service-1')}</li>
              <li>{t('cmms-digitalization-service-2')}</li>
              <li>{t('cmms-digitalization-service-3')}</li>
            </ul>
            <p>{t('cmms-digitalization-conclusion')}</p>
          </div>
        </div>
      </section>
    </>
  );
}
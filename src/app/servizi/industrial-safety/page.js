'use client';
import { useTranslation } from '../../../context/TranslationContext';
import { useEffect } from 'react';

export default function IndustrialSafetyPage() {
  const { t } = useTranslation();

  useEffect(() => {
    // Aggiungi classe per triggare animazioni
    document.body.classList.add('industrial-safety-loaded');

    return () => {
      document.body.classList.remove('industrial-safety-loaded');
    };
  }, []);

  return (
    <>
      {/* Hero Section con immagine di sfondo */}
      <section className="hero-background industrial-safety-hero">
        {/* Immagine di sfondo */}
        <div className="hero-background-image">
          <img src="/img/treno.jpg" alt="Industrial Safety" />
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
          <div className="industrial-safety-text industrial-safety-animate-text">
            <h2>{t('INDUSTRIAL_SAFETY')}</h2>
            <p>{t('industrial-safety-description')}</p>
            <p>{t('industrial-safety-services-intro')}</p>
            <ul>
              <li>{t('industrial-safety-service-1')}</li>
              <li>{t('industrial-safety-service-2')}</li>
              <li>{t('industrial-safety-service-3')}</li>
              <li>{t('industrial-safety-service-4')}</li>
              <li>{t('industrial-safety-service-5')}</li>
              <li>{t('industrial-safety-service-6')}</li>
              <li>{t('industrial-safety-service-7')}</li>
            </ul>
            <p>{t('industrial-safety-conclusion')}</p>
          </div>
        </div>
      </section>
    </>
  );
}
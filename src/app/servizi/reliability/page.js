'use client';
import { useTranslation } from '../../../context/TranslationContext';

export default function ReliabilityPage() {
  const { t } = useTranslation();

  return (
    <>
      {/* Hero Section con immagine di sfondo */}
      <section className="hero-background reliability-hero">
        {/* Immagine di sfondo */}
        <div className="hero-background-image">
          <img src="/img/joel-filipe.jpg" alt="Affidabilità" />
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
          <div className="reliability-text reliability-animate-text">
            <h1>{t('RELIABILITY')}</h1>
            <p>{t('reliability-description')}</p>
            <p>{t('reliability-services-intro')}</p>
            <ul>
              <li>{t('reliability-service-1')}</li>
              <li>{t('reliability-service-2')}</li>
              <li>{t('reliability-service-3')}</li>
              <li>{t('reliability-service-4')}</li>
              <li>{t('reliability-service-5')}</li>
              <li>{t('reliability-service-6')}</li>
            </ul>
            <p>{t('reliability-conclusion')}</p>
          </div>
        </div>
      </section>
    </>
  );
}
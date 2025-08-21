'use client';
import { useTranslation } from '../../context/TranslationContext';
import { useEffect } from 'react';

export default function OverviewPage() {
  const { t } = useTranslation();

  useEffect(() => {
    // Aggiungi classe per triggare animazioni
    document.body.classList.add('overview-loaded');

    return () => {
      document.body.classList.remove('overview-loaded');
    };
  }, []);

  return (
    <>
      {/* Hero Section con immagine di sfondo */}
      <section className="hero-background overview-hero">
        {/* Immagine di sfondo */}
        <div className="hero-background-image">
          <img src="/img/tech-cubes.jpg" alt="Technology visualization" />
        </div>
        
        {/* Overlay scuro */}
        <div className="hero-background-overlay"></div>
        
        {/* Contenuto sopra l'immagine */}
        <div className="hero-background-content" style={{
          maxWidth: '1400px',
          width: '100%',
          textAlign: 'left',
          padding: '80px 40px 40px 40px' // Più padding top per navbar
        }}>
          <div className="overview-text overview-animate-text">
            <h2>{t('overview-title')}</h2>
            <p>{t('overview-paragraph-1')}</p>
            <p>{t('overview-paragraph-2')}</p>
            <p>{t('overview-paragraph-3')}</p>
          </div>
        </div>
      </section>
    </>
  );
}
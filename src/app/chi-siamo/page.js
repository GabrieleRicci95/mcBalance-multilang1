'use client';

import { useTranslation } from '../../context/TranslationContext';
import { useEffect } from 'react';

export default function ChiSiamoPage() {
  const { t } = useTranslation();

  useEffect(() => {
    // Aggiungi classe per triggare animazioni
    document.body.classList.add('chi-siamo-loaded');

    return () => {
      document.body.classList.remove('chi-siamo-loaded');
    };
  }, []);

  return (
    <>
      {/* Hero Section con immagine di sfondo */}
      <section className="hero-background chi-siamo-hero">
        {/* Immagine di sfondo */}
        <div className="hero-background-image">
          <img src="/img/electric-hand.jpg" alt="Chi Siamo" />
        </div>
        
        {/* Overlay scuro */}
        <div className="hero-background-overlay"></div>
        
        {/* Contenuto sopra l'immagine - SENZA TITOLO */}
        <div className="hero-background-content" style={{
          maxWidth: '1400px',
          width: '100%',
          textAlign: 'left',
          padding: '80px 40px 40px 40px'
        }}>
          <div className="chi-siamo-text chi-siamo-animate-text">
            <p className="lead">{t('chi-siamo-text')}</p>
          </div>
        </div>
      </section>
    </>
  );
}
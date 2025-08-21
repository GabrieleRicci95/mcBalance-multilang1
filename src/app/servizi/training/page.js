'use client';

import { useTranslation } from '../../../context/TranslationContext';
import { useEffect } from 'react';

export default function TrainingPage() {
  const { t } = useTranslation();

  useEffect(() => {
    // Aggiungi classe per triggare animazioni
    document.body.classList.add('training-loaded');

    return () => {
      document.body.classList.remove('training-loaded');
    };
  }, []);

  return (
    <>
      {/* Hero Section con immagine di sfondo */}
      <section className="hero-background training-hero">
        {/* Immagine di sfondo */}
        <div className="hero-background-image">
          <img src="/img/luce.jpg" alt="Training" />
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
          <div className="training-text training-animate-text">
            <h1>{t('TRAINING')}</h1>
            <p>{t('training-description')}</p>
            <p>{t('training-services-intro')}</p>
            <ul>
              <li>{t('training-service-1')}</li>
              <li>{t('training-service-2')}</li>
              <li>{t('training-service-3')}</li>
              <li>{t('training-service-4')}</li>
            </ul>
            <p>{t('training-conclusion')}</p>
          </div>
        </div>
      </section>
    </>
  );
}
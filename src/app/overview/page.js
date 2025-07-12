
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
      {/* Small Hero Section */}
      <section className="small-hero overview-animate-hero">
        <div className="hero-overlay">
          <h1 className="overview-animate-title">{t('overview')}</h1>
        </div>
      </section>

      {/* Content Section */}
      <section id="overview-content" className="py-5">
        <div className="container">
          <div className="overview-layout">
            {/* Testo a sinistra */}
            <div className="overview-text overview-animate-text">
              <h2>{t('overview-title')}</h2>
              <p>{t('overview-paragraph-1')}</p>
              <p>{t('overview-paragraph-2')}</p>
              <p>{t('overview-paragraph-3')}</p>
            </div>
            {/* Immagine a destra */}
            {/* Immagine a destra */}
            <div className="overview-image-container overview-animate-image">
              <img
                src="/img/tech-cubes.jpg"  // <-- Metti qui il nome che hai dato all'immagine
                alt="Technology visualization"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
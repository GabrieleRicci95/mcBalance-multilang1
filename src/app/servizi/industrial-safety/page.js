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
      {/* Small Hero Section */}
      <section className="small-hero industrial-safety-animate-hero">
        <div className="hero-overlay">
          {/* Titolo rimosso dal hero come in overview */}
        </div>
      </section>

      {/* Content Section */}
      <section id="industrial-safety-content" className="py-5">
        <div className="container">
          <div className="industrial-safety-layout overview-layout">
            {/* Immagine a sinistra */}
            <div className="industrial-safety-image-container overview-image-container">
              <img
                src="/img/treno.jpg"
                alt="Industrial Safety"
              />
            </div>
            
            {/* Testo a destra */}
            <div className="industrial-safety-text overview-text">
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
        </div>
      </section>
    </>
  );
}
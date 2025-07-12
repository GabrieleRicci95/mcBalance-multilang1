'use client';

import { useTranslation } from '../../context/TranslationContext';
import { useEffect } from 'react';

export default function ChiSiamoPage() {
  const { t } = useTranslation();

  useEffect(() => {
    // Aggiungi classe per triggare animazioni
    document.body.classList.add('page-loaded');
    
    // Animazione al scroll per elementi aggiuntivi (opzionale)
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Osserva elementi con animazione scroll
    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach(el => observer.observe(el));

    return () => {
      document.body.classList.remove('page-loaded');
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Small Hero Section */}
      <section className="small-hero animate-hero">
        <div className="hero-overlay">
          <h1>{t('nostra-storia')}</h1>
        </div>
      </section>

      {/* Content Section */}
      <section id="chi-siamo-content" className="py-5">
        {/* Immagine centrata con dimensioni controllate */}
        <div className="chi-siamo-image-container animate-image">
          <img 
            src="/img/electric-hand.jpg" 
            alt="Electric energy visualization" 
            className="chi-siamo-image"
          />
        </div>
        
        {/* Testo in container normale */}
        <div className="container">
          <div className="chi-siamo-text-container">
            <div className="content-transparent animate-content">
              <p className="lead animate-fade-up delay-1">
                {t('chi-siamo-text')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
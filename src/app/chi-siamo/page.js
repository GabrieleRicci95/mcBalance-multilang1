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
      {/* Small Hero Section - Titolo rimosso */}
      <section className="small-hero animate-hero">
        <div className="hero-overlay">
          {/* Titolo rimosso */}
        </div>
      </section>

      {/* Content Section con immagine full width */}
      <section id="chi-siamo-content" style={{ 
        padding: 0, 
        position: 'relative',
        minHeight: '70vh',
        backgroundImage: 'url(/img/electric-hand.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}>
        {/* Overlay scuro per leggibilità */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0.3) 100%)'
        }}></div>
        
        {/* Container per il testo */}
        <div className="container" style={{ 
          position: 'relative', 
          minHeight: '70vh',
          display: 'flex',
          alignItems: 'center',
          padding: '80px 20px'
        }}>
          <div style={{
            maxWidth: '700px',
            color: 'white'
          }}>
            <p className="lead animate-fade-up delay-1" style={{ 
              fontSize: '1.3rem',
              lineHeight: '1.8',
              textShadow: '2px 2px 6px rgba(0,0,0,0.9)',
              fontWeight: '400'
            }}>
              {t('chi-siamo-text')}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
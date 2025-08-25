'use client';

import { useTranslation } from '../context/TranslationContext';
import { useEffect } from 'react';

export default function HomePage() {
  const { t } = useTranslation();

  useEffect(() => {
    // Aggiungi classe per triggare animazioni
    document.body.classList.add('homepage-loaded');

    // Animazione al scroll per la sezione Mission
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

    // Osserva gli elementi dopo un breve delay per assicurarsi che siano renderizzati
    setTimeout(() => {
      const paragraphs = document.querySelectorAll('.mission-text p');
      paragraphs.forEach(p => observer.observe(p));
    }, 100);

    return () => {
      document.body.classList.remove('homepage-loaded');
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Hero Section con immagine di sfondo full */}
      <section className="hero-fullscreen-bg" style={{ 
        height: '100vh', 
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#000000',
        overflow: 'hidden'
      }}>
        {/* Immagine di sfondo assoluta */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1
        }}>
          <img 
            src="/img/earth-space.png" 
            alt="Earth from space showing city lights"
            style={{ 
              width: '120%',
              height: '120%',
              objectFit: 'contain',
              objectPosition: 'center',
              
            }}
          />
        </div>

        {/* Overlay leggero per migliorare leggibilità */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 60%, transparent 100%)',
          zIndex: 2
        }}></div>

        {/* Testo a sinistra sopra l'immagine */}
        <div style={{
          position: 'relative',
          zIndex: 3,
          paddingLeft: '5rem',
          maxWidth: '800px'
        }}>
          <h1 style={{ 
            fontSize: '3.5rem', 
            marginBottom: '1.5rem',
            fontWeight: '700',
            color: 'white',
            textShadow: '2px 2px 6px rgba(0,0,0,0.9)'
          }}>
            {t('hero-title')}
          </h1>
          <p style={{ 
            fontSize: '1.5rem',
            lineHeight: '1.8',
            color: 'white',
            textShadow: '1px 1px 4px rgba(0,0,0,0.9)'
          }}>
            {t('hero-subtitle')}
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="mission-full-section">
        {/* Barra colorata con titolo */}
        <div className="competenze-bar">
          <h1>{t('mission-title')}</h1>
        </div>
        
        {/* Contenuto con sfondo bianco */}
        <div className="mission-white-bg">
          <div className="container">
            <div className="mission-content-wrapper">
              <div className="mission-text">
                <p>
                  <strong>McBalance.net</strong> {t('mission-p1')}
                </p>
                
                <p>
                  {t('mission-p2').split(', inteso come ricerca continua di una condizione che garantisce armonia tra i vari elementi che sono coinvolti in un progetto. Il secondo è la').map((part, index) => {
                    if (index === 0) {
                      return (
                        <span key={index}>
                          {part} <strong>{t('mission-equilibrium')}</strong>{', inteso come ricerca continua di una condizione che garantisce armonia tra i vari elementi che sono coinvolti in un progetto. Il secondo è la '}
                        </span>
                      );
                    }
                    return <span key={index}><strong>{t('mission-network')}</strong>{part}</span>;
                  })}
                </p>
                
                <p>
                  {t('mission-p3')}
                </p>
                
                <p>
                  <strong>{t('mission-we-are-here')}</strong>{t('mission-p4')}
                </p>
                
                <p>
                  {t('mission-p5')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
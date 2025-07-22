'use client';

import { useTranslation } from '../context/TranslationContext';
import { useEffect } from 'react';

export default function HomePage() {
  const { t } = useTranslation();

  // Animazione al scroll per la sezione Mission
  useEffect(() => {
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

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Hero Section with Image */}
      <section className="hero-with-image">
        <div className="container">
          <div className="hero-content-wrapper">
            {/* Testo centrato */}
            <div className="hero-text-center">
              <h1>{t('hero-title')}</h1>
              <p>{t('hero-subtitle')}</p>
            </div>
            
            {/* Immagine affiancata */}
            <div className="hero-image">
              <img 
                src="/img/crystal-sphere.jpg" 
                alt="Crystal sphere reflecting future" 
                className="sphere-image"
              />
            </div>
          </div>
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
'use client';
import { useTranslation } from '../../../context/TranslationContext';
import { useEffect } from 'react';

export default function AssetManagementPage() {
  const { t } = useTranslation();

  useEffect(() => {
    // Aggiungi classe per triggare animazioni
    document.body.classList.add('asset-management-loaded');

    return () => {
      document.body.classList.remove('asset-management-loaded');
    };
  }, []);

  return (
    <>
      {/* Hero Section con immagine di sfondo */}
      <section className="hero-background asset-management-hero">
        {/* Immagine di sfondo */}
        <div className="hero-background-image">
          <img src="/img/marc-olivier.jpg" alt="Asset Management" />
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
          <div className="asset-management-text asset-management-animate-text">
            <h2>{t('ASSET_MANAGEMENT')}</h2>
            <p>{t('asset-management-description')}</p>
            <p>{t('asset-management-services-intro')}</p>
            <ul>
              <li>{t('asset-management-service-1')}</li>
              <li>{t('asset-management-service-2')}</li>
              <li>{t('asset-management-service-3')}</li>
              <li>{t('asset-management-service-4')}</li>
            </ul>
            <p>{t('asset-management-conclusion')}</p>
          </div>
        </div>
      </section>
    </>
  );
}
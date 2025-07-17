'use client';
import { useTranslation } from '../../../context/TranslationContext';
import { useEffect } from 'react';

export default function AssetManagementPage() {
  const { t } = useTranslation();

  useEffect(() => {
    // Aggiungi classe per triggare animazioni
    document.body.classList.add('page-loaded');

    return () => {
      document.body.classList.remove('page-loaded');
    };
  }, []);

  return (
    <>
      {/* Small Hero Section */}
      <section className="small-hero">
        <div className="hero-overlay">
          {/* Titolo rimosso */}
        </div>
      </section>

      {/* Content Section */}
      <section id="asset-management-content" className="py-5">
        <div className="container">
          <div className="overview-layout">
            {/* Testo a sinistra */}
            <div className="overview-text">
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
            
            {/* Immagine a destra */}
            <div className="overview-image-container">
              <img
                src="/img/marc-olivier.jpg"
                alt="Asset Management"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
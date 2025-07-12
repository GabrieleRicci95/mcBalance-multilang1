'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from '../../context/TranslationContext';

export default function SettoriPage() {
  const { t } = useTranslation();
  const pathname = usePathname();

  return (
    <>
      {/* Small Hero Section */}
      <section className="small-hero">
        <div className="hero-overlay">
          <h1>{t('settori')}</h1>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="deloitte-layout">
        <div className="layout-container">
          
          {/* Sidebar Sinistra */}
          <div className="layout-sidebar">
            <div className="sidebar-menu">
              <Link 
                href="/overview" 
                className={`sidebar-link ${pathname === '/overview' ? 'active' : ''}`}
              >
                {t('overview')}
              </Link>
              <Link 
                href="/settori" 
                className={`sidebar-link ${pathname === '/settori' ? 'active' : ''}`}
              >
                {t('settori')}
              </Link>
              <Link 
                href="/servizi" 
                className={`sidebar-link ${pathname === '/servizi' ? 'active' : ''}`}
              >
                {t('servizi')}
              </Link>
            </div>
          </div>

          {/* Area Centrale - Lista Settori */}
          <div className="layout-center">
            <div className="services-grid">
              <div className="services-column">
                <Link href="#" className="service-item">{t('settore-pharma')}</Link>
                <Link href="#" className="service-item">{t('settore-consumer')}</Link>
                <Link href="#" className="service-item">{t('settore-food')}</Link>
                <Link href="#" className="service-item">{t('settore-oil-gas')}</Link>
              </div>
              <div className="services-column">
                <Link href="#" className="service-item">{t('settore-medical')}</Link>
                <Link href="#" className="service-item">{t('settore-educations')}</Link>
                <Link href="#" className="service-item">{t('settore-compliance')}</Link>
                <Link href="#" className="service-item">{t('settore-standards')}</Link>
              </div>
            </div>
          </div>

          {/* Area Destra - Logo e Descrizione */}
          <div className="layout-right">
            <div className="service-card">
              <div className="service-icon">
                <div className="mcbalance-icon">
                  <div className="icon-square red"></div>
                  <div className="icon-square red"></div>
                  <div className="icon-square red"></div>
                </div>
              </div>
              <h3>{t('settori-title')}</h3>
              <p>{t('settori-description')}</p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
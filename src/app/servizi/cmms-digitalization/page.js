'use client';

import { useTranslation } from '../../../context/TranslationContext';

export default function CMMSDigitalizationPage() {
  const { t } = useTranslation();

  return (
    <section className="page-content cmms-layout">
      <div className="cmms-text fade-in-left">
        <h1>{t('CMMS_DIGITALIZATION')}</h1>
        <div className="text-block">
          <p>{t('cmms-digitalization-description')}</p>

          <p>{t('cmms-digitalization-services-intro')}</p>

          <ul>
            <li>{t('cmms-digitalization-service-1')}</li>
            <li>{t('cmms-digitalization-service-2')}</li>
            <li>{t('cmms-digitalization-service-3')}</li>
          </ul>
        </div>
        <p>{t('cmms-digitalization-conclusion')}</p>
      </div>
      <div className="cmms-image fade-in-right">
        <img src="/img/digi.jpg" alt="CMMS Digitalization" />
      </div>
    </section>
  );
}
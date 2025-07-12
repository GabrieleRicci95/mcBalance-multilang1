'use client';

import { useTranslation } from '../../../context/TranslationContext';

export default function ReliabilityPage() {
  const { t } = useTranslation();

  return (
    <section className="page-content">
      <h1>{t('RELIABILITY')}</h1>
      <div className="text-block">
        <p>{t('reliability-description')}</p>
        
        <p>{t('reliability-services-intro')}</p>

        <ul>
          <li>{t('reliability-service-1')}</li>
          <li>{t('reliability-service-2')}</li>
          <li>{t('reliability-service-3')}</li>
          <li>{t('reliability-service-4')}</li>
          <li>{t('reliability-service-5')}</li>
          <li>{t('reliability-service-6')}</li>
        </ul>

        <p>
          {t('reliability-conclusion')}
        </p>
      </div>
    </section>
  );
}
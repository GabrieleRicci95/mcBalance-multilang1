'use client';

import { useTranslation } from '../../../context/TranslationContext';

export default function ManagementSystemsPage() {
  const { t } = useTranslation();

  return (
    <section className="page-content">
      <h1>{t('MANAGEMENT_SYSTEMS')}</h1>
      <div className="text-block">
        <p>{t('management-systems-description')}</p>
        
        <p>{t('management-systems-services-intro')}</p>

        <ul>
          <li>{t('management-systems-service-1')}</li>
          <li>{t('management-systems-service-2')}</li>
        </ul>

        <p>{t('management-systems-conclusion')}</p>
      </div>
    </section>
  );
}
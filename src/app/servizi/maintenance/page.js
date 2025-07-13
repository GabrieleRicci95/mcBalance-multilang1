'use client';

import { useTranslation } from '../../../context/TranslationContext';

export default function MaintenanceManagementPage() {
  const { t } = useTranslation();

  return (
    <section className="page-content maintenance-layout">
      <div className="maintenance-image fade-in-right">
        <img src="/img/manutenzione.jpg" alt="Maintenance" />
      </div>
      <div className="maintenance-text fade-in-left">
        <h1>{t('MAINTENANCE_MANAGEMENT')}</h1>
        <p>{t('maintenance-management-description')}</p>

        <p>{t('maintenance-management-services-intro')}</p>

        <ul>
          <li>{t('maintenance-management-service-1')}</li>
          <li>{t('maintenance-management-service-2')}</li>
          <li>{t('maintenance-management-service-3')}</li>
          <li>{t('maintenance-management-service-4')}</li>
          <li>{t('maintenance-management-service-5')}</li>
          <li>{t('maintenance-management-service-6')}</li>
          <li>{t('maintenance-management-service-7')}</li>
          <li>{t('maintenance-management-service-8')}</li>
          <li>{t('maintenance-management-service-9')}</li>
        </ul>

        <p>{t('maintenance-management-conclusion')}</p>
      </div>
    </section>
  );
}
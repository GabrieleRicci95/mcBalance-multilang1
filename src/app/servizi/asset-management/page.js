'use client';

import { useTranslation } from '../../../context/TranslationContext';

export default function AssetManagementPage() {
  const { t } = useTranslation();

  return (
    <section className="page-content">
      <h1>{t('ASSET_MANAGEMENT')}</h1>
      <div className="text-block">
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
    </section>
  );
}
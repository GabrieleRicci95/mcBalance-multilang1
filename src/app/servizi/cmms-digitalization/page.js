'use client';

import { useTranslation } from '../../../context/TranslationContext';

export default function CMMSDigitalizationPage() {
  const { t } = useTranslation();

  return (
    <section className="page-content">
      <h1>{t('CMMS_DIGITALIZATION')}</h1>
      <div className="text-block">
        <p>{t('cmms-digitalization-description')}</p>
        
        <p>{t('cmms-digitalization-services-intro')}</p>

        <ul>
          <li>{t('cmms-digitalization-service-1')}</li>
          <li>{t('cmms-digitalization-service-2')}</li>
          <li>{t('cmms-digitalization-service-3')}</li>
        </ul>

        <p>{t('cmms-digitalization-conclusion')}</p>
      </div>
    </section>
  );
}
'use client';

import { useTranslation } from '../../../context/TranslationContext';

export default function IndustrialSafetyPage() {
  const { t } = useTranslation();

  return (
    <section className="pageContent">
      <div className="imageBlock">
        <img
          src="/img/eggzy-pallet-kmmEDa4Jm5Y-unsplash.jpg"
          alt="Industrial Safety"
        />
      </div>
      <div className="textBlock">
        <h1>{t('INDUSTRIAL_SAFETY')}</h1>
        <p>{t('industrial-safety-description')}</p>

        <p>{t('industrial-safety-services-intro')}</p>

        <ul>
          <li>{t('industrial-safety-service-1')}</li>
          <li>{t('industrial-safety-service-2')}</li>
          <li>{t('industrial-safety-service-3')}</li>
          <li>{t('industrial-safety-service-4')}</li>
          <li>{t('industrial-safety-service-5')}</li>
          <li>{t('industrial-safety-service-6')}</li>
          <li>{t('industrial-safety-service-7')}</li>
        </ul>

        <p>{t('industrial-safety-conclusion')}</p>
      </div>
    </section>
  );
}
'use client';

import { useTranslation } from '../../../context/TranslationContext';

export default function TrainingPage() {
  const { t } = useTranslation();

  return (
    <section className="page-content training-layout">
      <div className="training-text">
        <h1>{t('TRAINING')}</h1>
        <p>{t('training-description')}</p>

        <p>{t('training-services-intro')}</p>

        <ul>
          <li>{t('training-service-1')}</li>
          <li>{t('training-service-2')}</li>
          <li>{t('training-service-3')}</li>
          <li>{t('training-service-4')}</li>
        </ul>

        <p>{t('training-conclusion')}</p>
      </div>
      <div className="training-image">
        <img src="/img/luce.jpg" alt="Training" />
      </div>
    </section>
  );
}
'use client';

import { useState } from 'react';
import { useTranslation } from '../../context/TranslationContext';

export default function ContactPage() {
  const { t } = useTranslation();

  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState(false);
  const [err, setErr] = useState('');

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setOk(false);
    setErr('');

    const fd = new FormData(e.currentTarget);
    const body = {
      name: fd.get('name')?.toString() || '',
      email: fd.get('email')?.toString() || '',
      company: fd.get('company')?.toString() || '',
      subject: fd.get('subject')?.toString() || '',
      message: fd.get('message')?.toString() || '',
      consent: fd.get('consent') === 'on',
      // anti-spam
      hp_website: fd.get('hp_website')?.toString() || '',
      ts: Date.now(),
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data?.error || 'Mail error');
      setOk(true);
      e.currentTarget.reset();
    } catch (e) {
      setErr(t('contact-error') || 'Errore di invio');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="contact-page">
      <div className="contact-container">
        <header className="contact-heading">
          <h1>{t('contattaci') || 'Contattaci'}</h1>
          <p>{t('contact-description') || 'Compila il modulo qui sotto: ti risponderemo al più presto.'}</p>
        </header>

        <div className="contact-card">
          <form onSubmit={onSubmit} noValidate>
            {/* honeypot nascosto */}
            <input
              type="text"
              name="hp_website"
              className="visually-hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            <div className="contact-grid">
              <div className="form-group form-row-2">
                <label htmlFor="name">{t('contact-name') || 'Nome e cognome'}</label>
                <input id="name" name="name" type="text" required placeholder="Mario Rossi" />
              </div>

              <div className="form-group">
                <label htmlFor="email">{t('contact-email') || 'Email'}</label>
                <input id="email" name="email" type="email" required placeholder="nome@azienda.it" />
              </div>

              <div className="form-group">
                <label htmlFor="company">{t('contact-company') || 'Azienda (opzionale)'}</label>
                <input id="company" name="company" type="text" placeholder="McBalance Srl" />
              </div>

              <div className="form-group form-row-2">
                <label htmlFor="subject">{t('contact-subject') || 'Oggetto'}</label>
                <input id="subject" name="subject" type="text" required placeholder="Richiesta informazioni" />
              </div>

              <div className="form-group form-row-2">
                <label htmlFor="message">{t('contact-message') || 'Messaggio'}</label>
                <textarea id="message" name="message" required placeholder="Scrivi qui il tuo messaggio..." />
              </div>
            </div>

            <div className="form-group form-row-2" style={{ marginTop: 10 }}>
              <label className="checkbox">
                <input id="consent" name="consent" type="checkbox" required />
                <span>
                  {t('contact-consent') ||
                    'Acconsento al trattamento dei dati secondo l’informativa privacy.'}
                </span>
              </label>
            </div>

            <div className="actions">
              <button className="btn btn-primary" type="submit" disabled={loading}>
                {loading ? '...' : t('contact-send') || 'Invia'}
              </button>

              <div className="form-hint">
                {t('contact-or-email') || 'Oppure scrivici direttamente a'}{' '}
                <a href="mailto:info@mcbalance.net">info@mcbalance.net</a>
              </div>
            </div>

            {/* messaggi stato */}
            {ok && <div className="status success-msg">{t('contact-success') || 'Grazie! Messaggio inviato.'}</div>}
            {err && <div className="status error-msg">{err}</div>}
          </form>
        </div>
      </div>
    </section>
  );
}
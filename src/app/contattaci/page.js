'use client';

import { useState } from 'react';
import { useTranslation } from '../../context/TranslationContext';

export default function ContactPage() {
  const { t } = useTranslation();

  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState(false);
  const [err, setErr] = useState('');
  const [formKey, setFormKey] = useState(0);

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setOk(false);
    setErr('');

    const consentCheckbox = e.currentTarget.querySelector('#consent');
    if (!consentCheckbox || !consentCheckbox.checked) {
      setErr('Devi accettare il trattamento dei dati per continuare.');
      setLoading(false);
      return;
    }

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }

      const data = await response.json();
      console.log('Web3Forms response:', data);

      if (data.success === true || data.success === 'true') {
        setOk(true);
        setErr('');
        setFormKey(prev => prev + 1);
      } else {
        throw new Error(data.message || 'Errore durante l\'invio del modulo');
      }
    } catch (error) {
      console.error('Errore invio form:', error);
      setOk(false);
      setErr(t('contact-error') || 'Errore di invio. Riprova più tardi.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Hero Section con immagine di sfondo - NASCOSTA */}
      <section className="contact-hero hero-background">
        <div className="hero-background-image">
          <img src="/img/sfondo_contatti.jpg" alt="McBalance Office" />
        </div>
        <div className="hero-background-overlay"></div>
        <div className="hero-background-content">
          <div className="contact-container">
            <header className="contact-heading">
              <h1>{t('contattaci') || 'Contattaci'}</h1>
              <p>{t('contact-description') || 'Compila il modulo qui sotto, ti risponderemo al più presto.'}</p>
            </header>
          </div>
        </div>
      </section>

      {/* Form Section con titolo interno */}
      <section className="contact-page">
        <div className="contact-container">
          <div className="contact-card">
            {/* Titolo all'interno del form - ALLINEATO A SINISTRA */}
            <div className="contact-card-header">
              <h1>{t('contattaci') || 'Contattaci'}</h1>
              <p>{t('contact-description') || 'Compila il modulo qui sotto, ti risponderemo al più presto.'}</p>
            </div>

            <form onSubmit={onSubmit} noValidate key={formKey}>
              <input type="hidden" name="access_key" value="2a8614bc-ea4d-4ff2-80eb-3c9160ceccf3" />
              <input type="hidden" name="subject" value="Nuovo messaggio dal sito McBalance" />
              <input type="hidden" name="from_name" value="Sito McBalance" />
              <input type="checkbox" name="botcheck" className="hidden" style={{display: 'none'}} />

              <div className="contact-grid">
                <div className="form-group form-row-2">
                  <label htmlFor="name">{t('contact-name') || 'Nome e cognome'}</label>
                  <input 
                    id="name" 
                    name="name" 
                    type="text" 
                    required 
                    placeholder={t('contact-name-placeholder') || 'Mario Rossi'} 
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">{t('contact-email') || 'Email'}</label>
                  <input 
                    id="email" 
                    name="email" 
                    type="email" 
                    required 
                    placeholder={t('contact-email-placeholder') || 'nome@azienda.it'} 
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="company">{t('contact-company') || 'Azienda (opzionale)'}</label>
                  <input 
                    id="company" 
                    name="company" 
                    type="text" 
                    placeholder={t('contact-company-placeholder') || 'McBalance Srl'} 
                  />
                </div>

                <div className="form-group form-row-2">
                  <label htmlFor="oggetto">{t('contact-subject') || 'Oggetto'}</label>
                  <input 
                    id="oggetto" 
                    name="oggetto" 
                    type="text" 
                    required 
                    placeholder={t('contact-subject-placeholder') || 'Richiesta informazioni'} 
                  />
                </div>

                <div className="form-group form-row-2">
                  <label htmlFor="message">{t('contact-message') || 'Messaggio'}</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    required 
                    placeholder={t('contact-message-placeholder') || 'Scrivi qui il tuo messaggio...'} 
                  />
                </div>
              </div>

              <div className="form-group form-row-2" style={{ marginTop: 10 }}>
                <label className="checkbox">
                  <input 
                    id="consent" 
                    name="consent" 
                    type="checkbox" 
                    required
                    onChange={(e) => {
                      if (e.target.checked && err.includes('consenso')) {
                        setErr('');
                      }
                    }}
                  />
                  <span>
                    {t('contact-consent') ||
                      'Acconsento al trattamento dei dati secondo l\'informativa privacy.'}
                  </span>
                </label>
              </div>

              <div className="actions">
                <button className="btn btn-primary" type="submit" disabled={loading}>
                  {loading ? 'Invio in corso...' : t('contact-send') || 'Invia'}
                </button>

                <div className="form-hint">
                  {t('contact-or-email') || 'Oppure scrivici direttamente a'}{' '}
                  <a href="mailto:info@mcbalance.net">info@mcbalance.net</a>
                </div>
              </div>

              {ok && !err && (
                <div className="status success-msg">
                  {t('contact-success') || 'Grazie! Il tuo messaggio è stato inviato con successo.'}
                </div>
              )}
              {err && !ok && (
                <div className="status error-msg">{err}</div>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
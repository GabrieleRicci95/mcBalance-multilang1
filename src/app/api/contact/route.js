export const runtime = 'nodejs';

import nodemailer from 'nodemailer';

const isEmail = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(e || '').toLowerCase());
const json = (obj, status = 200) =>
  new Response(JSON.stringify(obj), {
    status,
    headers: { 'content-type': 'application/json' },
  });

export async function POST(request) {
  try {
    const {
      name,
      email,
      company,
      subject,
      message,
      consent,
      hp_website,
      ts,
    } = await request.json();

    // Anti-spam: honeypot + tempo minimo
    if (hp_website && String(hp_website).trim() !== '') {
      return json({ error: 'Spam detected' }, 400);
    }
    if (!ts || Date.now() - Number(ts) < 3000) {
      return json({ error: 'Too fast' }, 400);
    }

    // Sanitizzazione e limiti
    const sanitize = (s = '', max = 500) =>
      String(s ?? '').replace(/[<>]/g, '').slice(0, max);

    const nameS = sanitize(name, 150);
    const emailS = String(email ?? '').trim();
    const companyS = sanitize(company, 150);
    const subjectS = sanitize(subject, 150);
    const messageS = sanitize(message, 5000);

    // Validazioni base
    if (!nameS || !emailS || !subjectS || !messageS) {
      return json({ error: 'Missing fields' }, 400);
    }
    if (!isEmail(emailS)) {
      return json({ error: 'Invalid email' }, 400);
    }
    if (!consent) {
      return json({ error: 'Consent required' }, 400);
    }

    // Transport SMTP (Aruba: 587 STARTTLS → secure:false; 465 SSL → secure:true)
    const port = Number(process.env.SMTP_PORT || 587);
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure: port === 465, // true solo con 465 (SSL)
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      // facoltativo: timeout: 10000,
      // facoltativo: requireTLS: true, // se vuoi forzare STARTTLS su 587
    });

    const adminTo = process.env.CONTACT_TO || process.env.SMTP_USER;
    const fromAddr = process.env.CONTACT_FROM || process.env.SMTP_USER;

    // Email verso di te
    await transporter.sendMail({
      from: fromAddr,
      to: adminTo,
      subject: `[Sito] ${subjectS}`,
      replyTo: emailS,
      html: `
        <h2>Nuovo contatto dal sito</h2>
        <p><strong>Nome:</strong> ${nameS}</p>
        <p><strong>Email:</strong> ${emailS}</p>
        <p><strong>Azienda:</strong> ${companyS || '-'}</p>
        <p><strong>Oggetto:</strong> ${subjectS}</p>
        <p><strong>Messaggio:</strong><br/>${messageS.replace(/\n/g,'<br/>')}</p>
      `,
    });

    // Auto-risposta all’utente
    await transporter.sendMail({
      from: fromAddr,
      to: emailS,
      subject: 'Abbiamo ricevuto il tuo messaggio',
      html: `
        <p>Ciao ${nameS},</p>
        <p>grazie per averci contattato. Ti risponderemo al più presto.</p>
        <hr/>
        <p><strong>Oggetto:</strong> ${subjectS}</p>
        <p><strong>Messaggio:</strong><br/>${messageS.replace(/\n/g,'<br/>')}</p>
      `,
    });

    return json({ ok: true });
  } catch (e) {
    console.error(e);
    return json({ error: 'Mail error' }, 500);
  }
}
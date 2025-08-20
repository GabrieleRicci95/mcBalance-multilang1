'use client';

import { useEffect } from 'react';

export default function ComitatoPage() {
  useEffect(() => {
    document.body.classList.add('page-loaded');
  }, []);

  // Array di esempio vuoto per ora
  const membriComitato = [
    { nome: '', ruolo: '', img: '' },
    { nome: '', ruolo: '', img: '' },
    { nome: '', ruolo: '', img: '' },
    { nome: '', ruolo: '', img: '' },
    { nome: '', ruolo: '', img: '' },
    { nome: '', ruolo: '', img: '' },
  ];

  return (
    <section className="section">
      <div className="container">
        <h1 className="page-title">Comitato tecnico scientifico e di indirizzo</h1>
        <div className="comitato-grid">
          {membriComitato.map((membro, index) => (
            <div key={index} className="comitato-card">
              <div className="comitato-img-placeholder" />
              <div className="comitato-info">
                <strong>{membro.nome || 'Nome Cognome'}</strong>
                <p>{membro.ruolo || 'Ruolo'}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
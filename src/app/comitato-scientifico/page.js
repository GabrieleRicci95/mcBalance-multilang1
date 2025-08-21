'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
// import './style.css'; // se usi un CSS condiviso

const membri = [
  {
    nome: 'Nome Cognome',
    ruolo: 'Titolo/Ruolo',
    foto: '/img/no_photo.png' // immagine temporanea
  },
  {
    nome: 'Nome Cognome',
    ruolo: 'Titolo/Ruolo',
    foto: '/img/no_photo.png'
  },
  {
    nome: 'Nome Cognome',
    ruolo: 'Titolo/Ruolo',
    foto: '/img/no_photo.png'
  },
  {
    nome: 'Nome Cognome',
    ruolo: 'Titolo/Ruolo',
    foto: '/img/no_photo.png'
  },
  {
    nome: 'Nome Cognome',
    ruolo: 'Titolo/Ruolo',
    foto: '/img/no_photo.png'
  },
  {
    nome: 'Nome Cognome',
    ruolo: 'Titolo/Ruolo',
    foto: '/img/no_photo.png'
  },
    {
    nome: 'Nome Cognome',
    ruolo: 'Titolo/Ruolo',
    foto: '/img/no_photo.png'
  },
  {
    nome: 'Nome Cognome',
    ruolo: 'Titolo/Ruolo',
    foto: '/img/no_photo.png'
  },
  {
    nome: 'Nome Cognome',
    ruolo: 'Titolo/Ruolo',
    foto: '/img/no_photo.png'
  },
  {
    nome: 'Nome Cognome',
    ruolo: 'Titolo/Ruolo',
    foto: '/img/no_photo.png'
  },
  
  // Aggiungi altri membri qui...
];

export default function ComitatoScientificoPage() {
  useEffect(() => {
    document.body.classList.add('no-title-line');
    return () => {
      document.body.classList.remove('no-title-line');
    };
  }, []);
  return (
    <section style={{ padding: '60px 20px', background: '#000' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '10px', color: '#fff' }}>
          Comitato Tecnico Scientifico
        </h1>
        <p style={{ color: '#ccc' }}>Questi sono i membri del comitato</p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '30px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}
      >
        {membri.map((membro, index) => (
          <div
            key={index}
            style={{
              background: '#111',
              padding: '20px',
              borderRadius: '12px',
              textAlign: 'center',
              boxShadow: '0 4px 10px rgba(255, 255, 255, 0.05)'
            }}
          >
            <Image
              src={membro.foto}
              alt={membro.nome}
              width={100}
              height={100}
              style={{
                borderRadius: '50%',
                objectFit: 'cover'
              }}
            />
            <h3 style={{ marginTop: '15px', color: '#fff' }}>{membro.nome}</h3>
            <p style={{ color: '#bbb' }}>{membro.ruolo}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
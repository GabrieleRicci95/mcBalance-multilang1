'use client';

import { useState } from 'react';

export default function LanguageSelector({ selectedLang = 'it', onChange }) {
  const [open, setOpen] = useState(false);

  const languages = [
    { code: 'it', label: 'IT - Italiano' },
    { code: 'en', label: 'EN - English' }
  ];

  return (
    <div className="language-selector" style={{ position: 'relative', marginLeft: '1rem' }}>
      {/* Bottone principale 🌐 */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          background: 'none',
          border: '1px solid white',
          borderRadius: '20px',
          padding: '0.25rem 0.75rem',
          cursor: 'pointer',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          fontSize: '0.9rem',
          transition: 'background 0.3s'
        }}
        onMouseOver={(e) => (e.target.style.background = 'rgba(255,255,255,0.2)')}
        onMouseOut={(e) => (e.target.style.background = 'none')}
      >
        🌐 {String(selectedLang || 'IT').toUpperCase()}
      </button>

      {open && (
        <ul
          style={{
            position: 'absolute',
            top: '100%',
            right: 0,
            marginTop: '0.25rem',
            background: '#fff',
            color: '#333',
            listStyle: 'none',
            padding: '0.5rem 0',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            minWidth: '150px',
            zIndex: 9999
          }}
        >
          {languages.map((lang) => (
            <li key={lang.code}>
              <button
                onClick={() => {
                  onChange(lang.code);
                  setOpen(false);
                }}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  width: '100%',
                  textAlign: 'left',
                  padding: '0.5rem 1rem',
                  fontSize: '0.9rem',
                  color: '#333',
                  transition: 'background 0.2s',
                  display: 'block'
                }}
                onMouseOver={(e) => (e.target.style.background = '#f0f0f0')}
                onMouseOut={(e) => (e.target.style.background = 'none')}
              >
                {lang.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
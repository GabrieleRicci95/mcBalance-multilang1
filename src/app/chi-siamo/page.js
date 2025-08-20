'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from '../../../src/context/TranslationContext';

export default function Navbar() {
  const pathname = usePathname();
  const { t } = useTranslation();

  return (
    <header className="navbar">
      <div className="logo">
        <Link href="/">
          <span>McBalance</span>
        </Link>
      </div>
      
      <nav className="main-nav">
        <ul>
          {/* Chi siamo - con submenu */}
          <li className="nav-item dropdown">
            <span className="nav-link">{t('chi-siamo')}</span>
            <ul className="dropdown-menu">
              <li className={`sidebar-item ${pathname === '/chi-siamo' ? 'active' : ''}`}>
                <Link href="/chi-siamo">{t('la-nostra-storia')}</Link>
              </li>
              <li className={`sidebar-item ${pathname === '/chi-siamo/comitato' ? 'active' : ''}`}>
                <Link href="/chi-siamo/comitato">{t('comitato')}</Link>
              </li>
            </ul>
          </li>

          {/* Cosa facciamo - puoi adattarlo allo stesso modo */}
          <li className="nav-item dropdown">
            <span className="nav-link">{t('cosa-facciamo')}</span>
            <ul className="dropdown-menu">
              <li className={`sidebar-item ${pathname === '/servizi' ? 'active' : ''}`}>
                <Link href="/servizi">{t('servizi')}</Link>
              </li>
              <li className={`sidebar-item ${pathname === '/settori' ? 'active' : ''}`}>
                <Link href="/settori">{t('settori')}</Link>
              </li>
              <li className={`sidebar-item ${pathname === '/overview' ? 'active' : ''}`}>
                <Link href="/overview">{t('overview')}</Link>
              </li>
            </ul>
          </li>

          {/* Contattaci */}
          <li className={`nav-item ${pathname === '/contattaci' ? 'active' : ''}`}>
            <Link href="/contattaci">{t('contattaci')}</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
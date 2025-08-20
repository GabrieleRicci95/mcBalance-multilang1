import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { TranslationProvider } from '../context/TranslationContext';

export const metadata = {
  title: 'McBalance',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <head>
        <link rel="stylesheet" href="/styles/style.css" />
        <link rel="icon" href="/favicon.ico" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon.ico" type="image/png" sizes="16x16" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body>
        <TranslationProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </TranslationProvider>
      </body>
    </html>
  );
}
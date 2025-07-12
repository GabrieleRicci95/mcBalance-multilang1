
import React, { Suspense } from 'react';
import ServiziClient from './ServiziClient';

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ServiziClient />
    </Suspense>
  );
}
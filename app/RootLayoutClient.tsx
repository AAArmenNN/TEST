// RootLayoutClient.tsx
"use client"; // Ceci est essentiel pour les hooks

import React, { PropsWithChildren } from 'react';
import { DataProvider } from './context/DataContext';

export default function RootLayoutClient({ children }: PropsWithChildren) {
  return (
    <DataProvider>
      {children}
    </DataProvider>
  );
}

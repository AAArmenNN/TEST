// app/context/DataContext.tsx

"use client"; // Ajoutez cette ligne pour indiquer que ce fichier est un Client Component

import React, { createContext, useContext, useEffect, useState } from 'react';

// Définir un type pour les données retournées par l'API
interface ApiResponse {
  message: string;
  MainNomOP: string;
  MainCompte: any; // Remplacez `any` par le type approprié si possible
  MainDébit: any;
  MainCrédit: any;
  paterne: number;
}

// Créez le contexte
const DataContext = createContext<ApiResponse | null>(null);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = useState<ApiResponse | null>(null);

  // Appel à l'API lors du montage du composant
  useEffect(() => {
    fetch('/api/webhooks/logicexo')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Erreur lors de l\'appel à l\'API', error));
  }, []);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData doit être utilisé dans un DataProvider');
  }
  return context;
};

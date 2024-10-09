"use client";

import React, { useEffect, useState } from 'react';
import Styles from '../../styles/exo.module.css';

const MakeTable = ({ lieutable, tableId, tableClass, numRows }: { lieutable: string, tableId: string, tableClass: string, numRows: number }) => {
  /*
  const [data, setData] = useState<any>(null); // État pour stocker les données de l'API

  useEffect(() => {
    // Appel de l'API pour récupérer les données
    fetch('/api/webhooks/logicexo')
      .then((response) => response.json())
      .then((data) => {
        setData(data); // Stocker les données récupérées dans l'état
      })
      .catch((error) => console.error('Erreur lors de l\'appel à l\'API', error));
  }, []); // Exécuter une seule fois après le premier rendu

  const MainCompte = data?.MainCompte ?? []; // Utiliser les données récupérées ou un tableau vide si elles ne sont pas encore disponibles
// alert(MainCompte[0])

  useEffect(() => {
    if (MainCompte.length > 0) {
      console.log("MainCompte valeur: ", MainCompte);
    } else {
      console.log("MainCompte n'est pas encore chargé ou est vide.");
    }
  }, [MainCompte]); // Exécuter cet effet lorsque MainCompte change

  useEffect(() => {
    if (MainCompte.length > 0) {
      // Rendre le tableau éditable après le rendu
      makeTableEditable(tableId);
     // AjouteCompteTAB(MainCompte, 3, 1); // Appel de la fonction pour ajouter les comptes
    }
  }, [tableId, MainCompte]); // Réagir lorsque MainCompte change
*/

makeTableEditable(tableId);

  return (
    <>
      <div>
        <h3 className={Styles.date}>Date non disponible</h3>
      </div>

      <div id={lieutable}>
        {createTable(lieutable, tableId, tableClass, numRows)}
      </div>
    </>
  );
};

// Fonction pour créer un tableau dynamique
const createTable = (lieutable: string, tableId: string, tableClass: string, numRows: number) => {
  const rows = numRows;
  const cols = 4; // 4 colonnes

  return (
    <table
      id={tableId}
      className={tableClass}
      style={{
        width: '100%',
        backgroundColor: 'black',
        marginLeft: '40px',
        borderRadius: '4px',
        overflow: 'hidden',
        borderCollapse: 'collapse',
        border: '2px solid black',
      }}
    >
      <thead>
        <tr style={{ backgroundColor: 'teal' }}>
          <th style={{ width: '120px', border: '2px solid black' }}>N° de compte</th>
          <th style={{ minWidth: '300px', border: '2px solid black' }}>Libellé</th>
          <th style={{ width: '100px', border: '2px solid black' }}>Débit</th>
          <th style={{ width: '100px', border: '2px solid black' }}>Crédit</th>
        </tr>
      </thead>
      <tbody>
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <tr key={rowIndex}>
            {Array.from({ length: cols }).map((_, colIndex) => (
              <td
                key={colIndex}
                style={{
                  height: '25px',
                  backgroundColor: 'white',
                  letterSpacing: '2px',
                  textAlign: 'center',
                  border: '2px solid black',
                }}
                id={`${tableId}-y${rowIndex}-x${colIndex}`}
              >
                {/* Cellule initialement vide */}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

// Fonction pour rendre une cellule modifiable
function makeTableEditable(tableId: string) {
  const table = document.getElementById(tableId);

  if (table) {
    table.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      if (target.tagName === 'TD') {
        makeCellEditable(target);
      }
    });
  }
}

function makeCellEditable(cell: HTMLElement) {
  const originalContent = cell.textContent;
  cell.contentEditable = 'true';
  cell.focus();

  cell.addEventListener('blur', () => {
    cell.contentEditable = 'false';
  }, { once: true });

  cell.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      cell.blur();
    } else if (event.key === 'Escape') {
      cell.textContent = originalContent;
      cell.blur();
    }
  });
}

/*
// Fonction pour remplir les comptes dans le tableau
function AjouteCompteTAB(MainCompte: any, paterne: number, ComptePreRemplis: number) {
  if (ComptePreRemplis === 1) {



    for (let E = 0; E < paterne; E++) {
      for (let ligne = 0; ligne < MainCompte.length; ligne++) {
        alert("E = "+E+"ligne = "+ligne+ "id = "+`E${E}-y${ligne}-x0`)
        document.getElementById(`E${E}-y${ligne}-x0`)!.textContent = "MainCompte[ligne]"; // Remplir numéro de compte
      }
    }





  } else {
    for (let E = 0; E < paterne; E++) {
      for (let ligne = 0; ligne < MainCompte.length; ligne++) {
        document.getElementById(`E${E}-y${ligne}-x1`)!.textContent = ""; // Vider la cellule
      }
    }
  }
}
  */

export default MakeTable;

"use client";

import React, { useEffect, useState } from 'react';
import Styles from '../../styles/exo.module.css';

const MakeTable = ({ lieutable, tableId, tableClass, numRows }: { lieutable: string, tableId: string, tableClass: string, numRows: number }) => {
  

useEffect(() => {
  if (typeof window !== "undefined") {
    makeTableEditable(tableId);
  }
}, [tableId]);

  return (
    <>
      <div>
        <h3 id= {`Date-${tableId}`} className={Styles.date}>Date non disponible</h3>
      </div>

      <div id={lieutable} className='classlieutable'>
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
        borderRadius: '6px', // Bordure arrondie pour le tableau
        overflow: 'hidden', // Pour éviter que les bordures dépassent si elles sont arrondies
        borderCollapse: 'collapse', // Pour éviter des bordures doubles entre les cellules
        border: '2px solid black', // Bordure noire autour de chaque cellule
        
      }}
    >
      <thead>
        <tr style={{ backgroundColor: 'teal' }}>
          <th style={{ width: '120px', border: '2px solid black' }}>N° de compte</th>
          <th style={{ maxWidth: '95%', border: '2px solid black' }}>Libellé</th>
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


export default MakeTable;

import React, { useEffect } from 'react';
import Styles from '../../styles/exo.module.css';


// Fonction pour créer un tableau dynamique avec des paramètres
const createTable = (lieutable: string, tableId: string, tableClass: string, numRows: number) => {
  // Générer le tableau HTML
  const rows = numRows;
  const cols = 4; // 4 colonnes comme spécifié dans l'exemple initial

  return (
    <table id={tableId}
      className={tableClass}
      style={{
        borderRadius: '6px', // Bordure arrondie pour le tableau
        overflow: 'hidden', // Pour éviter que les bordures dépassent si elles sont arrondies
        borderCollapse: 'collapse', // Pour éviter des bordures doubles entre les cellules
        border: '2px solid black', // Bordure noire autour de chaque cellule

      }}>
      <thead>
        <tr style={{ backgroundColor: 'grey' }}>
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
                  border: '2px solid black', // Bordure noire autour de chaque cellule
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




// Composant principal pour afficher la table
const MakeTableCorrige = ({ lieutable, tableId, tableClass, numRows }: { lieutable: string, tableId: string, tableClass: string, numRows: number }) => {

  return (
    <>
      <div>
        <h3 id={`Date-${tableId}`} className={Styles.date}>Date non disponible</h3>
      </div>

      <div id={lieutable} className='classlieutable'>
        {createTable(lieutable, tableId, tableClass, numRows)}
      </div>
    </>
  );
};

export default MakeTableCorrige;

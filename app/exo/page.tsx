"use client"; // Ajoute cette ligne en haut pour indiquer que c'est un composant client

import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import Styles from '../../styles/exo.module.css';

export default function Exo() {
  const [data, setData] = useState(null);

  // Appel à l'API lors du montage du composant
  useEffect(() => {
    // Appel à l'API côté serveur
    fetch('/api/webhooks/logicexo')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Erreur lors de l\'appel à l\'API', error));
  }, []);



  /*
  // Fonction pour retourner au menu
  const handleRetourMenu = () => {
    // Logique pour retourner au menu
    console.log('Retour au menu');
  };

  // Fonction pour valider l'écriture
  const handleValiderEcriture = () => {
    // Logique de validation de l'écriture
    console.log('Valider l\'écriture');
  };

  // Fonction pour passer à la question suivante
  const handleSuivant = () => {
    // Logique pour passer à l'exercice suivant
    console.log('Passer à l\'exercice suivant');
  };
*/



  return (
    <>
      <Head>
        <title>Exercice Comptabilité</title>
      </Head>

      <div className={Styles.master}>
        <p id="idExo" className={Styles.idOP}></p>

        {/* Bouton Retour au menu */}
        <button className={Styles.customButton} >
          Retour au menu ❌
        </button>

        <h1>Comptabiliser l'écriture : </h1>


        {/* Question */}

        {data ? (
          <p className={Styles.styleQuestion} id="ask">{data.message}</p>
        ) : (
          <p>Enoncé vide...</p>
        )}



        <br />

        {/* Injection des Tableaux énoncé */}
        <div id="TABvides" className={Styles.TAB}></div> 









        <br /><br /><br />

        <div className={Styles.container}>
          {/* Bouton Valider l'écriture */}
          <button className={Styles.customButton} id="BtnVal" >
            Valider cette écriture
          </button>
          <h2 className={Styles.resultOK} id="result">en attente</h2>
        </div>

        <br /><br />

        <h2 id="textCorrigé">Corrigé :</h2>

        <br />

        {/* Tableau corrigé */}
        <div id="TABcorrigé" className={Styles.TAB}></div>

        <br /><br />

        <div className={Styles.container}>
          {/* Bouton Suivant */}
          <button className={Styles.customButton} id="Btnsuiv" >
            Suivant
          </button>
        </div>
      </div>
    </>
  );
}

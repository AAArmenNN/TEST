import Head from 'next/head';
import React from 'react';

import Styles from '../../styles/exo.module.css';





export default function exo(){
    return (
<>

<div className={Styles.master}>
      <p id="idExo" className={Styles.idOP}></p>

      {/* Bouton Retour au menu */}
      <button className={Styles.customButton} >
        Retour au menu ❌
      </button>

      <h1>Comptabiliser l'écriture : </h1>

      {/* Question */}
      <p className={Styles.styleQuestion} id="ask">énoncé vide...</p>

      <br />

      {/* Tableau des vides */}
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
)



}
"use client"; // Ajoute cette ligne en haut pour indiquer que c'est un composant client

import Head from 'next/head';
import React, {  useState, useEffect } from 'react'; //createContext, useContext,
import Styles from '../../styles/exo.module.css';
import MakeTable from '../table/table';
import MakeTableCorrige from '../table/tablecorrige';


// Définir un type pour les données retournées par l'API
interface ApiResponse {
  message: string;
  MainNomOP: string;
  MainCompte: any;
  MainDébit: any;
  MainCrédit: any;
  paterne: number;
}

export default function Exo() {
  const [data, setData] = useState<ApiResponse | null>(null);

  // Appel à l'API lors du montage du composant
  useEffect(() => {
    // Appel à l'API côté serveur
    fetch('/api/webhooks/logicexo')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Erreur lors de l\'appel à l\'API', error));
  }, []);

  let MainCompte = data?.MainCompte ?? []; // Utiliser les données récupérées ou un tableau vide si elles ne sont pas encore disponibles
  let paterne = data?.paterne ?? []; // Utiliser les données récupérées ou un tableau vide si elles ne sont pas encore disponibles
  let ComptePreRemplis = 1 ; // Utiliser les données récupérées ou un tableau vide si elles ne sont pas encore disponibles




// Fonction pour remplir les comptes dans le tableau
function AjouteCompteTAB(MainCompte: any, paterne: number, ComptePreRemplis: number) {
  if (ComptePreRemplis === 1) {

    for (let E:number = 0; E < paterne; E++) { // Ecriture


      for (let ligne = 0; ligne < MainCompte[E].length; ligne++) { // le nombre de ligne de l'ecriture
       // alert("E = "+E+"ligne = "+ligne+ "id = "+`E${E}-y${ligne}-x0`)

          document.getElementById(`E${E}-y${ligne}-x0`)!.textContent = MainCompte[E][ligne];//`E${E}-y${ligne}-x0`;
          //document.getElementById(`E${E}-y${ligne}-x1`).textContent = trouverDescriptionCompte(MainCompte[E][ligne])



      }
  }






  } else {
    for (let E = 0; E < paterne; E++) { // Ecriture

      for (let ligne = 0; ligne < MainCompte[E].length; ligne++) { // le nombre de ligne de l'ecriture

          document.getElementById(`E${E}-y${ligne}-x1`)!.textContent = "";//`E${E}-y${ligne}-x0`;

      }
  }
  }
}


useEffect(() => {
  if (data) {
    AjouteCompteTAB(MainCompte, 3, 1);
  }
}, [data]); // Appeler la fonction lorsque les données sont disponibles


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

        {data ? (
          <p className={Styles.styleQuestion} id="ask">{data.MainCompte[2]}</p>
        ) : (
          <p>MainCompte vide...</p>
        )}


        <br />

        {/* Injection des Tableaux en fonction de 'paterne'     style={{ marginBottom: '40px' }}*/}
        <div id="TABvides" className={Styles.TAB}>


          {data && Array.from({ length: data.paterne }).map((_, index) => (
            <div className={Styles.LigneEcriture} >
              <MakeTable
                key={index}
                lieutable={`lieutable-${index}`}
                tableId={`E${index}`}
                tableClass={`tableClass-${index}`}
                numRows={data.MainCompte[index].length}
              />
            </div>

          ))}

        </div>



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
        <div id="TABcorrigé" className={Styles.TAB}>
        {data && Array.from({ length: data.paterne }).map((_, index) => (
            <div className={Styles.LigneEcriture} >
              <MakeTableCorrige
                key={index}
                lieutable={`lieutable-${index}`}
                tableId={`C${index}`}
                tableClass={`tableClass-${index}`}
                numRows={data.MainCompte[index].length}
              />


            </div>

          ))}


        </div>

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

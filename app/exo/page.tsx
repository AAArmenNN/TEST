"use client"; // Ajoute cette ligne en haut pour indiquer que c'est un composant client

import Head from 'next/head';
import React, { useState, useEffect } from 'react'; //createContext, useContext,
import Styles from '../../styles/exo.module.css';
import MakeTable from '../table/table';
import MakeTableCorrige from '../table/tablecorrige';
//import { OPN } from '../api/webhooks/logicexo/route';

// Définir un type pour les données retournées par l'API
interface ApiResponse {
  message: string;
  MainDate: string
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

  let message = data?.message
  let MainDate = data?.MainDate ?? []; // Utiliser les données récupérées ou un tableau vide si elles ne sont pas encore disponibles
  let MainNomOP = data?.MainNomOP ?? []; // Utiliser les données récupérées ou un tableau vide si elles ne sont pas encore disponibles
  let MainCompte = data?.MainCompte ?? []; // Utiliser les données récupérées ou un tableau vide si elles ne sont pas encore disponibles
  let MainDébit = data?.MainDébit ?? []; // Utiliser les données récupérées ou un tableau vide si elles ne sont pas encore disponibles
  let MainCrédit = data?.MainCrédit ?? []; // Utiliser les données récupérées ou un tableau vide si elles ne sont pas encore disponibles
  let paterne = data?.paterne ?? []; // Utiliser les données récupérées ou un tableau vide si elles ne sont pas encore disponibles

  let storedValue = localStorage.getItem('ComptePreRemplis');
  let ComptePreRemplis = storedValue ? parseInt(storedValue) : 0;

 console.log("message 1 = "+message)

  // Fonction pour remplir les comptes dans le tableau
  function AjouteCompteTAB(MainCompte: any, paterne: any, ComptePreRemplis: number, MainNomOP: any, MainDate: any) {
    if (ComptePreRemplis === 1) {
      for (let E: number = 0; E < paterne; E++) { // Ecriture
        for (let ligne = 0; ligne < MainCompte[E].length; ligne++) { // le nombre de ligne de l'ecriture
          document.getElementById(`E${E}-y${ligne}-x0`)!.textContent = MainCompte[E][ligne];
          document.getElementById(`Date-E${E}`)!.textContent = MainNomOP[E] + " " + MainDate[E];

          document.getElementById(`E${E}-y${ligne}-x2`)!.textContent = "";
          document.getElementById(`E${E}-y${ligne}-x3`)!.textContent = "";

          document.getElementById(`E${E}-y${ligne}-x0`)!.classList.remove(Styles.faux);
          document.getElementById(`E${E}-y${ligne}-x0`)!.classList.remove(Styles.bon);


          document.getElementById(`E${E}-y${ligne}-x2`)!.classList.remove(Styles.faux);
          document.getElementById(`E${E}-y${ligne}-x3`)!.classList.remove(Styles.faux);
          document.getElementById(`E${E}-y${ligne}-x2`)!.classList.remove(Styles.bon);
          document.getElementById(`E${E}-y${ligne}-x3`)!.classList.remove(Styles.bon);

          //document.getElementById(`E${E}-y${ligne}-x1`).textContent = trouverDescriptionCompte(MainCompte[E][ligne])

        }
      }
    } else {
      for (let E = 0; E < paterne; E++) { // Ecriture
        for (let ligne = 0; ligne < MainCompte[E].length; ligne++) { // le nombre de ligne de l'ecriture
          document.getElementById(`E${E}-y${ligne}-x1`)!.textContent = "";
          document.getElementById(`Date-E${E}`)!.textContent = MainNomOP[E] + " " + MainDate[E];

          document.getElementById(`E${E}-y${ligne}-x0`)!.textContent = "";
          document.getElementById(`E${E}-y${ligne}-x1`)!.textContent = "";
          
          document.getElementById(`E${E}-y${ligne}-x2`)!.textContent = "";
          document.getElementById(`E${E}-y${ligne}-x3`)!.textContent = "";

          document.getElementById(`E${E}-y${ligne}-x0`)!.classList.remove(Styles.faux);
          document.getElementById(`E${E}-y${ligne}-x0`)!.classList.remove(Styles.bon);


          document.getElementById(`E${E}-y${ligne}-x2`)!.classList.remove(Styles.faux);
          document.getElementById(`E${E}-y${ligne}-x3`)!.classList.remove(Styles.faux);
          document.getElementById(`E${E}-y${ligne}-x2`)!.classList.remove(Styles.bon);
          document.getElementById(`E${E}-y${ligne}-x3`)!.classList.remove(Styles.bon);

        }
      }
    }
  }
  function AjouteCompteTABcorrige(MainCompte: any, paterne: any, MainDébit: any, MainCrédit: any, MainNomOP: any, MainDate: any) {
    for (let E: number = 0; E < paterne; E++) { // Ecriture
      for (let ligne = 0; ligne < MainCompte[E].length; ligne++) { // le nombre de ligne de l'ecriture
        document.getElementById(`C${E}-y${ligne}-x0`)!.textContent = MainCompte[E][ligne];
        document.getElementById(`C${E}-y${ligne}-x2`)!.textContent = MainDébit[E][ligne];
        document.getElementById(`C${E}-y${ligne}-x3`)!.textContent = MainCrédit[E][ligne];
        document.getElementById(`Date-C${E}`)!.textContent = MainNomOP[E] + " " + MainDate[E];

      }
    }
  }

  useEffect(() => {
    if (data) {
      AjouteCompteTAB(MainCompte, paterne, ComptePreRemplis, MainNomOP, MainDate);
      AjouteCompteTABcorrige(MainCompte, paterne, MainDébit, MainCrédit, MainNomOP, MainDate);
    }
  }, [data]); // Appeler la fonction lorsque les données sont disponibles



  const ValiderEcriture = () => {
    // Logique de validation de l'écriture

    let erreur = 0;
    let debb = 0;
    let credd = 0;

    for (let Necriture = 0; Necriture < MainCompte.length; Necriture++) { // Selectionne l'ecriture sur le nombre total d'ecriture 

      for (let Nligne = 0; Nligne < MainCompte[Necriture].length; Nligne++) { // selectionne la ligne de l'ecriture sur le nombre total de ligne dans l'ecriture 

        let comptee = document.getElementById(`E${Necriture}-y${Nligne}-x${0}`);
        let debb = document.getElementById(`E${Necriture}-y${Nligne}-x${2}`);
        let credd = document.getElementById(`E${Necriture}-y${Nligne}-x${3}`);
        //alert(comptee.textContent+" + "+debb.textContent+"/"+credd.textContent)

        if (comptee && debb && credd) {

          let CompteCase = comptee.textContent
          let DebitCase = debb.textContent;
          let CreditCase = credd.textContent;

          let Toupie = MainCompte[Necriture].indexOf(CompteCase);

          if (Toupie !== -1) {

            if (DebitCase == MainDébit[Necriture][Toupie]) { // Si c'est EXACT pour la colonne débit
              //console.log(debb);

              debb.classList.add(Styles.bon);
              debb.classList.remove(Styles.faux);


            } else { // Si c'est FAUX
              //console.log("erreur !!!")

              debb.classList.add(Styles.faux);
              debb.classList.remove(Styles.bon);
              erreur++;
              //console.log("+1 erreur =  " + `E${Necriture}-y${Nligne}-x${2}`);
            }

            if (CreditCase == MainCrédit[Necriture][Toupie]) { // Si c'est EXACT pour la colonne crédit

              credd.classList.add(Styles.bon);
              credd.classList.remove(Styles.faux);


            } else { // Si c'est FAUX
              //console.log("erreur !!!")

              credd.classList.add(Styles.faux);
              credd.classList.remove(Styles.bon);
              erreur++;
              //console.log("+1 erreur =  " + `E${Necriture}-y${Nligne}-x${3}`);
            }

          } else {
            console.log(`${CompteCase} n'est pas présent dans le tableau.`);

            comptee.classList.add(Styles.faux);
            comptee.classList.remove(Styles.bon);
            erreur++;
          }
        } else {
          console.warn("Un ou plusieurs éléments n'ont pas été trouvés.");
        }
      }
    }


    const result = document.getElementById("result");
    const Btnsuiv = document.getElementById("Btnsuiv");
    const BtnVal = document.getElementById("BtnVal");
    const textCorrigé = document.getElementById("textCorrigé");
    const TableauCorrige = document.getElementById("TABcorrigé");


    
    let scoreUser:any;


    if (result && Btnsuiv && BtnVal && textCorrigé && TableauCorrige) {
      TableauCorrige.style.display = 'table';

      if (erreur === 0) {
        result.innerHTML = "Bonne réponse ! Bravo !";
        result.classList.add(Styles.resultOK);
        result.classList.remove(Styles.resultFAUX);

        scoreUser++; // incrémentation du score
      } 
      else {
        result.innerHTML = `Mauvaise réponse : Il y a ${erreur} erreur(s)`;
        result.classList.add(Styles.resultFAUX);
        result.classList.remove(Styles.resultOK);
      }

      Btnsuiv.style.display = 'table'; // fait apparaître le bouton suivant
      BtnVal.style.display = 'none'; // cache le bouton valider
      result.style.display = 'table'; // affiche le résultat en texte
      textCorrigé.style.display = 'table'; // affiche "Corrigé"
    } else {
      console.error("Un ou plusieurs éléments HTML ne sont pas trouvés.");
    }


    //creationTableauxCorrige();
    //AjouteValeurTABCorrigé();



  };

  function supprimerTAB() {

    for (let idsupp = 0; idsupp < MainCompte.length; idsupp++) {

        const table = document.getElementById(`E${idsupp}`);
        const tableCorrige = document.getElementById(`C${idsupp}`);

        //console.log(`E${idsupp}`);
        if (table) {
            table.remove();
            // console.log('Tableau supprimé.');
        } else {
            //console.log('Tableau introuvable.');
        }
        if (tableCorrige) {
          tableCorrige.remove();
          // console.log('Tableau supprimé.');
      } else {
          //console.log('Tableau introuvable.');
      }
    }
}
  const Btnsuivant = () => {

    const result = document.getElementById("result");
    const Btnsuiv = document.getElementById("Btnsuiv");
    const BtnVal = document.getElementById("BtnVal");
    const textCorrigé = document.getElementById("textCorrigé");
    const TableauCorrige = document.getElementById("TABcorrigé");
    const ask = document.getElementById("ask");


    if (result && Btnsuiv && BtnVal && textCorrigé && TableauCorrige &&ask) {

      //supprimerTAB()

      ask.textContent = "Chargement...";
    
      TableauCorrige.style.display = 'none';

      Btnsuiv.style.display = 'none'; // fait apparaître le bouton suivant
      BtnVal.style.display = 'table'; // cache le bouton valider
      result.style.display = 'none'; // affiche le résultat en texte
      textCorrigé.style.display = 'none'; // affiche "Corrigé"
    } else {
      console.error("Un ou plusieurs éléments HTML ne sont pas trouvés.");
    }

    // Appelle la fonction OPN pour générer de nouvelles données
    fetch('/api/webhooks/logicexo', {
      method: 'POST',
    })
      .then(response => response.json())
      .then(() => {
        // Après que les données ont été mises à jour, relancer l'appel à l'API pour récupérer les nouvelles données
        fetch('/api/webhooks/logicexo')
          .then(response => response.json())
          .then(newData => setData(newData)) // Mise à jour des données dans le state
          .catch(error => console.error('Erreur lors de l\'appel à l\'API après le clic sur Suivant', error));
      })
      .catch(error => console.error('Erreur lors de la mise à jour des données', error));

      console.log("message 2 Suiv= "+message)

      //AjouteCompteTAB(MainCompte, paterne, ComptePreRemplis, MainNomOP, MainDate);
      //AjouteCompteTABcorrige(MainCompte, paterne, MainDébit, MainCrédit, MainNomOP, MainDate);   
  };
  
  // Fonction pour retourner au menu
  const handleRetourMenu = () => {
    window.location.href = '/compta'; // Adaptation de la route pour Next.js
  };

  return (
    <>
      <Head>
        <title>Exercice Comptabilité</title>
      </Head>

      <div className={Styles.master}>
        <p id="idExo" className={Styles.idOP}></p>

        {/* Bouton Retour au menu */}
        <button className={Styles.customButton}
        onClick={handleRetourMenu} >
          Retour au menu ❌
        </button>

        <h1 id="ZOZO" >Comptabiliser l'écriture : </h1>


        {/* Question */}


        {data ? (
          <p
            className={Styles.styleQuestion}
            id="ask"
            dangerouslySetInnerHTML={{
              __html: data.message.replace(/\n/g, '<br />'),
            }}
          />
        ) : (
          <p>Chargement...</p>
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
                numRows={data.MainCompte[index] ? data.MainCompte[index].length : 0} // SOUVENT DES ERREURS ICI =======================================================================
              />
            </div>

          ))}

        </div>



        <br /><br /><br />

        <div className={Styles.container}>
          {/* Bouton Valider l'écriture */}
          <button className={Styles.customButton} id="BtnVal" onClick={ValiderEcriture}>
            Valider cette écriture
          </button>
          <h2 className={Styles.resultOK} style={{ display: 'none' }} id="result">en attente</h2>
        </div>

        <br /><br />

        <h2 id="textCorrigé" style={{ display: 'none' }}>Corrigé :</h2>
        <br />
        {/* Tableau corrigé */}
        <div id="TABcorrigé" className={Styles.TAB} style={{ display: 'none' }}>
          {data && Array.from({ length: data.paterne }).map((_, index) => (
            <div className={Styles.LigneEcriture} >
              <MakeTableCorrige
                key={index}
                lieutable={`lieutable-${index}`}
                tableId={`C${index}`}
                tableClass={`tableClass-${index}`}
                numRows={data.MainCompte[index] ? data.MainCompte[index].length : 0}
                />
            </div>
          ))}
        </div>

        <br /><br />

        <div className={Styles.container}>
          {/* Bouton Suivant */}
          <button className={Styles.customButton} style={{ display: 'none' }} id="Btnsuiv" onClick={Btnsuivant}>
            Suivant
          </button>
        </div>
      </div>
    </>
  );
}

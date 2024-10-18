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

  let [ComptePreRemplis, setComptePreRemplis] = useState<number>(0);
  let [CompteurExoTotal, setNbop] = useState<number>(10);
  let [CompteurExo, setCompteurExo] = useState<number>(1);
  let [scoreUser, setscoreUser] = useState<number>(0);



  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Récupération de ComptePreRemplis depuis le localStorage
      let storedValue = localStorage.getItem('ComptePreRemplis');
      setComptePreRemplis(storedValue ? parseInt(storedValue) : 0);

      // Récupération de CompteurExoTotal depuis le localStorage
      let storedNbOp = localStorage.getItem('CompteurExoTotal');
      setNbop(storedNbOp ? parseInt(storedNbOp) : 0);

    }
  }, []);

  useEffect(() => {
    //const exoElement = document.getElementById("idExo");
    let exoElement = document.getElementById("ZOZO");

    if (exoElement) {
      //exoElement.textContent = "Question " + CompteurExo + "/" + CompteurExoTotal;
      exoElement.textContent = "Comptabiliser l'écriture : " + CompteurExo + "/" + CompteurExoTotal;

      console.log("Question " + CompteurExo + "/" + CompteurExoTotal)
    }
    if (CompteurExo == CompteurExoTotal) {
      document.getElementById("Btnsuiv")!.textContent = "Terminé"
    } else {
      document.getElementById("Btnsuiv")!.textContent = "Suivant"
    }
  }, [CompteurExo, CompteurExoTotal]); // Dépendances

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

  function NbCara(str: any) {
    let longeur = 6 - str.length
    for (let nb = 0; nb < longeur; nb++) {
      str = str + "0";
    }
    return str

  }

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

          //let CompteCase = comptee.textContent
          let CompteCase = NbCara(comptee.textContent)

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
            //console.log(`${CompteCase} n'est pas présent dans le tableau.`);

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





    if (result && Btnsuiv && BtnVal && textCorrigé && TableauCorrige) {
      TableauCorrige.style.display = 'table';

      if (erreur === 0) {
        result.innerHTML = "Bonne réponse ! Bravo !";
        result.classList.add(Styles.resultOK);
        result.classList.remove(Styles.resultFAUX);
        // Incrémente le compteur
        setscoreUser(prev => prev + 1);
      }
      else {
        result.innerHTML = `Faux : ${erreur} erreur(s)`;
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
  };

  const Btnsuivant = () => {
    console.log("scoreUser V = " + scoreUser)

    if (CompteurExo == CompteurExoTotal) {

      const boite = document.getElementById("boite");
      const scoreid = document.getElementById("scoreid");
      const scoreX = document.getElementById("scoreX");
      const NoteX = document.getElementById("NoteX");
      const BackMenuTerm = document.getElementById("BackMenuTerm");



      if (boite && scoreid && scoreX && NoteX && BackMenuTerm) { // Verfi si boite et scoreid existe bien
        boite.style.display = 'none';
        scoreid.style.display = 'table';
        scoreX.style.display = 'table';
        NoteX.style.display = 'table';
        BackMenuTerm.style.display = 'table';

        console.log("boite && scoreid = OK")
        console.log("scoreUser = " + scoreUser)


      }

      scoreUser = Math.round(scoreUser / CompteurExoTotal * 100);

      let phrase = "";

      if (scoreUser > 30) {
        phrase = "Ce thème est à retravailler,"
      } else {
        phrase = "Aie ! Les bases sont à travailler,"
      }
      if (scoreUser > 50) {
        phrase = "Pas mal !"
      }
      if (scoreUser > 70) {
        phrase = "Bravo !"
      }
      if (scoreUser == 100) {
        phrase = "Wahou ! C'est un sans faute ! bien joué !"
      }

      scoreX!.textContent = phrase + " votre score est de : " + scoreUser + " %"
      NoteX!.textContent = scoreUser / 5 + " / 20"

    }

    // Incrémente le compteur
    setCompteurExo(prev => prev + 1);

    // let exoElement = document.getElementById("idExo");
    let exoElement = document.getElementById("ZOZO");

    if (exoElement) {
      //exoElement.textContent = "Question " + CompteurExo + "/" + CompteurExoTotal;
      exoElement.textContent = "Comptabiliser l'écriture : " + CompteurExo + "/" + CompteurExoTotal;
  }

      

    const result = document.getElementById("result");
    const Btnsuiv = document.getElementById("Btnsuiv");
    const BtnVal = document.getElementById("BtnVal");
    const textCorrigé = document.getElementById("textCorrigé");
    const TableauCorrige = document.getElementById("TABcorrigé");
    const ask = document.getElementById("ask");


    if (result && Btnsuiv && BtnVal && textCorrigé && TableauCorrige && ask) {

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

    window.scrollTo({
      top: 0, // Définit la position verticale à 0
      behavior: 'smooth', // Ajoute une animation fluide
    });

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
    //console.log("message 2 Suiv= " + message)

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
        <div id="boite">




          <div id='BarreHaute' className={Styles.BarreHaute} >
            {/* <button className={Styles.customButton}
              onClick={handleRetourMenu} >
              Retour au menu
            </button> */}
            <p id="Autre" className={Styles.BtnBarreHaute} onClick={handleRetourMenu}>Menu</p>
            <p id="idExo" className={Styles.idOP}></p>
            <p id="Autre" className={Styles.BtnBarreHaute}> à voir</p>
          </div>





          <h1 id="ZOZO" className={Styles.ZOZO} >Comptabiliser l'écriture : </h1>
          {/* Question */}
          {data ? (
            <p className={Styles.styleQuestion}
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
                  //tableClass={`tableClass-${index}`}
                  tableClass={`tableClass`}

                  numRows={data.MainCompte[index] ? data.MainCompte[index].length : 0} // SOUVENT DES ERREURS ICI =======================================================================
                />
              </div>
            ))}
          </div>


          <div className={Styles.container}>
            {/* Bouton Valider l'écriture */}
            <button className={Styles.customButton} id="BtnVal" onClick={ValiderEcriture}>
              Valider cette écriture
            </button>
            <h2 className={Styles.resultOK} style={{ display: 'none' }} id="result">en attente</h2>
          </div>

          <br /><br />

          <p id="textCorrigé" className= {Styles.textCorrigé} style={{ display: 'none', textAlign:'center' }}>Corrigé :</p>
          <br />
          {/* Tableau corrigé */}
          <div id="TABcorrigé" className={Styles.TAB} style={{ display: 'none' }}>

            {data && Array.from({ length: data.paterne }).map((_, index) => (
              <div className={Styles.LigneEcriture} >
                <MakeTableCorrige
                  key={index}
                  lieutable={`lieutable-${index}`}
                  tableId={`C${index}`}
                  tableClass={`tableClass`}
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

        <div id="scoreid" className={Styles.boiteScore} style={{ display: 'none' }}>
          <p id="scoreX" className={Styles.score} style={{ display: 'none' }}></p>
          <p id="NoteX" className={Styles.note} style={{ display: 'none' }}></p>
          <button id="BackMenuTerm" className={Styles.customButton}
            onClick={handleRetourMenu}
            style={{ display: 'none' }} >
            Retour au menu
          </button>

        </div>
      </div>
    </>
  );
}

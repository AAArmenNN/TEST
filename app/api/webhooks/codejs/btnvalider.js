function btnV() {

   let erreur = 0;

   let debb = 0;
   let credd = 0;

   //console.log("MainCompte.length = "+MainCompte.length);

   for (let Necriture = 0; Necriture < MainCompte.length; Necriture++) { // Selectionne l'ecriture sur le nombre total d'ecriture 

      for (let Nligne = 0; Nligne < MainCompte[Necriture].length; Nligne++) { // selectionne la ligne de l'ecriture sur le nombre total de ligne dans l'ecriture 

         //console.log("ecriture n° "+Necriture+" et ligne "+ Nligne)
         //console.log(Nligne);

         comptee = document.getElementById(`E${Necriture}-y${Nligne}-x${0}`);
         debb = document.getElementById(`E${Necriture}-y${Nligne}-x${2}`);
         credd = document.getElementById(`E${Necriture}-y${Nligne}-x${3}`);

         let CompteCase = NbCara(comptee.textContent)
         let DebitCase = debb.textContent;
         let CreditCase = credd.textContent;

         //console.log(comptee);

         let Toupie = MainCompte[Necriture].indexOf(CompteCase);
         //console.log("Nombre de cara du compte "+CompteCase+" = "+NbCara(CompteCase));

         if (Toupie !== -1) {
            //console.log(`${CompteCase} est présent dans le tableau à l'index ${Toupie}.`);

            if (DebitCase == MainDébit[Necriture][Toupie]) { // Si c'est EXACT pour la colonne débit
               //console.log(debb);


               debb.classList.add('bon');
               debb.classList.remove('faux');

            } else { // Si c'est FAUX
               //console.log("erreur !!!")
               debb.classList.add('faux');
               debb.classList.remove('bon');
               erreur++;
               //console.log("+1 erreur =  " + `E${Necriture}-y${Nligne}-x${2}`);
            }

            if (CreditCase == MainCrédit[Necriture][Toupie]) { // Si c'est EXACT pour la colonne crédit
               //console.log(credd);

               credd.classList.add('bon');
               credd.classList.remove('faux');


            } else { // Si c'est FAUX
               //console.log("erreur !!!")

               credd.classList.add('faux');
               credd.classList.remove('bon');
               erreur++;
               //console.log("+1 erreur =  " + `E${Necriture}-y${Nligne}-x${3}`);
            }

        } else {
           console.log(`${CompteCase} n'est pas présent dans le tableau.`);

            comptee.classList.add('faux');
            comptee.classList.remove('bon');
            erreur++;
        }

      }
   }


   if (erreur == 0) {

      document.getElementById("result").innerHTML = "Bonne réponse ! Bravo ! ";
      result.classList.add('resultOK');
      result.classList.remove('resultFAUX');
      scoreUser++
      

   } else {

      document.getElementById("result").innerHTML = "Mauvaise réponse :  Il y a " + erreur + " erreur(s)";
      result.classList.add('resultFAUX');
      result.classList.remove('resultOK');


   }

   Btnsuiv.style.display = 'table'; // fait apparaitre le bouton suivant
   BtnVal.style.display = 'none'; // cache le bouton valider
   result.style.display = 'table'; // affiche le résultat en texte
   textCorrigé.style.display = 'table'; // affiche "Corrigé"

   creationTableauxCorrige();
   AjouteValeurTABCorrigé();







}
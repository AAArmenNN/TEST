function creationTableaux() {
    for (let g = 0; g < paterne; g++) { // Fabrique les Tableaux

        const ligneTAB = document.createElement('div');
        // Définir l'attribut id
        ligneTAB.setAttribute('id', `ecritureE${g}`);
        ligneTAB.setAttribute('class', 'LigneEcriture');
        
       // Ajouter le nouvel élément <p> au conteneur
        const container = document.getElementById("TABvides");
        container.appendChild(ligneTAB);



        CreationDate (g,`ecritureE${g}`,"E");

        createTable(`ecritureE${g}`, `E${g}`, '', MainCompte[g].length);
        //document.addEventListener('DOMContentLoaded', () => {

        makeTableEditable(`E${g}`);

        
    
    }

    AjouteCompteTAB();
}

function creationTableauxCorrige() {

    for (let k = 0; k < paterne; k++) { // Fabrique les Tableaux

        const ligneTAB = document.createElement('div');
        // Définir l'attribut id
        ligneTAB.setAttribute('id', `ecritureC${k}`);
        ligneTAB.setAttribute('class', 'LigneEcriture');
        
       // Ajouter le nouvel élément <p> au conteneur
        const container = document.getElementById("TABcorrigé");
        container.appendChild(ligneTAB);



        CreationDate (k,`ecritureC${k}`,"C");

        createTableCorrige(`ecritureC${k}`, `C${k}`, 'corrigé', MainCompte[k].length);
        
        //document.addEventListener('DOMContentLoaded', () => {

    }//);// wait DOM  complètement chargé avant d'exécuter le code ET rend le tableau clickable
    //}
}

function CreationDate(g,IDlieu,type) {

    const newParagraph = document.createElement('h3');
    
    // Définir l'attribut id
    newParagraph.setAttribute('id', `date${type}${g}`);
    
    // Définir l'attribut class
    newParagraph.setAttribute('class', 'date');
    
    // Optionnel : ajouter du contenu au paragraphe
    newParagraph.textContent = MainNomOP[g] +" "+MainDate[g]; //    newParagraph.textContent = "écriture du : "+MainDate[g];

    // Ajouter le nouvel élément <p> au conteneur
    const container = document.getElementById(IDlieu);
    container.appendChild(newParagraph);

}

function NbCara(str) {

   let longeur = 6-str.length 

    for (let nb = 0; nb < longeur; nb++) {
        str=str+"0";
    }
    return str

}



creationTableaux();


function Btnsuivant() {

    supprimerTAB();
    supprimerTABCorrige();
    supprimerDate ();

    let div = document.getElementById('TABvides');     // Sélectionner la div par son id
    let brs = div.querySelectorAll('br');    // Sélectionner tous les <br> à l'intérieur de cette div
    brs.forEach(br => br.remove());     // Parcourir la liste des <br> et les supprimer

    div = document.getElementById('TABcorrigé');     // Sélectionner la div par son id  
    brs = div.querySelectorAll('br');    // Sélectionner tous les <br> à l'intérieur de cette div
    brs.forEach(br => br.remove());     // Parcourir la liste des <br> et les supprimer

    if (CompteurExo == CompteurExoTotal) {
        boite.style.display = 'none';
        scoreid.style.display = 'block';

        scoreUser = Math.round(scoreUser / CompteurExoTotal * 100);

        let phrase="";


    
        if (scoreUser > 30 ) {
            phrase ="Ce thème est à retravailler,"
        } else {
            phrase ="Aie ! Les bases sont à travailler,"
        }
        if (scoreUser > 50) {
            phrase ="Pas mal !"
        }
        if (scoreUser > 70) {
            phrase ="Bravo !"
        }
        if (scoreUser ==100) {
            phrase ="Wahou ! C'est un sans faute ! bien joué !"
        }





        document.getElementById("scoreX").innerHTML = phrase+" votre score est de : " + scoreUser + " %"
        document.getElementById("NoteX").innerHTML = scoreUser/5 + " / 20"


    } else {
        scoreid.style.display = 'none';
        //console.log("plouf")


        OPN();
        creationTableaux();
    }



    



}

function BtnRetourMenu() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("popup").style.display = "block";






}



function ToMenu() {

    window.location.href = 'index.html'; // Redirection vers la page exo



}



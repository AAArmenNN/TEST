/*let scoreUser = 0;

let ReponseDébit2 = []; // 2eme tableau
let ReponseCrédit2 = []; // 2eme tableau

let MainNomOP = [];
let MainCompte = [];
let MainDébit = [];
let MainCrédit = [];
let MainDate = [];

let énoncé ="";
let paterne = 0;

let CompteurExo = 0;

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min)) + min; // You can remove the Math.floor if you don't want it to be an integer
}

export function OPN() {

  //________________________________________________________________________________________________________________

  //console.log("opSelectionnées longeur = "+operations.length);


  let idOp = 1 //randomNum(0, operations.length); // type d'opération
  énoncé ="HELLO"

  //console.log("ID de la liste 'operations' = "+idOp); //c'est ok

  //idOp = operations[idOp];

  console.log("ID de l'opération = " + idOp);

  // ________________________________________________________________________________________________________________
  MainDate[0] = randomNum(1, 28) + "/" + randomNum(1, 12) + "/" + randomNum(2023, 2025); // Date de l'opération
  MainDate[1] = randomNum(1, 28) + "/" + randomNum(1, 12) + "/" + randomNum(2023, 2025); // + 30 jours

  MainCompte = [];
  MainDébit = [];
  MainCrédit = [];

  // ACHAT ________________________________________________________________________________________________________________
  if (idOp == 1) { //achat de marchandises 

      let prixHT = randomNum(1, 10);
      prixHT = prixHT * 1000
      let TVA20 = prixHT / 5;
      let TT = prixHT + TVA20;

      MainNomOP[0] = ""
      MainCompte[0] = ["607000", "445660", "401000"];
      MainDébit[0] = [prixHT, TVA20, ""];
      MainCrédit[0] = ["", "", TT];
      énoncé = "Le " + MainDate[0] + " un achat de marchandises de " + prixHT + "€ avec TVA à 20%";
      paterne = 1;

  }
  // ________________________________________________________________________________________________________________
  if (idOp == 2) { //achat de Matières premières 

      let prixHT = randomNum(10, 10);
      prixHT = prixHT * 100
      let TVA20 = prixHT / 5;
      let TT = prixHT + TVA20;

      MainNomOP[0] = ""
      MainCompte[0] = ["607000", "445660", "401000"];
      MainDébit[0] = [prixHT, TVA20, ""];
      MainCrédit[0] = ["", "", TT];
      énoncé = "Le " + MainDate[0] + " un achat de matières premières de " + prixHT + "€ avec TVA à 20%";
      paterne = 1;

  }
  // ________________________________________________________________________________________________________________
  if (idOp == 3) { // vente de marchandises

      let prixHT = randomNum(10, 10);
      prixHT = prixHT * 100
      let TVA20 = prixHT / 5;
      let TT = prixHT + TVA20;

      MainNomOP[0] = ""
      MainCompte[0] = ["411000", "445710", "707000"];
      MainDébit[0] = [TT, "", ""];
      MainCrédit[0] = ["", TVA20, prixHT];
      énoncé = "Le " + MainDate[0] + " une vente de marchandises de " + prixHT + "€ avec TVA à 20%";
      paterne = 1;


  }
  // ________________________________________________________________________________________________________________
  if (idOp == 4) { // vente de Matières premières 

      let prixHT = randomNum(10, 10);
      prixHT = prixHT * 100
      let TVA20 = prixHT / 5;
      let TT = prixHT + TVA20;

      MainNomOP[0] = ""
      MainCompte[0] = ["411000", "445710", "701000"];
      MainDébit[0] = [TT, "", ""];
      MainCrédit[0] = ["", TVA20, prixHT];
      énoncé = "Le " + MainDate[0] + " une vente de matières premières  de " + prixHT + "€ avec TVA à 20%";
      paterne = 1;
  }
  // ________________________________________________________________________________________________________________
  if (idOp == 6) { // vente de marchandises avec rabais de 10%

      let prixHT = randomNum(10, 10);
      prixHT = prixHT * 100
      let TVA20 = prixHT / 5;
      let TT = prixHT + TVA20;

      énoncé = "Le " + MainDate[0] + " une vente de marchandises  de " + prixHT + "€ avec TVA à 20%, avec un rabais de 10%";

      prixHT = prixHT * 0.9
      TVA20 = prixHT / 5;
      TT = prixHT + TVA20;

      MainNomOP[0] = ""
      MainCompte[0] = ["411000", "445710", "707000"];
      MainDébit[0] = [TT, "", ""];
      MainCrédit[0] = ["", TVA20, prixHT];
      paterne = 1;
  }
  // ________________________________________________________________________________________________________________   
  if (idOp == 7) { // achat de marchandises avec rabais de 10%

      let prixHT = randomNum(10, 10);
      prixHT = prixHT * 100
      let TVA20 = prixHT / 5;
      let TT = prixHT + TVA20;

      énoncé = "Le " + MainDate[0] + " une achat de marchandises de " + prixHT + "€ avec TVA à 20%, avec un rabais de 10%";

      prixHT = prixHT * 0.9
      TVA20 = prixHT / 5;
      TT = prixHT + TVA20;

      MainNomOP[0] = ""
      MainCompte[0] = ["607000", "445660", "401000"];
      MainDébit[0] = [prixHT, TVA20, ""];
      MainCrédit[0] = ["", "", TT];
      paterne = 1;
  }
  // ________________________________________________________________________________________________________________   
  if (idOp == 8) { // achat de marchandises avec escompte de 5%

      let prixHT = randomNum(10, 10);
      prixHT = prixHT * 100
      let TVA20 = prixHT / 5;
      let TT = prixHT + TVA20;


      énoncé = "Le " + MainDate[0] + " une achat de marchandises de " + prixHT + "€ avec TVA à 20%, avec un escompte de 5%";

      let escompte = prixHT * 0.05
      escompte = Math.round(escompte * 100) / 100

      TVA20 = (prixHT - escompte) / 5;
      TVA20 = Math.round(TVA20 * 100) / 100

      TT = prixHT + TVA20 - escompte;
      TT = Math.round(TT * 100) / 100

      MainNomOP[0] = ""
      MainCompte[0] = ["607000", "445660", "765000", "401000"];
      MainDébit[0] = [prixHT, TVA20, "", ""];
      MainCrédit[0] = ["", "", escompte, TT];
      paterne = 1;
  }
  // ________________________________________________________________________________________________________________   
  if (idOp == 9) { // vente de marchandises avec escompte de 5%

      let prixHT = randomNum(10, 10);
      prixHT = prixHT * 100
      let TVA20 = prixHT / 5;
      let TT = prixHT + TVA20;


      énoncé = "Le " + MainDate[0] + " une vente de marchandises de " + prixHT + "€ avec TVA à 20%, avec un escompte de 5%";

      let escompte = prixHT * 0.05
      escompte = Math.round(escompte * 100) / 100

      TVA20 = (prixHT - escompte) / 5;
      TVA20 = Math.round(TVA20 * 100) / 100

      TT = prixHT + TVA20 - escompte;
      TT = Math.round(TT * 100) / 100

      MainNomOP[0] = ""
      MainCompte[0] = ["411000", "665000", "707000", "445710"];
      MainDébit[0] = [TT, escompte, "", ""];
      MainCrédit[0] = ["", "", prixHT, TVA20];
      paterne = 1;
  }
  // ________________________________________________________________________________________________________________
  if (idOp == 10) { // Frais accesoires sur ventes

      let prixHT = randomNum(10, 10);
      prixHT = prixHT * 100
      let livraion = randomNum(10, 10) * 10;

      let TVA20 = (prixHT + livraion) / 5;
      let TT = prixHT + TVA20 + livraion;

      énoncé = "Le " + MainDate[0] + " une vente de marchandises pour " + prixHT + "€ avec TVA à 20% et livraison par elle meme de " + livraion + " € HT";

      MainNomOP[0] = ""
      MainCompte[0] = ["411000", "707000", "708500", "445710"];
      MainDébit[0] = [TT, "", "", ""];
      MainCrédit[0] = ["", prixHT, livraion, TVA20];
      paterne = 1;
  }
  // ________________________________________________________________________________________________________________
  if (idOp == 11) { // Frais accesoires sur achat

      let prixHT = randomNum(10, 10);
      prixHT = prixHT * 100
      let livraion = randomNum(10, 10) * 10;

      let TVA20 = (prixHT + livraion) / 5;
      let TT = prixHT + TVA20 + livraion;

      énoncé = "Le " + MainDate[0] + " un achat de marchandises pour " + prixHT + "€ avec TVA à 20% et frais de livraison : " + livraion + " €";

      MainNomOP[0] = ""
      MainCompte[0] = ["607000", "624100", "445660", "401000"];
      MainDébit[0] = [prixHT, livraion, TVA20, ""];
      MainCrédit[0] = ["", "", "", TT];
      paterne = 1;
  }
  // ________________________________________________________________________________________________________________

  if (idOp == 12) { // Frais accesoires sur achat

      let prixHT = randomNum(10, 10);
      prixHT = prixHT * 100

      //prixHT=750
      let TVA20 = (prixHT) / 5;
      let TT = prixHT + TVA20;

      énoncé = "Le 4 mai 2023: réception de la facture pour l'entretien du camion de livraison d'un montant de " + prixHT + " € HT.<br>La facture porte la mention « TVA sur les débits ». Au bas de la facture est mentionné « escompte de 2% si le paiement intervient dans les 8 jours ».<br><br>Le 5 mai 2023 : règlement par virement de la facture du 4 mai 2023 après déduction de l'escompte de 2 %. La facture d'avoir concernant cet escompte est reçue le jour même.";

      MainNomOP[0] = "Facture"
      MainDate[0] = "04/05";
      MainCompte[0] = ["615000", "445660", "401000"];
      MainDébit[0] = [prixHT, TVA20, ""];
      MainCrédit[0] = ["", "", TT];

      let escompte = prixHT * 0.02
      TVA20 = escompte * 0.2
      TT = TT - TVA20 - escompte


      MainNomOP[1] = "Paiement"
      MainDate[1] = "05/05";
      MainCompte[1] = ["401000", "512000"];
      MainDébit[1] = [TT, ""];
      MainCrédit[1] = ["", TT];

      TT = TVA20 + escompte

      MainNomOP[2] = "Escompte"
      MainDate[2] = "05/05";
      MainCompte[2] = ["401000", "765000", "445710"];
      MainDébit[2] = [TT, "", ""];
      MainCrédit[2] = ["", escompte, TVA20];

      paterne = 3;
  }
  // ________________________________________________________________________________________________________________
  if (idOp == 13) { // réception d'un virement

      let prixHT = randomNum(10, 10);
      prixHT = prixHT * 100

      //prixHT=750
      let TVA20 = (prixHT) / 5;
      let TT = prixHT + TVA20;

      énoncé = "Le 7 mai 2023 : réception d'un virement de " + TT + " € TTC à titre d'acompte suite à l'acceptation d'un devis par un client";

      MainNomOP[0] = "Versement de l'acompte"
      MainDate[0] = "07/05";
      MainCompte[0] = ["512000", "419100"];
      MainDébit[0] = [TT, ""];
      MainCrédit[0] = ["", TT];

      MainNomOP[1] = "TVA à régulariser"
      MainDate[1] = "07/05";
      MainCompte[1] = ["445800", "445710"];
      MainDébit[1] = [TVA20, ""];
      MainCrédit[1] = ["", TVA20];

      paterne = 2;
  }
  // ________________________________________________________________________________________________________________
  if (idOp == 14) { // paiement d'un virement

      let prixHT = randomNum(10, 10);
      prixHT = prixHT * 100

      //prixHT=750
      let TVA20 = (prixHT) / 5;
      let TT = prixHT + TVA20;

      énoncé = "Le 9 mai 2023 : paiement d'un virement de " + TT + " € TTC à titre d'acompte suite à l'acceptation d'un devis";

      MainNomOP[0] = "Versement de l'acompte"
      MainDate[0] = "09/05";
      MainCompte[0] = ["409100", "512000"];
      MainDébit[0] = [TT, ""];
      MainCrédit[0] = ["", TT];

      MainNomOP[1] = "TVA à régulariser"
      MainDate[1] = "09/05";
      MainCompte[1] = ["445660", "445800"];
      MainDébit[1] = [TVA20, ""];
      MainCrédit[1] = ["", TVA20];

      paterne = 2;
  }
  // ________________________________________________________________________________________________________________
  if (idOp == 15) { // réception d'un virement + facture finale

      let prixHT = randomNum(10, 10);
      prixHT = prixHT * 100

      let TVA20 = (prixHT) / 5;
      let TT = prixHT + TVA20;

      prixHTfinal = TT * 5

      énoncé = "Le 7 mai 2023 : réception d'un virement de " + TT + " € TTC à titre d'acompte suite à l'acceptation d'un devis par un client<br><br>Le 17 mai 2023 : Facture finale de " + prixHTfinal + " € HT de marchandises avec TVA à 20%";

      MainNomOP[0] = "Versement de l'acompte"
      MainDate[0] = "07/05";
      MainCompte[0] = ["512000", "419100"];
      MainDébit[0] = [TT, ""];
      MainCrédit[0] = ["", TT];

      MainNomOP[1] = "TVA à régulariser"
      MainDate[1] = "07/05";
      MainCompte[1] = ["445800", "445710"];
      MainDébit[1] = [TVA20, ""];
      MainCrédit[1] = ["", TVA20];


      let TVA20finale = prixHTfinal * 0.2
      let TTfinal = prixHTfinal + TVA20finale + TVA20 - TT

      MainNomOP[2] = "Facture finale"
      MainDate[2] = "17/05";
      MainCompte[2] = ["411000", "419100", "707000", '445710', '445800'];
      MainDébit[2] = [TTfinal, TT, "", "", ""];
      MainCrédit[2] = ["", "", prixHTfinal, TVA20finale, TVA20];

      paterne = 3;
  }
  // ________________________________________________________________________________________________________________
  //________________________________________________________________________________________________________________
  if (idOp == 20) { //prestation de services encaissement

      let prixHT = randomNum(10, 10);
      prixHT = prixHT * 100
      let TVA20 = prixHT / 5;
      let TT = prixHT + TVA20;

      MainNomOP[0] = ""
      MainCompte[0] = ["622600", "445800", "401000"];
      MainDébit[0] = [prixHT, TVA20, ""];
      MainCrédit[0] = ["", "", TT];
      énoncé = "Le " + MainDate[0] + " reception de la facture de l'expert comptable pour la tenu des comptes de " + prixHT + " € HT avec TVA à 20%.<br>Aucune mention particulière sur la facture";
      paterne = 1;

  }
  //________________________________________________________________________________________________________________
  if (idOp == 21) { //prestation de services débit

      let prixHT = randomNum(10, 10);
      prixHT = prixHT * 100
      let TVA20 = prixHT / 5;
      let TT = prixHT + TVA20;

      MainNomOP[0] = ""
      MainCompte[0] = ["622600", "445660", "401000"];
      MainDébit[0] = [prixHT, TVA20, ""];
      MainCrédit[0] = ["", "", TT];
      énoncé = "Le " + MainDate[0] + " reception de la facture de l'expert comptable pour la tenu des comptes de " + prixHT + " € HT avec TVA à 20%.<br>Mention TVA sur les débits sur la facture";
      paterne = 1;

  }


  //________________________________________________________________________________________________________________
  if (idOp == 41) { //acquisition intracommunautaire

      let prixHT = randomNum(10, 10);
      prixHT = prixHT * 100
      let TVA20 = prixHT / 5;
      let TT = prixHT + TVA20;

      MainNomOP[0] = ""
      MainCompte[0] = ["607200", "445660", "401000", "445200"];
      MainDébit[0] = [prixHT, TVA20, "", ""];
      MainCrédit[0] = ["", "", prixHT, TVA20];
      énoncé = "Le " + MainDate[0] + " reception d'une facture d'un fournisseur Belge de " + prixHT + " € HT pour l'achat de marchandises.";
      paterne = 1;

  }
  if (idOp == 51) { //Subvention d'exploitation

      let prixHT = randomNum(1, 10);
      prixHT = prixHT * 1000
      let TVA20 = prixHT / 5;
      let TT = prixHT + TVA20;

      MainNomOP[0] = "Notification : "
      MainCompte[0] = ["441000", "740000", "445710"];
      MainDébit[0] = [TT, "", ""];
      MainCrédit[0] = ["", prixHT, TVA20];

      //ecriture 2
      MainNomOP[1] = "Versement : "
      MainCompte[1] = ["512000", "441000"]; // 2eme tableau
      MainDébit[1] = [TT, ""];
      MainCrédit[1] = ["", TT];
      MainDate[1] = "29/03/2024";

      énoncé = "Le " + MainDate[0] + ", notification d'attribution d'une subvention d'exploitation de " + prixHT + " € .<br><br> Versement de la subvention : " + MainDate[1];


      paterne = 2;



  }
  //________________________________________________________________________________________________________________
  if (idOp == 52) { //Subvention d'equilibre

      let prixHT = randomNum(1, 10);
      prixHT = prixHT * 1000

      MainNomOP[0] = "Notification : "
      MainCompte[0] = ["441000", "771500"];
      MainDébit[0] = [prixHT, ""];
      MainCrédit[0] = ["", prixHT];

      //ecriture 2
      MainNomOP[1] = "Versement : "
      MainCompte[1] = ["512000", "441000"]; // 2eme tableau
      MainDébit[1] = [prixHT, ""];
      MainCrédit[1] = ["", prixHT];
      MainDate[1] = "29/03/2024";

      énoncé = "Le " + MainDate[0] + ", notification d'attribution d'une subvention d'équilibre de " + prixHT + " € .<br><br> Versement de la subvention : " + MainDate[1];


      paterne = 2;



  }
  //________________________________________________________________________________________________________________
  if (idOp == 53) { //Subvention d'investissement

      let prixHT = randomNum(1, 10);
      prixHT = prixHT * 1000

      MainNomOP[0] = "Notification : "
      MainCompte[0] = ["441000", "131000"];
      MainDébit[0] = [prixHT, ""];
      MainCrédit[0] = ["", prixHT];

      //ecriture 2
      MainNomOP[1] = "Versement : "
      MainCompte[1] = ["512000", "441000"]; // 2eme tableau
      MainDébit[1] = [prixHT, ""];
      MainCrédit[1] = ["", prixHT];
      MainDate[1] = "29/03/2024";

      énoncé = "Le " + MainDate[0] + ", notification d'attribution d'une subvention d'investissement de " + prixHT + " € .<br><br> Versement de la subvention : " + MainDate[1];


      paterne = 2;

  }
  //________________________________________________________________________________________________________________
  if (idOp == 54) { //Subvention d'investissement

      let prixHT = randomNum(1, 10);
      prixHT = prixHT * 1000

      MainNomOP[0] = "Notification : "
      MainCompte[0] = ["441000", "131000"];
      MainDébit[0] = [prixHT, ""];
      MainCrédit[0] = ["", prixHT];

      //ecriture 2
      MainNomOP[1] = "Versement : "
      MainCompte[1] = ["512000", "441000"]; // 2eme tableau
      MainDébit[1] = [prixHT, ""];
      MainCrédit[1] = ["", prixHT];
      MainDate[1] = "29/03/2024";

      énoncé = "Le " + MainDate[0] + ", notification d'attribution d'une subvention d'investissement de " + prixHT + " € .<br><br> Versement de la subvention : " + MainDate[1];


      paterne = 2;

  }
  //________________________________________________________________________________________________________________
  if (idOp == 54) { //Subvention d'equipement

      let prixHT = randomNum(1, 10);
      prixHT = prixHT * 1000

      MainNomOP[0] = "Notification : "
      MainCompte[0] = ["441000", "138000"];
      MainDébit[0] = [prixHT, ""];
      MainCrédit[0] = ["", prixHT];

      //ecriture 2
      MainNomOP[1] = "Versement : "
      MainCompte[1] = ["512000", "441000"]; // 2eme tableau
      MainDébit[1] = [prixHT, ""];
      MainCrédit[1] = ["", prixHT];
      MainDate[1] = "29/03/2024";

      énoncé = "Le " + MainDate[0] + ", notification d'attribution d'une subvention pour l'achat d'une immobilisation de " + prixHT + " € .<br><br> Versement de la subvention : " + MainDate[1];


      paterne = 2;

  }
  //________________________________________________________________________________________________________________

  if (idOp == 55) { //Subvention d'investissement inventaire pas d'étalement

      let prixHT = randomNum(1, 10);
      prixHT = prixHT * 1000

      MainNomOP[0] = "Inventaire : "
      MainCompte[0] = ["139000", "777000"];
      MainDébit[0] = [prixHT, ""];
      MainCrédit[0] = ["", prixHT];
      MainDate[0] = "31/12/N";


      énoncé = "A l'inventaire N, passage d'une subvention d'investissement de " + prixHT + " au compte de résultat sans étalement de celle-ci.";

      paterne = 1;

  }
  //________________________________________________________________________________________________________________

  if (idOp == 56) { //Subvention d'investissement inventaire avec d'étalement

      let prixHT = randomNum(1, 10);
      prixHT = prixHT * 1000

      prixHT = prixHT * 5


      énoncé = "A l'inventaire N, passage d'une subvention d'investissement de " + prixHT + " € au compte de résultat avec un étalement sur 5 ans .";

      TT = prixHT / 5
      MainNomOP[0] = "Inventaire : "
      MainCompte[0] = ["139000", "777000"];
      MainDébit[0] = [TT, ""];
      MainCrédit[0] = ["", TT];
      MainDate[0] = "31/12/N";



      paterne = 1;

  }
  //________________________________________________________________________________________________________________

  if (idOp == 57) { //Subvention d'investissement inventaire avec d'étalement

      let prixHT = randomNum(1, 10);
      prixHT = prixHT * 1000

      prixHT = prixHT * 5


      énoncé = "A l'inventaire N, passage au compte de résultat d'une subvention d'investissement de " + prixHT + " € pour l'achat d'un terrain (donc non amortissable).<br>Il existe une clause d'inaliénabilité de 5 ans";

      TT = prixHT / 5
      MainNomOP[0] = "Inventaire : "
      MainCompte[0] = ["139000", "777000"];
      MainDébit[0] = [TT, ""];
      MainCrédit[0] = ["", TT];
      MainDate[0] = "31/12/N";



      paterne = 1;

  }
  //________________________________________________________________________________________________________________

  if (idOp == 58) { //Subvention d'investissement inventaire avec d'étalement

      let prixHT = randomNum(1, 10);
      prixHT = prixHT * 1000

      prixHT = prixHT * 10


      énoncé = "A l'inventaire N, passage au compte de résultat d'une subvention d'investissement de " + prixHT + " € pour l'achat d'un terrain (donc non amortissable).<br>Il n'existe aucune clause d'inaliénabilité";

      TT = prixHT / 10
      MainNomOP[0] = "Inventaire : "
      MainCompte[0] = ["139000", "777000"];
      MainDébit[0] = [TT, ""];
      MainCrédit[0] = ["", TT];
      MainDate[0] = "31/12/N";



      paterne = 1;

  }
  //________________________________________________________________________________________________________________

  if (idOp == 58) { //Subvention d'investissement inventaire avec d'étalement

      let prixHT = randomNum(1, 10);
      prixHT = prixHT * 1000

      prixHT = prixHT * 10


      énoncé = "A l'inventaire N, passage au compte de résultat d'une subvention d'investissement de " + prixHT + " € pour l'achat d'un terrain (donc non amortissable).<br>Il n'existe aucune clause d'inaliénabilité";

      TT = prixHT / 10
      MainNomOP[0] = "Inventaire : "
      MainCompte[0] = ["139000", "777000"];
      MainDébit[0] = [TT, ""];
      MainCrédit[0] = ["", TT];
      MainDate[0] = "31/12/N";



      paterne = 1;

  }
  //________________________________________________________________________________________________________________

  if (idOp == 59) { //Subvention d'investissement inventaire avec d'étalement

      let prixHT = randomNum(1, 10);
      prixHT = prixHT * 1000

      prixHT = prixHT * 10


      énoncé = "A l'inventaire N, passage au compte de résultat d'une subvention d'investissement de " + prixHT + " € pour d'un camion.<br>Ce camion a été acheté pour " + prixHT * 2 + " €, est mis en service le 1er juillet N et amorti sur une durée de 10 ans";

      TT = prixHT / 10 / 2
      MainNomOP[0] = "Inventaire N : "
      MainCompte[0] = ["139000", "777000"];
      MainDébit[0] = [TT, ""];
      MainCrédit[0] = ["", TT];
      MainDate[0] = "31/12/N";



      paterne = 1;

  }
  //________________________________________________________________________________________________________________

  if (idOp == 60) { //Subvention d'investissement inventaire avec d'étalement

      let prixHT = randomNum(1, 10);
      prixHT = prixHT * 1000

      prixHT = prixHT * 10


      énoncé = "A l'inventaire N, passage au compte de résultat d'une subvention d'investissement de " + prixHT + " € pour un camion.<br>Ce camion a été acheté pour " + prixHT * 2 + " € , mis en service le 1er juillet N-1 et amorti sur une durée de 10 ans";

      TT = prixHT / 10
      MainNomOP[0] = "Inventaire N : "
      MainCompte[0] = ["139000", "777000"];
      MainDébit[0] = [TT, ""];
      MainCrédit[0] = ["", TT];
      MainDate[0] = "31/12/N";



      paterne = 1;

  }
  //________________________________________________________________________________________________________________

  if (idOp == 61) { //solde subvention

      let prixHT = randomNum(1, 10);
      prixHT = prixHT * 10000

      MainNomOP[0] = "Inventaire : "
      MainCompte[0] = ["131000", "139000"];
      MainDébit[0] = [prixHT, ""];
      MainCrédit[0] = ["", prixHT];
      MainDate[0] = "31/12/N";


      énoncé = "A l'inventaire N, solde des comptes d'une subvention d'investissement de " + prixHT + " €";

      paterne = 1;

  }


  //________________________________________________________________________________________________________________

  if (idOp == 701) { //Provision simple

      let prixHT = randomNum(1, 10);
      prixHT = prixHT * 1000

      MainNomOP[0] = "Inventaire : "
      MainCompte[0] = ["687500", "151100"];
      MainDébit[0] = [prixHT, ""];
      MainCrédit[0] = ["", prixHT];
      MainDate[0] = "31/12/N";

      énoncé = "L'entreprise est en litige avec un client pour des travaux non achevés dans les temps lors de l'exercice N constate " + prixHT + " € de provision";

      paterne = 1;

  }
  //________________________________________________________________________________________________________________

  if (idOp == 702) { //Provision + paiement + reprise

      let prixHT = randomNum(1, 10);
      prixHT = prixHT * 1000
      prixHT2 = Math.round(prixHT * 1.1);

      MainNomOP[0] = "Inventaire N : "
      MainCompte[0] = ["687500", "151100"];
      MainDébit[0] = [prixHT, ""];
      MainCrédit[0] = ["", prixHT];
      MainDate[0] = "31/12/N";

      MainNomOP[1] = "Paiement des indémnités de retard : "
      MainCompte[1] = ["671000", "512000"];
      MainDébit[1] = [prixHT2, ""];
      MainCrédit[1] = ["", prixHT2];
      MainDate[1] = "02/09/N+1";

      MainNomOP[2] = "Inventaire N+1 : "
      MainCompte[2] = ["151100", "787500"];
      MainDébit[2] = [prixHT, ""];
      MainCrédit[2] = ["", prixHT];
      MainDate[2] = "31/12/N+1";

      énoncé = "L'entreprise de BTP est en litige avec un client pour des travaux non achevés dans les temps lors de l'exercice N.<br>Elle constate " + prixHT + " € de provision.<br>Une procédure de conciliation a eu lieu en N+1 et l'entreprise accepte de payer " + prixHT2 + " € le " + MainDate[1];

      paterne = 3;

  }
  //________________________________________________________________________________________________________________



  if (idOp == 100) {

      let prixHT = randomNum(1, 100);
      prixHT = prixHT * 100
      let TVA20 = prixHT / 5;
      let TT = prixHT + TVA20;

      //ecriture 1
      MainNomOP[0] = ""
      MainCompte[0] = ["411000", "445710", "701000"]; // 1er tableau
      MainDébit[0] = [TT, "", ""];
      MainCrédit[0] = ["", TVA20, prixHT];
      MainDate[0] = "11/03/2024";


      //ecriture 2
      MainNomOP[1] = ""
      MainCompte[1] = ["512000", "411000"]; // 2eme tableau
      MainDébit[1] = [TT, ""];
      MainCrédit[1] = ["", TT];
      MainDate[1] = "29/03/2024";

      énoncé = "Le " + MainDate[0] + " une vente de marchandises de " + prixHT + "€ avec TVA à 20%, paiement le " + MainDate[1];
      paterne = 2; // peut amélioré


  }
  if (idOp == 101) {

      let prixHT = randomNum(10, 10);
      prixHT = prixHT * 10000
      let TVA20 = prixHT / 5;
      let TT = prixHT + TVA20;

      MainNomOP[0] = ""
      MainCompte[0] = ["215400", "445620", "404000"];
      MainDébit[0] = [prixHT, TVA20, ""];
      MainCrédit[0] = ["", "", TT];
      énoncé = "Le " + MainDate[0] + " un achat d'une fraiseuse numérique (matériel industriel) de " + prixHT + "€ avec TVA à 20%";
      paterne = 1;


  }

  if (idOp == 102) { //Sortie immo

      let prixHT = randomNum(1, 100);
      prixHT = prixHT * 10000
      let TVA20 = prixHT / 5;
      let TT = prixHT + TVA20;

      //ecriture 1

      MainNomOP[0] = "Cession de l'immobilisation"
      MainCompte[0] = ["512000", "775000", "445710"]; // 1er tableau
      MainDébit[0] = [TT, "", ""];
      MainCrédit[0] = ["", TVA20, prixHT];
      MainDate[0] = "11/03/2024";


      //ecriture 2
      MainNomOP[1] = "Complément amortissement"

      MainCompte[1] = ["681100", "281540"]; // 2eme tableau
      MainDébit[1] = [TT, ""];
      MainCrédit[1] = ["", TT];
      MainDate[1] = "29/03/2024";

      MainNomOP[2] = "Sortie du bilan"
      MainCompte[2] = ["675000", "281540", "215400"]; // 2eme tableau
      MainDébit[2] = [TT, "", ""];
      MainCrédit[2] = ["", TT, ""];
      MainDate[2] = "29/03/2024";

      //ajouter detail ecriture MainNomOP






      énoncé = "Une entreprise a acheté un matériel industriel le 1er janvier N-3 pour 20 000 € HT. Elle a choisi d’amortir ce bien sur une durée de 5 années. Le 1er juillet N, elle le cède pour la somme de 10 000 € HT. Son exercice comptable se déroule du 1er janvier au 31 décembre de chaque année. " + prixHT + "€ avec TVA à 20%, paiement le " + MainDate[1];
      paterne = 3; // peut amélioré


  }
  


}
*/
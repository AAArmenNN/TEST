//cote serveur logicexo app/api/webhooks/logicexo/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { NextApiRequest, NextApiResponse } from 'next';



// Variables globales
let scoreUser = 0;
let ReponseDébit2: any[] = [];
let ReponseCrédit2: any[] = [];
let MainNomOP: string[] = [];
let MainCompte: any[] = [];
let MainDébit: any[] = [];
let MainCrédit: any[] = [];
let MainDate: string[] = [];
let énoncé: string = "vide";
let paterne = 0;
let operations: any[] = [];

// Map des IDs d'opérations associées aux checkboxes
const operationMap: Record<number, string[]> = {
  1: ['1', '2', '3', '4', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'],
  2: ['20', '21'],
  3: [],
  7: ['701', '702'],
  12: ['51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61']
};

function randomNum(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min)) + min;
}



function OPN() {
    console.log("°°°°°°°°°°°°°°°°°°°°°°°° Début OPN")
    énoncé = "Chargement";

    let idOp = randomNum(0, operations.length);

    console.log("NB Random = " + idOp);

    idOp = operations[idOp];
    //idOp=12
    console.log("idOp: operations[idOp]; = " + idOp);


    énoncé = "Aucun thème séléctionné";

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

        énoncé = "Le 4 mai 2023: réception de la facture pour l'entretien du camion de livraison d'un montant de " + prixHT + " € HT.\nLa facture porte la mention « TVA sur les débits ». Au bas de la facture est mentionné « escompte de 2% si le paiement intervient dans les 8 jours ».\nLe 5 mai 2023 : règlement par virement de la facture du 4 mai 2023 après déduction de l'escompte de 2 %. La facture d'avoir concernant cet escompte est reçue le jour même.";

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

        let prixHTfinal = TT * 5

        énoncé = "Le 7 mai 2023 : réception d'un virement de " + TT + " € TTC à titre d'acompte suite à l'acceptation d'un devis par un client\n\nLe 17 mai 2023 : Facture finale de " + prixHTfinal + " € HT de marchandises avec TVA à 20%";

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
        énoncé = "Le " + MainDate[0] + " reception de la facture de l'expert comptable pour la tenu des comptes de " + prixHT + " € HT avec TVA à 20%.\nAucune mention particulière sur la facture";
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
        énoncé = "Le " + MainDate[0] + " reception de la facture de l'expert comptable pour la tenu des comptes de " + prixHT + " € HT avec TVA à 20%.\nMention TVA sur les débits sur la facture";
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

        énoncé = "Le " + MainDate[0] + ", notification d'attribution d'une subvention d'exploitation de " + prixHT + " € .\n\n Versement de la subvention : " + MainDate[1];


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

        énoncé = "Le " + MainDate[0] + ", notification d'attribution d'une subvention d'équilibre de " + prixHT + " € .\n\n Versement de la subvention : " + MainDate[1];


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

        énoncé = "Le " + MainDate[0] + ", notification d'attribution d'une subvention d'investissement de " + prixHT + " € .\n\n Versement de la subvention : " + MainDate[1];


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

        énoncé = "Le " + MainDate[0] + ", notification d'attribution d'une subvention d'investissement de " + prixHT + " € .\n\n Versement de la subvention : " + MainDate[1];


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

        énoncé = "Le " + MainDate[0] + ", notification d'attribution d'une subvention pour l'achat d'une immobilisation de " + prixHT + " € .\n\n Versement de la subvention : " + MainDate[1];


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

        let TT = prixHT / 5
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


        énoncé = "A l'inventaire N, passage au compte de résultat d'une subvention d'investissement de " + prixHT + " € pour l'achat d'un terrain (donc non amortissable).\nIl existe une clause d'inaliénabilité de 5 ans";

        let TT = prixHT / 5
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


        énoncé = "A l'inventaire N, passage au compte de résultat d'une subvention d'investissement de " + prixHT + " € pour l'achat d'un terrain (donc non amortissable).\nIl n'existe aucune clause d'inaliénabilité";

        let TT = prixHT / 10
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


        énoncé = "A l'inventaire N, passage au compte de résultat d'une subvention d'investissement de " + prixHT + " € pour l'achat d'un terrain (donc non amortissable).\nIl n'existe aucune clause d'inaliénabilité";

        let TT = prixHT / 10
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


        énoncé = "A l'inventaire N, passage au compte de résultat d'une subvention d'investissement de " + prixHT + " € pour d'un camion.\nCe camion a été acheté pour " + prixHT * 2 + " €, est mis en service le 1er juillet N et amorti sur une durée de 10 ans";

        let TT = prixHT / 10 / 2
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


        énoncé = "A l'inventaire N, passage au compte de résultat d'une subvention d'investissement de " + prixHT + " € pour un camion.\nCe camion a été acheté pour " + prixHT * 2 + " € , mis en service le 1er juillet N-1 et amorti sur une durée de 10 ans";

        let TT = prixHT / 10
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
        let prixHT2 = Math.round(prixHT * 1.1);

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

        énoncé = "L'entreprise de BTP est en litige avec un client pour des travaux non achevés dans les temps lors de l'exercice N.\nElle constate " + prixHT + " € de provision.\nUne procédure de conciliation a eu lieu en N+1 et l'entreprise accepte de payer " + prixHT2 + " € le " + MainDate[1];

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


    console.log("°°°°°°°°°°°°°°°°°°°°°°°° Fin OPN")

}

//-------------------------------------------------------------------------------  
// Exporter explicitement la méthode POST

export async function POST(req: NextRequest) {
    try {
      const { theme } = await req.json(); // Récupérer les données envoyées par le client
      console.log("=============================")
      console.log('Theme reçu :', theme);

       // Vérification que 'theme' contient bien 'valeursCochees'
    if (!theme || !Array.isArray(theme.valeursCochees)) {
        throw new Error("Propriété 'valeursCochees' manquante ou invalide dans le thème");
      }
  
      const selections = theme.valeursCochees; // Récupérer les thèmes sélectionnés
      console.log('selections = ', selections);

      // Logique de traitement
      operations = []; // Réinitialise les opérations
  
      selections.forEach((selection: number) => {
        if (operationMap[selection]) {
          operations = operations.concat(operationMap[selection]);
        }
      });

      console.log('operations = ', operations);

      console.log("=============================")



        OPN();

        console.log("=============================")
        console.log('Theme choisi ////', énoncé);
        console.log("=============================")


  
      // Vous pouvez ajouter un traitement supplémentaire ici
  
      return NextResponse.json({ message: 'Données reçues avec succès' }, { status: 200 });
    } catch (error: unknown) {
      // Castez l'erreur en Error pour accéder à ses propriétés
      if (error instanceof Error) {
        console.error('Erreur lors du traitement du POST :', error.message);
        return NextResponse.json({ message: 'Erreur lors du traitement', error: error.message }, { status: 500 });
      } else {
        // Si l'erreur n'est pas une instance d'Error, vous pouvez gérer un autre type d'erreur ici
        console.error('Erreur inconnue', error);
        return NextResponse.json({ message: 'Erreur inconnue', error: 'Erreur inconnue' }, { status: 500 });
      }
    }
  }
  


//-------------------------------------------------------------------------------  
// Fonction GET pour récupérer les thèmes depuis l'URL
export async function GET(request: NextRequest) {
    console.log("----------------------------------------");
    console.log("GET start");

// c'est la que je veux recevoir selectedValues qui correspond aux thème selectionnés
    OPN();

    const data = {
        message: énoncé,
        MainNomOP: MainNomOP,
        MainDate: MainDate,
        MainCompte: MainCompte,
        MainDébit: MainDébit,
        MainCrédit: MainCrédit,
        paterne: paterne
    };

    console.log("GET FIN");
    console.log("----------------------------------------");

    return NextResponse.json(data);
}

// Fonction POST côté serveur




// ANCIEN
/*
export async function POST(request: NextRequest) {
    console.log("POST start")

    try {
        
        const { theme } = await request.json(); // Récupérer les données envoyées par le client
        console.log("=============================")
        console.log('Theme reçu :', theme);

        // Vérification que 'theme' contient bien 'valeursCochees'
        if (!theme || !Array.isArray(theme.valeursCochees)) {
            throw new Error("Propriété 'valeursCochees' manquante ou invalide dans le thème");
        }
        const selections = theme.valeursCochees; // Récupérer les thèmes sélectionnés

        // Logique de traitement
        operations = []; // Réinitialise les opérations
        console.log("selections 2 = " + selections)


        selections.forEach((selection: number) => {
            if (operationMap[selection]) {
                operations = operations.concat(operationMap[selection]);
            }
        });
        console.log("selections 3 = "+selections)


        OPN();
        console.log("selections 4 = "+selections)

        return NextResponse.json({
            status: 'OK',
            message: 'Opération réussie',
            énoncé,
            MainNomOP,
            MainDate,
            MainCompte,
            MainDébit,
            MainCrédit,
            paterne
        });
    } catch (error) {
        console.error("Erreur dans le traitement de la requête : ", error);
        return NextResponse.json({ 
            status: 'ERROR', 
            message: 'Une erreur est survenue.', 
            //error: error.message 
            
        }, { status: 510 });
    }
}


export async function GET(request: NextRequest) {
    const now = new Date().toISOString();


    console.log("message 1 = "+now)

    OPN()
    // Logique de récupération des données 
    const data = {
        message: énoncé,
        //message: now,


        MainNomOP: MainNomOP,
        MainDate: MainDate,
        MainCompte: MainCompte,
        MainDébit: MainDébit,
        MainCrédit: MainCrédit,
        paterne: paterne
    };

    // Renvoie la réponse JSON
    return NextResponse.json(data);
}
*/


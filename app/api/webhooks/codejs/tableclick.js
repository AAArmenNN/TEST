// Fonction pour rendre les cellules d'une table modifiables
function makeTableEditable(tableId) {
    // Sélectionne l'élément de la table avec l'id passé en paramètre
    const table = document.getElementById(tableId);

    // Vérifie si la table existe
    if (table) {
        // Ajoute un écouteur d'événement pour détecter les clics sur la table
        table.addEventListener('click', (event) => {
            // Récupère l'élément cliqué (la cible de l'événement)
            const target = event.target;
            //console.log(event.target)



            // Vérifie si l'élément cliqué est une cellule de table (TD)
            if (target.tagName === 'TD') {
                // Rend la cellule cliquée modifiable
                makeCellEditable(target);
            }
        });
    } else {
        console.error(`Table with id "${tableId}" not found.`);
    }
    //-------------------------------------------------------------------------------------------------

    // Fonction qui rend une cellule modifiable
    function makeCellEditable(cell) {
        // Sauvegarde le contenu original de la cellule
        const originalContent = cell.textContent;

        // Rend la cellule modifiable
        cell.contentEditable = true;

        // Ajoute une classe CSS pour changer l'apparence de la cellule modifiable
        cell.classList.add('editable');

        // Met le focus sur la cellule pour que l'utilisateur puisse commencer à éditer
        cell.focus();

        // Ajoute un écouteur d'événement qui désactive l'édition lorsque la cellule perd le focus
        cell.addEventListener('blur', () => {
            // Désactive l'édition de la cellule
            cell.contentEditable = false;

            // Enlève la classe CSS
            cell.classList.remove('editable');

            // Ici, vous pouvez ajouter la logique pour sauvegarder le contenu modifié
            // comme une requête AJAX ou la mise à jour d'une base de données locale




            let caseeee = document.getElementById('E0-y0-x0').textContent

            for (let libE = 0; libE < MainCompte.length; libE++) {


                for (let libL = 0; libL < MainCompte[libE].length; libL++) {
                    caseeee = document.getElementById(`E${libE}-y${libL}-x0`).textContent


                    document.getElementById(`E${libE}-y${libL}-x1`).textContent = trouverDescriptionCompte(NbCara(caseeee));
                    //console.log(caseeee)

                }

                //caseeee = document.getElementById(`E${lib}-y0-x0`).textContent


            }





        }, { once: true }); // L'événement est configuré pour se déclencher une seule fois

        // Ajoute un écouteur d'événement pour les touches pressées dans la cellule
        cell.addEventListener('keydown', (event) => {
            // Si la touche pressée est 'Enter'
            if (event.key === 'Enter') {
                // Déclenche l'événement 'blur' pour terminer l'édition
                cell.blur();
                // Si la touche pressée est 'Escape'
            } else if (event.key === 'Escape') {
                // Rétablit le contenu original de la cellule
                cell.textContent = originalContent;

                // Déclenche l'événement 'blur' pour terminer l'édition
                cell.blur();
            }
        });
    }
}

function simplifyAccount(account) {
    return account.replace(/0+$/, '');
}

function areAccountsEquivalent(account1, account2) {
    const simplified1 = simplifyAccount(account1);
    const simplified2 = simplifyAccount(account2);
    return simplified1.startsWith(simplified2) || simplified2.startsWith(simplified1);
}










// Fonction pour simplifier un compte comptable en supprimant les zéros finaux
function simplifyAccount(account) {
    return account.replace(/0+$/, '');
}

// Fonction pour vérifier si deux comptes comptables sont équivalents
function areAccountsEquivalent(account1, account2) {
    const simplified1 = simplifyAccount(account1);
    const simplified2 = simplifyAccount(account2);
    return simplified1.startsWith(simplified2) || simplified2.startsWith(simplified1);
}
/*
// Fonction pour trouver la description d'un compte par numéro
function trouverDescriptionCompte(numero) {

    const comptes = [
        { numero: '200000', description: 'immo' }, // PROBLEM !!!

        { numero: '215400', description: 'Matériels industriels' },
        
        { numero: '607000', description: 'Achats de marchandises' },
        { numero: '615000', description: 'Entretien et réparations' },
        { numero: '601000', description: 'Achats stockés - Matières premières (et fournitures)' },



        { numero: '665000', description: 'Escomptes accordés' },
        { numero: '624100', description: 'Transports sur achats' },
        { numero: '622600', description: 'Honoraires' },


        { numero: '701000', description: 'Ventes de produits finis' },
        { numero: '707000', description: 'Ventes de marchandises' },
        { numero: '765000', description: 'Escomptes obtenus' },
        { numero: '708500', description: 'Ports et frais accessoires facturés' },
        
        { numero: '401000', description: 'Fournisseurs' },
        { numero: '411000', description: 'Clients' },
        { numero: '419100', description: 'Clients - Avances et acomptes reçus sur commandes' },
        { numero: '409100', description: 'Fournisseurs - Avances et acomptes versés sur commandes' },
        { numero: '445800', description: "Taxes sur le chiffre d'affaires à régulariser ou en attente" },







        
        { numero: '413000', description: 'Clients - Effets à recevoir' },
        { numero: '416000', description: 'Clients douteux ou litigieux' },
        { numero: '418000', description: 'Clients - Produits non encore facturés' },
        { numero: '404000', description: "Fournisseurs d'immobilisations" },
        { numero: '445660', description: 'T.V.A. sur autres biens et services' },
        { numero: '445620', description: 'T.V.A. sur immobilisations' },
        { numero: '445710', description: 'T.V.A. collectée' },
        { numero: '512000', description: 'Banque' },
        // Ajoutez plus de comptes si nécessaire
    ];

    // Rechercher le compte dans la liste en vérifiant l'équivalence
    const compte = comptes.find(c => areAccountsEquivalent(c.numero, numero));
    console.log(numero)

    // Si le compte est trouvé, retourner la description
    if (compte) {

        if (numero!="000000") { // en cas de case vide, prend le premier n° de compte
            return compte.description;
        }
    } else {
        return null; // Retourner null si le compte n'est pas trouvé
    }
}
*/


/* ----------------------------------------------------------------------------------------------------------------------------------------
Ancienne version

// Fonction pour trouver la description d'un compte par numéro
*/
function trouverDescriptionCompte(numero) {

    const comptes = [

        { numero: '200000', description: "Immobilisations incorporelles" },
        { numero: '201000', description: "Frais d'établissement" },
        { numero: '201100', description: "Frais de constitution" },
        { numero: '201200', description: "Frais de premier établissement" },
        { numero: '201210', description: "Frais de prospection" },
        { numero: '201220', description: "Frais de publicité" },
        { numero: '201300', description: "Frais d'augmentation de capital et d'opérations" },
        { numero: '203000', description: "Frais de recherche et de développement" },
        { numero: '205000', description: "Concessions et droits similaires, brevets, licences, marques, procédés, logiciels, droits et valeurs similaires" },
        { numero: '206000', description: "Droit au bail" },
        { numero: '207000', description: "Fonds commercial" },
        { numero: '208000', description: "Autres immobilisations incorporelles" },
        { numero: '210000', description: "Immobilisations corporelles" },
        { numero: '211000', description: "Terrains" },
        { numero: '211100', description: "Terrains nus" },
        { numero: '211200', description: "Terrains aménagés" },
        { numero: '211300', description: "Sous-sols et sursols" },
        { numero: '211400', description: "Terrains de gisement" },
        { numero: '211410', description: "Carrières" },
        { numero: '211500', description: "Terrains bâtis" },
        { numero: '211510', description: "Ensembles immobiliers industriels" },
        { numero: '211550', description: "Ensembles immobiliers administratifs et commerciaux" },
        { numero: '211580', description: "Autres ensembles immobiliers" },
        { numero: '211581', description: "Affectés aux opérations professionnelles" },
        { numero: '211588', description: "Affectés aux opérations non professionnelles" },
        { numero: '211600', description: "Compte d'ordre sur immobilisations" },
        { numero: '212000', description: "Agencements et aménagements de terrains" },
        { numero: '213000', description: "Constructions" },
        { numero: '213100', description: "Bâtiments" },
        { numero: '213110', description: "Ensembles immobiliers industriels" },
        { numero: '213150', description: "Ensembles immobiliers administratifs et commerciaux" },
        { numero: '213180', description: "Autres ensembles immobiliers" },
        { numero: '213181', description: "Affectés aux opérations professionnelles" },
        { numero: '213188', description: "Affectés aux opérations non professionnelles" },
        { numero: '213500', description: "Installations générales - agencements - aménagements des constructions" },
        { numero: '213800', description: "Ouvrages d'infrastructure" },
        { numero: '213810', description: "Voies de terre" },
        { numero: '213820', description: "Voies de fer" },
        { numero: '213830', description: "Voies d'eau" },
        { numero: '213840', description: "Barrages" },
        { numero: '213850', description: "Pistes d'aérodromes" },
        { numero: '214000', description: "Constructions sur sol d'autrui" },
        { numero: '215000', description: "Installations techniques, matériels et outillage industriels" },
        { numero: '215100', description: "Installations complexes spécialisées" },
        { numero: '215110', description: "sur sol propre" },
        { numero: '215140', description: "sur sol d'autrui" },
        { numero: '215300', description: "Installations à caractère spécifique" },
        { numero: '215310', description: "sur sol propre" },
        { numero: '215340', description: "sur sol d'autrui" },
        { numero: '215400', description: "Matériels industriels" },
        { numero: '215500', description: "Outillage industriel" },
        { numero: '215700', description: "Agencements et aménagements des matériels et outillage industriels" },
        { numero: '218000', description: "Autres immobilisations corporelles" },
        { numero: '218100', description: "Installations générales, agencements, aménagements divers" },
        { numero: '218200', description: "Matériel de transport" },
        { numero: '218300', description: "Matériel de bureau et matériel informatique" },
        { numero: '218400', description: "Mobilier" },
        { numero: '218500', description: "Cheptel" },
        { numero: '218600', description: "Emballages récupérables" },
        { numero: '220000', description: "Immobilisations mises en concession" },
        { numero: '277100', description: "Actions propres ou parts propres" },
        { numero: '277200', description: "Actions propres ou parts propres en voie d’annulation" },
        { numero: '279000', description: "Versements restant à effectuer sur titres immobilisés non libérés" },
        { numero: '280000', description: "Amortissements des immobilisations incorporelles" },
        { numero: '280100', description: "Frais d'établissement" },
        { numero: '280300', description: "Frais de recherche et de développement" },
        { numero: '280500', description: "Concessions et droits similaires, brevets, licences, logiciels, droits et valeurs similaires" },
        { numero: '280700', description: "Fonds commercial" },
        { numero: '280800', description: "Autres immobilisations incorporelles" },
        { numero: '281000', description: "Amortissements des immobilisations corporelles" },
        { numero: '281100', description: "Terrains de gisement" },
        { numero: '281200', description: "Agencements, aménagements de terrains" },
        { numero: '281300', description: "Constructions (même ventilation que celle du compte 213)" },
        { numero: '281400', description: "Constructions sur sol d'autrui" },
        { numero: '281500', description: "Installations, matériel et outillage industriels" },
        { numero: '281800', description: "Autres immobilisations corporelles" },
        { numero: '282000', description: "Amortissements des immobilisations mises en concession" },
        { numero: '290000', description: "Dépréciations des immobilisations incorporelles" },
        { numero: '290500', description: "Marques, procédés, droits et valeurs similaires" },
        { numero: '290600', description: "Droit au bail" },
        { numero: '290700', description: "Fonds commercial" },
        { numero: '290800', description: "Autres immobilisations incorporelles" },
        { numero: '291000', description: "Dépréciations des immobilisations corporelles" },
        { numero: '291100', description: "Terrains (autres que terrains de gisement)" },
        { numero: '292000', description: "Dépréciations des immobilisations mises en concession" },
        { numero: '293000', description: "Dépréciations des immobilisations en cours" },
        { numero: '293100', description: "Immobilisations corporelles en cours" },
        { numero: '293200', description: "Immobilisations incorporelles en cours" },
        { numero: '296000', description: "Provisions pour dépréciation des participations et créances rattachées à des participations" },
        { numero: '296100', description: "Titres de participation" },
        { numero: '296600', description: "Autres formes de participation" },
        { numero: '296700', description: "Créances rattachées à des participations" },
        { numero: '296800', description: "Créances rattachées à des sociétés en participation" },
        { numero: '297000', description: "Provisions pour dépréciation des autres immobilisations financières" },
        { numero: '297100', description: "Titres immobilisés autres que les titres immobilisés de l'activité de portefeuille - droit de propriété" },
        { numero: '297200', description: "Titres immobilisés - droit de créance" },
        { numero: '297300', description: "Titres immobilisés de l'activité de portefeuille" },
        { numero: '297400', description: "Prêts (même ventilation que celle du compte 274)" },
        { numero: '297500', description: "Dépôts et cautionnements versés" },
        { numero: '297600', description: "Autres créances immobilisées" },
        { numero: '311000', description: "Matières (ou groupe) A" },
        { numero: '312000', description: "Matières (ou groupe) B" },
        { numero: '317000', description: "Fournitures A, B, C" },
        { numero: '321000', description: "Matières consommables" },
        { numero: '321100', description: "Matières (ou groupe) C" },
        { numero: '321200', description: "Matières (ou groupe) D" },
        { numero: '322000', description: "Fournitures consommables" },
        { numero: '322100', description: "Combustibles" },
        { numero: '322200', description: "Produits d'entretien" },
        { numero: '322300', description: "Fournitures d'atelier et d'usine" },
        { numero: '322400', description: "Fournitures de magasin" },
        { numero: '322500', description: "Fournitures de bureau" },
        { numero: '326000', description: "Emballages" },
        { numero: '326100', description: "Emballages perdus" },
        { numero: '326500', description: "Emballages récupérables non identifiables" },
        { numero: '326700', description: "Emballages à usage mixte" },
        { numero: '331000', description: "Produits en cours" },
        { numero: '331100', description: "Produits en cours P 1" },
        { numero: '331200', description: "Produits en cours P 2" },
        { numero: '335000', description: "Travaux en cours" },
        { numero: '335100', description: "Travaux en cours T 1" },
        { numero: '335200', description: "Travaux en cours T 2" },
        { numero: '341000', description: "Etudes en cours" },
        { numero: '341100', description: "Etudes en cours E 1" },
        { numero: '341200', description: "Etudes en cours E 2" },
        { numero: '345000', description: "Prestations de services en cours" },
        { numero: '345100', description: "Prestations de services S 1" },
        { numero: '345200', description: "Prestations de services S 2" },
        { numero: '351000', description: "Produits intermédiaires" },
        { numero: '351100', description: "Produits intermédiaires (ou groupe) A" },
        { numero: '351200', description: "Produits intermédiaires (ou groupe) B" },
        { numero: '355000', description: "Produits finis" },
        { numero: '355100', description: "Produits finis (ou groupe) A" },
        { numero: '355200', description: "Produits finis (ou groupe) B" },
        { numero: '358000', description: "Produits résiduels (ou matières de récupération)" },
        { numero: '358100', description: "Déchets" },
        { numero: '358500', description: "Rebuts" },
        { numero: '358600', description: "Matières de récupération" },
        { numero: '371000', description: "Marchandises (ou groupe) A" },
        { numero: '372000', description: "Marchandises (ou groupe) B" },
        { numero: '391000', description: "Provisions pour dépréciation des matières premières (et fournitures)" },
        { numero: '391100', description: "Matières (ou groupe A)" },
        { numero: '391200', description: "Matières (ou groupe B)" },
        { numero: '391700', description: "Fournitures A, B, C" },
        { numero: '392000', description: "Provisions pour dépréciation des autres approvisionnements" },
        { numero: '392100', description: "Matières consommables" },
        { numero: '392200', description: "Fournitures consommables" },
        { numero: '392600', description: "Emballages" },
        { numero: '393000', description: "Provisions pour dépréciation des en-cours de production de biens" },
        { numero: '393100', description: "Produits en cours" },
        { numero: '393500', description: "Travaux en cours" },
        { numero: '394000', description: "Provisions pour dépréciation des en-cours de production de services" },
        { numero: '394100', description: "Etudes en cours (même ventilation que celle du compte 341)" },
        { numero: '394500', description: "Prestations de services en cours" },
        { numero: '395000', description: "Provisions pour dépréciation des stocks de produits" },
        { numero: '395100', description: "Produits intermédiaires" },
        { numero: '395500', description: "Produits finis" },
        { numero: '397000', description: "Provisions pour dépréciation des stocks de marchandises" },
        { numero: '397100', description: "Marchandise (ou groupe A)" },
        { numero: '397200', description: "Marchandise (ou groupe B)" },
        { numero: '401000', description: "Fournisseurs" },
        { numero: '401100', description: "Fournisseurs - Achats de biens et prestations de services" },
        { numero: '401700', description: "Fournisseurs - Retenues de garantie" },
        { numero: '404000', description: "Fournisseurs d'immobilisations - Achats d'immobilisations" },
        { numero: '404700', description: "Fournisseurs d'immobilisations - Retenues de garantie" },
        { numero: '405000', description: "Fournisseurs d'immobilisations - Effets à payer" },
        { numero: '408000', description: "Fournisseurs - Factures non parvenues" },
        { numero: '408100', description: "Fournisseurs" },
        { numero: '408400', description: "Fournisseurs d'immobilisations" },
        { numero: '408800', description: "Fournisseurs - Intérêts courus" },
        { numero: '409000', description: "Fournisseurs débiteurs" },
        { numero: '409100', description: "Fournisseurs - Avances et acomptes versés sur commandes" },
        { numero: '409600', description: "Fournisseurs - Créances pour emballages et matériel à rendre" },
        { numero: '409700', description: "Fournisseurs - Autres avoirs" },
        { numero: '409710', description: "Fournisseurs d'exploitation" },
        { numero: '409740', description: "Fournisseurs d'immobilisations" },
        { numero: '409800', description: "Rabais, remises, ristournes à obtenir et autres avoirs non encore reçus" },
        { numero: '410000', description: "Clients et comptes rattachés" },
        { numero: '411000', description: "Clients" },
        { numero: '411100', description: "Clients - Ventes de biens ou de prestations de services" },
        { numero: '411700', description: "Clients - Retenues de garantie" },
        { numero: '413000', description: "Clients - Effets à recevoir" },
        { numero: '416000', description: "Clients douteux ou litigieux" },
        { numero: '418000', description: "Clients - Produits non encore facturés" },
        { numero: '418100', description: "Clients - Factures à établir" },
        { numero: '418800', description: "Clients - Intérêts courus" },
        { numero: '419000', description: "Clients créditeurs" },
        { numero: '419100', description: "Clients - Avances et acomptes reçus sur commandes" },
        { numero: '419600', description: "Clients - Dettes sur emballages et matériels consignés" },
        { numero: '419700', description: "Clients - Autres avoirs" },
        { numero: '419800', description: "Rabais, remises, ristournes à accorder et autres avoirs à établir" },
        { numero: '421000', description: "Personnel - Rémunérations dues" },
        { numero: '422000', description: "Comités d'entreprises, d'établissement, ..." },
        { numero: '424000', description: "Participation des salariés aux résultats" },
        { numero: '424600', description: "Réserve spéciale (art. L. 442-2 du code du travail)" },
        { numero: '424800', description: "Comptes courants" },
        { numero: '425000', description: "Personnel - Avances et acomptes" },
        { numero: '426000', description: "Personnel - Dépôts" },
        { numero: '427000', description: "Personnel - Oppositions" },
        { numero: '428000', description: "Personnel - Charges à payer et produits à recevoir" },
        { numero: '428200', description: "Dettes provisionnées pour congés à payer" },
        { numero: '428400', description: "Dettes provisionnées pour participation des salariés aux résultats" },
        { numero: '428600', description: "Autres charges à payer" },
        { numero: '428700', description: "Produits à recevoir" },
        { numero: '431000', description: "Sécurité sociale" },
        { numero: '437000', description: "Autres organismes sociaux" },
        { numero: '438000', description: "Organismes sociaux - Charges à payer et produits à recevoir" },
        { numero: '438200', description: "Charges sociales sur congés à payer" },
        { numero: '438600', description: "Autres charges à payer" },
        { numero: '438700', description: "Produits à recevoir" },
        { numero: '441000', description: "État - Subventions à recevoir" },
        { numero: '441100', description: "Subventions d'investissement" },
        { numero: '441700', description: "Subventions d'exploitation" },
        { numero: '441800', description: "Subventions d'équilibre" },
        { numero: '441900', description: "Avances sur subventions" },
        { numero: '442000', description: "Etat - Impôts et taxes recouvrables sur des tiers" },
        { numero: '442400', description: "Obligataires" },
        { numero: '442500', description: "Associés" },
        { numero: '443000', description: "Opérations particulières avec l'Etat, les collectivités publiques, les organismes internationaux" },
        { numero: '443100', description: "Créances sur l'Etat résultant de la suppression de la règle du décalage d'un mois en matière de T.V.A." },
        { numero: '443800', description: "Intérêts courus sur créances figurant au compte 4431" },
        { numero: '444000', description: "Etat - Impôts sur les bénéfices" },
        { numero: '445000', description: "Etat - Taxes sur le chiffre d'affaires" },
        { numero: '445200', description: "T.V.A. due intracommunautaire" },
        { numero: '445500', description: "Taxes sur le chiffre d'affaires à décaisser" },
        { numero: '445510', description: "T.V.A. à décaisser" },
        { numero: '445580', description: "Taxes assimilées à la T.V.A." },
        { numero: '445600', description: "Taxes sur le chiffre d'affaires déductibles" },
        { numero: '445620', description: "T.V.A. sur immobilisations" },
        { numero: '445630', description: "T.V.A. transférée par d'autres entreprises" },
        { numero: '445660', description: "T.V.A. sur autres biens et services" },
        { numero: '445670', description: "Crédit de T.V.A. à reporter" },
        { numero: '445680', description: "Taxes assimilées à la T.V.A." },
        { numero: '445700', description: "Taxes sur le chiffre d'affaires collectées par l'entreprise" },
        { numero: '445710', description: "T.V.A. collectée" },
        { numero: '445780', description: "Taxes assimilées à la T.V.A." },
        { numero: '445800', description: "Taxes sur le chiffre d'affaires à régulariser ou en attente" },
        { numero: '445810', description: "Acomptes - Régime simplifié d'imposition" },
        { numero: '445820', description: "Acomptes - Régime du forfait" },
        { numero: '445830', description: "Remboursement de taxes sur le chiffre d'affaires demandé" },
        { numero: '445840', description: "T.V.A. récupérée d'avance" },
        { numero: '445860', description: "Taxes sur le chiffre d'affaires sur factures non parvenues" },
        { numero: '445870', description: "Taxes sur le chiffre d'affaires sur factures à établir" },
        { numero: '446000', description: "Obligations cautionnées" },
        { numero: '447000', description: "Autres impôts, taxes et versements assimilés" },
        { numero: '448000', description: "Etat - Charges à payer et produits à recevoir" },
        { numero: '448200', description: "Charges fiscales sur congés à payer" },
        { numero: '448600', description: "Charges à payer" },
        { numero: '448700', description: "Produits à recevoir" },
        { numero: '449000', description: "Quotas d'émission à restituer à l'Etat" },
        { numero: '451000', description: "Groupe" },
        { numero: '455000', description: "Associés - Comptes courants" },
        { numero: '455100', description: "Principal" },
        { numero: '455800', description: "Intérêts courus" },
        { numero: '456000', description: "Associés - Opérations sur le capital" },
        { numero: '456100', description: "Associés - Comptes d'apport en société" },
        { numero: '456110', description: "Apports en nature" },
        { numero: '456115', description: "Apports en numéraire" },
        { numero: '456200', description: "Apporteurs - Capital appelé, non versé" },
        { numero: '457000', description: "Associés - Autres comptes" },
        { numero: '458000', description: "Opérations entre sociétés du groupe" },
        { numero: '459000', description: "Autres comptes d'associés" },
        { numero: '461000', description: "Autres comptes à recevoir" },
        { numero: '462000', description: "Clients" },
        { numero: '463000', description: "Autres créances" },
        { numero: '464000', description: "Comptes de passif à payer" },
        { numero: '465000', description: "Comptes d'attente" },
        { numero: '466000', description: "Autres charges à payer" },
        { numero: '467000', description: "Autres produits à recevoir" },
        { numero: '468000', description: "Autres charges à payer et produits à recevoir" },
        { numero: '469000', description: "Autres comptes créditeurs" },
        { numero: '471000', description: "Comptes d’associés" },
        { numero: '472000', description: "Comptes d'associés - Prêts" },
        { numero: '473000', description: "Comptes d'associés - Avances" },
        { numero: '474000', description: "Comptes de prêts" },
        { numero: '475000', description: "Autres comptes de dettes" },
        { numero: '476000', description: "Autres dettes" },
        { numero: '477000', description: "Dettes en souffrance" },
        { numero: '478000', description: "Dettes à long terme" },
        { numero: '479000', description: "Dettes diverses" },
        { numero: '491000', description: "Provisions pour risques" },
        { numero: '491100', description: "Provisions pour litiges" },
        { numero: '491200', description: "Provisions pour retraites et obligations similaires" },
        { numero: '491300', description: "Provisions pour impôts" },
        { numero: '491400', description: "Provisions pour garanties" },
        { numero: '491500', description: "Provisions pour autres risques" },
        { numero: '492000', description: "Provisions pour charges" },
        { numero: '492100', description: "Provisions pour charges à payer" },
        { numero: '492200', description: "Provisions pour charges à court terme" },
        { numero: '492300', description: "Provisions pour charges à long terme" },
        { numero: '492400', description: "Provisions pour autres charges" },
        { numero: '493000', description: "Provisions pour charges spécifiques" },
        { numero: '494000', description: "Provisions pour charges spécifiques à la société" },
        { numero: '495000', description: "Provisions pour charges spécifiques aux associés" },
        { numero: '496000', description: "Provisions pour charges spécifiques aux partenaires" },
        { numero: '497000', description: "Provisions pour charges spécifiques aux actionnaires" },
        { numero: '498000', description: "Provisions pour charges spécifiques aux investisseurs" },




















        { numero: '607000', description: 'Achats de marchandises' },
        { numero: '615000', description: 'Entretien et réparations' },
        { numero: '601000', description: 'Achats stockés - Matières premières (et fournitures)' },



        { numero: '665000', description: 'Escomptes accordés' },
        { numero: '624100', description: 'Transports sur achats' },
        { numero: '622600', description: 'Honoraires' },


        { numero: '701000', description: 'Ventes de produits finis' },
        { numero: '707000', description: 'Ventes de marchandises' },
        { numero: '765000', description: 'Escomptes obtenus' },
        { numero: '708500', description: 'Ports et frais accessoires facturés' },

        { numero: '401000', description: 'Fournisseurs' },
        { numero: '411000', description: 'Clients' },
        { numero: '419100', description: 'Clients - Avances et acomptes reçus sur commandes' },
        { numero: '409100', description: 'Fournisseurs - Avances et acomptes versés sur commandes' },
        { numero: '445800', description: "Taxes sur le chiffre d'affaires à régulariser ou en attente" },








        { numero: '413000', description: 'Clients - Effets à recevoir' },
        { numero: '416000', description: 'Clients douteux ou litigieux' },
        { numero: '418000', description: 'Clients - Produits non encore facturés' },
        { numero: '404000', description: "Fournisseurs d'immobilisations" },
        { numero: '445660', description: 'T.V.A. sur autres biens et services' },
        { numero: '445620', description: 'T.V.A. sur immobilisations' },
        { numero: '445710', description: 'T.V.A. collectée' },
        { numero: '512000', description: 'Banque' },


        // Ajoutez plus de comptes si nécessaire
    ];

    // Rechercher le compte dans la liste
    const compte = comptes.find(c => c.numero === numero);
    // console.log("tac " + numero)


    // Si le compte est trouvé, retourner la description
    if (compte) {
        return compte.description;
    } else {
        return null; // Retourner null si le compte n'est pas trouvé
    }


}




function createTable(lieutable, tableId, tableClass, numRows) {

    // Créer l'élément de table
    const table = document.createElement('table');
    table.setAttribute('id', tableId);
    table.setAttribute('class', tableClass);
    table.style.width = '60%';
    
    //table.style.height = '140px';
    table.style.backgroundColor="black";

    // Créer l'en-tête de la table
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    headerRow.setAttribute('bgcolor', 'teal');

    // Définir les en-têtes
    const headers = [
        { text: 'N° de compte', width: '120' },
        { text: 'libellé',},
        { text: 'débit', width: '100' },
        { text: 'crédit', width: '100' }
    ];

    headers.forEach(header => {
        const th = document.createElement('th');
        th.textContent = header.text;
        if (header.width) {
            th.style.width = `${header.width}px`;
        }
        headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Créer le corps de la table avec le nombre de lignes spécifié
    const tbody = document.createElement('tbody');
    for (let i = 0; i < numRows; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < headers.length; j++) {
            const td = document.createElement('td');
            td.setAttribute('align', 'center');
            td.setAttribute('bgcolor', 'white');
            // Définir la hauteur minimale souhaitée
            td.style.height = '25px';


           // td.style.minHeight = '40px'; // Définir la hauteur minimale souhaitée

            //td.setAttribute('letter-spacing',"5px"); /* Espacement des lettres */
            td.style.letterSpacing ="2px"

            //td.style.min-height: 40px; /* Définir une hauteur minimale */


            td.textContent = ""; // Initialement vide, peut être rempli plus tard
            td.setAttribute('id', `${tableId}-y${i}-x${j}`);
           // td.style.backgroundColor = 'white'; // Mettre les cellules en blanc
           //td.classList.add('initial');
           // td.style.height = 100%
            row.appendChild(td);
        }
        tbody.appendChild(row);
    }

    table.appendChild(tbody);
    table.style.marginLeft = '40px';


    // Ajouter la table au body du document
   document.body.appendChild(table);

    // Sélectionner l'élément où vous voulez insérer la table
    const container = document.getElementById(lieutable);
    container.appendChild(table);

    // Ajouter un <br> après la table
    //const br = document.createElement('br');
   // container.appendChild(br);



    // Afficher les propriétés de la table dans la console
    //console.log(`Table "${tableName}" with id "${tableId}" and class "${tableClass}" created with ${numRows} rows.`);
}




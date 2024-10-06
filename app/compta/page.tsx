"use client"; // Ajoute cette ligne en haut pour indiquer que c'est un composant client

import Head from 'next/head';
import React from 'react';
import { useState, useEffect } from 'react';


import Styles from '../../styles/menu.module.css';


export default function compta() {

  // Création de l'état pour gérer le texte du <h2>
  const [text, setText] = useState('Sélectionner les thèmes à réviser');
/*
  // Fonction pour changer le texte
  const changeText = () => {
    setText('Le texte a été changé !');
  };*/

  // Gestion des états
  const [nbop, setNbop] = useState(0);
  const [checkedValues, setCheckedValues] = useState<string[]>([]);
  const [comptePreRemplis, setComptePreRemplis] = useState(0);

  // Fonction pour le nombre d'opérations
  const updateNbOP = (nb: number) => {
    setNbop(nb);
    localStorage.setItem('CompteurExoTotal', nb.toString());
  };

  // Fonction pour gérer l'aide compte
  const aideCompte = (yn: number) => {
    setComptePreRemplis(yn);
    localStorage.setItem('ComptePreRemplis', yn.toString());
   /* if (yn === 1) {
      alert("OUI")
    } else {
      alert("NON")
    }*/
  };

  // Fonction pour vérifier les thèmes sélectionnés
  const caseTheme = () => {
    const checkboxes = document.querySelectorAll('.CBA') as NodeListOf<HTMLInputElement>;
    const selectedValues: string[] = [];

    checkboxes.forEach(checkbox => {
      if (checkbox.checked) {
        selectedValues.push(checkbox.value);
      }
    });

    if (document.getElementById("buy")?.style.display === "block") {
      selectedValues.length = 0;
      selectedValues.push("1");
    }

    localStorage.setItem('Valeurscochées', JSON.stringify(selectedValues));

    if (selectedValues.length === 0) {
      validateForm();
    } else if (nbop === 0) {
      alert("Choisir le nombre d'opération");
    } else {
      // Redirige vers la page exo
      window.location.href = '/exo'; // Adaptation de la route pour Next.js
    }
  };

  // Fonction pour gérer la sélection/désélection de toutes les cases à cocher
  const handleSelectAll = (selectAllId: string, classCB: string) => {
    const selectAllCheckbox = document.getElementById(selectAllId) as HTMLInputElement | null;
  const categoryCheckboxes = document.querySelectorAll(`.${classCB}`) as NodeListOf<HTMLInputElement>;

    if (selectAllCheckbox) {
      selectAllCheckbox.addEventListener('change', () => {
        const isChecked = selectAllCheckbox.checked;

        // Cocher/décocher toutes les cases dans la catégorie
        categoryCheckboxes.forEach(checkbox => {
          checkbox.checked = isChecked;
        });
      });

      // Si toutes les cases de la catégorie sont cochées, cocher le selectAll
      categoryCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
          const allChecked = Array.from(categoryCheckboxes).every(checkbox => checkbox.checked);
          selectAllCheckbox.checked = allChecked;
        });
      });
    }
  };
  useEffect(() => {
    handleSelectAll('AselectAll', 'CBA');
    handleSelectAll('BselectAll', 'CBB');
    handleSelectAll('CselectAll', 'CBC');
  }, []);



  

  const validateForm = () => {
    document.getElementById("overlay")!.style.display = "block";
    document.getElementById("popup")!.style.display = "block";
  };

  const closePopup = () => {
    document.getElementById("popup")!.style.display = "none";
    document.getElementById("overlay")!.style.display = "none";
  };

    return (
        <>

            <head>
                <title>Comptabilité</title>
            </head>


            {/* <th style={{ height: '80px' }}> */}



            <br />


            <h2 id="quoi" className={Styles.quoi}>{text}</h2>

            <br />
            <br />

            <div className={Styles.blockTAB}>

                <table id="A" className={Styles.menu}>
                    <tbody>
                        <tr>
                            <th style={{ height: '80px' }}>



                                <label className={Styles.customCheckbox}>
                                    <input type="checkbox" id="AselectAll" value="A0" />
                                    <span className={Styles.checkmark}></span>
                                    Comptabilité UE9
                                </label>
                                {/* checkboxSelectAll */}

                            </th>
                        </tr>
                        {[
                            "L'achat et la vente de biens en France",
                            "L'achat et la vente de services en France",
                            "L'achat et la vente de biens hors de France",
                            "L'achat et la vente de services hors de France",
                            "Amortissements",
                            "Dépréciations",
                            "Provisions",
                            "Opération de change",
                            "PCA CCA",
                            "Passage exercice à une autre",
                            "RRR escompte",
                            "Subventions"
                        ].map((item, index) => (
                            <tr key={index}>
                                <td>
                                    <label className={Styles.customCheckbox}>
                                        <input type="checkbox" className="CBA" value={index + 1} />
                                        <span className={Styles.checkmark}></span>
                                        {item}
                                    </label>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <table id="B" className={Styles.menu}>
                    <tbody>
                        <tr>
                            <th style={{ height: '80px' }}>



                                <label className={Styles.customCheckbox}>
                                    <input type="checkbox" id="BselectAll" value="A0" />
                                    <span className={Styles.checkmark}></span>
                                    Comptabilité Approfondie UE10
                                </label>
                                {/* checkboxSelectAll */}

                            </th>
                        </tr>
                        {[
                            "L'achat et la vente de biens en France",
                            "L'achat et la vente de services en France",
                            "L'achat et la vente de biens hors de France",
                            "L'achat et la vente de services hors de France",
                            "Amortissements",
                            "Dépréciations",
                            "Provisions",
                            "Opération de change",
                            "PCA CCA",
                            "Passage exercice à une autre",
                            "RRR escompte",
                            "Subventions"
                        ].map((item, index) => (
                            <tr key={index}>
                                <td>
                                    <label className={Styles.customCheckbox}>
                                        <input type="checkbox" className="CBB" value={index + 1} />
                                        <span className={Styles.checkmark}></span>
                                        {item}
                                    </label>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <table id="C" className={Styles.menu}>
                    <tbody>
                        <tr>
                            <th style={{ height: '80px' }}>



                                <label className={Styles.customCheckbox}>
                                    <input type="checkbox" id="CselectAll" value="A0" />
                                    <span className={Styles.checkmark}></span>
                                    Comptabilité & Audit UE4
                                </label>
                                {/* checkboxSelectAll */}

                            </th>
                        </tr>
                        {[
                            "L'achat et la vente de biens en France",
                            "L'achat et la vente de services en France",
                            "L'achat et la vente de biens hors de France",
                            "L'achat et la vente de services hors de France",
                            "Amortissements",
                            "Dépréciations",
                            "Provisions",
                            "Opération de change",
                            "PCA CCA",
                            "Passage exercice à une autre",
                            "RRR escompte",
                            "Subventions"
                        ].map((item, index) => (
                            <tr key={index}>
                                <td>
                                    <label className={Styles.customCheckbox}>
                                        <input type="checkbox" className="CBC" value={index + 1} />
                                        <span className={Styles.checkmark}></span>
                                        {item}
                                    </label>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <br />
            <br />
            <br />


            <div className={Styles.bas} id="bas">
                <div className={Styles.groupLabel}>
                    <div className={Styles.label} id="aide">
                        <h3>Numéro de compte pré-remplis (aide)</h3>
                        <button className={`${Styles.buttonIndex} ${comptePreRemplis === 1 ? Styles.btnActiv : ''}`} 
                                  onClick={() => aideCompte(1)}>
                            OUI
                        </button>
                        <button className={`${Styles.buttonIndex} ${comptePreRemplis === 0 ? Styles.btnActiv : ''}`}
                                  onClick={() => aideCompte(0)}>
                            NON
                        </button>
                    </div>

                    <br />
                    <br />

                    <div className={Styles.label} id="nboperation">
                        <h3>Nombre d’opérations :</h3>
                        <button className={`${Styles.buttonIndex} ${nbop === 3 ? Styles.btnActiv : ''}`}
                        id="Btn10" 
                        onClick={() => updateNbOP(3)}>
                            3
                        </button>
                        <button className={`${Styles.buttonIndex} ${nbop === 20 ? Styles.btnActiv : ''}`}
                        id="Btn20"
                        onClick={() => updateNbOP(20)}>
                            20 
                        </button>
                        <button className={`${Styles.buttonIndex} ${nbop === 30 ? Styles.btnActiv : ''}`}
                        id="Btn30" 
                        onClick={() => updateNbOP(30)}>
                            30
                        </button>
                    </div>
                </div>

                <button className={Styles.buttonStart} id="Btncommencer"  >
                    Commencer 🔥
                </button>
            </div>


            <br />
            <br />





        </>
    )
}
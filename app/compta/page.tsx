//PAGE MENU app/compta/page.tsx

"use client";

import Head from 'next/head';
import React from 'react';
import { useState, useEffect } from 'react';
import Styles from '../../styles/menu.module.css';

export default function compta() {
  const [text, setText] = useState('Sélectionner les thèmes à réviser');
  const [nbop, setNbop] = useState(0);
  const [checkedValues, setCheckedValues] = useState<string[]>([]);
  const [comptePreRemplis, setComptePreRemplis] = useState(9);
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const updateNbOP = (nb: number) => {
    setNbop(nb);
    localStorage.setItem('CompteurExoTotal', nb.toString());
  };

  const aideCompte = (yn: number) => {
    setComptePreRemplis(yn);
    localStorage.setItem('ComptePreRemplis', yn.toString());
  };
  // =======================================================================================================

  console.log("sendDataToServer = AVANT")


  const caseTheme = () => {
    const checkboxes = document.querySelectorAll('.CBA') as NodeListOf<HTMLInputElement>;
    const selectedValues: string[] = [];

    checkboxes.forEach(checkbox => {
      if (checkbox.checked) {
        selectedValues.push(checkbox.value);
      }
    });

    //selectedValues correspond aux thème selectionnés, c'est cette valeur que je veux récupéré coté serveur

    // Fonction d'envoi
    console.log("caseTheme = OK")


    const sendDataToServer = async () => {
      console.log("sendDataToServer = OK")

      //const data = { theme: '1,2' };
      //const data = { theme: selectedValues };
      const data = { 
        theme: { 
          valeursCochees: selectedValues // Mettre les valeurs dans 'valeursCochees'
        }
      };

    
      const response = await fetch('/api/webhooks/logicexo/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json',},
        body: JSON.stringify(data),  // Envoie la donnée au serveur sous forme de JSON
      });
    
      const result = await response.json();
      console.log(result);
    };
    
    sendDataToServer();





    if (selectedValues.length === 0) {
      alert("Aucun thème sélectionné");
    } else if (nbop === 0) {
      alert("Choisir le nombre d'opération");
    } else if (comptePreRemplis === 9) {
      alert("Choisir le remplissage des numéros de comptes");
    } else {
      const themeParam = encodeURIComponent(selectedValues.join("!"));
      window.location.href = `/exo?themes=${themeParam}`;
    }
  };




  // =======================================================================================================

  const handleSelectAll = (selectAllId: string, classCB: string) => {
    const selectAllCheckbox = document.getElementById(selectAllId) as HTMLInputElement | null;
    const categoryCheckboxes = document.querySelectorAll(`.${classCB}`) as NodeListOf<HTMLInputElement>;

    if (selectAllCheckbox) {
      selectAllCheckbox.addEventListener('change', () => {
        const isChecked = selectAllCheckbox.checked;
        categoryCheckboxes.forEach(checkbox => {
          checkbox.checked = isChecked;
        });
      });

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
              "L'achat et la vente de biens hors de France (bientôt)",
              "L'achat et la vente de services hors de France (bientôt)",
              "Amortissements (bientôt)",
              "Dépréciations (bientôt)",
              "Provisions (bientôt)",
              "Opération de change (bientôt)",
              "PCA CCA (bientôt)",
              "Passage exercice à une autre (bientôt)",
              "RRR escompte (bientôt)",
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
              "L'achat et la vente de biens en France (bientôt)",
              "L'achat et la vente de services en France (bientôt)",
              "L'achat et la vente de biens hors de France (bientôt)",
              "L'achat et la vente de services hors de France (bientôt)",
              "Amortissements (bientôt)",
              "Dépréciations (bientôt)",
              "Provisions (bientôt)",
              "Opération de change (bientôt)",
              "PCA CCA (bientôt)",
              "Passage exercice à une autre (bientôt)",
              "RRR escompte (bientôt)",
              "Subventions (bientôt)"
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
              "L'achat et la vente de biens en France (bientôt)",
              "L'achat et la vente de services en France (bientôt)",
              "L'achat et la vente de biens hors de France (bientôt)",
              "L'achat et la vente de services hors de France (bientôt)",
              "Amortissements (bientôt)",
              "Dépréciations (bientôt)",
              "Provisions (bientôt)",
              "Opération de change (bientôt)",
              "PCA CCA (bientôt)",
              "Passage exercice à une autre (bientôt)",
              "RRR escompte (bientôt)",
              "Subventions (bientôt)"
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

        <button className={Styles.buttonStart}
          id="Btncommencer"
          onClick={() => caseTheme()}  >
          Commencer 🔥
        </button>
      </div>

      <br />
      <br />
    </>
  )
}
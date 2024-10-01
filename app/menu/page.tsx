import Head from 'next/head';
import React from 'react';

import Styles from '../../styles/menu.module.css';


export default function menu() {

    return (
        <>

            <head>
                <title>Menu</title>
            </head>


            {/* <th style={{ height: '80px' }}> */}




            <h2 id="quoi" className={Styles.quoi}>Sélectionner les thèmes à réviser</h2>

            <br />
            <br />

            <div className={Styles.blockTAB}>

            <table id="UE9" className={Styles.menu}>
            <tbody>
                <tr>
                    <th style={{ height: '80px' }}>
                        <label className={Styles.customCheckbox}>
                            <input type="checkbox" id="AselectAll" className={Styles.checkboxSelectAll} value="A0" />
                            <span className={Styles.checkmark}></span>
                            Comptabilité UE9
                        </label>
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
                                <input type="checkbox" className={Styles.CBA} value={index + 1} />
                                <span className={Styles.checkmark}></span>
                                {item}
                            </label>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>









                


            </div>





        </>
    )
}
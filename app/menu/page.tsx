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



            <br />
            <h2 id="quoi" className={Styles.quoi}>Sélectionner les thèmes à réviser</h2>

            <br />
            <br />

            <div className={Styles.blockTAB}>

                <table id="UE9" className={Styles.menu}>
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
                                        <input type="checkbox" className={Styles.CBA} value={index + 1} />
                                        <span className={Styles.checkmark}></span>
                                        {item}
                                    </label>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <table id="UE9" className={Styles.menu}>
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
                                        <input type="checkbox" className={Styles.CBB} value={index + 1} />
                                        <span className={Styles.checkmark}></span>
                                        {item}
                                    </label>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <table id="UE9" className={Styles.menu}>
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
                                        <input type="checkbox" className={Styles.CBC} value={index + 1} />
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
                        <button className={Styles.buttonIndex} id="BtnOUI" >
                            OUI
                        </button>
                        <button className={Styles.buttonIndex} id="BtnNON" >
                            NON
                        </button>
                    </div>

                    <br />
                    <br />

                    <div className={Styles.label} id="nboperation">
                        <h3>Nombre d’opérations :</h3>
                        <button className={Styles.buttonIndex} id="Btn10" >
                            3
                        </button>
                        <button className={Styles.buttonIndex} id="Btn20" >
                            20
                        </button>
                        <button className={Styles.buttonIndex} id="Btn30" >
                            30
                        </button>
                    </div>
                </div>

                <button className={Styles.buttonStart} id="Btncommencer" >
                    Commencer 🔥
                </button>
            </div>


            <br />
            <br />





        </>
    )
}
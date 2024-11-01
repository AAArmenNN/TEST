import Pricing from '@/components/ui/Pricing/Pricing';
import { createClient } from '@/utils/supabase/server';
import {
    getProducts,
    getSubscription,
    getUser
} from '@/utils/supabase/queries';
import { Resend } from 'resend';
import WelcomeEmail from './WelcomeEmail'; // Importation du template React
import Styles from '../styles/landingpage.module.css';



console.log("Hello App.Page")

export default async function PricingPage() {
    console.log("UTILISATEUR VISITE ")

    const supabase = createClient();
    const [user, products, subscription] = await Promise.all([
        getUser(supabase),
        getProducts(supabase),
        getSubscription(supabase)
    ]);



    //=====================================

    /*
        // Initialisation du client Resend avec la clé API
        const resend = new Resend(process.env.RESEND_API_KEY);
    
        // Envoi d'un email lors de la visite de la page
        try {
          await resend.emails.send({
    
            from: 'Compta-Training <onboarding@resend.dev>',
            to: ['armen.etarian@gmail.com'],
            subject: 'Bienvenue sur Compta-Training',
            // react: "🔥 Bienvenue sur Compta-Training !",
            react: 'Hello', // Utilisation du template React
          });
      
          console.log('🟩 Email envoyé avec succès');
        } catch (error) {
          console.error('Erreur lors de l\'envoi de l\'email :', error);
        }*/
    //=====================================





    return (
        <>
            {/* <h1 className="text-4xl font-extrabold text-zinc-700 sm:text-center sm:text-6xl"> */}
            <h1 className={Styles.accroche1}>

                Pas encore au niveau en compta ?
            </h1>

            <p className={Styles.accroche2}>
                Progresser très rapidement en seulement 15min par jour !
            </p>


            <div className={Styles.beneffond}>
                <p className={Styles.benef}>
                    ✅ Choisissez le sujet de vos écritures comptables<br />
                </p>
                <p className={Styles.benef}>
                    ✅ Compta Training génère des questions d'examen avec de nouveaux montants à chaque fois !<br />
                </p>
                <p className={Styles.benef}>
                    ✅ Complétez les cases, et VOTRE corrigé personnalisé apparaît !
                </p>
            </div>

            <div className={Styles.cadregif}>
                <img src="/compta-training-demo.gif" alt="Démonstration Compta Training" className={Styles.gif} />

            </div>



            <Pricing
                user={user}
                products={products ?? []}
            //   subscription={subscription}
            />



            <p className={Styles.titreavis}>
                Avis utilisateurs de Compta training : ❤️
            </p>
            {/* <div className={Styles.partieavis}> */}



            <div className={Styles.avis}>
                <p className={Styles.nomavis}>
                    Alexis P.
                </p>
                <p className={Styles.benef}>
                    “On s'entraîne beaucoup sur des exercices qui tombent le jour de l'examen, c'est fou les automatismes que ça développe !”
                </p>
            </div>
            <div className={Styles.avis}>
                <p className={Styles.nomavis}>
                    Benoît A.
                </p>
                <p className={Styles.benef}>
                    “Perso, j'utilise Compta Training dans les transports sur mon iPhone pour continuer à m'entraîner quand j'ai un moment. L'interface est super intuitive !”
                </p>
            </div>
            <div className={Styles.avis}>
                <p className={Styles.nomavis}>
                    Mathéo, étudiant en BTS CG
                </p>
                <p className={Styles.benef}>
                    “Je suis passé de la confusion en cours à la clarté en quelques semaines seulement !”
                </p>
            </div>
            <div className={Styles.avis}>
                <p className={Styles.nomavis}>
                    Nadia, étudiante en DCG
                </p>
                <p className={Styles.benef}>
                    “Compta Training a totalement changé ma vision de la comptabilité ! En 15 minutes par jour, j'ai pu renforcer mes bases et progresser à un rythme incroyable !”
                </p>
            </div>








            {/* </div> */}


        </>
    );




}




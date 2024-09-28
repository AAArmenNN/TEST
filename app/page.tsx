import Pricing from '@/components/ui/Pricing/Pricing';
import { createClient } from '@/utils/supabase/server';
import {
  getProducts,
  getSubscription,
  getUser
} from '@/utils/supabase/queries';
import { Resend } from 'resend';
import WelcomeEmail from './WelcomeEmail'; // Importation du template React


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
    <Pricing
      user={user}
      products={products ?? []}
      subscription={subscription}
    />
  );




}

//=====================================



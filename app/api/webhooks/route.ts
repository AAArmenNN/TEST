import Stripe from 'stripe';
import { stripe } from '@/utils/stripe/config';
import {
  upsertProductRecord,
  upsertPriceRecord,
  manageSubscriptionStatusChange,
  deleteProductRecord,
  deletePriceRecord
} from '@/utils/supabase/admin';
import { Resend } from 'resend';


const relevantEvents = new Set([
  'product.created',
  'product.updated',
  'product.deleted',
  'price.created',
  'price.updated',
  'price.deleted',
  'plan.created',
  'plan.deleted',
  'checkout.session.completed',
  'customer.subscription.created',
  'customer.subscription.updated',
  'customer.subscription.deleted'
]);
//console.log("Hello API/route")


export async function POST(req: Request) {
  const body = await req.text();
  const sig = req.headers.get('stripe-signature') as string;
  //console.log("body= "+body)
  //console.log("sig= "+sig)

  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  //console.log("webhookSecret = "+webhookSecret)

  let event: Stripe.Event;

  try {
    if (!sig || !webhookSecret)
      return new Response('Webhook secret not found.', { status: 400 });
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
    //console.log("Webhook received")

    console.log(`🔔  Webhook received: ${event.type}`);
  } catch (err: any) {
    console.log(`❌ Error message: ${err.message}`);
    console.log("Error")

    return new Response(`Webhook Error: ${err.message}`, { status: 400 });
  }

  if (relevantEvents.has(event.type)) {
    try {    console.log("Try")
      console.log('Received event:', event);
      console.log('Webhook event:', req.body);


      console.log("event.type = "+event.type)
      switch (event.type) {
        
        case 'product.created':
        case 'product.updated':
          console.log("step 1")

          console.log("event.data.object = "+event.data.object)
          console.log("event.data.object detail= " + JSON.stringify(event.data.object));

          await upsertProductRecord(event.data.object as Stripe.Product);

          break;

        case 'price.created':
          console.log("STEP 2")

        case 'price.updated':

          await upsertPriceRecord(event.data.object as Stripe.Price);
          console.log("event.data.object"+event.data.object)

          break;
        case 'price.deleted':
          //console.log("Error 3")

          await deletePriceRecord(event.data.object as Stripe.Price);
          console.log("event.data.object"+event.data.object)

          break;
        case 'product.deleted':
          await deleteProductRecord(event.data.object as Stripe.Product);
          console.log("event.data.object"+event.data.object)

          break;
        case 'customer.subscription.created':
        case 'customer.subscription.updated':
        case 'customer.subscription.deleted':
          //console.log("Error 4")

          const subscription = event.data.object as Stripe.Subscription;
          
          console.log("subscription = "+subscription)

          await manageSubscriptionStatusChange(
            subscription.id,
            subscription.customer as string,
            event.type === 'customer.subscription.created'
            
          );
          console.log("Error 5")

          break;
        case 'checkout.session.completed':
          console.log("<🏆 UTILISATEUR PREMIUM>")

          const checkoutSession = event.data.object as Stripe.Checkout.Session;
          if (checkoutSession.mode === 'subscription') {
            //console.log("🏆 UTILISATEUR PREMIUM -2")
            //=====================================
    // Initialisation du client Resend avec la clé API
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Envoi d'un email lors de la visite de la page
    try {
      await resend.emails.send({

        from: 'Compta-Training <onboarding@resend.dev>',
        to: ['armen.etarian@gmail.com'],
        subject: '🏆 Compta-Training Premium',
        // react: "🔥 Bienvenue sur Compta-Training !",
        react: 'Félicitation ! vous êtes maintenant un menbre premium', // Utilisation du template React
      });
  
      console.log('🟩 Email Premium envoyé avec succès');
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'email :', error);
    }
//=====================================




            const subscriptionId = checkoutSession.subscription;
            await manageSubscriptionStatusChange(
              subscriptionId as string,
              checkoutSession.customer as string,
              true
            );
            //console.log("Error 8")

          }
          break;
        default:
          throw new Error('Unhandled relevant event!');
      }
    } catch (error) {
      console.log(error);
      return new Response(
        'Webhook handler failed. View your Next.js function logs.',
        {
          status: 400
        }
      );
    }
  } else {
    return new Response(`Unsupported event type: ${event.type}`, {
      status: 400
    });
  }
  return new Response(JSON.stringify({ received: true }));
}




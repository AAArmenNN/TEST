import { Resend } from 'resend';
console.log("coucou api")
/*
const resend = new Resend(process.env.RESEND_API_KEY);
const email = "armen.etarian@gmail.com"
const name ="Armen"

export default async function handler(req, res) {
  if (req.method === 'POST') {

    const { email, name } = req.body;

    try {
      await resend.emails.send({
        from: 'support@compta-training.fr',  // Utilise un email vérifié dans Resend
        to: email,
        subject: 'Bienvenue sur Compta Training!',
        html: `<p>Bonjour <strong>${name}</strong>, merci de nous avoir rejoints !</p>`,
      });

      res.status(200).json({ message: 'Email envoyé avec succès' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erreur lors de l\'envoi de l\'email' });
    }
  } else {
    res.status(405).json({ message: 'Méthode non autorisée' });
  }
}
*/
// pages/api/send-email.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend'; // Importer Resend directement

const resend = new Resend(process.env.RESEND_API_KEY); // Utiliser Resend comme une fonction ou un objet

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { to, subject, message } = req.body;

    if (!to || !subject || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
      const emailResponse = await resend.emails.send({
        from: 'your-email@domain.com', // Remplace avec ton adresse email vérifiée par Resend
        to,
        subject,
        text: message,
      });

      return res.status(200).json({ success: true, emailResponse });
    } catch (error) {
      return res.status(500).json({ error: 'Failed to send email', details: error });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}

// WelcomeEmail.jsx
import React from 'react';
import { Html } from '@react-email/html';


const WelcomeEmail = () => (
  <Html>
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
      <h1>🔥 Bienvenue sur Compta-Training !</h1>
      <p>Nous sommes ravis de vous accueillir.</p>
      <p>Si vous avez des questions, n'hésitez pas à nous contacter.</p>
      <button>BTN</button>
    </div>

    
  </Html>
);

export default WelcomeEmail;

import React, { useState } from 'react';
import "./Contact.css"

function Contact() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page
    console.log(`Email: ${email}`);
  };

  return (
    <div className="contactForm">
    <h2 className="shoppingCommunity">JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO</h2>
    <h3 className="email">Type your email down below and be young wild generation</h3>
    <form onSubmit={handleSubmit}>
        <input placeholder='Add your email here'
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='labelForm'
        />
      <button type="submit" className="enregistrer">Submit</button>
    </form>
    </div>
  );
}

export default Contact;
import React from 'react';
import './Card.css'; // Assurez-vous d'inclure ce fichier CSS

function Card(props) {
  return (
    <div className="carte">
      <img src={props.image} alt={props.title} className="carte-image" />
      <h2 className="carte-title">{props.title}</h2>
      <p className="carte-text">Explore Now</p>
    </div>
  );
}

export default Card;

import React from 'react';
import HM from '../assets/HM.png';
import Obey from '../assets/Obey.png';
import Shopify from '../assets/Shopify.png';
import Lacoste from '../assets/lacoste.png';
import Levis from '../assets/Levis.png';
import Amazon from '../assets/Amazone.png';
import './Logo.css'; // Importation du fichier CSS

function Pub() {
  return (
    <div className="pub-bar">
      <img src={HM} alt="Logo 1" className="pub-logo" />
      <img src={Obey} alt="Logo 2" className="pub-logo" />
      <img src={Shopify} alt="Logo 3" className="pub-logo" />
      <img src={Lacoste} alt="Logo 3" className="pub-logo" />
      <img src={Levis} alt="Logo 3" className="pub-logo" />
      <img src={Amazon} alt="Logo 3" className="pub-logo" />
    </div>
  );
}

export default Pub;
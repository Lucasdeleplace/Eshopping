import React from "react";
import "./Shopnow.css";
import Pinkgirl from "../assets/Pinkgirl.png"; // Chemin relatif à partir du composant

function Shopnow() {
  return (
    <div className="outer-container">
    <div className="container">
      <div className="text-content">
      <p className="clothes">LET'S EXPLORE <div className="label"> <span>UNIQUE</span> </div> CLOTHES.</p>
      <p className="slogan">Live for influential and innovative fashion !</p>
      <button>
        <a href="Lecatalog">Shop Now</a>
      </button>
      </div>
      <img src={Pinkgirl} alt="PinkGirl" className="image" />
      </div>
      </div>
  );
}

export default Shopnow;

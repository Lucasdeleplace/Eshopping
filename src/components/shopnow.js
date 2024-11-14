import React from "react";
import "./shopnow.css";
import Pinkgirl from "../assets/Pinkgirl.png"; // Chemin relatif à partir du composant

function Shopnow() {
  return (
    <div class="container">
      <p class="clothes">LET'S EXPLORE <div class="label"> <span>UNIQUE</span> </div> CLOTHES</p>
      <p class="slogan">Live for influential and innovative fashion</p>
      <button>
        <a href="Lecatalog">Shop Now</a>
      </button>
      <img src={Pinkgirl} alt="PinkGirl" class="image" />
      </div>
  );
}

export default Shopnow;

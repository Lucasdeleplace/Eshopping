import React from "react";
import "./Shopnow.css";
import Pinkgirl from "../assets/Pinkgirl.png"; // Chemin relatif à partir du composant

function Shopnow() {
  return (
    <div className="outer-container">
      <div className="containeer">
        <div className="text-content">
          <p className="clothes">
            LET'S EXPLORE{" "}
            <div className="labeel">
              {" "}
              <span>UNIQUE</span>{" "}
            </div>{" "}
            CLOTHES.
          </p>
          <p className="slogan">
            Live for influential and innovative fashion !
          </p>
          <a href="Lecatalog">
          <button className="catalog">Shop Now</button>
          </a>
        </div>
        <img src={Pinkgirl} alt="PinkGirl" className="image" />
      </div>
    </div>
  );
}

export default Shopnow;

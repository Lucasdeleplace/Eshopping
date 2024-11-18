import React from "react";
import "./Payday.css";
import YellowGirl from "../assets/YellowGirl.png"; // Chemin relatif à partir du composant

function Payday() {
  return (
    <div className="outer-container">
    <div className="container">
    <img src={YellowGirl} alt="YellowGirl" className="image" />
      <div className="text-content">
      <p className="clothes"> <div className="label"> <span>PAYDAY</span></div> SALE NOW</p>
      <p>Spend minimal $100 get 30% off <br></br>voucher code for your next purchase</p>
      <p className="gras">1 June - 10 June 2021</p>
      <p>*Terms & Conditions apply</p>
      <button className="catalog">
        <a href="Lecatalog">Shop Now</a>
      </button>
      </div>  
      </div>
      </div>
  );
}

export default Payday;

import React from "react";
import Header from "../components/Header";
import Shopnow from "../components/Shopnow";
import Payday from "../components/Payday";
import Card from "../components/Card";
import TT from "../assets/TT.png";
import HS from "../assets/HS.png";
import CP from "../assets/CP.png";

function Acceuil() {
  return (
    <div className="acceuil">
      <Header />
      <Shopnow />
      <div className="card-container"> {/* Conteneur des cartes */}
        <Card image={HS} title="Hoodies & Sweatshirts" />
        <Card image={CP} title="Coats & Parkas" />
        <Card image={TT} title="Tees & T-Shirts" />
      </div>
      <Payday />
    </div>
  );
}

export default Acceuil;


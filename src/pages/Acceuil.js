import React from "react";
import Header from "../components/Header";
import Shopnow from "../components/Shopnow";
import Payday from "../components/Payday";

function Acceuil() {
  return (
    <div className="acceuil">
      <Header />
      <Shopnow />
      <Payday />
    </div>
  );
}

export default Acceuil;

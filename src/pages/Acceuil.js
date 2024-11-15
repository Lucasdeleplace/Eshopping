import React from "react";
import Header from "../components/Header";
import Shopnow from "../components/Shopnow";
import Payday from "../components/Payday";
import Footer from "../components/Footer";

function Acceuil() {
  return (
    <div className="acceuil">
      <Header />
      <Shopnow />
      <Payday />
      <Footer/>
    </div>
  );
}

export default Acceuil;

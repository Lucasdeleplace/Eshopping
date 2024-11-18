import React from "react";
import "./Header.css";
import Logo from "../assets/logo.svg";

function Header() {
  return (
    <header>
      <nav>
        <ul>
        <img src={Logo} alt="logo du site fashion" class="active" width="200" height="50"></img>
        <div class="sectionsheader">
          <li>
            <a href="link">CATALOGUE</a>
          </li>
          <li>
            <a href="link">FASHION</a>
          </li>
          <li>
            <a href="link">FAVORITE</a>
          </li>
          <li>
            <a href="link">LIFESTYLE</a>
          </li>
          <li>
            <element class="rectangle">
            <a class="signup" href="link">SIGN UP</a>
            </element>
          </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

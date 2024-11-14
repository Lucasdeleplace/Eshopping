import React from "react";
import "./Header.css";

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="/catalogue">CATALOGUE</a>
          </li>
          <li>
            <a href="/fashion">FASHION</a>
          </li>
          <li>
            <a href="/favourite">FAVOURITE</a>
          </li>
          <li>
            <a href="/lifestyle">LIFESTYLE</a>
          </li>
          <li>
            <a href="signup">SIGN UP</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

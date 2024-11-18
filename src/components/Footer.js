import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h2>FASHION</h2>
        <p>Complete your style with awesome clothes from us.</p>
        <div className="social-icons">
          <a href="https://www.facebook.com" className="icon facebook" aria-label="Facebook"></a>
          <a href="https://www.instagram.com" className="icon instagram" aria-label="Instagram"></a>
          <a href="https://www.twitter.com" className="icon twitter" aria-label="Twitter"></a>
          <a href="https://www.linkedin.com" className="icon linkedin" aria-label="LinkedIn"></a>
        </div>
      </div>

      <div className="footer-links">
        <div className="links-column">
          <h3>Company</h3>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact us</a></li>
            <li><a href="/support">Support</a></li>
            <li><a href="/careers">Careers</a></li>
          </ul>
        </div>
        <div className="links-column">
          <h3>Quick Link</h3>
          <ul>
            <li><a href="#home">Share Location</a></li>
            <li><a href="#home">Orders Tracking</a></li>
            <li><a href="#home">Size Guide</a></li>
            <li><a href="#home">FAQs</a></li>
          </ul>
        </div>
        <div className="links-column">
          <h3>Legal</h3>
          <ul>
            <li><a href="#home">Terms & conditions</a></li>
            <li><a href="#home">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

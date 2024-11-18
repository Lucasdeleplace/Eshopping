import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-column_fashion-column">
                <ul>
                    <li><a href="link"><h3 id="fashiony" className="headera">FASHION</h3></a></li>
                    <li><a href="link" id="fashdet" className="greya">Complete your style with awesome clothes from us.</a></li>
                </ul>
                <div className="social-icons">
                    <a href="link" id="fb">
                        <img src="https://www.svgrepo.com/show/43168/facebook-logo.svg" alt="Facebook" width="50" height="50" />
                    </a>
                    <a href="link" id="insta">
                        <img src="https://www.svgrepo.com/show/312385/instagram.svg" alt="Instagram" width="50" height="50" />
                    </a>
                    <a href="link" id="twit">
                        <img src="https://www.svgrepo.com/show/327404/logo-twitter.svg" alt="Twitter" width="50" height="50" />
                    </a>
                    <a href="link" id="linkedin">
                        <img src="https://www.svgrepo.com/show/341996/linkedin-in.svg" alt="LinkedIn" width="50" height="50" />
                    </a>
                </div>
            </div>
            
            <div className="footer-column_menu-column">
                <ul>
                    <li><a href="link" id="compagny-link" className="headera">Company</a></li>
                    <li><a href="link" id="about" className="greya">About</a></li>
                    <li><a href="link" id="contactus" className="greya">Contact us</a></li>
                    <li><a href="link" id="support" className="greya">Support</a></li>
                    <li><a href="link" id="careers" className="greya">Careers</a></li>
                </ul>
            </div>
            
            <div className="footer-column_quick-links-column">
                <ul>
                    <li><a href="link" id="quicklink" class="headera">Quick Link</a></li>
                    <li><a href="link" id="sharelock" className="greya">Share Location</a></li>
                    <li><a href="link" id="ordtrack" className="greya">Orders Tracking</a></li>
                    <li><a href="link" id="sizguide" className="greya">Size Guide</a></li>
                    <li><a href="link" id="faqs" className="greya">FAQs</a></li>
                </ul>
            </div>
            
            <div className="footer-column_legal-column">
                <ul>
                    <li><a href="link" id="legal" classname="headera">Legal</a></li>
                    <li><a href="link" id="Tandc" className="greya">Terms & Conditions</a></li>
                    <li><a href="link" id="privpol" className="greya">Privacy Policy</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
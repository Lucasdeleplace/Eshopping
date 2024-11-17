import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer class="footer">
            <div class="footer-column fashion-column">
                <ul>
                    <li><a href="fashion"><h3 id="fashiony">FASHION</h3></a></li>
                    <li><a href="fashdet" id="fashdet" class="greya">Complete your style with awesome clothes from us.</a></li>
                </ul>
                <div class="social-icons">
                    <a href="link">
                        <img src="https://www.svgrepo.com/show/43168/facebook-logo.svg" alt="Facebook" width="50" height="50" />
                    </a>
                    <a href="link">
                        <img src="https://www.svgrepo.com/show/312385/instagram.svg" alt="Instagram" width="50" height="50" />
                    </a>
                    <a href="link">
                        <img src="https://www.svgrepo.com/show/327404/logo-twitter.svg" alt="Twitter" width="50" height="50" />
                    </a>
                    <a href="link">
                        <img src="https://www.svgrepo.com/show/341996/linkedin-in.svg" alt="LinkedIn" width="50" height="50" />
                    </a>
                </div>
            </div>
            
            <div class="footer-column_menu-column">
                <ul>
                    <li><a href="compagny" id="compagny-link" class="headera">Company</a></li>
                    <li><a href="about">About</a></li>
                    <li><a href="contactus">Contact us</a></li>
                    <li><a href="support">Support</a></li>
                    <li><a href="careers">Careers</a></li>
                </ul>
            </div>
            
            <div class="footer-column_quick-links-column">
                <ul>
                    <li><a href="quicklink" class="headera">Quick Link</a></li>
                    <li><a href="sharelock">Share Location</a></li>
                    <li><a href="ordtrack">Orders Tracking</a></li>
                    <li><a href="sizguide">Size Guide</a></li>
                    <li><a href="faqs">FAQs</a></li>
                </ul>
            </div>
            
            <div class="footer-column_legal-column">
                <ul>
                    <li><a href="legal" class="headera">Legal</a></li>
                    <li><a href="Tandc">Terms & Conditions</a></li>
                    <li><a href="privpol">Privacy Policy</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
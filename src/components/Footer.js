import React from 'react';
import './components/Footer.css';

function Footer() {
    return (
        <Footer>
            {
                <nav>
                    <div href="fashiona">
                        <li><a href="fashion"><h3>Fashion</h3></a></li>
                        <div href="gray">
                            <li><a href="fashdet">Complete your style with awesome clothes from us.</a></li>
                        </div>
                        <div href="right-al">
                            <div href="contacticons">
                                <button link="a" href="facebook" img src="https://www.svgrepo.com/show/43168/facebook-logo.svg" width="50" height="50"></button>
                                <button link="a" href="instagram" img src="https://www.svgrepo.com/show/312385/instagram.svg" width="50" height="50"></button>
                                <button link="a" href="twitter" img src="https://www.svgrepo.com/show/327404/logo-twitter.svg" width="50" height="50"></button>
                                <button link="a" href="linkedin" img src="https://www.svgrepo.com/show/341996/linkedin-in.svg" width="50" height="50"></button>
                            </div>
                        </div>
                        <div href="compagna">
                            <ul>
                                <li><a href="compagny">Compagny</a></li>
                                <div href="gray">
                                    <li><a href="about">About</a></li>
                                    <li><a href="contactus">Contact us</a></li>
                                    <li><a href="support">Support</a></li>
                                    <li><a href="careers">Careers</a></li>
                                </div>
                            </ul>
                        </div>
                        <div href="quicklinky">
                            <ul>
                                <li><a href="quicklink">Quick Link</a></li>
                                <div href="gray">
                                    <li><a href="sharelock">Share Location</a></li>
                                    <li><a href="ordtrack">Orders Tracking</a></li>
                                    <li><a href="sizguide">Size Guide</a></li>
                                    <li><a href="faqs">FAQs</a></li>
                                </div>
                            </ul>
                        </div>
                        <div href="legaly">
                            <ul>
                                <li><a href="legal">Legal</a></li>
                                <div href="gray">
                                    <li><a href="Tandc">Terms & Conditions</a></li>
                                    <li><a href="privpol">Privacy Policy</a></li>
                                </div>
                            </ul>
                        </div>
                    </div>
                </nav>
            }
        </Footer>
    );
}

export default Footer;

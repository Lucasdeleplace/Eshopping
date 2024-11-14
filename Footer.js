import React from 'react';
import './components/Footer.css';

function Footer() {
    return (
        <Footer>
            {
                /* <img src="logo.png" alt="Company Logo" className="logo" />*/
                <nav>
                    <ul>
                        <li><a href="/catalogue">CATALOGUE</a></li>
                        <li><a href="/fashion">FASHION</a></li>
                        <li><a href="/favourite">FAVOURITE</a></li>
                        <li><a href="/lifestyle">LIFESTYLE</a></li>
                        <li><a href="signup">SIGN UP</a></li>
                    </ul>
                </nav>
            }
        </Footer>
    );
}

export default Footer; 
           
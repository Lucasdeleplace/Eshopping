/* Coder le header en react (pas JS on main).

Documentation : 
https://www.dhiwise.com/post/building-a-react-header-a-step-by-step-guide 
https://upmostly.com/tutorials/react-onclick-event-handling-with-examples
Finalement, pas besoin de faire de boutons ici. */
import React from 'react';
import './components/Header.css';

function Header() {
    return (
        <Header>
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
        </Header>
    );
}

export default Header; 
           
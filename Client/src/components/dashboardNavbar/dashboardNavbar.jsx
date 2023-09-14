import React from 'react';
import LogoText from "../../assets/logoText.svg"

function Navbar() {
    return (
        <nav>
            <ul>
                <li><a href="#"><img className="logoText" src={LogoText} alt="" /></a></li>
                <li>Sign Out</li>
            </ul>
        </nav>
    );
}

export default Navbar;
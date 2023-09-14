import React from 'react';
import "./navbar.css"
import LogoText from "../../assets/logoText.svg"

function Navbar() {
    return (
        <nav>
            <ul>
                <li><a href="#"><img className="logoText" src={LogoText} alt="" /></a></li>
                <li>
                    <ul>
                        <li><a href="#">Login</a></li>
                        <li><a href="#">Sign up</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
import React from 'react';
import "./loginPage.css"
import Logo from "../../assets/logo.svg"
import { Link } from 'react-router-dom';

function LoginPage() {
    return (
        <div className="homeLogin">
            <div className="contents">
                <img src={Logo} alt="" />
                <p>See Real-time air and water quality index</p>
            </div>
            <div className="loginButtons">
                <p>Here is a login, Please sign in</p>
                <button className="loginButton blueGradient"><Link to="#" className="button-link">User Login</Link></button>
                <button className="loginButton redGradient"><Link to="/adminlogin" className="button-link">Admin Login</Link></button>
            </div>
        </div>
    );
}

export default LoginPage;
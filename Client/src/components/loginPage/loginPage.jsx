import React from 'react';
import "./loginPage.css"
import Logo from "../../assets/logo.svg"

function LoginPage() {
    return (
        <div className="homeLogin">
            <div className="contents">
                <img src={Logo} alt=""/>
                    <p>See Real-time air and water quality index</p>
            </div>
            <div className="loginButtons">
                <p>Here is a login, Please sign in</p>
                <button className="loginButton blueGradient">User Login</button>
                <button className="loginButton redGradient">Admin Login</button>
            </div>
        </div>
    );
}

export default LoginPage;
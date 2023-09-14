import React from 'react';
import Logo from "../../assets/logo.svg"
import "./adminLogin.css"

function AdminLoginPage() {
    return (
        // WORK IN PROGRESS
        <div className="homeLogin">
            <div className="contents">
                <img src={Logo} alt="" />
                <p>See Real-time air and water quality index</p>
            </div>
            <div className="adminLoginButtons">
                <p>Admin Login</p>
                <div className="loginDiv">
                    <div className="username"></div>
                    <div className="password"></div>
                    <button className="loginBtn"></button>
                </div>
            </div>
        </div>
    );
}

export default AdminLoginPage;
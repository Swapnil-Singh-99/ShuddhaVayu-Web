import React from 'react';
import "./adminLogin.css"
import accountCircle from "../../assets/account_circle.svg"
import shieldLock from "../../assets/shield_lock.svg"
import { Link } from 'react-router-dom';

function AdminLogin() {
    return (
        <div class="adminLogin">
            <div class="adminLoginButtons">
                <p>Admin Login</p>
                <div class="loginDiv">
                    <div class="username inputField"><img src={accountCircle} alt=""/><input type="text" placeholder="Username"/></div>
                    <div class="password inputField"><img src={shieldLock} alt=""/><input type="password" placeholder="Password"/></div>
                    <button class="loginBtn"><Link to="/dashboard" className="button-link">Login</Link></button>
                </div>
            </div>
        </div>
    );
}

export default AdminLogin;
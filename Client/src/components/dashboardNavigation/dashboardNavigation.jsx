import React from 'react';
import "./dashboardNavigation.css"
import databaseLogo from "../../assets/database.svg"
import warningLogo from "../../assets/warning.svg"

function DashboardNavigation() {
    return (
        <div className="navigation">
            <div className="navigationItem">
                <img src={databaseLogo} alt="" />
                <p>User Database</p>
            </div>
            <div className="navigationItem active">
                <img src={warningLogo} alt="" />
                <p>User Reports</p>
            </div>
        </div>
    );
}

export default DashboardNavigation;
import React from 'react';
import { Link } from 'react-router-dom';
import './ManagerNavStyle.css';


function ManagerNavBar() {
    return (
        <div className="card-container">
            <Link to="/managers/employeepage" classname="card-link">
            <div className="card">
                <img src="https://placehold.co/150x100" alt="placeholder" />
                <h2>Employee Management</h2>
            </div>
            </Link>



        </div>

    );

}


export default ManagerNavBar;
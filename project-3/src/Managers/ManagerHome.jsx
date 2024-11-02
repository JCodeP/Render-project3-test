import React from 'react';
import "./ManagerHome.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmployeePage from './EmployeePage';
import ManagerNavBar from './ManagerNavBar';

function ManagerHome() {
    return (
        <div className="manager-home">
            <h1 className="manager-home-heading">Manager Home</h1>
            <div className="box-container">
                <div className="box">
                    <Link to="/managers/employeepage" className="box-link">
                        <div className="box-content"> {/* New div for content */}
                            <img src="https://placehold.co/150x100" alt="placeholder" />
                            <h2>Employee Management</h2>
                        </div>
                    </Link>
                </div>
                <div className="box">
                    <Link to="/managers/historygraphs" className="box-link">
                        <div className="box-content"> {/* New div for content */}
                            <img src="https://placehold.co/150x100" alt="placeholder" />
                            <h2>Item Order History</h2>
                        </div>
                    </Link>
                </div>
                <div className="box">
                    <Link to="/managers/inventorypage" className="box-link">
                        <div className="box-content"> {/* New div for content */}
                            <img src="https://placehold.co/150x100" alt="placeholder" />
                            <h2>Inventory</h2>
                        </div>
                    </Link>
                </div>
                <div className="box">
                    <Link to="/managers/createorderpage" className="box-link">
                        <div className="box-content"> {/* New div for content */}
                            <img src="https://placehold.co/150x100" alt="placeholder" />
                            <h2>Create Order</h2>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ManagerHome
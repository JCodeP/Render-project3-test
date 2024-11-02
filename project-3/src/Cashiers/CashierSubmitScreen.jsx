// src/Cashiers/PayPage.jsx
import React, { useState, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import "./CashierSubmitScreen.css";

function CashierSubmitScreen() {
    const location = useLocation();
    const navigate = useNavigate();
    const { order } = location.state || { order: [] };

    const getTotalPrice = useMemo(() => {
        return order.reduce((total, item) => total + item.price, 0).toFixed(2);
    }, [order]);

    return (
        <div className="submit-screen">
            <div className="order-list-container">
                <h2>Order Summary</h2>
                <ul className="pay-order-list">
                    {order.map((item, index) => (
                        <li key={index}>
                            {item.name} - ${item.price.toFixed(2)}
                        </li>
                    ))}
                </ul>
                <div className="back-button">
                    <button onClick={() => navigate(-1)}>Back to Order</button>
                </div>
            </div>
            <div className="buttons">
                <div className="button-container">
                    <button>{getTotalPrice}</button>
                </div>
            </div>
        </div>
    );
}

export default CashierSubmitScreen;
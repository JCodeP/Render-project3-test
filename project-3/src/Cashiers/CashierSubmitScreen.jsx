// src/Cashiers/PayPage.jsx
import React, { useState, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import "./CashierSubmitScreen.css";

function CashierSubmitScreen() {
    const location = useLocation();
    const navigate = useNavigate();
    const { order } = location.state || { order: [] };

    const [selectedIndex, setSelectedIndex] = useState(null);

    // Deletes highlighted item from order
    const deleteSelectedItem = () => {
        if (selectedIndex === null) {
            return;
        }

        setOrder((prevOrder) => prevOrder.filter((_, index) => index !== selectedIndex));
        setSelectedIndex(null);
    };

    // Duplicates highlighted item in order
    const duplicateSelectedItem = () => {
        if (selectedIndex === null) {
            return;
        }

        addItemToOrder(order[selectedIndex]);

        setSelectedIndex(null);
    }

    const getTotalPrice = useMemo(() => {
        return order.reduce((total, item) => total + item.price, 0).toFixed(2);
    }, [order]);

    return (
        <div className="submit-screen">
            <div className="order-list-container">
                <h2>Order Summary</h2>
                <ul className="order-list">
                    {order.map((item, index) => (
                        <li
                            key={index}
                            className={index === selectedIndex ? "selected" : ""}
                            onClick={() => setSelectedIndex(index)}>
                            {item.name} - ${item.price.toFixed(2)}
                        </li>
                    ))}
                </ul>
                <div className="total">
                    <strong>Total: ${getTotalPrice}</strong>
                </div>
                <button onClick={() => navigate(-1)}>Back to Order</button>
            </div>
        </div>
    );
}

export default CashierSubmitScreen;
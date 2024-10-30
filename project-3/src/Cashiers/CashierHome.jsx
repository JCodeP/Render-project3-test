import React, { useState, useMemo } from 'react';

import { useMenu } from "../MenuContext";

import "./CashierHome.css";

function CashierHome() {

    const { menuItems, addMenuItem, removeMenuItem } = useMenu();
    const [order, setOrder] = useState([]);

    const addItemToOrder = (item) => {
        setOrder((prevOrder) => [...prevOrder, item]);
    };

    const itemsByCategory = menuItems.reduce((acc, item) => {
        if (!acc[item.category]) {
            acc[item.category] = [];
        }
        acc[item.category].push(item);
        return acc;
    }, {});

    const getTotalPrice = useMemo(() => {
        return order.reduce((total, item) => total + item.price, 0).toFixed(2);
    }, [order]);

    return (
        <div className="cashier-home">
            <div className="order-list-container">
                <h2>Current Order</h2>
                <ul className="order-list">
                    {order.map((item, index) => (
                        <li key={index}>
                            {item.name} - ${item.price.toFixed(2)}
                        </li>
                    ))}
                </ul>
                <div className="adjust-buttons">
                    <button>Delete</button>
                    <button>Duplicate</button>
                </div>
                <div className="pay-button">
                    <button>Pay: ${getTotalPrice}</button>
                </div>
            </div>
            <div className="buttons">
                {Object.entries(itemsByCategory).map(([category, items]) => (
                    <div key={category} className="button-container">
                        {items.map((item) => (
                            <button key={item.id} onClick={() => addItemToOrder(item)}>
                                {item.name}
                            </button>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CashierHome;
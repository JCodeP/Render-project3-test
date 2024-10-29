import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { useMenu } from "../MenuContext";

import "./CashierHome.css";

function CashierHome() {

    const navigate = useNavigate();
    const { menuItems, addMenuItem, removeMenuItem } = useMenu();
    const [order, setOrder] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(null);

    const addItemToOrder = (item) => {
        setOrder((prevOrder) => [...prevOrder, item]);
    };

    const deleteSelectedItem = () => {
        if (selectedIndex === null) {
            return;
        }

        setOrder((prevOrder) => prevOrder.filter((_, index) => index !== selectedIndex));
        setSelectedIndex(null);
    };

    const duplicateSelectedItem = () => {
        if (selectedIndex === null) {
            return;
        }

        addItemToOrder(order[selectedIndex]);

        setSelectedIndex(null);
    }

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

    const submitScreen = () => {
        navigate("/cashiers/submit", { state: { order } });
    }

    return (
        <div className="cashier-home">
            <div className="order-list-container">
                <h2>Current Order</h2>
                <ul className="order-list">
                    {order.map((item, index) => (
                        <li
                            key={index}
                            className={index === selectedIndex ? "selected" : ""}
                            onClick={() => setSelectedIndex(index)}
                        >
                            {item.name} - ${item.price.toFixed(2)}
                        </li>
                    ))}
                </ul>
                <div className="adjust-buttons">
                    <button onClick={deleteSelectedItem}>Delete</button>
                    <button onClick={duplicateSelectedItem}>Duplicate</button>
                </div>
                <div className="pay-button">
                    <button onClick={submitScreen}>Pay: ${getTotalPrice}</button>
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
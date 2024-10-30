import React, { createContext, useContext, useState } from "react";

const MenuContext = createContext();

export const useMenu = () => useContext(MenuContext);

export const MenuProvider = ({ children }) => {
    const [menuItems, setMenuItems] = useState([
        { id: 1, name: "Egg Roll", price: 1.99, category: "Appetizers" },
        { id: 2, name: "Spring Roll", price: 1.99, category: "Appetizers" },
        { id: 3, name: "Cream Cheese Rangoon", price: 1.99, category: "Appetizers" },
        { id: 4, name: "Apple Pie Egg Roll", price: 1.99, category: "Appetizers" },
        { id: 5, name: "Small Drink", price: 1.99, category: "Drinks" },
        { id: 6, name: "Medium Drink", price: 2.29, category: "Drinks" },
        { id: 7, name: "Large Drink", price: 2.59, category: "Drinks" },
        { id: 8, name: "Water Bottle", price: 1.99, category: "Drinks" },
    ]);

    const addMenuItem = (newItem) => {
        setMenuItems((prevItems) => [...prevItems, newItem]);
    };

    const removeMenuItem = (id) => {
        setMenuItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    return (
        <MenuContext.Provider value={{ menuItems, addMenuItem, removeMenuItem }}>
            {children}
        </MenuContext.Provider>
    );
};

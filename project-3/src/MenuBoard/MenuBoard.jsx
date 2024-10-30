import React from 'react';
import './MenuBoard.css';

function MenuBoard() {
    return (
        <div className="board">
            <h1>Panda Express Menu</h1>
            <div className="menu sides">
                <h2>Sides</h2>
                <ul>
                    <li>Chow Mein</li>
                    <li>Fried Rice</li>
                    <li>Steamed White Rice</li>
                </ul>
            </div>
            <div className="divider"></div>  
            <div className="menu entrees">
                <h2>Entrees</h2>
                <ul>
                    <li>Orange Chicken</li>
                    <li>Beijing Beef</li>
                    <li>Kung Pao Chicken</li>
                    <li>Honey Walnut Shrimp</li>
                    <li>Grilled Teriyaki Chicken</li>
                    <li>Broccoli Beef</li>
                    <li>SweetFire Chicken Breast</li>
                    <li>Black Pepper Angus Steak</li>
                    <li>Bourbon Chicken</li>
                    <li>String Bean Chicken Breast</li>
                    <li>Mushroom Chicken</li>
                    <li>Black Pepper Chicken</li>
                </ul>
            </div>   
            <div className="divider"></div>     
            <div className="menu appetizers">
                <h2>Appetizers & Drinks</h2>
                <ul>
                    <li>Chicken Egg Roll</li>
                    <li>Veggie Spring Roll</li>
                    <li>Crab Rangoon</li>
                    <li>Fountain Drink</li>
                </ul>
            </div>
        </div>
    );
}

export default MenuBoard;
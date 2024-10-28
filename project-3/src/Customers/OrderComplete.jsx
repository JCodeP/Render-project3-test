import React from "react";
import "./Customer.css";
import {useNavigate, Router, Routes, Route} from "react-router-dom";

function OrderComplete() {
    const navigate = useNavigate();
    const redirect = () => {
        navigate("/customers");
    };

    return(
        <div className = "ellipse" onClick = {redirect}>
                    Order Complete!
        </div>
    );
}

export default OrderComplete;
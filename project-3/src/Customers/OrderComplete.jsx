import React from "react";
import "./Customer.css";
import {useNavigate} from "react-router-dom";

function OrderComplete() {
    const navigate = useNavigate();

    const redirect = () => {
        navigate("../welcome");
    };

    const orderNumber = 1; //get latest order num from DB

    return(
        <div className = "ellipse" onClick = {redirect}>
            Order Complete! <br></br>
            Order Number: {orderNumber}
        </div>
    );
}

export default OrderComplete;
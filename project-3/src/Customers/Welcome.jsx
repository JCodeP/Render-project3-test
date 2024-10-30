import React from "react";
import "./Customer.css";
import {useNavigate} from "react-router-dom";

function Welcome() {
    const navigate = useNavigate();

    const redirect = () => {
        navigate("../menu");
    }

    return(
        <div className = "ellipse" onClick = {redirect}>
            Touch Here To Begin
        </div>
    );
}

export default Welcome;
import React from "react";
import "./Customer.css";
import {useNavigate, Routes, Route, Outlet} from "react-router-dom";
import OrderComplete from "./OrderComplete";
//Add all components for sub routes

function Welcome() {
    const navigate = useNavigate();

    const redirect = () => {
        navigate("OrderComplete");
    }

    return(
        <>
            <div className = "ellipse" onClick = {redirect}>
                    Touch Here To Begin
            </div>

            <Routes>
                <Route path = "OrderComplete" element = {<OrderComplete />} />
            </Routes>

            <Outlet />
        </>
    );
}

export default Welcome;
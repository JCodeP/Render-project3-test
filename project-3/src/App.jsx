import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Homepage/Header.jsx";
import SiteNavBar from "./Homepage/SiteNavBar.jsx";

import CashierHome from "./Cashiers/CashierHome.jsx";

import ManagerHome from "./Managers/ManagerHome.jsx";
import Welcome from "./Customers/Welcome.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <SiteNavBar />
          </>
          } 
        />
        <Route path="/managers" element={<ManagerHome />} />
        <Route path="/cashiers" element={<CashierHome />} />
        <Route path="/customers/*" element={<Welcome />} />
        <Route path="/menu" element={<h1>Menu</h1>} />
      </Routes>
    </Router>
  );
}

export default App

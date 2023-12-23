import React from "react";
import { Routes, Route } from "react-router-dom";

import SideMenu from "./components/SideMenu";
import Menu from "./components/Menu";
import Invite from "./components/Invite";
import Battlefield4 from "./battlefield4/Battlefield4";
import TempPage from "./components/TempPage";

import "./css/styles.css";

function App() {
    return (
        <div className="container">
            <div className="battlefield4_bg"></div>

            <Routes>
                <Route path="/bf_4" element={<Menu />} />
                <Route path="/" element={<Menu />} />
                <Route path="/*" element={<TempPage />} />
            </Routes>
            
            <SideMenu />
            <Invite />
        </div>
    )
}

export default App;
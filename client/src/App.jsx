import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

import SideMenu from "./components/SideMenu";
import Menu from "./components/Menu";
import Invite from "./components/Invite";
import Battlefield4 from "./battlefield4/Battlefield4";

import "./css/styles.css";

function App() {
    return (
        <div className="container">
            <div className="battlefield4_bg"></div>

            <Menu />
            <SideMenu />
            <Invite />

            <Battlefield4 />
        </div>
    )
}

export default App;
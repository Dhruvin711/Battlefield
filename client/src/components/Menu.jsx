import React, { useState } from "react";
import MenuButton from "./MenuButton";
import "../css/styles.css";

function Menu() {
    const [activeBtn, setActiveBtn] = useState("SOLDIER");

    function handleClick(value) {
        setActiveBtn(value);
    }

    return (
        <div className="BF-menu">
            <div className="menu-container">
                <MenuButton 
                    value="HOME" 
                    active = {activeBtn === "HOME"}
                    onClick={() => handleClick("HOME")}
                />
                <MenuButton 
                    value="MULTIPLAYER" 
                    active = {activeBtn === "MULTIPLAYER"}
                    onClick={() => handleClick("MULTIPLAYER")}
                />
                <MenuButton 
                    value="CAMPAIGN" 
                    active = {activeBtn === "CAMPAIGN"}
                    onClick={() => handleClick("CAMPAIGN")}
                />
                <MenuButton 
                    value="SOLDIER" 
                    active = {activeBtn === "SOLDIER"}
                    onClick={() => handleClick("SOLDIER")}
                />
                <MenuButton 
                    value="STORE" 
                    active = {activeBtn === "STORE"}
                    onClick={() => handleClick("STORE")}
                />
                <MenuButton 
                    value="MORE" 
                    active = {activeBtn === "MORE"}
                    onClick={() => handleClick("MORE")}
                />
            </div>

            <div className="menu-bar"></div>
        </div>
    )
}

export default Menu;